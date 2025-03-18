import { gameState } from '../config/game-state';

export default class ShopMenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ShopMenu' });
        this.selectedOption = 0;
        this.selectedItem = 0;
        this.itemQuantity = 1;
        this.isInItemList = false;
        this.isSelectingQuantity = false;
        this.shopOptions = ['Buy', 'Sell', 'Exit'];
        this.shopItems = {
            'Poké Ball': { price: 200, description: 'A device for catching wild Pokémon.' },
            'Potion': { price: 300, description: 'Restores 20 HP to a single Pokémon.' },
            'Antidote': { price: 100, description: 'Cures a poisoned Pokémon.' },
            'Repel': { price: 350, description: 'Keeps weak wild Pokémon away for 100 steps.' },
            'Great Ball': { price: 600, description: 'A good Ball with a higher catch rate.' }
        };
    }

    create() {
        // Add semi-transparent black background
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);

        // Add title
        this.add.text(400, 50, 'SHOP', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Create left panel (options)
        this.createOptionsPanel();

        // Create right panel (items)
        this.createItemPanel();

        // Create money display
        this.moneyText = this.add.text(700, 50, `Money: ${gameState.money || 3000}P`, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(1, 0.5);

        // Create description box
        this.descriptionText = this.add.text(50, 500, '', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2,
            wordWrap: { width: 700 }
        });

        // Add controls hint
        this.controlsText = this.add.text(400, 550, 'UP/DOWN: Select  A: Choose  B: Back', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Add keyboard controls
        this.input.keyboard.on('keydown-UP', () => this.handleUpKey());
        this.input.keyboard.on('keydown-DOWN', () => this.handleDownKey());
        this.input.keyboard.on('keydown-LEFT', () => this.handleLeftKey());
        this.input.keyboard.on('keydown-RIGHT', () => this.handleRightKey());
        this.input.keyboard.on('keydown-A', () => this.handleAKey());
        this.input.keyboard.on('keydown-B', () => this.handleBKey());

        // Initial selection
        this.updateSelection();
    }

    createOptionsPanel() {
        this.optionTexts = [];
        this.shopOptions.forEach((option, index) => {
            const text = this.add.text(50, 100 + (index * 40), option, {
                fontSize: '24px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });
            this.optionTexts.push(text);
        });
    }

    createItemPanel() {
        this.itemTexts = [];
        this.updateItemList();
    }

    updateItemList() {
        // Clear existing items
        this.itemTexts.forEach(text => text.destroy());
        this.itemTexts = [];

        const items = this.getCurrentItems();
        if (items.length === 0) {
            const text = this.add.text(400, 100, 'Nothing', {
                fontSize: '24px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });
            this.itemTexts.push(text);
        } else {
            items.forEach((item, index) => {
                const text = this.add.text(400, 100 + (index * 40), 
                    `${item.name} ${item.price}P`, {
                    fontSize: '24px',
                    fill: '#FFFFFF',
                    stroke: '#000000',
                    strokeThickness: 2
                });
                this.itemTexts.push(text);
            });
        }
    }

    getCurrentItems() {
        if (this.shopOptions[this.selectedOption] === 'Buy') {
            return Object.entries(this.shopItems).map(([name, data]) => ({
                name,
                price: data.price,
                description: data.description
            }));
        } else if (this.shopOptions[this.selectedOption] === 'Sell') {
            // Get sellable items from player's inventory
            return gameState.inventory ? 
                Object.entries(gameState.inventory)
                    .filter(([name]) => !name.includes('Key Item'))
                    .map(([name, quantity]) => ({
                        name,
                        price: Math.floor((this.shopItems[name]?.price || 0) / 2),
                        quantity
                    })) : [];
        }
        return [];
    }

    handleUpKey() {
        if (this.isSelectingQuantity) return;

        if (this.isInItemList) {
            const items = this.getCurrentItems();
            if (items.length > 0) {
                this.selectedItem = (this.selectedItem - 1 + items.length) % items.length;
            }
        } else {
            this.selectedOption = (this.selectedOption - 1 + this.shopOptions.length) % this.shopOptions.length;
        }
        this.updateSelection();
    }

    handleDownKey() {
        if (this.isSelectingQuantity) return;

        if (this.isInItemList) {
            const items = this.getCurrentItems();
            if (items.length > 0) {
                this.selectedItem = (this.selectedItem + 1) % items.length;
            }
        } else {
            this.selectedOption = (this.selectedOption + 1) % this.shopOptions.length;
        }
        this.updateSelection();
    }

    handleLeftKey() {
        if (this.isSelectingQuantity) {
            this.itemQuantity = Math.max(1, this.itemQuantity - 1);
            this.updateQuantityText();
        }
    }

    handleRightKey() {
        if (this.isSelectingQuantity) {
            const maxQuantity = this.getMaxQuantity();
            this.itemQuantity = Math.min(maxQuantity, this.itemQuantity + 1);
            this.updateQuantityText();
        }
    }

    handleAKey() {
        if (this.isSelectingQuantity) {
            this.confirmTransaction();
            return;
        }

        if (this.isInItemList) {
            const items = this.getCurrentItems();
            if (items.length > 0) {
                this.startQuantitySelection();
            }
        } else {
            const option = this.shopOptions[this.selectedOption];
            if (option === 'Exit') {
                this.exitShop();
            } else {
                this.isInItemList = true;
                this.selectedItem = 0;
                this.updateSelection();
            }
        }
    }

    handleBKey() {
        if (this.isSelectingQuantity) {
            this.isSelectingQuantity = false;
            this.quantityText?.destroy();
            this.updateSelection();
        } else if (this.isInItemList) {
            this.isInItemList = false;
            this.selectedItem = 0;
            this.updateSelection();
        } else {
            this.exitShop();
        }
    }

    startQuantitySelection() {
        this.isSelectingQuantity = true;
        this.itemQuantity = 1;
        this.quantityText = this.add.text(400, 300, 'How many? < 1 >', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5);
    }

    updateQuantityText() {
        if (this.quantityText) {
            this.quantityText.setText(`How many? < ${this.itemQuantity} >`);
        }
    }

    getMaxQuantity() {
        const items = this.getCurrentItems();
        const selectedItem = items[this.selectedItem];
        if (this.shopOptions[this.selectedOption] === 'Buy') {
            const maxAffordable = Math.floor((gameState.money || 0) / selectedItem.price);
            return Math.min(99, maxAffordable);
        } else {
            return selectedItem.quantity || 0;
        }
    }

    confirmTransaction() {
        const items = this.getCurrentItems();
        const selectedItem = items[this.selectedItem];
        const totalPrice = selectedItem.price * this.itemQuantity;

        if (this.shopOptions[this.selectedOption] === 'Buy') {
            if ((gameState.money || 0) >= totalPrice) {
                gameState.money = (gameState.money || 0) - totalPrice;
                gameState.inventory = gameState.inventory || {};
                gameState.inventory[selectedItem.name] = (gameState.inventory[selectedItem.name] || 0) + this.itemQuantity;
                this.showMessage(`Bought ${this.itemQuantity} ${selectedItem.name}(s)!`);
            } else {
                this.showMessage("You don't have enough money!");
            }
        } else {
            gameState.money = (gameState.money || 0) + totalPrice;
            gameState.inventory[selectedItem.name] -= this.itemQuantity;
            if (gameState.inventory[selectedItem.name] <= 0) {
                delete gameState.inventory[selectedItem.name];
            }
            this.showMessage(`Sold ${this.itemQuantity} ${selectedItem.name}(s)!`);
        }

        this.moneyText.setText(`Money: ${gameState.money}P`);
        this.isSelectingQuantity = false;
        this.quantityText.destroy();
        this.updateItemList();
        this.updateSelection();
    }

    updateSelection() {
        // Update option highlighting
        this.optionTexts.forEach((text, index) => {
            if (index === this.selectedOption) {
                text.setTint(0xffff00);
            } else {
                text.clearTint();
            }
        });

        // Update item highlighting
        this.itemTexts.forEach((text, index) => {
            if (this.isInItemList && index === this.selectedItem) {
                text.setTint(0xffff00);
            } else {
                text.clearTint();
            }
        });

        // Update description
        const items = this.getCurrentItems();
        if (this.isInItemList && items.length > 0) {
            this.descriptionText.setText(this.shopItems[items[this.selectedItem].name]?.description || '');
        } else {
            this.descriptionText.setText('');
        }
    }

    showMessage(text) {
        const message = this.add.text(400, 300, text, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        this.time.delayedCall(2000, () => {
            message.destroy();
        });
    }

    exitShop() {
        this.showMessage('Thank you! Please come again!');
        this.time.delayedCall(1000, () => {
            this.scene.stop();
            this.scene.resume('PokeShop');
        });
    }
}