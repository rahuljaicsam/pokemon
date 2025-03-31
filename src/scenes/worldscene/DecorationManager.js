// DecorationManager.js - Handles creation of decorative elements in the game world
import { GBA_PALETTE } from '../../assets/tileset';

export default class DecorationManager {
    constructor(scene) {
        this.scene = scene;
        // IMPORTANT: Initialize decorations array for non-physics decorations
        // Collidable decorations should be handled by physics groups in WorldScene
        this.decorations = [];
    }

    createDecorations() {
        // Clear existing NON-PHYSICS decorations if needed (less relevant now)
        // this.decorations = []; // You might not need this array if not storing non-physics items
        this.decorations = [];
        
        // Add enhanced flowers with more detailed styling
        this.createFlowers();
        
        // Add enhanced ponds with interactive water effects
        this.createPonds();
        
        // Add benches for resting
        this.createBenches();
        
        // Add decorations to scene for collision detection
        this.scene.decorations = this.decorations;
    }

    createFlowers() {
        const flowerPositions = [
            [50, 50], [750, 50], [50, 550], [750, 550],
            [300, 500], [500, 500], [650, 350], [150, 350],
            [250, 100], [450, 450], [600, 500], [100, 200]
        ];
        
        flowerPositions.forEach(([x, y]) => {
            // Create a non-collidable flower decoration for tracking
            const flowerDecoration = this.scene.add.rectangle(x, y, 10, 10);
            flowerDecoration.width = 10;
            flowerDecoration.height = 10;
            flowerDecoration.setVisible(false); // Invisible marker
            flowerDecoration.noCollision = true; // Mark as non-collidable
            
            // Add to decorations array
            this.decorations.push(flowerDecoration);
            // Create flower group for better organization
            const flowerGroup = this.scene.add.group();
            
            // Flower stem with better styling
            const stem = this.scene.add.rectangle(x, y + 8, 3, 20, 0x006400);
            stem.setStrokeStyle(1, 0x003300);
            stem.setDepth(0.6);
            flowerGroup.add(stem);
            
            // Add leaf to stem
            const leafSide = Math.random() > 0.5 ? 1 : -1;
            const leaf = this.scene.add.ellipse(x + (leafSide * 5), y + 4, 8, 5, 0x228B22);
            leaf.setRotation(leafSide * 0.5);
            leaf.setStrokeStyle(1, 0x006400);
            leaf.setDepth(0.65);
            flowerGroup.add(leaf);
            
            // Flower petals with more variety
            const flowerTypes = [
                { shape: 'circle', color: 0xFF0000, size: 8 },  // Red
                { shape: 'circle', color: 0xFFFF00, size: 8 },  // Yellow
                { shape: 'circle', color: 0xFF00FF, size: 8 },  // Pink
                { shape: 'circle', color: 0x00FFFF, size: 8 },  // Cyan
                { shape: 'star', color: 0xFFFFFF, size: 10 },   // White star
                { shape: 'multi', color: 0xFFA500, size: 7 }    // Orange multi-petal
            ];
            
            const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            
            if (flowerType.shape === 'circle') {
                // Simple circle flower
                const flower = this.scene.add.circle(x, y, flowerType.size, flowerType.color);
                flower.setStrokeStyle(1, 0x000000);
                flower.setDepth(0.7);
                flowerGroup.add(flower);
                
                // Add center to flower
                const center = this.scene.add.circle(x, y, flowerType.size / 3, 0xFFFF00);
                center.setDepth(0.71);
                flowerGroup.add(center);
                
                // Add subtle animation to flowers
                this.scene.tweens.add({
                    targets: flower,
                    angle: 5,
                    duration: 2000 + Math.random() * 1000,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Sine.easeInOut'
                });
            } else if (flowerType.shape === 'star') {
                // Create star-shaped flower
                const points = [];
                const sides = 5;
                const size = flowerType.size;
                const innerSize = size / 2;
                
                for (let i = 0; i < sides * 2; i++) {
                    const radius = i % 2 === 0 ? size : innerSize;
                    const angle = (Math.PI * 2 * i) / (sides * 2);
                    points.push({
                        x: x + radius * Math.cos(angle),
                        y: y + radius * Math.sin(angle)
                    });
                }
                
                const flower = this.scene.add.polygon(x, y, points, flowerType.color);
                flower.setStrokeStyle(1, 0x000000);
                flower.setDepth(0.7);
                flower.setOrigin(0.5);
                flowerGroup.add(flower);
                
                // Add center to flower
                const center = this.scene.add.circle(x, y, innerSize / 2, 0xFFFF00);
                center.setDepth(0.71);
                flowerGroup.add(center);
                
                // Add subtle rotation animation
                this.scene.tweens.add({
                    targets: flower,
                    angle: 360,
                    duration: 20000,
                    repeat: -1,
                    ease: 'Linear'
                });
            } else if (flowerType.shape === 'multi') {
                // Create multi-petal flower
                const petalCount = 6;
                const petalGroup = this.scene.add.group();
                
                for (let i = 0; i < petalCount; i++) {
                    const angle = (Math.PI * 2 * i) / petalCount;
                    const petalX = x + Math.cos(angle) * 5;
                    const petalY = y + Math.sin(angle) * 5;
                    
                    const petal = this.scene.add.ellipse(petalX, petalY, 10, 6, flowerType.color);
                    petal.setRotation(angle);
                    petal.setStrokeStyle(1, 0x000000);
                    petal.setDepth(0.7);
                    petalGroup.add(petal);
                }
                
                // Add center to flower
                const center = this.scene.add.circle(x, y, 4, 0x663300);
                center.setDepth(0.71);
                petalGroup.add(center);
                
                // Add subtle pulsing animation
                this.scene.tweens.add({
                    targets: petalGroup.getChildren(),
                    scaleX: 1.1,
                    scaleY: 1.1,
                    duration: 1500,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Sine.easeInOut'
                });
            }
        });
    }

