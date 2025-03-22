// UI component for the ShopMenu scene
import Phaser from 'phaser';

export default class ShopMenuUI {
    constructor(scene) {
        this.scene = scene;
        this.optionTexts = [];
        this.itemTexts = [];
        
        // Create UI elements
        this.createTitle();
        this.createOptionsPanel();
        this.createItemPanel();
        this.createMoneyDisplay();
        this.createDescriptionBox();
        this.createControlsHint();
    }
    
    createTitle() {
        // Add title
        this.scene.add.text(400, 50, 'SHOP', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
    }
    
    createOptionsPanel() {
        // Create left panel (options)
        this.scene.shopOptions.forEach((option, index) => {
            const text = this.scene.add.text(50, 100 + (index * 40), option, {
                fontSize: '24px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });
            this.optionTexts.push(text);
        });
    }
    
    createItemPanel() {
        // Create right panel (items)
        // Don't update item list yet, it will be updated after all components are initialized
        // We'll create an empty panel for now
        this.itemTexts = [];
    }
    
    createMoneyDisplay() {
        // Create money display
        this.moneyText = this.scene.add.text(700, 50, `Money: ${this.scene.gameState?.money || 3000}P`, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(1, 0.5);
    }
    
    createDescriptionBox() {
        // Create description box
        this.descriptionText = this.scene.add.text(50, 500, '', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2,
            wordWrap: { width: 700 }
        });
    }
    
    createControlsHint() {
        // Add controls hint
        this.controlsText = this.scene.add.text(400, 550, 'UP/DOWN: Select  A: Choose  B: Back', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
    }
    
    updateItemList() {
        // Clear existing items
        this.itemTexts.forEach(text => text.destroy());
        this.itemTexts = [];

        // Check if itemsHandler exists before trying to access it
        if (!this.scene.itemsHandler) {
            return;
        }
        
        const items = this.scene.itemsHandler.getCurrentItems();
        if (items.length === 0) {
            const text = this.scene.add.text(400, 100, 'Nothing', {
                fontSize: '24px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });
            this.itemTexts.push(text);
        } else {
            items.forEach((item, index) => {
                const text = this.scene.add.text(400, 100 + (index * 40), 
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
    
    updateOptionHighlighting(selectedOption) {
        this.optionTexts.forEach((text, index) => {
            if (index === selectedOption) {
                text.setTint(0xffff00);
            } else {
                text.clearTint();
            }
        });
    }
    
    updateItemHighlighting(isInItemList, selectedItem) {
        this.itemTexts.forEach((text, index) => {
            if (isInItemList && index === selectedItem) {
                text.setTint(0xffff00);
            } else {
                text.clearTint();
            }
        });
    }
    
    updateDescription(description) {
        this.descriptionText.setText(description);
    }
    
    updateMoneyDisplay(money) {
        this.moneyText.setText(`Money: ${money}P`);
    }
    
    createQuantitySelector() {
        this.quantityText = this.scene.add.text(400, 300, 'How many? < 1 >', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        }).setOrigin(0.5);
        return this.quantityText;
    }
    
    updateQuantityText(quantity) {
        if (this.quantityText) {
            this.quantityText.setText(`How many? < ${quantity} >`);
        }
    }
    
    showMessage(text) {
        const message = this.scene.add.text(400, 300, text, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        this.scene.time.delayedCall(2000, () => {
            message.destroy();
        });
    }
}