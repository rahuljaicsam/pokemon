// Main WorldScene controller file that imports and uses all components
import { gameState } from '../../config/game-state';
import WorldCreator from './WorldCreator';
import PlayerCharacter from './PlayerCharacter';
import EncounterSystem from './EncounterSystem';
import BuildingManager from './BuildingManager';
import PokemonGenerator from './PokemonGenerator';
import DecorationManager from './DecorationManager';
import UpdateManager from './UpdateManager';

export default class WorldScene extends Phaser.Scene {
    constructor() {
        super({ key: 'World' });
        this.player = null;
        this.cursors = null;
        this.encounterTimer = null;
        this.isInGrass = false;
        this.menuOpen = false;
        this.hasLoggedMovement = false;
        this.grassAreas = [];
        this.obstacles = [];
        this.pokemonCenter = null;
        this.pokemonCenterEntrance = null;
        this.pokeShop = null;
        this.pokeShopEntrance = null;
        
        // Initialize component managers
        this.worldCreator = null;
        this.playerController = null;
        this.encounterSystem = null;
        this.buildingManager = null;
        this.pokemonGenerator = null;
        this.decorationManager = null;
        this.updateManager = null;
    }

    preload() {
        console.log('[WorldScene] Starting preload');
        // Error handling for asset loading
        this.load.on('loaderror', (fileObj) => {
            console.error('[WorldScene] Failed to load asset:', fileObj.key, fileObj.url);
        });

        // Confirm loading completion
        this.load.on('complete', () => {
            console.log('[WorldScene] Preload complete.');
        });
    }

    create() {
        console.log('[WorldScene] Starting create');

        // Ensure player has a starter Pokémon
        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.log('[WorldScene] No Pokémon in state, adding starter');
            gameState.addPokemon('PIKACHU', 10);
        }

        // Initialize physics groups
        console.log('[WorldScene] Initializing physics groups');
        this.pondAreas = this.physics.add.staticGroup();
        this.obstaclesGroup = this.physics.add.staticGroup(); // Create group for benches, trees, etc.

        // Later, add collider for player and obstacles group
        this.physics.add.collider(this.player, this.obstaclesGroup);
        // ...

        // Initialize component managers
        this.worldCreator = new WorldCreator(this);
        this.playerController = new PlayerCharacter(this);
        this.encounterSystem = new EncounterSystem(this);
        this.buildingManager = new BuildingManager(this);
        this.pokemonGenerator = new PokemonGenerator();
        this.decorationManager = new DecorationManager(this);
        this.updateManager = new UpdateManager(this);

        // Build the world
        this.worldCreator.createWorld();

        // Create decorations
        this.decorationManager.createDecorations();

        // Create player sprite with animations
        this.playerController.createPlayer();

        // Set up random encounters
        this.encounterSystem.setupRandomEncounters();

        // Menu controls
        this.setupMenuControls();

        console.log('[WorldScene] Create complete');

