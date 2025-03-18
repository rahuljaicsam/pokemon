import { gameState } from '../config/game-state';

export default class BagScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Bag' });
        this.selectedCategory = 0;
        this.selectedItem = 0;
        this.isInItemList = false;
        this.categories = [
            'Items',
            'Key Items',
            'Poké Balls',
            'TMs & HMs',
            'Berries'
        ];
    }

    create() {
        // Add semi-transparent black background
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);

        // Add title
        this.add.text(400, 50, 'BAG', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Create left panel (categories)
        this.createCategoryPanel();

        // Create right panel (items)
        this.createItemPanel();

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
        this.input.keyboard.on('keydown-A', () => this.handleAKey());
        this.input.keyboard.on('keydown-B', () => this.handleBKey());

        // Initial selection
        this.updateSelection();
    }

    createCategoryPanel() {
        // Create category container
        this.categoryTexts = [];
        this.categories.forEach((category, index) => {
            const text = this.add.text(50, 100 + (index * 40), category, {
                fontSize: '24px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });
            this.categoryTexts.push(text);
        });
    }

    createItemPanel() {
        // Create item container
        this.itemContainer = this.add.container(400, 100);
        this.itemTexts = [];
        this.updateItemList();
    }

    updateItemList() {
        // Clear existing items
        this.itemTexts.forEach(text => text.destroy());
        this.itemTexts = [];

        // Get items for current category
        const items = this.getItemsForCategory(this.categories[this.selectedCategory]);

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
                    `${item.name} x${item.quantity}`, {
                    fontSize: '24px',
                    fill: '#FFFFFF',
                    stroke: '#000000',
                    strokeThickness: 2
                });
                this.itemTexts.push(text);
            });
        }
    }

    getItemsForCategory(category) {
        // This would normally pull from gameState.inventory
        // For now, return some dummy data
        const dummyItems = {
            'Items': [
                { name: 'Potion', quantity: 5, description: 'Restores 20 HP to a single Pokémon.' },
                { name: 'Antidote', quantity: 3, description: 'Cures a poisoned Pokémon.' }
            ],
            'Key Items': [
                { name: 'Bicycle', quantity: 1, description: 'A folding Bike for fast movement.' }
            ],
            'Poké Balls': [
                { name: 'Poké Ball', quantity: 10, description: 'A device for catching wild Pokémon.' },
                { name: 'Great Ball', quantity: 5, description: 'A good Ball with a higher catch rate.' }
            ],
            'TMs & HMs': [
                { name: 'TM01', quantity: 1, description: 'Contains Focus Punch.' },
                { name: 'HM01', quantity: 1, description: 'Contains Cut.' }
            ],
            'Berries': [
                { name: 'Oran Berry', quantity: 3, description: 'Restores 10 HP when held.' }
            ]
        };

        return dummyItems[category] || [];
    }

    handleUpKey() {
        if (this.isInItemList) {
            const items = this.getItemsForCategory(this.categories[this.selectedCategory]);
            if (items.length > 0) {
                this.selectedItem = (this.selectedItem - 1 + items.length) % items.length;
            }
        } else {
            this.selectedCategory = (this.selectedCategory - 1 + this.categories.length) % this.categories.length;
        }
        this.updateSelection();
    }

    handleDownKey() {
        if (this.isInItemList) {
            const items = this.getItemsForCategory(this.categories[this.selectedCategory]);
            if (items.length > 0) {
                this.selectedItem = (this.selectedItem + 1) % items.length;
            }
        } else {
            this.selectedCategory = (this.selectedCategory + 1) % this.categories.length;
        }
        this.updateSelection();
    }

    handleAKey() {
        if (!this.isInItemList) {
            this.isInItemList = true;
            this.selectedItem = 0;
            this.updateSelection();
        } else {
            const items = this.getItemsForCategory(this.categories[this.selectedCategory]);
            if (items.length > 0) {
                this.useItem(items[this.selectedItem]);
            }
        }
    }

    handleBKey() {
        if (this.isInItemList) {
            this.isInItemList = false;
            this.selectedItem = 0;
            this.updateSelection();
        } else {
            this.scene.stop();
            this.scene.resume('InGameMenu');
        }
    }

    updateSelection() {
        // Update category highlighting
        this.categoryTexts.forEach((text, index) => {
            if (index === this.selectedCategory) {
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
        const items = this.getItemsForCategory(this.categories[this.selectedCategory]);
        if (this.isInItemList && items.length > 0) {
            this.descriptionText.setText(items[this.selectedItem].description);
        } else {
            this.descriptionText.setText('');
        }
    }

    useItem(item) {
        // For now, just show a message
        const message = this.add.text(400, 300, `Using ${item.name}...`, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        this.time.delayedCall(2000, () => {
            message.destroy();
        });
    }
}