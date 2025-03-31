// Main BagMenu scene file that imports and coordinates all components
import Phaser from 'phaser';
import { gameState } from '../../config/game-state';
import BagMenuUI from './BagMenuUI';
import ItemsHandler from './handlers/ItemsHandler';
import BagMenuInput from './BagMenuInput';
import CategoryNavigationHandler from './handlers/CategoryNavigationHandler';
import ActionMenuHandler from './handlers/ActionMenuHandler';
import ButtonHintsHandler from './handlers/ButtonHintsHandler';
import BagMenuItems from './BagMenuItems';
import ItemListManager from './handlers/ItemListManager';

export default class BagScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Bag' });
        this.selectedCategory = 0;
        this.selectedItem = 0;
        this.isInItemList = false;
    }

    create() {
        console.log('[BagScene] Initializing components');
        // Initialize handlers and components in CORRECT DEPENDENCY ORDER:
        // 1. Data providers and handlers (no dependencies)
        this.itemDataProvider = new BagMenuItems(this);     // Provides raw item data
        this.itemsHandler = new ItemsHandler(this);        // Handles item actions (use, toss)
        this.buttonHintsHandler = new ButtonHintsHandler(this);

        // 2. Navigation and list management
        this.categoriesHandler = new CategoryNavigationHandler(this);
        this.itemListManager = new ItemListManager(this, this.itemDataProvider); // Manages item list display and scrolling

        // 3. UI and input (depends on handlers)
        this.actionMenuHandler = new ActionMenuHandler(this);
        this.ui = new BagMenuUI(this);
        this.inputHandler = new BagMenuInput(this);
        
        // Update the item list now that all components are initialized
        this.itemListManager.updateItemList(this.categoriesHandler.getSelectedCategory());
        console.log('[BagScene] Item list updated with initial category');
        
        // Update UI with initial items
        this.ui.updateItemList();
        console.log('[BagScene] UI item list updated');
        
        // Initial selection
        this.updateSelection();
        console.log('[BagScene] Initial selection updated');
    }

    updateSelection() {
        // Update category highlighting
        this.ui.updateCategoryHighlighting();
        
        // Update item highlighting
        this.ui.updateItemHighlighting();
        
        // Update description
        this.ui.updateItemDescription();
    }

    useItem(item) {
        // Display a message when using an item
        const message = this.add.text(400, 300, `Using ${item.name}...`, {
            fontSize: '18px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4,
            fontFamily: 'monospace',
            backgroundColor: '#6890F0',
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5);
        
        // Add a small background to the message for GBA authenticity
        const messageBg = this.add.rectangle(400, 300, message.width + 20, message.height + 10, 0x6890F0);
        messageBg.setStrokeStyle(2, 0x3898F8);
        messageBg.setDepth(10);
        message.setDepth(11);

        this.time.delayedCall(2000, () => {
            message.destroy();
            messageBg.destroy();
        });
    }
}