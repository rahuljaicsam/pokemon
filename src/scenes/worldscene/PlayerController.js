// PlayerController.js - Handles player movement and controls
import { gameState } from '../../config/game-state';

export default class PlayerController {
    constructor(scene) {
        this.scene = scene;
    }

    createPlayer() {
        console.log('[WorldScene] Creating player');
        const data = this.scene.scene.settings.data;
        const position = data && data.fromPokemonCenter
            ? { x: this.scene.pokemonCenterEntrance.x, y: this.scene.pokemonCenterEntrance.y + 32 }
            : (gameState.playerPosition || { x: 400, y: 300 });

        // Always use rectangle for player since we're not loading the sprite
        this.scene.player = this.scene.add.rectangle(position.x, position.y, 32, 32, 0xFF0000);
        this.scene.player.setDepth(2);

        // Set up camera to follow player
        this.scene.cameras.main.setBounds(0, 0, 800, 600);
        this.scene.cameras.main.startFollow(this.scene.player, true, 0.1, 0.1);

        // Initialize controls
        console.log('[WorldScene] Setting up controls');
        this.scene.cursors = this.scene.input.keyboard.createCursorKeys();
        console.log('[WorldScene] Cursors initialized:', this.scene.cursors);
    }

    handleMovement() {
        // Movement handling without physics
        const speed = 4; // Adjusted for non-physics movement (pixels per frame)
        let dx = 0;
        let dy = 0;

        // Log first movement for debugging
        if (!this.scene.hasLoggedMovement && (this.scene.cursors.left.isDown || this.scene.cursors.right.isDown || 
            this.scene.cursors.up.isDown || this.scene.cursors.down.isDown)) {
            this.scene.hasLoggedMovement = true;
            console.log('[WorldScene] First movement:', {
                position: { x: this.scene.player.x, y: this.scene.player.y },
                cursors: {
                    left: this.scene.cursors.left.isDown,
                    right: this.scene.cursors.right.isDown,
                    up: this.scene.cursors.up.isDown,
                    down: this.scene.cursors.down.isDown
                }
            });
        }

        // Handle movement with animations
        if (this.scene.cursors.left.isDown) {
            dx -= speed;
        }
        else if (this.scene.cursors.right.isDown) {
            dx += speed;
        }
        else if (this.scene.cursors.up.isDown) {
            dy -= speed;
        }
        else if (this.scene.cursors.down.isDown) {
            dy += speed;
        }
        else if (this.scene.player.anims) {
            // Stop animation when not moving
            this.scene.player.anims.stop();
        }

        // Normalize diagonal movement
        const magnitude = Math.sqrt(dx * dx + dy * dy);
        if (magnitude > 0) {
            dx = (dx / magnitude) * speed;
            dy = (dy / magnitude) * speed;
            this.scene.player.x += dx;
            this.scene.player.y += dy;

            // Simple boundary checking without physics
            this.scene.player.x = Math.max(16, Math.min(784, this.scene.player.x)); // 16 = half player width
            this.scene.player.y = Math.max(16, Math.min(584, this.scene.player.y)); // 16 = half player height

            gameState.playerPosition = { x: this.scene.player.x, y: this.scene.player.y };
        }
    }
}