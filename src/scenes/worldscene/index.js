// Main WorldScene controller file that imports and uses all components
import { gameState } from '../../config/game-state';
import WorldCreator from './WorldCreator';
import PlayerController from './PlayerController';
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

        // Initialize component managers
        this.worldCreator = new WorldCreator(this);
        this.playerController = new PlayerController(this);
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
}