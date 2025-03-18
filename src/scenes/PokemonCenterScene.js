import { gameState } from '../config/game-state';

export default class PokemonCenterScene extends Phaser.Scene {
    constructor() {
        super('PokemonCenter');
        this.player = null;
        this.cursors = null;
        this.nurse = null;
        this.counter = null;
        this.exitArea = null;
        this.playerDirection = 'down';
        this.playerMoving = false;
        this.playerFrame = 0;
        this.animationCounter = 0;
        this.showDialog = false;
        this.dialogText = '';
        this.scale = 2; // Scale factor for rendering
        this.keysPressed = {};
        
        // Collision map - 1 means collision, 0 means walkable
        this.collisionMap = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
        
        // NPC positions
        this.npcs = [
            { x: 240, y: 92, width: 16, height: 20, type: 'nurse', dialog: 'Welcome to the Pokémon Center! Would you like me to heal your Pokémon?' },
            { x: 340, y: 22, width: 16, height: 32, type: 'pc', dialog: 'You accessed the Pokémon Storage System.' },
            { x: 350, y: 150, width: 16, height: 20, type: 'trainer1', dialog: 'I always make sure to keep my Pokémon healthy!' },
            { x: 65, y: 160, width: 16, height: 20, type: 'trainer2', dialog: 'BE SURE TO FOLLOW @Jaicsam!' },
            { x: 210, y: 92, width: 16, height: 20, type: 'chansey', dialog: 'Chansey, Chansey' }
        ];
    }

    preload() {
        // Load images from web URLs
        this.load.image('pokecenter_bg', 'https://archives.bulbagarden.net/media/upload/a/a3/Pok%C3%A9mon_Center_inside_FRLG.png');
        // Use CORS Proxy ONLY for Spriters Resource URL (for testing)
        this.load.spritesheet('characters', 'https://cors-anywhere.herokuapp.com/https://www.spriters-resource.com/resources/sheets/4/3698.png', { 
            frameWidth: 16, 
            frameHeight: 20 
        });
        
        // Add error handling for asset loading
        this.load.on('loaderror', (fileObj) => {
            console.error('[PokemonCenterScene] Failed to load asset:', fileObj.key, fileObj.url);
        });

        // Confirm loading completion
        this.load.on('complete', () => {
            console.log('[PokemonCenterScene] Preload complete');
            console.log('[PokemonCenterScene] Background texture exists:', this.textures.exists('pokecenter_bg'));
            console.log('[PokemonCenterScene] Characters texture exists:', this.textures.exists('characters'));
        });
    }

    create() {
        // Create dialog box
        this.dialogBox = this.add.rectangle(400, 500, 600, 100, 0xFFFFFF)
            .setStrokeStyle(4, 0x555555)
            .setVisible(false);
        this.dialogText = this.add.text(400, 500, '', {
            fontSize: '16px',
            fill: '#000',
            wordWrap: { width: 580 }
        }).setOrigin(0.5).setVisible(false);
        
        // Create the interior background using the loaded image
        this.add.image(240, 160, 'pokecenter_bg').setScale(2);
        
        // Create invisible walls based on collision map
        this.walls = this.physics.add.staticGroup();
        const tileSize = 16 * this.scale;
        
        for (let y = 0; y < this.collisionMap.length; y++) {
            for (let x = 0; x < this.collisionMap[y].length; x++) {
                if (this.collisionMap[y][x] === 1) {
                    // Create invisible wall
                    const wall = this.add.rectangle(x * tileSize + tileSize/2, y * tileSize + tileSize/2, tileSize, tileSize, 0xFF0000, 0);
                    this.walls.add(wall);
                }
            }
        }
        
        // Create NPCs
        this.npcSprites = [];
        this.npcs.forEach(npc => {
            let sprite;
            
            if (npc.type === 'nurse') {
                sprite = this.add.sprite(npc.x, npc.y, 'characters');
                sprite.setFrame(345); // Nurse Joy frame
            } else if (npc.type === 'trainer1') {
                sprite = this.add.sprite(npc.x, npc.y, 'characters');
                sprite.setFrame(46); // Random trainer frame
            } else if (npc.type === 'trainer2') {
                sprite = this.add.sprite(npc.x, npc.y, 'characters');
                sprite.setFrame(71); // Random trainer frame
            } else if (npc.type === 'chansey') {
                sprite = this.add.sprite(npc.x, npc.y, 'characters');
                sprite.setFrame(2322); // Chansey frame
            } else if (npc.type === 'pc') {
                // PC is already in the background image
                sprite = this.add.rectangle(npc.x, npc.y, npc.width, npc.height, 0x00FF00, 0);
            }
            
            if (sprite) {
                sprite.setScale(this.scale);
                this.npcSprites.push({
                    sprite: sprite,
                    data: npc
                });
            }
        });
        
        // Create healing spot marker (invisible)
        this.healSpot = this.add.rectangle(240, 140, 32, 32, 0xFFFF00, 0);
        
        // Create player at entrance
        this.player = this.add.sprite(240, 200, 'characters');
        this.player.setFrame(26); // Default standing frame
        this.player.setScale(this.scale);
        this.physics.world.enable(this.player);
        this.player.body.setSize(16, 20);
        this.player.setDepth(2); // Ensure player is rendered above background
        
        // Add exit area at the bottom of the screen
        this.exitArea = this.add.rectangle(240, 300, 64, 20, 0x00FF00, 0);
        this.physics.world.enable(this.exitArea, Phaser.Physics.Arcade.STATIC_BODY);
        
        // Set up collision
        this.physics.add.collider(this.player, this.walls);
        
        // Set up keyboard controls
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // Add Z key for interaction (A button)
        this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.zKey.on('down', () => {
            if (!this.showDialog) {
                this.checkInteraction();
            }
        });
        
        // Add X key to close dialog (B button)
        this.xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        this.xKey.on('down', () => {
            if (this.showDialog) {
                this.showDialog = false;
                this.dialogBox.setVisible(false);
                this.dialogText.setVisible(false);
            }
        });
        
        // Add SPACE key for healing
        this.input.keyboard.on('keydown-SPACE', () => {
            // Check if player is in healing spot
            const distance = Phaser.Math.Distance.Between(
                this.player.x, this.player.y,
                this.healSpot.x, this.healSpot.y
            );
            
            if (distance < 50) {
                this.healPokemon();
            }
        });
        
        // Add exit detection
        this.physics.add.overlap(this.player, this.exitArea, () => {
            this.exitPokemonCenter();
        });
        
        // Add helper text
        this.add.text(240, 350, 'Press SPACE to heal when near the counter\nZ to interact, X to cancel', {
            fontSize: '18px',
            fill: '#000',
            align: 'center'
        }).setOrigin(0.5);
    }
    