    createPonds() {
        const pondPositions = [[100, 400], [700, 150]];

        pondPositions.forEach(([x, y]) => {
            // --- RE-ADD THE VISUAL POND ELEMENTS ---
            const pondGroup = this.scene.add.group(); // Group for visual elements of this pond

            // Pond base (visual)
            const pondBase = this.scene.add.ellipse(x, y, 90, 60, 0x000033); // Use a dark blue/black for base
            pondBase.setDepth(0.55); // Ensure it's behind the main water
            pondGroup.add(pondBase);

            // Main pond water (visual)
            const pond = this.scene.add.ellipse(x, y, 80, 50, GBA_PALETTE.WATER_BLUE);
            pond.setStrokeStyle(2, 0x0000A0); // Darker blue stroke
            pond.setDepth(0.6); // Above base, below lily pads
            pondGroup.add(pond);

            // Ripples (visual)
            for (let i = 0; i < 3; i++) {
                const ripple = this.scene.add.ellipse(x, y, 60 - i * 15, 35 - i * 10, GBA_PALETTE.WATER_BLUE, 0.5 - i * 0.1);
                ripple.setDepth(0.7);
                pondGroup.add(ripple);
                this.scene.tweens.add({
                    targets: ripple,
                    scaleX: 1.2 + i * 0.1,
                    scaleY: 1.2 + i * 0.1,
                    alpha: 0,
                    duration: 3000 + i * 500,
                    repeat: -1,
                    ease: 'Sine.easeInOut',
                    delay: i * 700
                });
            }

            // Add lily pads
            this.addLilyPads(x, y, pondGroup);

            // Add jumping fish animation
            this.addJumpingFish(x, y);

            // --- POND COLLISION/INTERACTION AREA ---
            const pondCollision = this.scene.add.ellipse(x, y, 80, 50);
            pondCollision.setVisible(false);
            pondCollision.isPond = true;
            this.scene.physics.add.existing(pondCollision, true);

            if (this.scene.pondAreas) {
                console.log('[DecorationManager] Adding pond collision object to group:', pondCollision);
                this.scene.pondAreas.add(pondCollision);
            } else {
                console.error('[DecorationManager] pondAreas group does not exist on scene!');
            }
        });
    }

