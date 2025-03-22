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

    preload() {
        // No external assets needed, we'll create everything with Phaser graphics
    }

    create() {
        // Create PokeMart interior background using graphics
        this.createShopBackground();
        
        // Add CSS styling to the game canvas
        this.applyCanvasStyling();
        
        // Create walls collision areas (invisible)
        this.walls = this.physics.add.staticGroup();
        
        // Left wall
        this.walls.add(this.add.rectangle(10, 300, 20, 600, 0x666666).setVisible(false));
        // Right wall
        this.walls.add(this.add.rectangle(790, 300, 20, 600, 0x666666).setVisible(false));
        // Top wall
        this.walls.add(this.add.rectangle(400, 80, 800, 20, 0x666666).setVisible(false));
        // Bottom wall (except door area)
        this.walls.add(this.add.rectangle(200, 590, 400, 20, 0x666666).setVisible(false));
        this.walls.add(this.add.rectangle(600, 590, 400, 20, 0x666666).setVisible(false));
        
        // Create counter area (using rectangle instead of image)
        this.counter = this.physics.add.staticGroup();
        this.counter.add(this.add.rectangle(400, 200, 300, 50, 0x666666).setVisible(false));
        
        // Create shopkeeper area (using rectangle instead of image)
        this.shopkeeper = this.add.rectangle(400, 160, 50, 50, 0x666666).setVisible(false);
        
        // Create interaction spot marker (subtle glow effect)
        this.shopSpot = this.add.ellipse(400, 250, 50, 30, 0xFFFF00, 0.2);
        
        // Create player at entrance
        this.player = this.add.rectangle(400, 550, 32, 32, 0xFF0000);
        this.physics.world.enable(this.player);
        
        // Add exit area
        this.exitArea = this.add.rectangle(400, 580, 64, 20, 0x00FF00, 0.1);
        this.physics.world.enable(this.exitArea, Phaser.Physics.Arcade.STATIC_BODY);
        
        // Add subtle animation to shopkeeper
        this.tweens.add({
            targets: this.shopkeeper,
            y: this.shopkeeper.y - 5,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
        
        // Add subtle animation to shop spot
        this.tweens.add({
            targets: this.shopSpot,
            alpha: 0.4,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
        
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
        
        // Add helper text with better styling
        const helpText = this.add.text(400, 350, 'Press SPACE to shop when near the counter', {
            fontSize: '18px',
            fontFamily: 'Arial',
            fill: '#000',
            stroke: '#fff',
            strokeThickness: 2,
            shadow: { offsetX: 1, offsetY: 1, color: '#000', blur: 2, stroke: true, fill: true }
        }).setOrigin(0.5);
        
        // Add subtle animation to help text
        this.tweens.add({
            targets: helpText,
            alpha: 0.7,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

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
    
    createShopBackground() {
        // Create a graphics object for drawing the shop interior
        const graphics = this.add.graphics();
        
        // Draw floor
        graphics.fillStyle(0xEEEECC, 1); // Light cream color for floor
        graphics.fillRect(0, 0, 800, 600);
        
        // Draw floor tiles pattern
        graphics.lineStyle(1, 0xCCCCAA, 0.3);
        for (let x = 0; x < 800; x += 40) {
            graphics.moveTo(x, 0);
            graphics.lineTo(x, 600);
        }
        for (let y = 0; y < 600; y += 40) {
            graphics.moveTo(0, y);
            graphics.lineTo(800, y);
        }
        
        // Draw walls
        graphics.fillStyle(0x99AADD, 1); // Light blue for walls
        graphics.fillRect(0, 0, 800, 100); // Top wall
        graphics.fillRect(0, 0, 20, 600);  // Left wall
        graphics.fillRect(780, 0, 20, 600); // Right wall
        
        // Draw bottom wall with door opening
        graphics.fillRect(0, 580, 350, 20);
        graphics.fillRect(450, 580, 350, 20);
        
        // Draw counter
        graphics.fillStyle(0xBB8855, 1); // Brown for counter
        graphics.fillRect(250, 180, 300, 40);
        graphics.fillStyle(0x996644, 1); // Darker brown for counter front
        graphics.fillRect(250, 220, 300, 10);
        
        // Draw shelves on walls
        graphics.fillStyle(0xBB8855, 1); // Brown for shelves
        // Left shelves
        graphics.fillRect(30, 120, 150, 15);
        graphics.fillRect(30, 200, 150, 15);
        graphics.fillRect(30, 280, 150, 15);
        // Right shelves
        graphics.fillRect(620, 120, 150, 15);
        graphics.fillRect(620, 200, 150, 15);
        graphics.fillRect(620, 280, 150, 15);
        
        // Draw items on shelves (colorful rectangles representing products)
        const itemColors = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0xFF00FF, 0x00FFFF];
        
        // Add items to left shelves
        let itemIndex = 0;
        for (let y of [130, 210, 290]) {
            for (let x = 40; x < 170; x += 25) {
                graphics.fillStyle(itemColors[itemIndex % itemColors.length], 1);
                graphics.fillRect(x, y, 15, 20);
                itemIndex++;
            }
        }
        
        // Add items to right shelves
        itemIndex = 0;
        for (let y of [130, 210, 290]) {
            for (let x = 630; x < 760; x += 25) {
                graphics.fillStyle(itemColors[itemIndex % itemColors.length], 1);
                graphics.fillRect(x, y, 15, 20);
                itemIndex++;
            }
        }
        
        // Draw register on counter
        graphics.fillStyle(0x333333, 1); // Dark gray for register
        graphics.fillRect(450, 160, 40, 30);
        
        // Draw shopkeeper (more detailed than just a rectangle)
        graphics.fillStyle(0x3366CC, 1); // Blue for shopkeeper clothes
        graphics.fillRect(385, 130, 30, 40); // Body
        graphics.fillStyle(0xFFCCAA, 1); // Skin tone for face
        graphics.fillCircle(400, 115, 15); // Head
        
        // Draw door
        graphics.fillStyle(0x996644, 1); // Brown for door
        graphics.fillRect(350, 580, 100, 20);
        graphics.lineStyle(2, 0x663300, 1);
        graphics.strokeRect(350, 580, 100, 20);
    }
    
    applyCanvasStyling() {
        // Get the canvas element
        const canvas = this.sys.game.canvas;
        
        // Apply CSS styling to the canvas
        canvas.style.border = '3px solid #333';
        canvas.style.borderRadius = '5px';
        canvas.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        
        // Apply CSS to the parent container if needed
        if (canvas.parentElement) {
            canvas.parentElement.style.display = 'flex';
            canvas.parentElement.style.justifyContent = 'center';
            canvas.parentElement.style.alignItems = 'center';
            canvas.parentElement.style.padding = '20px';
        }
    }
}