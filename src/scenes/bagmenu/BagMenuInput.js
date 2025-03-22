// Input handler component for the BagMenu scene
import CategoryNavigationHandler from './handlers/CategoryNavigationHandler';
import ItemListNavigationHandler from './handlers/ItemListNavigationHandler';

export default class BagMenuInput {
    constructor(scene) {
        this.scene = scene;
        
        // Use the existing CategoryNavigationHandler from the scene
        this.categoryHandler = scene.categoriesHandler;
        this.itemListHandler = new ItemListNavigationHandler(scene);
        
        // Add keyboard controls
        this.setupKeyboardControls();
        console.log('[BagMenuInput] Initialized with scene\'s CategoryNavigationHandler');
    }
    
    setupKeyboardControls() {
        // Add keyboard controls
        this.scene.input.keyboard.on('keydown-UP', () => this.handleUpKey());
        this.scene.input.keyboard.on('keydown-DOWN', () => this.handleDownKey());
        this.scene.input.keyboard.on('keydown-A', () => this.handleAKey());
        this.scene.input.keyboard.on('keydown-B', () => this.handleBKey());
        
        // Add left/right navigation for categories (authentic to Pokemon GBA)
        this.scene.input.keyboard.on('keydown-LEFT', () => this.handleLeftKey());
        this.scene.input.keyboard.on('keydown-RIGHT', () => this.handleRightKey());
        
        console.log('[BagMenuInput] Keyboard controls set up');
    }
    
    handleUpKey() {
        console.log(`[BagMenuInput] Up key pressed, isInItemList: ${this.scene.isInItemList}`);
        if (this.scene.isInItemList) {
            this.itemListHandler.navigateUp();
        }
        // Removed category navigation with up/down keys when not in item list
        // This was causing confusion with the left/right category navigation
    }
    
    handleDownKey() {
        console.log(`[BagMenuInput] Down key pressed, isInItemList: ${this.scene.isInItemList}`);
        if (this.scene.isInItemList) {
            this.itemListHandler.navigateDown();
        }
        // Removed category navigation with up/down keys when not in item list
        // This was causing confusion with the left/right category navigation
    }
    
    handleLeftKey() {
        console.log(`[BagMenuInput] Left key pressed, isInItemList: ${this.scene.isInItemList}`);
        if (!this.scene.isInItemList) {
            console.log('[BagMenuInput] Navigating to previous category');
            console.log(`[BagMenuInput] Before navigation - Scene selectedCategory: ${this.scene.selectedCategory}, Handler selectedCategory: ${this.categoryHandler.getSelectedCategoryIndex()}`);
            
            // Call the category navigation handler
            this.categoryHandler.navigatePrevious();
            
            // Ensure UI is updated after category change
            this.scene.ui.updateCategoryHighlighting();
            this.scene.ui.updateItemList();
            this.scene.ui.updateItemDescription();
            
            console.log(`[BagMenuInput] After navigation - Scene selectedCategory: ${this.scene.selectedCategory}, Handler selectedCategory: ${this.categoryHandler.getSelectedCategoryIndex()}`);
        }
    }
    
    handleRightKey() {
        console.log(`[BagMenuInput] Right key pressed, isInItemList: ${this.scene.isInItemList}`);
        if (!this.scene.isInItemList) {
            console.log('[BagMenuInput] Navigating to next category');
            console.log(`[BagMenuInput] Before navigation - Scene selectedCategory: ${this.scene.selectedCategory}, Handler selectedCategory: ${this.categoryHandler.getSelectedCategoryIndex()}`);
            
            // Call the category navigation handler
            this.categoryHandler.navigateNext();
            
            // Ensure UI is updated after category change
            this.scene.ui.updateCategoryHighlighting();
            this.scene.ui.updateItemList();
            this.scene.ui.updateItemDescription();
            
            console.log(`[BagMenuInput] After navigation - Scene selectedCategory: ${this.scene.selectedCategory}, Handler selectedCategory: ${this.categoryHandler.getSelectedCategoryIndex()}`);
        }
    }
    
    handleAKey() {
        if (!this.scene.isInItemList) {
            this.scene.isInItemList = true;
            this.itemListHandler.resetSelection();
        } else {
            this.itemListHandler.selectItem();
        }
    }
    
    handleBKey() {
        if (this.scene.isInItemList) {
            this.scene.isInItemList = false;
            this.itemListHandler.resetSelection();
        } else {
            this.scene.scene.stop();
            this.scene.scene.resume('InGameMenu');
        }
    }
}