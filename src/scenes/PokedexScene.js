// Import from the modular Pokedex implementation
import PokedexScene from './pokedex';

// These imports are kept for reference but are no longer used directly
// as they're now handled by the modular implementation
import { POKEMON_DATA } from '../config/pokemon-data';
import { gameState } from '../config/game-state';

export default class PokedexScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Pokedex' });
        this.currentIndex = 0;
        this.pokemonList = Object.keys(POKEMON_DATA).sort((a, b) => POKEMON_DATA[a].id - POKEMON_DATA[b].id);
    }

    create() {
        // Create the Pokedex interface
        this.createPokedexInterface();
        
        // Add keyboard controls
        this.input.keyboard.on('keydown-UP', () => {
            this.currentIndex = Math.max(0, this.currentIndex - 1);
            this.updateDisplay();
        });
        
        this.input.keyboard.on('keydown-DOWN', () => {
            this.currentIndex = Math.min(this.pokemonList.length - 1, this.currentIndex + 1);
            this.updateDisplay();
        });
        
        this.input.keyboard.on('keydown-B', () => {
            this.scene.stop();
            this.scene.resume('InGameMenu');
        });

        // Initial display
        this.updateDisplay();
    }

    createPokedexInterface() {
        // Main Pokedex background
        this.add.rectangle(400, 300, 800, 600, 0xDC1B1B); // Classic red color
        this.add.rectangle(400, 300, 780, 580, 0x000000); // Inner black background
        
        // Display area for Pokemon sprite
        this.spriteBackground = this.add.rectangle(400, 200, 300, 300, 0xFFFFFF);
        
        // Create sprite container
        this.spriteContainer = this.add.container(400, 200);
        
        // Pokemon info display areas
        this.nameText = this.add.text(400, 380, '', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        this.numberText = this.add.text(400, 420, '', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        this.typeText = this.add.text(400, 460, '', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Navigation hint
        this.add.text(400, 540, 'UP/DOWN: Navigate  B: Close', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Seen/Caught indicators
        this.seenIcon = this.add.circle(650, 380, 10, 0x888888);
        this.caughtIcon = this.add.circle(650, 400, 10, 0x888888);
        
        this.add.text(670, 373, 'SEEN', {
            fontSize: '20px',
            fill: '#FFFFFF'
        });
        this.add.text(670, 393, 'CAUGHT', {
            fontSize: '20px',
            fill: '#FFFFFF'
        });
    }

    updateDisplay() {
        const pokemonKey = this.pokemonList[this.currentIndex];
        const pokemonData = POKEMON_DATA[pokemonKey];
        
        // Clear previous sprite
        this.spriteContainer.removeAll();
        
        // Add new sprite
        const sprite = this.add.sprite(0, 0, pokemonKey.toLowerCase());
        sprite.setScale(3);
        this.spriteContainer.add(sprite);
        
        // Update text information
        this.nameText.setText(pokemonData.name.toUpperCase());
        this.numberText.setText(`#${String(pokemonData.id).padStart(3, '0')}`);
        this.typeText.setText(`Type: ${pokemonData.types.join('/')}`);
        
        // Update seen/caught indicators
        const isSeen = gameState.pokedex.seen.has(pokemonKey);
        const isCaught = gameState.pokedex.caught.has(pokemonKey);
        
        this.seenIcon.setFillStyle(isSeen ? 0x00FF00 : 0x888888);
        this.caughtIcon.setFillStyle(isCaught ? 0x00FF00 : 0x888888);
    }
}