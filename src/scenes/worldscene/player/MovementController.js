// MovementController.js - Handles player movement and controls
import { gameState } from '../../../config/game-state';

export default class MovementController {
    constructor(playerCharacter) {
        this.playerCharacter = playerCharacter;
        this.scene = playerCharacter.scene;
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
            this.playerCharacter.direction = 'left';
            this.playerCharacter.isMoving = true;
        }
        else if (this.scene.cursors.right.isDown) {
            dx += speed;
            this.playerCharacter.direction = 'right';
            this.playerCharacter.isMoving = true;
        }
        else if (this.scene.cursors.up.isDown) {
            dy -= speed;
            this.playerCharacter.direction = 'up';
            this.playerCharacter.isMoving = true;
        }
        else if (this.scene.cursors.down.isDown) {
            dy += speed;
            this.playerCharacter.direction = 'down';
            this.playerCharacter.isMoving = true;
        }
        else {
            this.playerCharacter.isMoving = false;
            this.playerCharacter.animationController.stopAnimation();
        }

        // Normalize diagonal movement to ensure consistent speed in all directions
        const magnitude = Math.sqrt(dx * dx + dy * dy);
        if (magnitude > 0) {
            dx = (dx / magnitude) * speed;
            dy = (dy / magnitude) * speed;
            
            // Calculate new position
            const newX = this.scene.player.x + dx;
            const newY = this.scene.player.y + dy;
            
            // Create player hitbox for collision detection
            const playerHitbox = new Phaser.Geom.Rectangle(
                newX - 16, newY - 16, 32, 32
            );
            
            // Check collision with buildings
            let buildingCollision = this.checkBuildingCollisions(playerHitbox);
            
            // Check collision with obstacles
            let obstacleCollision = this.checkObstacleCollisions(playerHitbox);
            
            // Only move if no collision
            if (!buildingCollision && !obstacleCollision) {
                this.scene.player.x = newX;
                this.scene.player.y = newY;
            }

            // Simple boundary checking without physics
            this.scene.player.x = Math.max(16, Math.min(784, this.scene.player.x)); // 16 = half player width
            this.scene.player.y = Math.max(16, Math.min(584, this.scene.player.y)); // 16 = half player height

            gameState.playerPosition = { x: this.scene.player.x, y: this.scene.player.y };
            
            // Update animation based on direction
            if (this.playerCharacter.direction !== this.playerCharacter.lastDirection) {
                this.playerCharacter.directionController.updateCharacterDirection();
                this.playerCharacter.lastDirection = this.playerCharacter.direction;
            }
            
            // Animate walking
            this.playerCharacter.animationController.animateWalking();
        }
    }
    
    checkBuildingCollisions(playerHitbox) {
        // Check collision with Pokemon Center
        if (this.scene.pokemonCenter) {
            const centerHitbox = new Phaser.Geom.Rectangle(
                this.scene.pokemonCenter.x - 48, 
                this.scene.pokemonCenter.y - 32, 
                96, 64
            );
            
            // Don't collide with the entrance
            const entranceHitbox = new Phaser.Geom.Rectangle(
                this.scene.pokemonCenterEntrance.x - 16, 
                this.scene.pokemonCenterEntrance.y - 4, 
                32, 8
            );
            
            if (Phaser.Geom.Rectangle.Overlaps(playerHitbox, centerHitbox) && 
                !Phaser.Geom.Rectangle.Overlaps(playerHitbox, entranceHitbox)) {
                return true;
            }
        }
        
        // Check collision with Poke Shop
        if (this.scene.pokeShop) {
            const shopHitbox = new Phaser.Geom.Rectangle(
                this.scene.pokeShop.x - 48, 
                this.scene.pokeShop.y - 32, 
                96, 64
            );
            
            // Don't collide with the entrance
            const entranceHitbox = new Phaser.Geom.Rectangle(
                this.scene.pokeShopEntrance.x - 16, 
                this.scene.pokeShopEntrance.y - 4, 
                32, 8
            );
            
            if (Phaser.Geom.Rectangle.Overlaps(playerHitbox, shopHitbox) && 
                !Phaser.Geom.Rectangle.Overlaps(playerHitbox, entranceHitbox)) {
                return true;
            }
        }
        
        return false;
    }
    
    checkObstacleCollisions(playerHitbox) {
        // Check collision with obstacles (trees, rocks)
        for (const obstacle of this.scene.obstacles) {
            // Create obstacle hitbox
            const obstacleHitbox = new Phaser.Geom.Rectangle(
                obstacle.x - obstacle.width / 2, 
                obstacle.y - obstacle.height / 2, 
                obstacle.width, 
                obstacle.height
            );
            
            if (Phaser.Geom.Rectangle.Overlaps(playerHitbox, obstacleHitbox)) {
                return true;
            }
        }
        
        // Check collision with decorations (ponds, benches)
        if (this.scene.decorations && this.scene.decorations.length > 0) {
            for (const decoration of this.scene.decorations) {
                // Skip decorations that shouldn't have collision (like flowers)
                if (decoration.noCollision) continue;
                
                // Create decoration hitbox
                const decorationHitbox = new Phaser.Geom.Rectangle(
                    decoration.x - decoration.width / 2, 
                    decoration.y - decoration.height / 2, 
                    decoration.width, 
                    decoration.height
                );
                
                if (Phaser.Geom.Rectangle.Overlaps(playerHitbox, decorationHitbox)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}