        // Interaction Key (Assuming 'A' key is Z - modify if needed)
        this.interactKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A); 
        this.interactKey.on('down', this.checkInteraction, this); // Call checkInteraction on key down
    }

    setupMenuControls() {
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.start('Menu');
        });
        
        this.input.keyboard.on('keydown-ENTER', () => {
            if (!this.menuOpen) {
                this.menuOpen = true;
                this.scene.pause();
                this.scene.launch('InGameMenu');
            }
        });
        
        this.events.on('resume', () => {
            this.menuOpen = false;
            console.log('[WorldScene] Resumed from menu');
        });
    }

    update() {
        // Delegate update functionality to the UpdateManager
        this.updateManager.update();
    }

    // Add a new method to WorldScene.js
    checkInteraction() {
        console.log('[WorldScene] Interact key pressed.');
        if (!this.player) return;

        // Define an interaction check area slightly in front of the player
        const interactionDistance = 24; // How far in front to check
        let checkX = this.player.x;
        let checkY = this.player.y;
        const playerDirection = this.playerController?.lastDirection || 'down'; // Get direction from player controller

        switch (playerDirection) {
            case 'up':    checkY -= interactionDistance; break;
            case 'down':  checkY += interactionDistance; break;
            case 'left':  checkX -= interactionDistance; break;
            case 'right': checkX += interactionDistance; break;
        }

        // Create a small interaction point/rectangle
        const interactionPoint = new Phaser.Geom.Point(checkX, checkY);
        const interactionRect = new Phaser.Geom.Rectangle(checkX - 4, checkY - 4, 8, 8);

        // Check overlap with POND areas
        let nearPond = false;
        if (this.pondAreas) {
            this.pondAreas.children.iterate((pond) => {
                if (!pond) return; // Skip if pond is somehow null
                // Use physics overlap check or geometry check
                // For ellipses, Geom check might be simpler if physics body isn't precise ellipse
                const pondBounds = pond.getBounds(); // Use getBounds for rectangle check
                if (Phaser.Geom.Rectangle.Overlaps(interactionRect, pondBounds)) {
                // Or more precisely for ellipse:
                // if (pond.geom.contains(interactionPoint.x, interactionPoint.y)) { 
                    nearPond = true;
                    return false; // Stop iteration once a pond is found
                }
            });
        }

        if (nearPond) {
            console.log('[WorldScene] Interacting near pond!');
            this.startWaterEncounter(); // Trigger the water battle
        } else {
            console.log('[WorldScene] Interaction detected, but not near a pond.');
            // TODO: Add checks for NPCs or other interactable objects here
        }
    }

    startWaterEncounter() {
        console.log('[WorldScene] Initiating WATER battle transition');
        // Optional: Add a visual effect like a splash
        this.createSplashEffect(); 
    
        gameState.playerPosition = { x: this.player.x, y: this.player.y };
        gameState.saveGame();
    
        // Use the PokemonGenerator instance
        const wildPokemon = this.pokemonGenerator.generateWaterPokemon(); 
    
        if (!wildPokemon || !wildPokemon.moves || !wildPokemon.stats) {
            console.error('[WorldScene] Invalid WATER wild Pokémon data:', wildPokemon);
            return; // Don't start battle if generation failed
        }
    
        console.log('[WorldScene] Generated WATER wild Pokémon:', wildPokemon);
        gameState.pokedex.seen.add(wildPokemon.key);
    
        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.error('[WorldScene] No player Pokémon available for water battle');
            return;
        }
    
        // Create a battle transition effect (optional, can reuse existing one)
        this.createBattleTransition(() => {
            this.scene.start('Battle', {
                playerPokemon: gameState.pokemon[0],
                wildPokemon,
                isWildBattle: true // Still a wild battle
            });
        });
    }
    
    // Optional: Add a splash effect
    createSplashEffect() {
        const splash = this.add.ellipse(this.player.x, this.player.y + 10, 40, 20, 0xFFFFFF, 0.7);
        splash.setDepth(this.player.depth -1); // Below player slightly
         this.tweens.add({
            targets: splash,
            scale: 1.5,
            alpha: 0,
            duration: 400,
            onComplete: () => splash.destroy(),
            ease: 'Quad.easeOut'
        });
    }
    
    createBattleTransition(callback) {
        console.log('[WorldScene] Creating battle transition effect.');
        const flash = this.add.rectangle(this.cameras.main.centerX, this.cameras.main.centerY, this.cameras.main.width, this.cameras.main.height, 0xFFFFFF, 0);
        flash.setScrollFactor(0);
        flash.setDepth(99);

        this.tweens.add({
            targets: flash,
            alpha: { from: 0, to: 1 },
            duration: 100,
            yoyo: true,
            repeat: 2,
            onComplete: () => {
                flash.destroy();
                if (callback) {
                    callback();
                }
            }
        });
    }
}