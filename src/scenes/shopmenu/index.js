// Main ShopMenu scene file that imports and coordinates all components
import Phaser from 'phaser';
import { gameState } from '../../config/game-state';
import ShopMenuUI from './ShopMenuUI';
import ShopMenuItems from './ShopMenuItems';
import ShopMenuInput from './ShopMenuInput';
import ShopMenuTransactions from './ShopMenuTransactions';

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

        // Initialize items handler first
        this.itemsHandler = new ShopMenuItems(this);
        
        // Initialize transaction handler
        this.transactionHandler = new ShopMenuTransactions(this);
        
        // Initialize UI components after itemsHandler is available
        this.ui = new ShopMenuUI(this);
        
        // Initialize input handler
        this.inputHandler = new ShopMenuInput(this);
        
        // Update the item list now that all components are initialized
        this.ui.updateItemList();
        
        // Initial selection
        this.updateSelection();
    }

    updateSelection() {
        // Update option highlighting
        this.ui.updateOptionHighlighting(this.selectedOption);

        // Update item highlighting
        this.ui.updateItemHighlighting(this.isInItemList, this.selectedItem);

        // Update description
        const items = this.itemsHandler.getCurrentItems();
        if (this.isInItemList && items.length > 0) {
            this.ui.updateDescription(this.shopItems[items[this.selectedItem].name]?.description || '');
        } else {
            this.ui.updateDescription('');
        }
    }

    showMessage(text) {
        this.ui.showMessage(text);
    }

    exitShop() {
        this.showMessage('Thank you! Please come again!');
        this.time.delayedCall(1000, () => {
            this.scene.stop();
            this.scene.resume('PokeShop');
        });
    }
}