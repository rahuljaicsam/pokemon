// WorldCreator.js - Handles creation of the game world and its elements
import { GBA_PALETTE, TILE_CONFIG } from '../../assets/tileset';

export default class WorldCreator {
    constructor(scene) {
        this.scene = scene;
    }

    createWorld() {
        console.log('[WorldScene] Creating world');

        // Create background with sky gradient
        const background = this.scene.add.rectangle(400, 300, 800, 600, 0x87CEEB);
        background.setDepth(0);
        
        // Create ground base
        const ground = this.scene.add.rectangle(400, 300, 800, 600, GBA_PALETTE.GRASS_GREEN);
        ground.setDepth(0);
        
        // Draw grid for visual reference (32x32 tiles)
        const graphics = this.scene.add.graphics();
        graphics.lineStyle(1, 0x333333, 0.2);
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
        
        // Create paths
        this.createPaths();
        
        // Create decorative elements
        this.createDecorations();

        // Create buildings
        this.createBuildings();

        // Create obstacles (trees, rocks)
        this.createObstacles();

        // Create grass areas for encounters
        this.createGrassAreas();

        // Add route sign
        this.createRouteSign();
    }

    createPaths() {
        // Create main path from bottom to center
        const pathGraphics = this.scene.add.graphics();
        pathGraphics.fillStyle(GBA_PALETTE.PATH_BROWN, 1);
        
        // Main path from bottom to center
        pathGraphics.fillRect(368, 300, 64, 300);
        
        // Path to Pokémon Center
        pathGraphics.fillRect(432, 300, 168, 64);
        
        // Path to Poké Shop
        pathGraphics.fillRect(200, 300, 168, 64);
        
        // Path border
        pathGraphics.lineStyle(2, 0x8B4513, 0.5);
        pathGraphics.strokeRect(368, 300, 64, 300);
        pathGraphics.strokeRect(432, 300, 168, 64);
        pathGraphics.strokeRect(200, 300, 168, 64);
        
        pathGraphics.setDepth(0.5);
    }

