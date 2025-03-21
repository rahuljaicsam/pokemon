import { gameState } from '../config/game-state';

// Added console log for module loading
console.log('PokemonCenterScene module loaded');

export default class PokemonCenterScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PokemonCenter' });
        this.player = null;
        this.cursors = null;
        this.nurse = null;
        this.counter = null;
        this.exitArea = null;
        this.pc = null;
        this.pcInteractionZone = null;
        this.chansey = null;
        this.healingAnimation = null;
        console.log('PokemonCenterScene constructor initialized');
    }

    preload() {
        // Load Pokemon Center assets
        this.load.image('center-tiles', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/tilesets/pokemon-center-tiles.png');
        this.load.image('center-floor', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/tilesets/pokemon-center-floor.png');
        this.load.image('nurse-joy', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/sprites/nurse-joy.png');
        this.load.image('chansey', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/sprites/chansey.png');
        this.load.image('pc', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/sprites/pc.png');
        this.load.image('healing-machine', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/sprites/healing-machine.png');
        this.load.spritesheet('healing-anim', 'https://raw.githubusercontent.com/jdtjenkins/pokemon-assets/main/sprites/healing-animation.png', 
            { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        console.log('[PokemonCenterScene] Create method started');
        try {
            // Create themed background with proper styling
            const background = this.add.rectangle(400, 300, 800, 600, 0xF0F8FF);
            console.log('[PokemonCenterScene] Background created');
            
            // Create floor pattern
            for (let x = 0; x < 800; x += 40) {
                for (let y = 100; y < 600; y += 40) {
                    this.add.rectangle(x + 20, y + 20, 40, 40, 0xE8E8E8)
                        .setStrokeStyle(1, 0xD0D0D0);
                }
            }
            
            // Create walls with better styling
            // Top wall with decorative elements
            this.add.rectangle(400, 50, 800, 100, 0xFFE4E1)
                .setStrokeStyle(2, 0xDEB887);
                
            // Side walls
            this.add.rectangle(50, 300, 100, 600, 0xFFE4E1)
                .setStrokeStyle(2, 0xDEB887);
            this.add.rectangle(750, 300, 100, 600, 0xFFE4E1)
                .setStrokeStyle(2, 0xDEB887);
            
            // Create healing counter area
            const counterBase = this.add.rectangle(400, 150, 300, 80, 0xDEB887)
                .setStrokeStyle(2, 0x8B4513);
            
            // Add healing machine
            const healingMachine = this.add.rectangle(400, 120, 200, 40, 0x4169E1)
                .setStrokeStyle(2, 0x000080);
            
            // Add healing orbs
            for (let i = 0; i < 6; i++) {
                this.add.circle(320 + i * 30, 120, 8, 0xFF69B4)
                    .setStrokeStyle(1, 0xFF1493);
            }
            
            // Create nurse area with better visuals
            this.nurse = this.add.rectangle(400, 180, 32, 32, 0xFFB6C1)
                .setStrokeStyle(1, 0xFF69B4);
            
            // Create PC area with modern styling
            this.pc = this.add.rectangle(600, 160, 48, 64, 0x4682B4)
                .setStrokeStyle(2, 0x4169E1);
            
            // Add PC screen
            this.add.rectangle(600, 150, 40, 30, 0x87CEEB)
                .setStrokeStyle(1, 0x4169E1);
            
            // Create PC interaction zone
            this.pcInteractionZone = this.add.rectangle(600, 200, 48, 48, 0x90EE90, 0.2);
            
            // Add decorative plants
            this.addDecorations();
            
            // Create healing spot with subtle indicator
            this.healSpot = this.add.rectangle(400, 220, 64, 32, 0xFFFF00, 0.1);
            
            // Add collision walls (invisible)
            this.walls = this.physics.add.staticGroup();
            this.walls.add(this.add.rectangle(0, 300, 20, 600, 0x666666).setVisible(false));
            this.walls.add(this.add.rectangle(800, 300, 20, 600, 0x666666).setVisible(false));
            this.walls.add(this.add.rectangle(400, 0, 800, 20, 0x666666).setVisible(false));
            this.walls.add(this.add.rectangle(400, 590, 800, 20, 0x666666).setVisible(false));
            
            // Create counter collision
            this.counter = this.physics.add.staticSprite(400, 150, null)
                .setDisplaySize(300, 80);
            
            // Add PC collision
            this.physics.add.existing(this.pc, true);
        
        // Create player at entrance
            this.player = this.add.rectangle(400, 550, 32, 32, 0xFF0000);
            this.physics.world.enable(this.player);
        
        // Add exit area
            this.exitArea = this.add.rectangle(400, 580, 64, 20, 0x00FF00, 0.2);
            this.physics.world.enable(this.exitArea, Phaser.Physics.Arcade.STATIC_BODY);
        
        // Set up collision
            this.physics.add.collider(this.player, this.walls);
            this.physics.add.collider(this.player, this.counter);
            this.physics.add.collider(this.player, this.pc);
        
        // Set up keyboard controls
            this.cursors = this.input.keyboard.createCursorKeys();
            
            // Add helper text with better styling
            const textBg = this.add.rectangle(400, 350, 500, 60, 0x000000, 0.7);
            this.add.text(400, 350, 'Press SPACE to heal when near the counter\nPress A to use PC when near it', {
                fontSize: '18px',
                fill: '#FFFFFF',
                align: 'center',
                padding: { x: 20, y: 10 },
                backgroundColor: '#00000000'
            }).setOrigin(0.5);
            
            // Add interaction keys
            this.setupInteractionKeys();
            
            // Add exit detection
            this.physics.add.overlap(this.player, this.exitArea, () => {
                console.log('[PokemonCenterScene] Player overlapped with exit area');
                this.exitPokemonCenter();
            });
            
            console.log('[PokemonCenterScene] Create method completed successfully');
        } catch (error) {
            console.error('[PokemonCenterScene] Error in create method:', error);
        }
    }
    
    addDecorations() {
        // Add potted plants in corners
        const plantPositions = [
            { x: 100, y: 100 },
            { x: 700, y: 100 },
            { x: 100, y: 500 },
            { x: 700, y: 500 }
        ];
        
        plantPositions.forEach(pos => {
            // Plant pot
            this.add.rectangle(pos.x, pos.y + 10, 40, 20, 0x8B4513)
                .setStrokeStyle(1, 0x654321);
            // Plant
            this.add.rectangle(pos.x, pos.y - 15, 30, 40, 0x228B22)
                .setStrokeStyle(1, 0x006400);
        });
        
        // Add welcome mat
        this.add.rectangle(400, 550, 100, 40, 0x8B4513)
            .setStrokeStyle(1, 0x654321)
            .setAlpha(0.3);
            
        // Add some wall decorations
        const wallDecorations = [
            { x: 200, y: 50 },
            { x: 600, y: 50 }
        ];
        
        wallDecorations.forEach(pos => {
            this.add.rectangle(pos.x, pos.y, 40, 40, 0xFFD700)
                .setStrokeStyle(1, 0xDAA520);
        });
    }
    
    setupInteractionKeys() {
        console.log('[PokemonCenterScene] Setting up interaction keys');
        try {
            // A key for PC interactions
            this.input.keyboard.on('keydown-A', () => {
                console.log('[PokemonCenterScene] A key pressed');
                const pcDistance = Phaser.Math.Distance.Between(
                    this.player.x, this.player.y,
                    this.pcInteractionZone.x, this.pcInteractionZone.y
                );
                
                console.log('[PokemonCenterScene] Distance to PC:', pcDistance);
                if (pcDistance < 50) {
                    console.log('[PokemonCenterScene] Player is in PC range, accessing storage system');
                    this.accessPCStorage();
                } else {
                    console.log('[PokemonCenterScene] Player too far from PC');
                }
            });

            // Space key for healing
            this.input.keyboard.on('keydown-SPACE', () => {
                console.log('[PokemonCenterScene] Space key pressed');
                    const distance = Phaser.Math.Distance.Between(
                        this.player.x, this.player.y,
                        this.healSpot.x, this.healSpot.y
                    );
                    
                console.log('[PokemonCenterScene] Distance to healing spot:', distance);
                    if (distance < 50) {
                    console.log('[PokemonCenterScene] Player is in healing range, initiating healing');
                        this.healPokemon();
                    } else {
                    console.log('[PokemonCenterScene] Player too far from healing spot');
                }
            });

            console.log('[PokemonCenterScene] Interaction keys setup completed');
        } catch (error) {
            console.error('[PokemonCenterScene] Error setting up interaction keys:', error);
        }
    }

    healPokemon() {
        console.log('[PokemonCenterScene] Healing Pokemon started');
        try {
            // Validate gameState.pokemon
            if (!gameState.pokemon || !Array.isArray(gameState.pokemon)) {
                console.error('[PokemonCenterScene] Error: gameState.pokemon is not an array or is undefined', gameState.pokemon);
                return;
            }

            // Skip animation since assets aren't loading
            console.log('[PokemonCenterScene] Starting healing process');
            
            // Heal all Pokemon
            let healedCount = 0;
            gameState.pokemon.forEach(pokemon => {
                if (pokemon && pokemon.stats && pokemon.stats.hp) {
                    console.log(`[PokemonCenterScene] Healing ${pokemon.key} from ${pokemon.currentHp} to ${pokemon.stats.hp} HP`);
                    pokemon.currentHp = pokemon.stats.hp;
                    healedCount++;
                } else {
                    console.warn(`[PokemonCenterScene] Skipping invalid Pokemon:`, pokemon);
                }
            });
            
            console.log(`[PokemonCenterScene] Healed ${healedCount} Pokemon`);
            
            // Show healing message with better styling
            const healText = this.add.text(400, 400, 'Your Pokémon have been healed!', {
                fontSize: '24px',
                fill: '#FFFFFF',
                backgroundColor: '#000000',
                padding: { x: 20, y: 10 }
            }).setOrigin(0.5);
            
            // Remove the text after 2 seconds
            this.time.delayedCall(2000, () => {
                healText.destroy();
                console.log('[PokemonCenterScene] Healing message removed');
            });
            
            console.log('[PokemonCenterScene] Healing completed successfully');
        } catch (error) {
            console.error('[PokemonCenterScene] Error in healPokemon method:', error);
            // Show error message to user
            const errorText = this.add.text(400, 400, 'Sorry, healing failed. Please try again.', {
                fontSize: '24px',
                fill: '#FF0000',
                backgroundColor: '#000000',
                padding: { x: 20, y: 10 }
            }).setOrigin(0.5);
            
            this.time.delayedCall(2000, () => errorText.destroy());
        }
    }
    
    update() {
        try {
            if (!this.player || !this.cursors) {
                // console.log('Update skipped: player or cursors not initialized');
                return;
            }

            // Reset velocity
            this.player.body.setVelocity(0);

            const speed = 160;
            let movementDirection = 'none';

            // Handle movement
            if (this.cursors.left.isDown) {
                this.player.body.setVelocityX(-speed);
                movementDirection = 'left';
            } else if (this.cursors.right.isDown) {
                this.player.body.setVelocityX(speed);
                movementDirection = 'right';
            }

            if (this.cursors.up.isDown) {
                this.player.body.setVelocityY(-speed);
                movementDirection = movementDirection === 'none' ? 'up' : movementDirection + '+up';
            } else if (this.cursors.down.isDown) {
                this.player.body.setVelocityY(speed);
                movementDirection = movementDirection === 'none' ? 'down' : movementDirection + '+down';
            }

            // Only log when movement occurs to avoid console spam
            if (movementDirection !== 'none') {
                // console.log(`Player moving: ${movementDirection}, position: (${this.player.x.toFixed(0)}, ${this.player.y.toFixed(0)})`);
            }

            // Normalize diagonal movement
            if (this.player.body.velocity.length() > 0) {
                this.player.body.velocity.normalize().scale(speed);
            }
        } catch (error) {
            console.error('Error in update method:', error);
        }
    }
    
    exitPokemonCenter() {
        console.log('[PokemonCenterScene] Attempting to exit Pokemon Center');
        try {
            // Save player position before exiting
            gameState.playerPosition = {
                x: this.player.x,
                y: this.player.y + 32 // Move player slightly down when exiting
            };
            console.log('[PokemonCenterScene] Saved player position:', gameState.playerPosition);

            // Return to world scene
            this.scene.start('World', { fromPokemonCenter: true });
            console.log('[PokemonCenterScene] Started World scene successfully');
        } catch (error) {
            console.error('[PokemonCenterScene] Error exiting Pokemon Center:', error);
            // Show error message to user
            const errorText = this.add.text(400, 400, 'Unable to exit. Please try again.', {
                fontSize: '24px',
                fill: '#FF0000',
                backgroundColor: '#000000',
                padding: { x: 20, y: 10 }
            }).setOrigin(0.5);
            
            this.time.delayedCall(2000, () => errorText.destroy());
        }
    }

    accessPCStorage() {
        console.log('Accessing Pokemon Storage System');
        this.scene.pause();
        this.scene.launch('PokemonStorage');
    }
}