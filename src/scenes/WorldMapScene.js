import Phaser from 'phaser';
import { gameState } from '../config/game-state';
import { POKEMON_DATA, calculateStats } from '../config/pokemon-data';
import { initializePokemonMoves } from '../utils/moveInitializer';
import { TILESETS, GBA_PALETTE, TILE_CONFIG, ANIMATIONS } from '../assets/tileset';

export default class WorldMapScene extends Phaser.Scene {
    constructor() {
        super({ key: 'World' }); // Keep the same key to replace the original scene
        this.player = null;
        this.cursors = null;
        this.encounterTimer = null;
        this.isInGrass = false;
        this.menuOpen = false;
        this.hasLoggedMovement = false;
        
        // Map layers
        this.groundLayer = null;
        this.decorationLayer = null;
        this.buildingLayer = null;
        this.collisionLayer = null;
        
        // Map objects
        this.grassAreas = [];
        this.pokemonCenter = null;
        this.pokemonCenterEntrance = null;
        this.pokeShop = null;
        this.pokeShopEntrance = null;
        
        // NPC characters
        this.npcs = [];
    }

    preload() {
        console.log('[WorldMapScene] Starting preload');
        
        // Load tileset images
        this.load.image('grass_tile', 'assets/sprites/grass.png');
        this.load.spritesheet('tall_grass', 'assets/sprites/grass.png', { frameWidth: 32, frameHeight: 32 });
        this.load.image('path_tile', 'assets/images/path_tile.png');
        this.load.image('tree_tile', 'assets/images/tree_tile.png');
        this.load.image('rock_tile', 'assets/images/rock_tile.png');
        this.load.spritesheet('water_tile', 'assets/images/water_tile.png', { frameWidth: 32, frameHeight: 32 });
        
        // Load building tiles
        this.load.image('center_roof', 'assets/images/pokecenter_bg.png');
        this.load.image('center_walls', 'assets/images/pokecenter_walls.png');
        this.load.image('mart_roof', 'assets/images/pokemart.png');
        this.load.image('mart_walls', 'assets/images/pokemart_walls.png');
        
        // Load player sprite
        this.load.spritesheet('player', 'assets/player_spritesheet.png', { 
            frameWidth: 32, 
            frameHeight: 32 
        });
        
        // Load NPC sprites
        this.load.spritesheet('npc_1', 'assets/images/characters.png', { 
            frameWidth: 32, 
            frameHeight: 32 
        });
        
        // Error handling for asset loading
        this.load.on('loaderror', (fileObj) => {
            console.error('[WorldMapScene] Failed to load asset:', fileObj.key, fileObj.url);
            // Fallback to colored rectangles if assets fail to load
            if (fileObj.key.includes('tile') || fileObj.key.includes('roof') || fileObj.key.includes('walls')) {
                this.createFallbackAssets();
            }
        });

        // Confirm loading completion
        this.load.on('complete', () => {
            console.log('[WorldMapScene] Preload complete.');
        });
    }
    