    createBuildings() {
        // Pokémon Center with improved styling
        this.scene.pokemonCenter = this.scene.add.rectangle(600, 200, 96, 64, GBA_PALETTE.POKECENTER_PINK);
        this.scene.pokemonCenter.setStrokeStyle(3, 0xD84890);
        this.scene.pokemonCenter.setDepth(1);
        
        // Add roof to Pokémon Center
        const centerRoof = this.scene.add.triangle(600, 168, 0, 0, 96, 0, 48, -24, GBA_PALETTE.ROOF_RED);
        centerRoof.setStrokeStyle(2, 0xD84040);
        centerRoof.setDepth(1);

        // Add entrance with subtle animation
        this.scene.pokemonCenterEntrance = this.scene.add.rectangle(600, 232, 32, 8, 0x00FF00, 0.3);
        this.scene.pokemonCenterEntrance.setDepth(1);
        
        // Add subtle animation to entrance
        this.scene.tweens.add({
            targets: this.scene.pokemonCenterEntrance,
            alpha: 0.6,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Add windows to Pokémon Center
        const centerWindow1 = this.scene.add.rectangle(580, 200, 16, 16, 0x87CEEB);
        const centerWindow2 = this.scene.add.rectangle(620, 200, 16, 16, 0x87CEEB);
        centerWindow1.setStrokeStyle(1, 0xFFFFFF);
        centerWindow2.setStrokeStyle(1, 0xFFFFFF);
        centerWindow1.setDepth(1);
        centerWindow2.setDepth(1);

        this.scene.add.text(600, 160, 'Pokémon Center', {
            fontSize: '16px',
            fill: GBA_PALETTE.TEXT_BLACK,
            backgroundColor: GBA_PALETTE.TEXT_WHITE,
            padding: { x: 4, y: 2 },
            shadow: { offsetX: 1, offsetY: 1, color: '#000', blur: 2, stroke: true, fill: true }
        }).setOrigin(0.5).setDepth(2);

        // Poké Shop with improved styling
        this.scene.pokeShop = this.scene.add.rectangle(200, 200, 96, 64, GBA_PALETTE.POKEMART_BLUE);
        this.scene.pokeShop.setStrokeStyle(3, 0x3060D0);
        this.scene.pokeShop.setDepth(1);
        
        // Add roof to Poké Shop
        const shopRoof = this.scene.add.triangle(200, 168, 0, 0, 96, 0, 48, -24, GBA_PALETTE.MART_BLUE);
        shopRoof.setStrokeStyle(2, 0x3060D0);
        shopRoof.setDepth(1);

        // Add entrance with subtle animation
        this.scene.pokeShopEntrance = this.scene.add.rectangle(200, 232, 32, 8, 0x00FF00, 0.3);
        this.scene.pokeShopEntrance.setDepth(1);
        
        // Add subtle animation to entrance
        this.scene.tweens.add({
            targets: this.scene.pokeShopEntrance,
            alpha: 0.6,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Add windows to Poké Shop
        const shopWindow1 = this.scene.add.rectangle(180, 200, 16, 16, 0x87CEEB);
        const shopWindow2 = this.scene.add.rectangle(220, 200, 16, 16, 0x87CEEB);
        shopWindow1.setStrokeStyle(1, 0xFFFFFF);
        shopWindow2.setStrokeStyle(1, 0xFFFFFF);
        shopWindow1.setDepth(1);
        shopWindow2.setDepth(1);

        this.scene.add.text(200, 160, 'Poké Shop', {
            fontSize: '16px',
            fill: GBA_PALETTE.TEXT_BLACK,
            backgroundColor: GBA_PALETTE.TEXT_WHITE,
            padding: { x: 4, y: 2 },
            shadow: { offsetX: 1, offsetY: 1, color: '#000', blur: 2, stroke: true, fill: true }
        }).setOrigin(0.5).setDepth(2);
    }

    createObstacles() {
        // Create trees and rocks (obstacles)
        this.scene.obstacles = [];
        const obstaclePositions = [
            [300, 100], [332, 100], [364, 100], // Horizontal row of trees
            [500, 400], [500, 432], [500, 464]  // Vertical row of rocks
        ];
        
        // Create trees
        for (let i = 0; i < 3; i++) {
            const [x, y] = obstaclePositions[i];
            // Tree trunk
            const trunk = this.scene.add.rectangle(x, y + 8, 16, 16, GBA_PALETTE.PATH_BROWN);
            trunk.setStrokeStyle(1, 0x654321);
            trunk.setDepth(1);
            
            // Tree foliage (two-part)
            const foliage1 = this.scene.add.circle(x, y - 4, 16, GBA_PALETTE.TREE_GREEN);
            const foliage2 = this.scene.add.circle(x, y - 16, 12, GBA_PALETTE.TREE_GREEN);
            foliage1.setStrokeStyle(1, 0x006400);
            foliage2.setStrokeStyle(1, 0x006400);
            foliage1.setDepth(1);
            foliage2.setDepth(1);
            
            this.scene.obstacles.push(trunk);
        }
        
        // Create rocks
        for (let i = 3; i < 6; i++) {
            const [x, y] = obstaclePositions[i];
            const rock = this.scene.add.rectangle(x, y, 32, 32, 0x808080);
            rock.setStrokeStyle(2, 0x606060);
            rock.setDepth(1);
            this.scene.obstacles.push(rock);
        }
    }

    createGrassAreas() {
        // Grass patches for random encounters with improved styling
        this.scene.grassAreas = [];
        const grassPositions = [
            [100, 100], [132, 100], [164, 100], [196, 100], // Row 1
            [100, 132], [132, 132], [164, 132], [196, 132], // Row 2
            [100, 164], [132, 164], [164, 164], [196, 164], // Row 3
            [400, 300], [432, 300], [464, 300], [496, 300], // Row 4
            [400, 332], [432, 332], [464, 332], [496, 332], // Row 5
            [400, 364], [432, 364], [464, 364], [496, 364]  // Row 6
        ];
        
        grassPositions.forEach(([x, y]) => {
            const grass = this.scene.add.rectangle(x, y, 32, 32, GBA_PALETTE.GRASS_GREEN);
            
            // Add grass detail lines
            const grassDetail = this.scene.add.graphics();
            grassDetail.lineStyle(1, 0x006400, 0.7);
            
            // Draw 5 blades of grass in each patch
            for (let i = 0; i < 5; i++) {
                const offsetX = -12 + i * 6;
                grassDetail.moveTo(x + offsetX, y + 12);
                grassDetail.lineTo(x + offsetX, y - 4 - Math.random() * 8);
            }
            
            grassDetail.strokePath();
            grassDetail.setDepth(1);
            
            grass.setDepth(1);
            this.scene.grassAreas.push(grass);
        });
    }

    createRouteSign() {
        // Add route sign
        const sign = this.scene.add.rectangle(400, 100, 40, 30, GBA_PALETTE.PATH_BROWN);
        sign.setStrokeStyle(2, GBA_PALETTE.TEXT_BLACK);
        sign.setDepth(1);
        
        // Add sign text
        this.scene.add.text(400, 100, 'Route 1', {
            fontSize: '12px',
            fill: GBA_PALETTE.TEXT_BLACK,
            backgroundColor: GBA_PALETTE.TEXT_WHITE,
            padding: { x: 2, y: 1 }
        }).setOrigin(0.5).setDepth(2);
    }

    createDecorations() {
        // This method is implemented in DecorationManager.js
        // It's referenced here to maintain the flow of world creation
    }
}