    addLilyPads(x, y, pondGroup) {
        const lilyPadPositions = [
            [x - 20, y - 10],
            [x + 15, y + 5],
            [x - 5, y + 15]
        ];

        lilyPadPositions.forEach(([padX, padY]) => {
            // Create lily pad
            const lilyPad = this.scene.add.ellipse(padX, padY, 12, 8, 0x228B22);
            lilyPad.setRotation(Math.random() * Math.PI * 2);
            lilyPad.setStrokeStyle(1, 0x006400);
            lilyPad.setDepth(0.8);
            pondGroup.add(lilyPad);

            // Add small flower on lily pad
            const lilyFlower = this.scene.add.circle(padX + 2, padY - 2, 3, 0xFF69B4);
            lilyFlower.setDepth(0.9);
            pondGroup.add(lilyFlower);

            // Add gentle floating animation
            this.scene.tweens.add({
                targets: [lilyPad, lilyFlower],
                y: padY + 3,
                duration: 2000,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        });
    }

    addJumpingFish(x, y) {
        const jumpInterval = Phaser.Math.Between(8000, 15000);

        this.scene.time.addEvent({
            delay: jumpInterval,
            callback: () => {
                // Only create fish if pond is on screen
                if (Phaser.Math.Distance.Between(
                    x, y,
                    this.scene.player.x,
                    this.scene.player.y
                ) < 400) {
                    this.createFishJumpEffect(x, y);
                }
            },
            loop: true
        });
    }

    createFishJumpEffect(x, y) {
        // Create fish visual
        const fish = this.scene.add.ellipse(
            x + Phaser.Math.Between(-20, 20),
            y,
            8,
            4,
            GBA_PALETTE.WATER_BLUE
        );
        fish.setDepth(1);

        // Create splash effect
        const splash = this.scene.add.ellipse(fish.x, y, 20, 10, 0xFFFFFF, 0.7);
        splash.setDepth(0.9);

        // Animate fish jump
        this.scene.tweens.add({
            targets: fish,
            y: y - 30,
            scaleX: 0.8,
            duration: 600,
            yoyo: true,
            ease: 'Quad.easeOut',
            onComplete: () => fish.destroy()
        });

        // Animate splash
        this.scene.tweens.add({
            targets: splash,
            scale: 1.5,
            alpha: 0,
            duration: 400,
            onComplete: () => splash.destroy()
        });
    }

    createBenches() {
        const benchPositions = [[300, 400], [500, 150]];
        
        benchPositions.forEach(([x, y]) => {
            // Create bench group
            const benchGroup = this.scene.add.group();
            
            // Bench seat
            const benchSeat = this.scene.add.rectangle(x, y, 40, 15, 0x8B4513);
            benchSeat.setStrokeStyle(1, 0x3D2314);
            benchSeat.setDepth(1);
            benchGroup.add(benchSeat);
            
            // Bench legs
            const leftLeg = this.scene.add.rectangle(x - 15, y + 10, 5, 10, 0x3D2314);
            const rightLeg = this.scene.add.rectangle(x + 15, y + 10, 5, 10, 0x3D2314);
            leftLeg.setDepth(1);
            rightLeg.setDepth(1);
            benchGroup.add(leftLeg);
            benchGroup.add(rightLeg);
            
            // Bench back
            const benchBack = this.scene.add.rectangle(x, y - 10, 40, 5, 0x8B4513);
            benchBack.setStrokeStyle(1, 0x3D2314);
            benchBack.setDepth(1);
            benchGroup.add(benchBack);
            
            // Back supports
            const leftSupport = this.scene.add.rectangle(x - 15, y - 5, 3, 15, 0x3D2314);
            const rightSupport = this.scene.add.rectangle(x + 15, y - 5, 3, 15, 0x3D2314);
            leftSupport.setDepth(1);
            rightSupport.setDepth(1);
            benchGroup.add(leftSupport);
            benchGroup.add(rightSupport);
            
            // Add collision for bench using physics
            const benchCollision = this.scene.add.rectangle(x, y, 40, 20);
            benchCollision.width = 40;
            benchCollision.height = 20;
            benchCollision.setVisible(false); // Invisible collision area
            benchCollision.isBench = true; // Mark as bench for identification
            
            // Add physics to the bench collision object
            this.scene.physics.add.existing(benchCollision, true); // true = static body
            
            // Add to the scene's obstacles group for proper collision handling
            if (this.scene.obstaclesGroup) {
                console.log('[DecorationManager] Adding bench collision object to obstacles group:', benchCollision);
                this.scene.obstaclesGroup.add(benchCollision);
            } else {
                console.error('[DecorationManager] obstaclesGroup does not exist on scene!');
                // Fallback to decorations array if obstacles group doesn't exist
                this.decorations.push(benchCollision);
            }
        });
    }
}
