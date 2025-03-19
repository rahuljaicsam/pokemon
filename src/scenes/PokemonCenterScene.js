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
        console.log('PokemonCenterScene constructor initialized');
    }

    create() {
        console.log('PokemonCenterScene create method started');
        // Create the interior background
        try {
            this.add.rectangle(400, 300, 800, 600, 0xFFFFFF);
            console.log('Background created successfully');
        } catch (error) {
            console.error('Error creating background:', error);
        }
        
        // Create walls
        try {
            this.walls = this.physics.add.staticGroup();
            console.log('Walls static group created');
        } catch (error) {
            console.error('Error creating walls static group:', error);
        }
        
        // Left wall
        try {
            this.walls.add(this.add.rectangle(0, 300, 20, 600, 0x666666));
            this.walls.add(this.add.rectangle(800, 300, 20, 600, 0x666666));
            this.walls.add(this.add.rectangle(400, 0, 800, 20, 0x666666));
            this.walls.add(this.add.rectangle(200, 590, 400, 20, 0x666666));
            this.walls.add(this.add.rectangle(600, 590, 400, 20, 0x666666));
            console.log('All walls created successfully');
        } catch (error) {
            console.error('Error creating wall rectangles:', error);
        }
        
        // Create counter
        try {
            console.log('Attempting to create counter with texture');
            this.counter = this.physics.add.staticImage(400, 200, 'counter');
            if (!this.textures.exists('counter')) {
                console.log('Counter texture not found, creating fallback rectangle');
                this.counter = this.add.rectangle(400, 200, 300, 40, 0x8B4513);
                this.physics.add.existing(this.counter, true);
            }
            console.log('Counter created successfully');
        } catch (error) {
            console.error('Error creating counter:', error);
            // Fallback if the counter creation fails completely
            try {
                this.counter = this.add.rectangle(400, 200, 300, 40, 0x8B4513);
                this.physics.add.existing(this.counter, true);
                console.log('Created fallback counter after error');
            } catch (fallbackError) {
                console.error('Critical error: Failed to create fallback counter:', fallbackError);
            }
        }
        
        // Create nurse
        try {
            this.nurse = this.add.rectangle(400, 160, 32, 32, 0xFF69B4);
            console.log('Nurse created successfully');
        } catch (error) {
            console.error('Error creating nurse:', error);
        }
        
        // Create healing spot marker
        try {
            this.healSpot = this.add.rectangle(400, 250, 32, 32, 0xFFFF00, 0.3);
            console.log('Healing spot created successfully');
        } catch (error) {
            console.error('Error creating healing spot:', error);
        }
        
        // Create player at entrance
        try {
            this.player = this.add.rectangle(400, 550, 32, 32, 0xFF0000);
            this.physics.world.enable(this.player);
            console.log('Player created and physics enabled');
        } catch (error) {
            console.error('Error creating player or enabling physics:', error);
        }
        
        // Add exit area
        try {
            this.exitArea = this.add.rectangle(400, 580, 64, 20, 0x00FF00, 0.3);
            this.physics.world.enable(this.exitArea, Phaser.Physics.Arcade.STATIC_BODY);
            console.log('Exit area created and physics enabled');
        } catch (error) {
            console.error('Error creating exit area or enabling physics:', error);
        }
        
        // Set up collision
        try {
            this.physics.add.collider(this.player, this.walls);
            this.physics.add.collider(this.player, this.counter);
            console.log('Colliders set up successfully');
        } catch (error) {
            console.error('Error setting up colliders:', error);
        }
        
        // Set up keyboard controls
        try {
            this.cursors = this.input.keyboard.createCursorKeys();
            console.log('Keyboard controls set up successfully');
        } catch (error) {
            console.error('Error setting up keyboard controls:', error);
        }
        
        // Add interaction key
        try {
            this.input.keyboard.on('keydown-SPACE', () => {
                console.log('Space key pressed');
                // Check if player is in healing spot
                try {
                    const distance = Phaser.Math.Distance.Between(
                        this.player.x, this.player.y,
                        this.healSpot.x, this.healSpot.y
                    );
                    
                    console.log('Distance to healing spot:', distance);
                    if (distance < 50) {
                        console.log('Player is in healing range, initiating healing');
                        this.healPokemon();
                    } else {
                        console.log('Player not in healing range (distance: ' + distance + ')');
                    }
                } catch (error) {
                    console.error('Error calculating distance or healing:', error);
                }
            });
            console.log('Space key interaction set up successfully');
        } catch (error) {
            console.error('Error setting up space key interaction:', error);
        }
        
        // Add exit detection
        try {
            this.physics.add.overlap(this.player, this.exitArea, () => {
                console.log('Player overlapped with exit area, exiting Pokemon Center');
                this.exitPokemonCenter();
            });
            console.log('Exit area overlap detection set up successfully');
        } catch (error) {
            console.error('Error setting up exit area overlap detection:', error);
        }
        
        // Add helper text
        try {
            this.add.text(400, 350, 'Press SPACE to heal when near the counter', {
                fontSize: '18px',
                fill: '#000'
            }).setOrigin(0.5);
            console.log('Helper text added successfully');
        } catch (error) {
            console.error('Error adding helper text:', error);
        }
        
        console.log('PokemonCenterScene create method completed');
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
    
    healPokemon() {
        console.log('Healing Pokemon started');
        try {
            // Heal all Pokemon in the party
            if (!gameState.pokemon || !Array.isArray(gameState.pokemon)) {
                console.error('Error: gameState.pokemon is not an array or is undefined', gameState.pokemon);
                return;
            }
            
            gameState.pokemon.forEach(pokemon => {
                console.log(`Healing Pokemon: ${pokemon.name} from ${pokemon.currentHp} to ${pokemon.stats.hp} HP`);
                pokemon.currentHp = pokemon.stats.hp;
            });
            
            // Show healing animation/message
            try {
                const healText = this.add.text(400, 400, 'Your Pokémon have been healed!', {
                    fontSize: '24px',
                    fill: '#000'
                }).setOrigin(0.5);
                console.log('Healing message displayed');
                
                // Remove the text after 2 seconds
                this.time.delayedCall(2000, () => {
                    healText.destroy();
                    console.log('Healing message removed');
                });
            } catch (textError) {
                console.error('Error creating or managing heal text:', textError);
            }
            console.log('Pokemon healing completed successfully');
        } catch (error) {
            console.error('Error in healPokemon method:', error);
        }
    }
    
    exitPokemonCenter() {
        console.log('Exiting Pokemon Center, returning to World scene');
        try {
            // Return to world scene
            this.scene.start('World', { fromPokemonCenter: true });
            console.log('World scene started successfully');
        } catch (error) {
            console.error('Error starting World scene:', error);
        }
    }
}