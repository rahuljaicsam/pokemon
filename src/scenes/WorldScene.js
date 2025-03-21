import { gameState } from '../config/game-state';
import { POKEMON_DATA, calculateStats, getMovesForLevel } from '../config/pokemon-data';
import { initializePokemonMoves } from '../utils/moveInitializer';

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
    }

    preload() {
        console.log('[WorldScene] Starting preload');
        // Load assets from src/assets/ (relative to WorldScene.js in src/scenes/)
        this.load.image('grass', '../assets/grass.png');
        this.load.image('player', '../assets/player.png');

        // Error handling for asset loading
        this.load.on('loaderror', (fileObj) => {
            console.error('[WorldScene] Failed to load asset:', fileObj.key, fileObj.url);
        });

        // Confirm loading completion
        this.load.on('complete', () => {
            console.log('[WorldScene] Preload complete. Grass texture exists:', this.textures.exists('grass'));
            console.log('[WorldScene] Player texture exists:', this.textures.exists('player'));
        });
    }

    create() {
        console.log('[WorldScene] Starting create');

        // Ensure player has a starter Pokémon
        // Check if gameState.pokemon exists before accessing its properties
        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.log('[WorldScene] No Pokémon in state, adding starter');
            gameState.addPokemon('PIKACHU', 10);
        }

        // Build the world
        this.createWorld();

        // Create player sprite
        console.log('[WorldScene] Creating player');
        const data = this.scene.settings.data;
        const position = data && data.fromPokemonCenter
            ? { x: this.pokemonCenterEntrance.x, y: this.pokemonCenterEntrance.y + 32 }
            : (gameState.playerPosition || { x: 400, y: 300 });

        if (!this.textures.exists('player')) {
            console.warn('[WorldScene] Player texture not loaded, using rectangle fallback');
            this.player = this.add.rectangle(position.x, position.y, 32, 32, 0xFF0000);
        } else {
            this.player = this.add.sprite(position.x, position.y, 'player');
        }
        this.player.setDepth(2);

        // Set up camera to follow player
        this.cameras.main.setBounds(0, 0, 800, 600);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

        // Initialize controls
        console.log('[WorldScene] Setting up controls');
        this.cursors = this.input.keyboard.createCursorKeys();
        console.log('[WorldScene] Cursors initialized:', this.cursors);

        // Set up random encounters
        this.setupRandomEncounters();

        // Menu controls
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

        console.log('[WorldScene] Create complete');
    }

    createWorld() {
        console.log('[WorldScene] Creating world');

        // Draw grid for visual reference (32x32 tiles)
        const graphics = this.add.graphics();
        graphics.lineStyle(1, 0x333333, 0.5);
        for (let x = 0; x < 800; x += 32) {
            graphics.moveTo(x, 0);
            graphics.lineTo(x, 600);
        }
        for (let y = 0; y < 600; y += 32) {
            graphics.moveTo(0, y);
            graphics.lineTo(800, y);
        }
        graphics.strokePath();
        graphics.setDepth(0);

        // Pokémon Center
        this.pokemonCenter = this.add.rectangle(600, 200, 96, 64, 0xFF69B4); // Pink rectangle
        this.pokemonCenter.setDepth(1);

        this.pokemonCenterEntrance = this.add.rectangle(600, 232, 32, 8, 0x00FF00, 0.3); // Green trigger area
        this.pokemonCenterEntrance.setDepth(1);

        this.add.text(600, 160, 'Pokémon Center', {
            fontSize: '16px',
            fill: '#000',
            backgroundColor: '#FFF',
            padding: { x: 4, y: 2 }
        }).setOrigin(0.5).setDepth(2);

        // Poké Shop
        this.pokeShop = this.add.rectangle(200, 200, 96, 64, 0x4169E1); // Blue rectangle
        this.pokeShop.setDepth(1);

        this.pokeShopEntrance = this.add.rectangle(200, 232, 32, 8, 0x00FF00, 0.3); // Green trigger area
        this.pokeShopEntrance.setDepth(1);

        this.add.text(200, 160, 'Poké Shop', {
            fontSize: '16px',
            fill: '#000',
            backgroundColor: '#FFF',
            padding: { x: 4, y: 2 }
        }).setOrigin(0.5).setDepth(2);

        // Obstacles (visual only, no collision)
        this.obstacles = [];
        const obstaclePositions = [
            [200, 200], [232, 200], [264, 200], // Horizontal row
            [500, 400], [500, 432], [500, 464]  // Vertical row
        ];
        obstaclePositions.forEach(([x, y]) => {
            const obstacle = this.add.rectangle(x, y, 32, 32, 0x00FF00); // Green rectangles
            obstacle.setDepth(1);
            this.obstacles.push(obstacle);
        });

        // Grass patches for random encounters
        this.grassAreas = [];
        const grassPositions = [
            [100, 100], [132, 100], [164, 100], [196, 100], // Row 1
            [100, 132], [132, 132], [164, 132], [196, 132], // Row 2
            [100, 164], [132, 164], [164, 164], [196, 164], // Row 3
            [400, 300], [432, 300], [464, 300], [496, 300], // Row 4
            [400, 332], [432, 332], [464, 332], [496, 332], // Row 5
            [400, 364], [432, 364], [464, 364], [496, 364]  // Row 6
        ];
        grassPositions.forEach(([x, y]) => {
            const grass = this.textures.exists('grass')
                ? this.add.image(x, y, 'grass')
                : this.add.rectangle(x, y, 32, 32, 0x00AA00); // Fallback to green rectangle
            grass.setDepth(1);
            this.grassAreas.push(grass);
        });
    }

    setupRandomEncounters() {
        console.log('[WorldScene] Setting up random encounters');
        // No physics overlap; handled in update()
    }

    checkRandomEncounter(inGrass) {
        console.log('[WorldScene] Encounter check:', {
            inGrass,
            hasTimer: !!this.encounterTimer,
            timerActive: this.encounterTimer?.active || false,
            playerX: Math.round(this.player.x),
            playerY: Math.round(this.player.y)
        });

        if (!inGrass && this.encounterTimer) {
            console.log('[WorldScene] Leaving grass, clearing encounter timer');
            this.encounterTimer.destroy();
            this.encounterTimer = null;
            this.isInGrass = false;
        } else if (inGrass && !this.encounterTimer) {
            console.log('[WorldScene] Entering grass, starting encounter timer');
            this.isInGrass = true;
            this.encounterTimer = this.time.addEvent({
                delay: 1000, // Check every second
                callback: () => {
                    if (Math.random() < 0.1) { // 10% chance per second
                        this.startBattle();
                    }
                },
                loop: true
            });
        }
    }

    startBattle() {
        if (this.encounterTimer) {
            console.log('[WorldScene] Starting battle, clearing encounter timer');
            this.encounterTimer.destroy();
            this.encounterTimer = null;
            this.isInGrass = false;
        }

        console.log('[WorldScene] Initiating battle transition');
        gameState.playerPosition = { x: this.player.x, y: this.player.y };
        gameState.saveGame();

        const wildPokemon = this.generateWildPokemon();
        if (!wildPokemon || !wildPokemon.moves || !wildPokemon.stats) {
            console.error('[WorldScene] Invalid wild Pokémon data:', wildPokemon);
            return;
        }

        console.log('[WorldScene] Generated wild Pokémon:', wildPokemon);
        gameState.pokedex.seen.add(wildPokemon.key);

        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.error('[WorldScene] No player Pokémon available');
            return;
        }

        console.log('[WorldScene] Starting battle with:', {
            playerPokemon: gameState.pokemon[0],
            wildPokemon
        });

        this.time.delayedCall(100, () => {
            this.scene.start('Battle', {
                playerPokemon: gameState.pokemon[0],
                wildPokemon,
                isWildBattle: true
            });
        });
    }

    generateWildPokemon() {
        const possiblePokemon = [
            'RATTATA', 'PIDGEY', 'CATERPIE', 'WEEDLE', 'ODDISH', 'BELLSPROUT',
            'SPEAROW', 'EKANS', 'SANDSHREW', 'NIDORAN_F', 'NIDORAN_M', 'JIGGLYPUFF',
            'PIKACHU', 'CLEFAIRY', 'VULPIX', 'MANKEY'
        ];

        const rarityRoll = Math.random();
        let pokemonPool;
        if (rarityRoll < 0.6) { // 60% common
            pokemonPool = possiblePokemon.slice(0, 6);
        } else if (rarityRoll < 0.9) { // 30% uncommon
            pokemonPool = possiblePokemon.slice(6, 12);
        } else { // 10% rare
            pokemonPool = possiblePokemon.slice(12);
        }

        const pokemonKey = pokemonPool[Math.floor(Math.random() * pokemonPool.length)];
        const playerLevel = gameState.pokemon[0]?.level || 5; // Fallback to 5 if no Pokémon
        const level = Math.max(2, Math.min(playerLevel + 3, playerLevel - 2 + Math.floor(Math.random() * 5)));

        const pokemonData = POKEMON_DATA[pokemonKey];
        if (!pokemonData) {
            console.error('[WorldScene] Missing data for Pokémon:', pokemonKey);
            return null;
        }

        const stats = calculateStats(pokemonKey, level);

        // Create the Pokémon object
        const pokemon = {
            key: pokemonKey,
            id: pokemonData.id,
            name: pokemonData.name,
            level,
            types: pokemonData.types,
            stats,
            currentHp: stats.hp,
            exp: level * level * level,
            nextLevelExp: (level + 1) * (level + 1) * (level + 1)
        };

        // Initialize moves using the moveInitializer
        initializePokemonMoves(pokemon);

        return pokemon;
    }

    enterPokemonCenter() {
        console.log('[WorldScene] Entering Pokémon Center');
        gameState.playerPosition = {
            x: this.pokemonCenterEntrance.x,
            y: this.pokemonCenterEntrance.y + 32
        };
        gameState.saveGame();
        this.scene.start('PokemonCenter');
    }

    enterPokeShop() {
        console.log('[WorldScene] Entering Poké Shop');
        gameState.playerPosition = {
            x: this.pokeShopEntrance.x,
            y: this.pokeShopEntrance.y + 32
        };
        gameState.saveGame();
        this.scene.start('PokeShop');
    }

    update() {
        if (!this.player || !this.cursors) {
            console.warn('[WorldScene] Update skipped - missing player or cursors:', {
                hasPlayer: !!this.player,
                hasCursors: !!this.cursors
            });
            return;
        }

        // Movement handling without physics
        const speed = 4; // Adjusted for non-physics movement (pixels per frame)
        let dx = 0;
        let dy = 0;

        // Log first movement for debugging
        if (!this.hasLoggedMovement && (this.cursors.left.isDown || this.cursors.right.isDown || 
            this.cursors.up.isDown || this.cursors.down.isDown)) {
            this.hasLoggedMovement = true;
            console.log('[WorldScene] First movement:', {
                position: { x: this.player.x, y: this.player.y },
                cursors: {
                    left: this.cursors.left.isDown,
                    right: this.cursors.right.isDown,
                    up: this.cursors.up.isDown,
                    down: this.cursors.down.isDown
                }
            });
        }

        // Handle movement
        if (this.cursors.left.isDown) dx -= speed;
        if (this.cursors.right.isDown) dx += speed;
        if (this.cursors.up.isDown) dy -= speed;
        if (this.cursors.down.isDown) dy += speed;

        // Normalize diagonal movement
        const magnitude = Math.sqrt(dx * dx + dy * dy);
        if (magnitude > 0) {
            dx = (dx / magnitude) * speed;
            dy = (dy / magnitude) * speed;
            this.player.x += dx;
            this.player.y += dy;

            // Simple boundary checking without physics
            this.player.x = Math.max(16, Math.min(784, this.player.x)); // 16 = half player width
            this.player.y = Math.max(16, Math.min(584, this.player.y)); // 16 = half player height

            gameState.playerPosition = { x: this.player.x, y: this.player.y };
        }

        // Check for grass overlap manually
        const playerBounds = new Phaser.Geom.Rectangle(
            this.player.x - 16, this.player.y - 16, 32, 32
        );
        let inGrass = false;
        for (const grass of this.grassAreas) {
            const grassBounds = new Phaser.Geom.Rectangle(
                grass.x - 16, grass.y - 16, 32, 32
            );
            if (Phaser.Geom.Rectangle.Overlaps(playerBounds, grassBounds)) {
                inGrass = true;
                break;
            }
        }
        this.checkRandomEncounter(inGrass);

        // Check for Pokémon Center entrance manually
        const centerEntranceBounds = new Phaser.Geom.Rectangle(
            this.pokemonCenterEntrance.x - 16, this.pokemonCenterEntrance.y - 4, 32, 8
        );
        if (Phaser.Geom.Rectangle.Overlaps(playerBounds, centerEntranceBounds) && this.cursors.up.isDown) {
            this.enterPokemonCenter();
        }

        // Check for Poké Shop entrance manually
        const shopEntranceBounds = new Phaser.Geom.Rectangle(
            this.pokeShopEntrance.x - 16, this.pokeShopEntrance.y - 4, 32, 8
        );
        if (Phaser.Geom.Rectangle.Overlaps(playerBounds, shopEntranceBounds) && this.cursors.up.isDown) {
            this.enterPokeShop();
        }
    }
}