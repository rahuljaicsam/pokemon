import { gameState } from '../config/game-state';

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

        // Create party display
        this.partySprites = [];
        this.partyTexts = [];
        this.createPartyDisplay();

        // Initialize action menu (hidden by default)
        this.actionMenu = null;
        this.actionMenuIndex = 0;
        this.actionOptions = ['Summary', 'Switch', 'Item', 'Cancel'];

        // Add controls hint
        this.controlsText = this.add.text(400, 550, 'UP/DOWN: Select  A: Action  B: Back', {
            fontSize: '20px',
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
        this.updateSelection();
    }

    handleUpKey() {
        if (this.actionMenu) {
            this.actionMenuIndex = (this.actionMenuIndex - 1 + this.actionOptions.length) % this.actionOptions.length;
            this.updateActionMenu();
        } else if (gameState.pokemon.length > 0) {
            this.selectedIndex = (this.selectedIndex - 1 + gameState.pokemon.length) % gameState.pokemon.length;
            this.updateSelection();
        }
    }

    handleDownKey() {
        if (this.actionMenu) {
            this.actionMenuIndex = (this.actionMenuIndex + 1) % this.actionOptions.length;
            this.updateActionMenu();
        } else if (gameState.pokemon.length > 0) {
            this.selectedIndex = (this.selectedIndex + 1) % gameState.pokemon.length;
            this.updateSelection();
        }
    }

    handleAKey() {
        if (this.actionMenu) {
            this.executeAction(this.actionOptions[this.actionMenuIndex]);
        } else if (gameState.pokemon.length > 0) {
            this.showActionMenu();
        }
    }

    handleBKey() {
        if (this.actionMenu) {
            this.hideActionMenu();
        } else {
            this.scene.stop();
            this.scene.resume('InGameMenu');
        }
    }

    showActionMenu() {
        // Create action menu background
        const menuX = 600;
        const menuY = 200;
        const menuWidth = 150;
        const menuHeight = 160;

        this.actionMenu = this.add.container(menuX, menuY);
        
        // Add menu background
        const bg = this.add.rectangle(0, 0, menuWidth, menuHeight, 0x000000, 0.9);
        this.actionMenu.add(bg);

        // Add menu options
        this.actionOptions.forEach((option, index) => {
            const text = this.add.text(0, -60 + (index * 35), option, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            }).setOrigin(0.5);
            this.actionMenu.add(text);
        });

        this.actionMenuIndex = 0;
        this.updateActionMenu();
    }

    hideActionMenu() {
        if (this.actionMenu) {
            this.actionMenu.destroy();
            this.actionMenu = null;
        }
    }

    updateActionMenu() {
        if (!this.actionMenu) return;

        this.actionMenu.list.forEach((item, index) => {
            if (index === 0) return; // Skip background rectangle
            const isSelected = index - 1 === this.actionMenuIndex;
            item.setTint(isSelected ? 0xffff00 : 0xffffff);
        });
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
                this.hideActionMenu();
                break;
        }
    }

    showSummary() {
        this.hideActionMenu();
        this.scene.launch('Summary', { 
            pokemon: gameState.pokemon[this.selectedIndex],
            returnScene: 'Party'
        });
        this.scene.pause();
    }

    enterSwitchMode() {
        this.hideActionMenu();
        this.switchMode = true;
        this.switchSourceIndex = this.selectedIndex;
        this.controlsText.setText('Move where? B: Cancel');
        this.partyTexts[this.selectedIndex].setTint(0xff0000);
    }

    openBagMenu() {
        // TODO: Implement bag menu integration
        this.hideActionMenu();
        console.log('Bag menu not implemented yet');
    }
    createPartyDisplay() {
        // Clear existing sprites and texts
        this.partySprites.forEach(sprite => sprite.destroy());
        this.partyTexts.forEach(text => text.destroy());
        this.partySprites = [];
        this.partyTexts = [];

        // Create new display for each Pokémon
        gameState.pokemon.forEach((pokemon, index) => {
            const y = 120 + (index * 70);
            
            // Add Pokémon sprite
            const sprite = this.add.sprite(150, y, pokemon.key.toLowerCase());
            sprite.setScale(2);
            this.partySprites.push(sprite);

            // Add background for text
            const textBg = this.add.rectangle(400, y, 450, 50, 0x000000, 0.3);
            
            // Add Pokémon name and level
            const nameText = this.add.text(200, y - 15, pokemon.name, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });

            // Add Level
            const levelText = this.add.text(200, y + 10, `Lv${pokemon.level}`, {
                fontSize: '16px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });

            // Add HP Bar
            const hpBarBg = this.add.rectangle(400, y, 200, 10, 0x666666);
            const hpPercentage = pokemon.currentHp / pokemon.stats.hp;
            const hpBarColor = hpPercentage > 0.5 ? 0x00ff00 : hpPercentage > 0.2 ? 0xffff00 : 0xff0000;
            const hpBar = this.add.rectangle(300 + (hpPercentage * 100), y, 200 * hpPercentage, 8, hpBarColor);
            hpBar.setOrigin(0, 0.5);

            // Add HP Text
            const hpText = this.add.text(500, y - 5, `${pokemon.currentHp}/${pokemon.stats.hp}`, {
                fontSize: '14px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });

            // Add Status Icon if any
            if (pokemon.status) {
                const statusIcon = this.getStatusIcon(pokemon.status);
                const statusText = this.add.text(550, y, statusIcon, {
                    fontSize: '20px',
                    fill: '#FFFFFF'
                });
                this.partyTexts.push(statusText);
            }

            this.partyTexts.push(nameText, levelText, hpText);
        });

        // Update message
        this.messageText = this.add.text(400, 500, 'Choose a POKéMON', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
    }

    getStatusIcon(status) {
        const statusIcons = {
            'frozen': '❄️',
            'paralyzed': '⚡',
            'poisoned': '☠️',
            'burned': '🔥',
            'asleep': '💤'
        };
        return statusIcons[status] || '';
    }

    updateSelection() {
        // Reset all backgrounds
        this.partyTexts.forEach(text => text.setTint(0xffffff));
        
        if (gameState.pokemon.length > 0) {
            // Highlight selected Pokémon
            const selectedY = 120 + (this.selectedIndex * 70);
            this.partySprites[this.selectedIndex].setScale(2.2); // Slightly enlarge selected Pokémon
            
            // Reset scale of other sprites
            this.partySprites.forEach((sprite, index) => {
                if (index !== this.selectedIndex) sprite.setScale(2);
            });
        }
    }
    updatePokemonText(index) {
        const pokemon = gameState.pokemon[index];
        const text = this.partyTexts[index];
        if (pokemon && text) {
            text.setText(
                `${pokemon.name} Lv.${pokemon.level}\n` +
                `HP: ${pokemon.currentHp}/${pokemon.stats.hp}`
            );
        }
    }

    switchPokemon(sourceIndex, targetIndex) {
        if (sourceIndex === targetIndex) return;
        
        const party = gameState.pokemon;
        const temp = party[sourceIndex];
        party[sourceIndex] = party[targetIndex];
        party[targetIndex] = temp;
    }
}