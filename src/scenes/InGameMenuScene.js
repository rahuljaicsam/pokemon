import { gameState } from '../config/game-state';

export default class InGameMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'InGameMenu' });
        this.selectedOption = 0;
        this.menuOptions = [
            'POKEDEX',
            'POKEMON',
            'BAG',
            'PLAYER',
            'SAVE',
            'OPTION',
            'EXIT'
        ];
    }

    create() {
        // Add semi-transparent black background on the right side
        const menuBg = this.add.rectangle(600, 300, 400, 600, 0x000000);
        menuBg.setAlpha(0.8);
        
        // Create menu container
        this.menuItems = [];
        this.menuOptions.forEach((option, index) => {
            const text = this.add.text(450, 100 + (index * 60), option, {
                fontSize: '28px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 4
            });
            
            this.menuItems.push(text);
        });
        
        // Highlight the first option
        this.updateSelection();
        
        // Add keyboard controls
        this.input.keyboard.on('keydown-UP', () => {
            this.selectedOption = (this.selectedOption - 1 + this.menuOptions.length) % this.menuOptions.length;
            this.updateSelection();
        });
        
        this.input.keyboard.on('keydown-DOWN', () => {
            this.selectedOption = (this.selectedOption + 1) % this.menuOptions.length;
            this.updateSelection();
        });
        
        this.input.keyboard.on('keydown-A', () => {
            this.handleSelection();
        });
        
        // Add close menu handler
        this.input.keyboard.on('keydown-ESC', () => {
            this.closeMenu();
        });
        
        this.input.keyboard.on('keydown-ENTER', () => {
            this.closeMenu();
        });

        // Add navigation hint
        this.add.text(450, 550, 'A: Select  ESC: Close', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        });
    }
    
    updateSelection() {
        this.menuItems.forEach((item, index) => {
            if (index === this.selectedOption) {
                item.setTint(0xffff00);
                item.setScale(1.1);
            } else {
                item.clearTint();
                item.setScale(1);
            }
        });
    }
    
    handleSelection() {
        const option = this.menuOptions[this.selectedOption];
        switch (option) {
            case 'POKEDEX':
                this.scene.pause();
                this.scene.launch('Pokedex');
                break;
            case 'POKEMON':
                this.scene.pause();
                this.scene.launch('Party');
                break;
            case 'BAG':
                this.scene.pause();
                this.scene.launch('Bag');
                break;
            case 'PLAYER':
                this.scene.pause();
                this.scene.launch('TrainerCard');
                break;
            case 'SAVE':
                gameState.saveGame();
                this.showMessage('Game saved!');
                break;
            case 'OPTION':
                this.scene.start('Menu');
                break;
            case 'EXIT':
                this.closeMenu();
                break;
        }
    }
    
    showMessage(text) {
        const message = this.add.text(600, 550, text, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        this.time.delayedCall(2000, () => {
            message.destroy();
        });
    }
    
    closeMenu() {
        this.scene.stop();
        this.scene.resume('World');
    }
}