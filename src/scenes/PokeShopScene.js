import { gameState } from '../config/game-state';

export default class PokeShopScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PokeShop' });
        this.player = null;
        this.cursors = null;
        this.shopkeeper = null;
        this.counter = null;
        this.exitArea = null;
        this.isInShopMenu = false;
        this.selectedOption = 0;
        this.shopOptions = ['Buy', 'Sell', 'Exit'];
        this.selectedItem = 0;
        this.isInItemList = false;
        this.currentMode = null; // 'buy' or 'sell'
        this.itemQuantity = 1;
        this.isSelectingQuantity = false;
    }

    create() {
        // Add semi-transparent black background
        this.add.rectangle(400, 300, 800, 600, 0xFFFFFF);
        
        // Create walls
        this.walls = this.physics.add.staticGroup();
        
        // Left wall
        this.walls.add(this.add.rectangle(0, 300, 20, 600, 0x666666));
        // Right wall
        this.walls.add(this.add.rectangle(800, 300, 20, 600, 0x666666));
        // Top wall
        this.walls.add(this.add.rectangle(400, 0, 800, 20, 0x666666));
        // Bottom wall (except door area)
        this.walls.add(this.add.rectangle(200, 590, 400, 20, 0x666666));
        this.walls.add(this.add.rectangle(600, 590, 400, 20, 0x666666));
        
        // Create counter
        this.counter = this.physics.add.staticImage(400, 200, 'counter');
        if (!this.textures.exists('counter')) {
            this.counter = this.add.rectangle(400, 200, 300, 40, 0x8B4513);
            this.physics.add.existing(this.counter, true);
        }
        
        // Create shopkeeper
        this.shopkeeper = this.add.rectangle(400, 160, 32, 32, 0x4169E1);
        
        // Create interaction spot marker
        this.shopSpot = this.add.rectangle(400, 250, 32, 32, 0xFFFF00, 0.3);
        
        // Create player at entrance
        this.player = this.add.rectangle(400, 550, 32, 32, 0xFF0000);
        this.physics.world.enable(this.player);
        
        // Add exit area
        this.exitArea = this.add.rectangle(400, 580, 64, 20, 0x00FF00, 0.3);
        this.physics.world.enable(this.exitArea, Phaser.Physics.Arcade.STATIC_BODY);
        
        // Set up collision
        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.player, this.counter);
        
        // Set up keyboard controls
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // Add interaction key
        this.input.keyboard.on('keydown-SPACE', () => {
            if (!this.isInShopMenu) {
                const distance = Phaser.Math.Distance.Between(
                    this.player.x, this.player.y,
                    this.shopSpot.x, this.shopSpot.y
                );
                
                if (distance < 50) {
                    this.startShopping();
                }
            }
        });
        
        // Add exit detection
        this.physics.add.overlap(this.player, this.exitArea, () => {
            this.exitShop();
        });
        
        // Add helper text
        this.add.text(400, 350, 'Press SPACE to shop when near the counter', {
            fontSize: '18px',
            fill: '#000'
        }).setOrigin(0.5);

        // Add scene resume event listener
        this.events.on('resume', () => {
            this.isInShopMenu = false;
        });
    }

    update() {
        if (this.isInShopMenu) return;
        if (!this.player || !this.cursors) return;

        // Reset velocity
        this.player.body.setVelocity(0);

        const speed = 160;

        // Handle movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(speed);
        }

        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(speed);
        }

        // Normalize diagonal movement
        if (this.player.body.velocity.length() > 0) {
            this.player.body.velocity.normalize().scale(speed);
        }
    }

    startShopping() {
        this.isInShopMenu = true;
        this.scene.launch('ShopMenu');
        this.scene.pause();
    }
    
    exitShop() {
        // Return to world scene
        this.scene.start('World', { fromShop: true });
    }
}