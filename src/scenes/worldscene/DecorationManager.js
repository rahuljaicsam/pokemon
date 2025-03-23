// DecorationManager.js - Handles creation of decorative elements in the game world
import { GBA_PALETTE } from '../../assets/tileset';

export default class DecorationManager {
    constructor(scene) {
        this.scene = scene;
    }

    createDecorations() {
        // Add enhanced flowers with more detailed styling
        this.createFlowers();
        
        // Add enhanced ponds with interactive water effects
        this.createPonds();
        
        // Add benches for resting
        this.createBenches();
    }

    createFlowers() {
        const flowerPositions = [
            [50, 50], [750, 50], [50, 550], [750, 550],
            [300, 500], [500, 500], [650, 350], [150, 350],
            [250, 100], [450, 450], [600, 500], [100, 200]
        ];
        
        flowerPositions.forEach(([x, y]) => {
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
            // Create pond group
            const pondGroup = this.scene.add.group();
            
            // Pond base with better styling
            const pondBase = this.scene.add.ellipse(x, y, 90, 60, 0x000033);
            pondBase.setDepth(0.55);
            pondGroup.add(pondBase);
            
            // Main pond water
            const pond = this.scene.add.ellipse(x, y, 80, 50, GBA_PALETTE.WATER_BLUE);
            pond.setStrokeStyle(2, 0x0000A0);
            pond.setDepth(0.6);
            pondGroup.add(pond);
            
            // Add multiple ripple effects for more dynamic water
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
            
            // Add occasional jumping fish animation
            this.addJumpingFish(x, y);
        });
    }

    addLilyPads(x, y, pondGroup) {
        const lilyPadCount = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < lilyPadCount; i++) {
            const padAngle = Math.random() * Math.PI * 2;
            const padDistance = Math.random() * 25;
            const padX = x + Math.cos(padAngle) * padDistance;
            const padY = y + Math.sin(padAngle) * padDistance;
            
            const lilyPad = this.scene.add.ellipse(padX, padY, 12, 10, 0x006600);
            lilyPad.setRotation(Math.random() * Math.PI * 2);
            lilyPad.setStrokeStyle(1, 0x003300);
            lilyPad.setDepth(0.65);
            pondGroup.add(lilyPad);
            
            // Random chance to add a flower to the lily pad
            if (Math.random() > 0.5) {
                const lilyFlower = this.scene.add.circle(padX, padY, 3, 0xFF00FF);
                lilyFlower.setDepth(0.66);
                pondGroup.add(lilyFlower);
            }
            
            // Add subtle floating animation
            this.scene.tweens.add({
                targets: lilyPad,
                x: padX + (Math.random() * 6 - 3),
                y: padY + (Math.random() * 6 - 3),
                duration: 4000 + Math.random() * 2000,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        }
    }

    addJumpingFish(x, y) {
        this.scene.time.addEvent({
            delay: 5000 + Math.random() * 10000,
            callback: () => {
                // Create fish jumping arc
                const jumpStartX = x + (Math.random() * 30 - 15);
                const jumpStartY = y + (Math.random() * 20 - 10);
                
                const fish = this.scene.add.ellipse(jumpStartX, jumpStartY, 8, 4, 0xC0C0C0);
                fish.setStrokeStyle(1, 0x808080);
                fish.setDepth(0.75);
                
                // Create jumping animation
                this.scene.tweens.add({
                    targets: fish,
                    x: jumpStartX + (Math.random() * 20 - 10),
                    y: jumpStartY - 30,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    angle: 180,
                    duration: 500,
                    yoyo: true,
                    onComplete: () => fish.destroy(),
                    ease: 'Quad.easeOut'
                });
                
                // Create water splash effect
                const splash = this.scene.add.circle(jumpStartX, jumpStartY, 5, 0xFFFFFF, 0.7);
                splash.setDepth(0.7);
                
                this.scene.tweens.add({
                    targets: splash,
                    scale: 2,
                    alpha: 0,
                    duration: 300,
                    onComplete: () => splash.destroy(),
                    ease: 'Quad.easeOut'
                });
            },
            loop: true
        });
    }

    createBenches() {
        const benchPositions = [[300, 400], [500, 150]];
        
        benchPositions.forEach(([x, y]) => {
            // Bench base
            const benchBase = this.scene.add.rectangle(x, y, 32, 8, 0x8B4513);
            benchBase.setStrokeStyle(1, 0x654321);
            benchBase.setDepth(0.8);
            
            // Bench legs
            const legLeft = this.scene.add.rectangle(x - 12, y + 6, 4, 12, 0x8B4513);
            const legRight = this.scene.add.rectangle(x + 12, y + 6, 4, 12, 0x8B4513);
            legLeft.setStrokeStyle(1, 0x654321);
            legRight.setStrokeStyle(1, 0x654321);
            legLeft.setDepth(0.8);
            legRight.setDepth(0.8);
            
            // Bench back
            const benchBack = this.scene.add.rectangle(x, y - 8, 32, 4, 0x8B4513);
            benchBack.setStrokeStyle(1, 0x654321);
            benchBack.setDepth(0.8);
            
            // Back supports
            const supportLeft = this.scene.add.rectangle(x - 12, y - 4, 2, 8, 0x8B4513);
            const supportRight = this.scene.add.rectangle(x + 12, y - 4, 2, 8, 0x8B4513);
            supportLeft.setStrokeStyle(1, 0x654321);
            supportRight.setStrokeStyle(1, 0x654321);
            supportLeft.setDepth(0.8);
            supportRight.setDepth(0.8);
        });
    }
}