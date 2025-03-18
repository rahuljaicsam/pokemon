import { POKEMON_SPRITES, POKEMON_BACK_SPRITES } from '../config/pokemon-sprites';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Boot' });
    }

    preload() {
        // Create loading bar
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 4, height / 2 - 30, width / 2, 50);
        
        // Loading text
        const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            font: '20px monospace',
            fill: '#ffffff'
        });
        loadingText.setOrigin(0.5, 0.5);
        
        // Update progress bar
        this.load.on('progress', (value) => {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 4 + 10, height / 2 - 20, (width / 2 - 20) * value, 30);
        });
        
        // Handle loading errors
        this.load.on('loaderror', (file) => {
            console.warn(`[BootScene] Failed to load asset: ${file.key}`);
        });
        
        // Clean up when loading complete
        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });

        // Load all Pokemon front sprites
        Object.entries(POKEMON_SPRITES).forEach(([key, url]) => {
            const spriteKey = key.toLowerCase();
            this.load.image(spriteKey, url);
            console.log(`[BootScene] Loading ${key} sprite from ${url}`);
        });

        // Load all Pokemon back sprites
        Object.entries(POKEMON_BACK_SPRITES).forEach(([key, url]) => {
            const spriteKey = `${key.toLowerCase()}-back`;
            this.load.image(spriteKey, url);
            console.log(`[BootScene] Loading ${key} back sprite from ${url}`);
        });
    }

    create() {
        console.log('[BootScene] Assets loaded, starting Title scene');
        this.scene.start('Title');
    }
} 