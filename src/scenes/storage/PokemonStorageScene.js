import { Scene } from 'phaser';
import { gameState } from '../../config/game-state';
import { initializeSamplePokemon } from './SamplePokemon';
import { createBoxUI } from './BoxUI';

export class PokemonStorageScene extends Scene {
    constructor() {
        super({ key: 'PokemonStorageScene' });
    }

    preload() {
        // Load Pokémon sprites
        const pokemonList = [
            'bulbasaur', 'charmander', 'squirtle', 'pikachu', 'jigglypuff',
            'eevee', 'vaporeon', 'jolteon', 'flareon', 'clefairy',
            'vulpix', 'mew', 'mewtwo'
        ];

        pokemonList.forEach(pokemon => {
            this.load.image(pokemon, `assets/pokemon/${pokemon}.png`);
        });
    }

    create() {
        // Initialize game state if needed
        if (!gameState.storage) {
            gameState.storage = [];
            initializeSamplePokemon(gameState);
        }

        // Create storage boxes
        this.createStorageBoxes();
        
        // Add box navigation UI
        this.createBoxNavigation();
        
        // Set up keyboard controls
        this.setupKeyboardControls();
    }

    createStorageBoxes() {
        // Use the imported gameState instead of window.gameState
        const boxes = gameState.storage || [];
        this.boxSpacing = 450;
        this.boxes = boxes;
        this.currentBoxIndex = 0;
        this.boxContainers = [];

        boxes.forEach((box, index) => {
            const boxUI = createBoxUI(
                this,
                (index * this.boxSpacing) - (this.boxSpacing * (boxes.length - 1) / 2),
                0,
                index + 1,
                box,
                (pokemon) => this.showPokemonSummary(pokemon)
            );
            this.boxContainers.push(boxUI);
            
            // Initially hide all boxes except the first one
            if (index !== 0) {
                boxUI.setVisible(false);
            }
        });
    }

    createBoxNavigation() {
        // Create navigation container
        this.navContainer = this.add.container(0, -200);
        
        // Add left navigation button
        const leftButton = this.add.text(-50, 0, 'L', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5);
        leftButton.setInteractive();
        leftButton.on('pointerdown', () => this.navigateBox('left'));
        this.navContainer.add(leftButton);

        // Add box number text
        this.boxNumberText = this.add.text(0, 0, `Box ${this.currentBoxIndex + 1}`, {
            fontSize: '24px',
            fill: '#ffffff'
        }).setOrigin(0.5);
        this.navContainer.add(this.boxNumberText);

        // Add right navigation button
        const rightButton = this.add.text(50, 0, 'R', {
            fontSize: '32px',
            fill: '#ffffff'
        }).setOrigin(0.5);
        rightButton.setInteractive();
        rightButton.on('pointerdown', () => this.navigateBox('right'));
        this.navContainer.add(rightButton);
    }

    setupKeyboardControls() {
        // Remove arrow key controls
        this.input.keyboard.removeAllListeners('keydown-LEFT');
        this.input.keyboard.removeAllListeners('keydown-RIGHT');
        
        // Add 'l' and 'r' key controls
        this.input.keyboard.on('keydown-L', () => this.navigateBox('left'));
        this.input.keyboard.on('keydown-R', () => this.navigateBox('right'));
    }

    navigateBox(direction) {
        const newIndex = direction === 'left' 
            ? (this.currentBoxIndex - 1 + this.boxes.length) % this.boxes.length
            : (this.currentBoxIndex + 1) % this.boxes.length;

        // Hide current box
        this.boxContainers[this.currentBoxIndex].setVisible(false);
        
        // Show new box
        this.currentBoxIndex = newIndex;
        this.boxContainers[this.currentBoxIndex].setVisible(true);
        
        // Update box number text
        this.boxNumberText.setText(`Box ${this.currentBoxIndex + 1}`);
    }

    showPokemonSummary(pokemon) {
        if (!pokemon) return;
        
        // Create summary scene
        this.scene.start('SummaryScene', { pokemon });
    }

    update() {
        // Add any update logic here
    }
}