    createFallbackAssets() {
        // Create fallback colored rectangles if assets fail to load
        const graphics = this.make.graphics();
        
        // Grass tile (light green)
        graphics.fillStyle(GBA_PALETTE.GRASS_GREEN);
        graphics.fillRect(0, 0, TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.generateTexture('grass_tile', TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.clear();
        
        // Path tile (brown)
        graphics.fillStyle(GBA_PALETTE.PATH_BROWN);
        graphics.fillRect(0, 0, TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.generateTexture('path_tile', TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.clear();
        
        // Tree tile (dark green)
        graphics.fillStyle(GBA_PALETTE.TREE_GREEN);
        graphics.fillRect(0, 0, TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.generateTexture('tree_tile', TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.clear();
        
        // Water tile (blue)
        graphics.fillStyle(GBA_PALETTE.WATER_BLUE);
        graphics.fillRect(0, 0, TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.generateTexture('water_tile', TILE_CONFIG.SIZE, TILE_CONFIG.SIZE);
        graphics.clear();
        
        // Pokemon Center (pink)
        graphics.fillStyle(GBA_PALETTE.POKECENTER_PINK);
        graphics.fillRect(0, 0, TILE_CONFIG.SIZE * 3, TILE_CONFIG.SIZE * 2);
        graphics.generateTexture('center_roof', TILE_CONFIG.SIZE * 3, TILE_CONFIG.SIZE * 2);
        graphics.clear();
        
        // Pokemart (blue)
        graphics.fillStyle(GBA_PALETTE.POKEMART_BLUE);
        graphics.fillRect(0, 0, TILE_CONFIG.SIZE * 3, TILE_CONFIG.SIZE * 2);
        graphics.generateTexture('mart_roof', TILE_CONFIG.SIZE * 3, TILE_CONFIG.SIZE * 2);
        graphics.clear();
    }

    create() {
        console.log('[WorldMapScene] Starting create');

        // Ensure player has a starter Pokémon
        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.log('[WorldMapScene] No Pokémon in state, adding starter');
            gameState.addPokemon('PIKACHU', 10);
        }

        // Create the tilemap
        this.createTilemap();
        
        // Create animations
        this.createAnimations();

        // Create player sprite with animations
        console.log('[WorldMapScene] Creating player');
        const data = this.scene.settings.data;
        const position = data && data.fromPokemonCenter
            ? { x: this.pokemonCenterEntrance.x, y: this.pokemonCenterEntrance.y + 32 }
            : (gameState.playerPosition || { x: 400, y: 300 });

        // Create player sprite
        try {
            this.player = this.physics.add.sprite(position.x, position.y, 'player', 0);
            this.player.setDepth(10); // Above most map elements
            
            // Create player animations
            this.createPlayerAnimations();
        } catch (e) {
            console.error('[WorldMapScene] Error creating player sprite:', e);
            // Fallback to rectangle if sprite fails
            this.player = this.add.rectangle(position.x, position.y, 32, 32, GBA_PALETTE.TEXT_WHITE);
            this.physics.add.existing(this.player);
        }

        // Set up camera to follow player
        this.cameras.main.setBounds(0, 0, TILE_CONFIG.SIZE * TILE_CONFIG.GRID_WIDTH, 
                                   TILE_CONFIG.SIZE * TILE_CONFIG.GRID_HEIGHT);
        this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
        
        // Add GBA-style scanlines overlay for authentic look
        this.createScanlines();

        // Initialize controls
        console.log('[WorldMapScene] Setting up controls');
        this.cursors = this.input.keyboard.createCursorKeys();
        console.log('[WorldMapScene] Cursors initialized:', this.cursors);

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
            console.log('[WorldMapScene] Resumed from menu');
        });

        console.log('[WorldMapScene] Create complete');
    }
    
    createScanlines() {
        // Create a scanline effect for GBA authenticity
        const scanlines = this.add.graphics();
        scanlines.lineStyle(1, 0x000000, 0.1);
        
        for (let y = 0; y < 600; y += 2) {
            scanlines.moveTo(0, y);
            scanlines.lineTo(800, y);
        }
        
        scanlines.strokePath();
        scanlines.setScrollFactor(0); // Fixed to camera
        scanlines.setDepth(100); // Above everything
    }
    
    createPlayerAnimations() {
        // Create player walking animations
        this.anims.create({
            key: 'player_walk_down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'player_walk_up',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'player_walk_left',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'player_walk_right',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        
        // Create player idle animations
        this.anims.create({
            key: 'player_idle_down',
            frames: [{ key: 'player', frame: 0 }],
            frameRate: 10
        });
        
        this.anims.create({
            key: 'player_idle_up',
            frames: [{ key: 'player', frame: 4 }],
            frameRate: 10
        });
        
        this.anims.create({
            key: 'player_idle_left',
            frames: [{ key: 'player', frame: 8 }],
            frameRate: 10
        });
        
        this.anims.create({
            key: 'player_idle_right',
            frames: [{ key: 'player', frame: 12 }],
            frameRate: 10
        });
    }
    
    createAnimations() {
        // Create tile animations
        this.anims.create({
            key: 'water_anim',
            frames: this.anims.generateFrameNumbers('water_tile', { start: 0, end: 3 }),
            frameRate: ANIMATIONS.WATER.frameRate,
            repeat: ANIMATIONS.WATER.repeat
        });
        
        this.anims.create({
            key: 'tall_grass_anim',
            frames: this.anims.generateFrameNumbers('tall_grass', { start: 0, end: 4 }),
            frameRate: ANIMATIONS.TALL_GRASS.frameRate,
            repeat: ANIMATIONS.TALL_GRASS.repeat
        });
    }

    createTilemap() {
        console.log('[WorldMapScene] Creating tilemap');
        
        // Create a blank tilemap with multiple layers
        const map = this.make.tilemap({
            width: TILE_CONFIG.GRID_WIDTH,
            height: TILE_CONFIG.GRID_HEIGHT,
            tileWidth: TILE_CONFIG.SIZE,
            tileHeight: TILE_CONFIG.SIZE
        });
        
        // Add tilesets
        try {
            const grassTiles = map.addTilesetImage('grass', 'grass_tile');
            const pathTiles = map.addTilesetImage('path', 'path_tile');
            const treeTiles = map.addTilesetImage('tree', 'tree_tile');
            const waterTiles = map.addTilesetImage('water', 'water_tile');
            
            // Create layers
            this.groundLayer = map.createBlankLayer('ground', [grassTiles, pathTiles, waterTiles]);
            this.decorationLayer = map.createBlankLayer('decoration', [treeTiles]);
            this.buildingLayer = map.createBlankLayer('buildings', []);
            
            // Fill the ground layer with grass
            this.groundLayer.fill(0); // Grass tile
            
            // Create a path from left to right in the middle
            for (let x = 0; x < TILE_CONFIG.GRID_WIDTH; x++) {
                this.groundLayer.putTileAt(1, x, 10); // Path tile
            }
            
            // Create a vertical path
            for (let y = 0; y < TILE_CONFIG.GRID_HEIGHT; y++) {
                this.groundLayer.putTileAt(1, 12, y); // Path tile
            }
            
            // Create a water area
            for (let x = 18; x < 24; x++) {
                for (let y = 2; y < 8; y++) {
                    this.groundLayer.putTileAt(2, x, y); // Water tile
                    
                    // Add water animation
                    const waterTile = this.groundLayer.getTileAt(x, y);
                    waterTile.properties = { animated: true, animationKey: 'water_anim' };
                }
            }
            
            // Add trees around the edges
            for (let x = 0; x < TILE_CONFIG.GRID_WIDTH; x++) {
                // Top and bottom edges
                if (x < 2 || x > TILE_CONFIG.GRID_WIDTH - 3) {
                    for (let y = 0; y < TILE_CONFIG.GRID_HEIGHT; y++) {
                        this.decorationLayer.putTileAt(0, x, y); // Tree tile
                    }
                } else {
                    // Just the top and bottom rows
                    this.decorationLayer.putTileAt(0, x, 0); // Top row
                    this.decorationLayer.putTileAt(0, x, 1); // Second row
                    this.decorationLayer.putTileAt(0, x, TILE_CONFIG.GRID_HEIGHT - 1); // Bottom row
                    this.decorationLayer.putTileAt(0, x, TILE_CONFIG.GRID_HEIGHT - 2); // Second-to-bottom row
                }
            }
            
            // Create tall grass patches for random encounters
            this.grassAreas = [];
            
            // Tall grass patch 1 (near the path)
            for (let x = 3; x < 8; x++) {
                for (let y = 12; y < 16; y++) {
                    const grassTile = this.groundLayer.putTileAt(0, x, y); // Grass base
                    const tallGrass = this.add.sprite(x * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2, 
                                                    y * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2, 
                                                    'tall_grass');
                    tallGrass.setDepth(5); // Above ground, below player
                    tallGrass.alpha = 0.8;
                    this.grassAreas.push(tallGrass);
                }
            }
            
            // Tall grass patch 2 (near water)
            for (let x = 14; x < 18; x++) {
                for (let y = 3; y < 7; y++) {
                    const grassTile = this.groundLayer.putTileAt(0, x, y); // Grass base
                    const tallGrass = this.add.sprite(x * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2, 
                                                    y * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2, 
                                                    'tall_grass');
                    tallGrass.setDepth(5); // Above ground, below player
                    tallGrass.alpha = 0.8;
                    this.grassAreas.push(tallGrass);
                }
            }
            
            // Create Pokémon Center
            const centerX = 5;
            const centerY = 5;
            this.pokemonCenter = this.add.image(centerX * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE * 1.5, 
                                              centerY * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE, 
                                              'center_roof');
            this.pokemonCenter.setDepth(8);
            
            // Pokémon Center entrance
            this.pokemonCenterEntrance = new Phaser.Geom.Rectangle(
                centerX * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE * 1.5, 
                (centerY + 2) * TILE_CONFIG.SIZE, 
                TILE_CONFIG.SIZE, 
                TILE_CONFIG.SIZE / 4
            );
            
            // Create Poké Mart
            const martX = 15;
            const martY = 14;
            this.pokeShop = this.add.image(martX * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE * 1.5, 
                                          martY * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE, 
                                          'mart_roof');
            this.pokeShop.setDepth(8);
            
            // Poké Mart entrance
            this.pokeShopEntrance = new Phaser.Geom.Rectangle(
                martX * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE * 1.5, 
                (martY + 2) * TILE_CONFIG.SIZE, 
                TILE_CONFIG.SIZE, 
                TILE_CONFIG.SIZE / 4
            );
            
            // Add route signs
            this.addRouteSign(2, 10, "ROUTE 1");
            this.addRouteSign(12, 2, "ROUTE 2");
            
            // Add NPCs
            this.createNPCs();
            
        } catch (e) {
            console.error('[WorldMapScene] Error creating tilemap:', e);
            // Fallback to simple colored rectangles
            this.createFallbackWorld();
        }
    }
    
    addRouteSign(x, y, routeName) {
        // Create a sign sprite or rectangle
        const sign = this.add.rectangle(x * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2, 
                                      y * TILE_CONFIG.SIZE - TILE_CONFIG.SIZE/4, 
                                      TILE_CONFIG.SIZE * 1.5, 
                                      TILE_CONFIG.SIZE/2, 
                                      GBA_PALETTE.PATH_BROWN);
        sign.setStrokeStyle(2, GBA_PALETTE.TEXT_BLACK);
        sign.setDepth(6);
        
        // Add route text
        const text = this.add.text(x * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2, 
                                 y * TILE_CONFIG.SIZE - TILE_CONFIG.SIZE/4, 
                                 routeName, {
            fontSize: '10px',
            fill: GBA_PALETTE.TEXT_BLACK,
            fontFamily: 'monospace',
        }).setOrigin(0.5);
        text.setDepth(7);
    }
    
    createNPCs() {
        // Create a few NPCs around the map
        const npcData = [
            { x: 8, y: 10, frame: 0, direction: 'down', movement: 'stationary' },
            { x: 16, y: 10, frame: 4, direction: 'up', movement: 'patrol' },
            { x: 12, y: 15, frame: 8, direction: 'left', movement: 'random' }
        ];
        
        this.npcs = npcData.map(data => {
            const npc = this.physics.add.sprite(
                data.x * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2,
                data.y * TILE_CONFIG.SIZE + TILE_CONFIG.SIZE/2,
                'npc_1',
                data.frame
            );
            npc.setDepth(10);
            npc.direction = data.direction;
            npc.movementType = data.movement;
            npc.moveTimer = 0;
            return npc;
        });
    }
    
    createFallbackWorld() {
        console.log('[WorldMapScene] Creating fallback world');
        
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
        this.pokemonCenter = this.add.rectangle(600, 200, 96, 64, GBA_PALETTE.POKECENTER_PINK);
        this.pokemonCenter.setDepth(1);

        this.pokemonCenterEntrance = new Phaser.Geom.Rectangle(600, 232, 32, 8);

        this.add.text(600, 160, 'Pokémon Center', {
            fontSize: '16px',
            fill: GBA_PALETTE.TEXT_BLACK,
            backgroundColor: GBA_PALETTE.TEXT_WHITE,
            padding: { x: 4, y: 2 }
        }).setOrigin(0.5).setDepth(2);

        // Poké Shop
        this.pokeShop = this.add.rectangle(200, 200, 96, 64, GBA_PALETTE.POKEMART_BLUE);
        this.pokeShop.setDepth(1);

        this.pokeShopEntrance = new Phaser.Geom.Rectangle(200, 232, 32, 8);

        this.add.text(200, 160, 'Poké Shop', {
            fontSize: '16px',
            fill: GBA_PALETTE.TEXT_BLACK,
            backgroundColor: GBA_PALETTE.TEXT_WHITE,
            padding: { x: 4, y: 2 }
        }).setOrigin(0.5).setDepth(2);

        // Grass patches for random encounters
        this.grassAreas = [];
        const grassPositions = [
            [100, 100], [132, 100], [164, 100], [196, 100],
            [100, 132], [132, 132], [164, 132], [196, 132],
            [100, 164], [132, 164], [164, 164], [196, 164],
            [400, 300], [432, 300], [464, 300], [496, 300],
            [400, 332], [432, 332], [464, 332], [496, 332],
            [400, 364], [432, 364], [464, 364], [496, 364]
        ];
        grassPositions.forEach(([x, y]) => {
            const grass = this.add.rectangle(x, y, 32, 32, GBA_PALETTE.GRASS_GREEN);
            grass.setDepth(1);
            this.grassAreas.push(grass);
        });
    }

    setupRandomEncounters() {
        console.log('[WorldMapScene] Setting up random encounters');
        // No physics overlap; handled in update()
    }

    checkRandomEncounter(inGrass) {
        if (!inGrass && this.encounterTimer) {
            this.encounterTimer.destroy();
            this.encounterTimer = null;
            this.isInGrass = false;
        } else if (inGrass && !this.encounterTimer) {
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
            this.encounterTimer.destroy();
            this.encounterTimer = null;
            this.isInGrass = false;
        }

        // Play tall grass animation
        const playerX = Math.floor(this.player.x / TILE_CONFIG.SIZE);
        const playerY = Math.floor(this.player.y / TILE_CONFIG.SIZE);
        
        // Find the grass sprite at player position
        this.grassAreas.forEach(grass => {
            const grassX = Math.floor(grass.x / TILE_CONFIG.SIZE);
            const grassY = Math.floor(grass.y / TILE_CONFIG.SIZE);
            if (grassX === playerX && grassY === playerY) {
                grass.play('tall_grass_anim');
            }
        });

        console.log('[WorldMapScene] Initiating battle transition');
        gameState.playerPosition = { x: this.player.x, y: this.player.y };
        gameState.saveGame();

        const wildPokemon = this.generateWildPokemon();
        if (!wildPokemon || !wildPokemon.moves || !wildPokemon.stats) {
            console.error('[WorldMapScene] Invalid wild Pokémon data:', wildPokemon);
            return;
        }

        console.log('[WorldMapScene] Generated wild Pokémon:', wildPokemon);
        gameState.pokedex.seen.add(wildPokemon.key);

        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.error('[WorldMapScene] No player Pokémon available');
            return;
        }

        // Create a battle transition effect
        this.createBattleTransition(() => {
            this.scene.start('Battle', {
                playerPokemon: gameState.pokemon[0],
                wildPokemon,
                isWildBattle: true
            });
        });
    }
    
    createBattleTransition(callback) {
        // Create a white flash effect
        const flash = this.add.rectangle(400, 300, 800, 600, 0xFFFFFF, 0);
        flash.setDepth(99);
        
        // Flash sequence
        this.tweens.add({
            targets: flash,
            alpha: { from: 0, to: 1 },
            duration: 100,
            yoyo: true,
            repeat: 2,
            onComplete: callback
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
            console.error('[WorldMapScene] Missing data for Pokémon:', pokemonKey);
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
        pokemon.moves = initializePokemonMoves(pokemon.key, pokemon.level);

        return pokemon;
    }

    enterPokemonCenter() {
        console.log('[WorldMapScene] Entering Pokémon Center');
        gameState.playerPosition = {
            x: this.pokemonCenterEntrance.x,
            y: this.pokemonCenterEntrance.y + 32
        };
        gameState.saveGame();
        this.scene.start('PokemonCenter');
    }

    enterPokeShop() {
        console.log('[WorldMapScene] Entering Poké Shop');
        gameState.playerPosition = {
            x: this.pokeShopEntrance.x,
            y: this.pokeShopEntrance.y + 32
        };
        gameState.saveGame();
        this.scene.start('PokeShop');
    }

    update() {
        if (!this.player || !this.cursors) {
            console.warn('[WorldMapScene] Update skipped - missing player or cursors:', {
                hasPlayer: !!this.player,
                hasCursors: !!this.cursors
            });
            return;
        }

        // Movement handling with physics
        const speed = 160; // Pixels per second
        let moving = false;
        let direction = '';

        // Handle movement with animations
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.setVelocityY(0);
            this.player.anims.play('player_walk_left', true);
            moving = true;
            direction = 'left';
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.setVelocityY(0);
            this.player.anims.play('player_walk_right', true);
            moving = true;
            direction = 'right';
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            this.player.setVelocityX(0);
            this.player.anims.play('player_walk_up', true);
            moving = true;
            direction = 'up';
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            this.player.setVelocityX(0);
            this.player.anims.play('player_walk_down', true);
            moving = true;
            direction = 'down';
        }
        else {
            // Stop movement and play idle animation based on last direction
            this.player.setVelocity(0);
            if (this.player.anims) {
                if (direction === 'left' || this.player.anims.currentAnim?.key === 'player_walk_left') {
                    this.player.anims.play('player_idle_left');
                } else if (direction === 'right' || this.player.anims.currentAnim?.key === 'player_walk_right') {
                    this.player.anims.play('player_idle_right');
                } else if (direction === 'up' || this.player.anims.currentAnim?.key === 'player_walk_up') {
                    this.player.anims.play('player_idle_up');
                } else {
                    this.player.anims.play('player_idle_down');
                }
            }
        }

        // Update player position in game state
        if (moving) {
            gameState.playerPosition = { x: this.player.x, y: this.player.y };
        }

        // Check for grass overlap
        let inGrass = false;
        for (const grass of this.grassAreas) {
            if (Phaser.Geom.Rectangle.Overlaps(
                new Phaser.Geom.Rectangle(this.player.x - 16, this.player.y - 16, 32, 32),
                new Phaser.Geom.Rectangle(grass.x - 16, grass.y - 16, 32, 32)
            )) {
                inGrass = true;
                break;
            }
        }
        this.checkRandomEncounter(inGrass);

        // Check for Pokémon Center entrance
        if (Phaser.Geom.Rectangle.Overlaps(
            new Phaser.Geom.Rectangle(this.player.x - 16, this.player.y - 16, 32, 32),
            this.pokemonCenterEntrance
        ) && this.cursors.up.isDown) {
            this.enterPokemonCenter();
        }

        // Check for Poké Shop entrance
        if (Phaser.Geom.Rectangle.Overlaps(
            new Phaser.Geom.Rectangle(this.player.x - 16, this.player.y - 16, 32, 32),
            this.pokeShopEntrance
        ) && this.cursors.up.isDown) {
            this.enterPokeShop();
        }
        
        // Update NPCs
        this.updateNPCs();
    }
    
    updateNPCs() {
        // Update NPC movement and animations
        this.npcs.forEach(npc => {
            // Only update NPCs every 60 frames (about 1 second)
            npc.moveTimer++;
            if (npc.moveTimer < 60) return;
            
            npc.moveTimer = 0;
            
            // Different movement patterns
            switch (npc.movementType) {
                case 'stationary':
                    // No movement
                    break;
                    
                case 'patrol':
                    // Move back and forth
                    if (!npc.patrolDirection) npc.patrolDirection = 'right';
                    
                    if (npc.patrolDirection === 'right') {
                        npc.x += TILE_CONFIG.SIZE;
                        if (Math.random() < 0.3) npc.patrolDirection = 'left';
                    } else {
                        npc.x -= TILE_CONFIG.SIZE;
                        if (Math.random() < 0.3) npc.patrolDirection = 'right';
                    }
                    break;
                    
                case 'random':
                    // Move in random directions
                    const directions = ['up', 'down', 'left', 'right'];
                    const dir = directions[Math.floor(Math.random() * directions.length)];
                    
                    switch (dir) {
                        case 'up':
                            npc.y -= TILE_CONFIG.SIZE;
                            break;
                        case 'down':
                            npc.y += TILE_CONFIG.SIZE;
                            break;
                        case 'left':
                            npc.x -= TILE_CONFIG.SIZE;
                            break;
                        case 'right':
                            npc.x += TILE_CONFIG.SIZE;
                            break;
                    }
                    break;
            }
            
            // Keep NPCs within bounds
            npc.x = Math.max(TILE_CONFIG.SIZE, Math.min(npc.x, TILE_CONFIG.SIZE * (TILE_CONFIG.GRID_WIDTH - 1)));
            npc.y = Math.max(TILE_CONFIG.SIZE, Math.min(npc.y, TILE_CONFIG.SIZE * (TILE_CONFIG.GRID_HEIGHT - 1)));
        });
    }
}