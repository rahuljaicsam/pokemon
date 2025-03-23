import { gameState } from '../config/game-state';
import { initializePokemonMoves } from '../utils/moveInitializer';
import { PartyDisplay } from '../components/PartyDisplay';
import ActionMenu from '../components/ActionMenu';

export default class PartyScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Party' });
        this.selectedIndex = 0;
        this.switchMode = false;
        this.switchSourceIndex = -1;
    }

    create() {
        // Add semi-transparent black background
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);
        
        // Add title
        this.add.text(400, 50, 'POKEMON', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Initialize components
        this.partyDisplay = new PartyDisplay(this);
        this.actionMenu = new ActionMenu(this);

        // Create initial party display
        this.partyDisplay.create(gameState.pokemon);

        // Add controls hint
        this.controlsText = this.add.text(400, 550, 'UP/DOWN: Select  A: Action  B: Back', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Add message text
        this.messageText = this.add.text(400, 500, 'Choose a POKéMON', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Add keyboard controls
        this.input.keyboard.on('keydown-UP', () => this.handleUpKey());
        this.input.keyboard.on('keydown-DOWN', () => this.handleDownKey());
        this.input.keyboard.on('keydown-A', () => this.handleAKey());
        this.input.keyboard.on('keydown-B', () => this.handleBKey());

        // Initial selection
        this.partyDisplay.updateSelection(this.selectedIndex);
    }

    handleUpKey() {
        if (this.actionMenu.isVisible()) {
            this.actionMenu.moveUp();
        } else if (gameState.pokemon.length > 0) {
            this.selectedIndex = (this.selectedIndex - 1 + gameState.pokemon.length) % gameState.pokemon.length;
            this.partyDisplay.updateSelection(this.selectedIndex);
        }
    }

    handleDownKey() {
        if (this.actionMenu.isVisible()) {
            this.actionMenu.moveDown();
        } else if (gameState.pokemon.length > 0) {
            this.selectedIndex = (this.selectedIndex + 1) % gameState.pokemon.length;
            this.partyDisplay.updateSelection(this.selectedIndex);
        }
    }

    handleAKey() {
        if (this.actionMenu.isVisible()) {
            this.executeAction(this.actionMenu.getSelectedOption());
        } else if (this.switchMode) {
            this.completeSwitchMode();
        } else if (gameState.pokemon.length > 0) {
            this.actionMenu.show();
        }
    }

    handleBKey() {
        if (this.actionMenu.isVisible()) {
            this.actionMenu.hide();
        } else if (this.switchMode) {
            // Cancel switch mode
            this.switchMode = false;
            this.partyDisplay.partySprites[this.switchSourceIndex].clearTint();
            this.controlsText.setText('UP/DOWN: Select  A: Action  B: Back');
            this.messageText.setText('Choose a POKéMON');
        } else {
            this.scene.stop();
            this.scene.resume('InGameMenu');
        }
    }

    executeAction(action) {
        switch(action) {
            case 'Summary':
                this.showSummary();
                break;
            case 'Switch':
                this.enterSwitchMode();
                break;
            case 'Item':
                this.openBagMenu();
                break;
            case 'Cancel':
                this.actionMenu.hide();
                break;
        }
    }

    showSummary() {
        this.actionMenu.hide();
        this.scene.launch('Summary', { 
            pokemon: gameState.pokemon[this.selectedIndex],
            returnScene: 'Party'
        });
        this.scene.pause();
    }

    enterSwitchMode() {
        this.actionMenu.hide();
        this.switchMode = true;
        this.switchSourceIndex = this.selectedIndex;
        this.controlsText.setText('Choose a POKéMON to switch with. B: Cancel');
        this.messageText.setText('Move to where?');
        
        // Highlight source Pokémon in red
        this.partyDisplay.partySprites[this.selectedIndex].setTint(0xff0000);
    }

    openBagMenu() {
        this.actionMenu.hide();
        console.log('Bag menu not implemented yet');
    }

    completeSwitchMode() {
        if (this.switchSourceIndex === this.selectedIndex) {
            return; // Can't switch with self
        }

        // Perform the switch
        const temp = gameState.pokemon[this.switchSourceIndex];
        gameState.pokemon[this.switchSourceIndex] = gameState.pokemon[this.selectedIndex];
        gameState.pokemon[this.selectedIndex] = temp;

        // Initialize moves for both Pokémon
        [this.switchSourceIndex, this.selectedIndex].forEach(index => {
            const pokemon = gameState.pokemon[index];
            pokemon.moves = initializePokemonMoves(pokemon.key, pokemon.level);
        });

        // Reset switch mode
        this.switchMode = false;
        this.partyDisplay.partySprites[this.switchSourceIndex].clearTint();
        
        // Update the display
        this.partyDisplay.create(gameState.pokemon);
        this.partyDisplay.updateSelection(this.selectedIndex);
        
        // Reset text
        this.controlsText.setText('UP/DOWN: Select  A: Action  B: Back');
        this.messageText.setText('Choose a POKéMON');
    }
}