    update() {
        if (!this.player || !this.cursors) return;
        
        // Don't move when dialog is showing
        if (this.showDialog) return;

        // Reset velocity
        this.player.body.setVelocity(0);

        const speed = 100;
        this.playerMoving = false;

        // Handle movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-speed);
            this.playerDirection = 'left';
            this.playerMoving = true;
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(speed);
            this.playerDirection = 'right';
            this.playerMoving = true;
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-speed);
            this.playerDirection = 'up';
            this.playerMoving = true;
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(speed);
            this.playerDirection = 'down';
            this.playerMoving = true;
        }
        
        // Update player animation based on direction and movement
        if (this.playerMoving) {
            this.animationCounter++;
            if (this.animationCounter >= 10) {
                this.animationCounter = 0;
                this.playerFrame = (this.playerFrame + 1) % 2;
            }
            
            // Set the appropriate frame based on direction and animation frame
            switch (this.playerDirection) {
                case 'down':
                    this.player.setFrame(this.playerFrame === 0 ? 9 : 43);
                    break;
                case 'up':
                    this.player.setFrame(this.playerFrame === 0 ? 94 : 60);
                    break;
                case 'left':
                    this.player.setFrame(this.playerFrame === 0 ? 111 : 145);
                    break;
                case 'right':
                    this.player.setFrame(this.playerFrame === 0 ? 162 : 196);
                    break;
            }
        } else {
            // Set standing frame based on direction
            switch (this.playerDirection) {
                case 'down':
                    this.player.setFrame(26);
                    break;
                case 'up':
                    this.player.setFrame(77);
                    break;
                case 'left':
                    this.player.setFrame(128);
                    break;
                case 'right':
                    this.player.setFrame(179);
                    break;
            }
        }
    }
    
    healPokemon() {
        // Heal all Pokemon in the party
        gameState.pokemon.forEach(pokemon => {
            pokemon.currentHp = pokemon.stats.hp;
        });
        
        // Show healing animation/message
        const healText = this.add.text(400, 400, 'Your Pokémon have been healed!', {
            fontSize: '24px',
            fill: '#000'
        }).setOrigin(0.5);
        
        // Remove the text after 2 seconds
        this.time.delayedCall(2000, () => {
            healText.destroy();
        });
    }
    
    exitPokemonCenter() {
        // Return to world scene
        this.scene.start('World', { fromPokemonCenter: true });
    }
    
    checkInteraction() {
        // Only check for interaction if not already in dialog
        if (this.showDialog) return;
        
        // Check interaction range (in front of player)
        let interactX = this.player.x;
        let interactY = this.player.y;
        
        // Set interaction point based on direction
        switch (this.playerDirection) {
            case 'up':
                interactY -= 20;
                break;
            case 'down':
                interactY += 20;
                break;
            case 'left':
                interactX -= 20;
                break;
            case 'right':
                interactX += 20;
                break;
        }
        
        // Check if interacting with an NPC
        for (const npcData of this.npcSprites) {
            const npc = npcData.data;
            // Simple collision detection for interaction
            if (interactX < npc.x + npc.width &&
                interactX + this.player.width > npc.x &&
                interactY < npc.y + npc.height &&
                interactY + this.player.height > npc.y) {
                
                // Show dialog
                this.showDialog = true;
                this.dialogText.setText(npc.dialog);
                this.dialogBox.setVisible(true);
                this.dialogText.setVisible(true);
                return;
            }
        }
    }
}