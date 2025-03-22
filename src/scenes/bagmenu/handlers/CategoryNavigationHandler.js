// Handler for category navigation in the BagMenu scene
export default class CategoryNavigationHandler {
    constructor(scene) {
        this.scene = scene;
        this.categories = [
            'Items',
            'Poké Balls',
            'Key Items',
            'TMs & HMs',
            'Berries'
        ];
        this.selectedCategory = 0;
        console.log('[CategoryNavigationHandler] Initialized with categories:', this.categories);
    }

    /**
     * Get all available categories
     * @returns {Array} List of category names
     */
    getCategories() {
        return this.categories;
    }

    /**
     * Get the currently selected category
     * @returns {String} The name of the selected category
     */
    getSelectedCategory() {
        return this.categories[this.selectedCategory];
    }

    /**
     * Get the index of the currently selected category
     * @returns {Number} The index of the selected category
     */
    getSelectedCategoryIndex() {
        return this.selectedCategory;
    }

    /**
     * Navigate to the previous category
     */
    navigatePrevious() {
        const oldCategory = this.categories[this.selectedCategory];
        this.selectedCategory = (this.selectedCategory - 1 + this.categories.length) % this.categories.length;
        console.log(`[CategoryNavigationHandler] Navigating previous: ${oldCategory} -> ${this.categories[this.selectedCategory]}`);
        this.updateCategorySelection();
    }

    /**
     * Navigate to the next category
     */
    navigateNext() {
        const oldCategory = this.categories[this.selectedCategory];
        this.selectedCategory = (this.selectedCategory + 1) % this.categories.length;
        console.log(`[CategoryNavigationHandler] Navigating next: ${oldCategory} -> ${this.categories[this.selectedCategory]}`);
        this.updateCategorySelection();
    }

    /**
     * Update the visual selection and trigger necessary updates
     */
    updateCategorySelection() {
        console.log(`[CategoryNavigationHandler] Updating category selection: ${this.categories[this.selectedCategory]}`);
        console.log(`[CategoryNavigationHandler] Before update - Scene selectedCategory: ${this.scene.selectedCategory}, Handler selectedCategory: ${this.selectedCategory}`);
        
        // Update the scene's selected category FIRST to ensure UI updates correctly
        this.scene.selectedCategory = this.selectedCategory;
        console.log(`[CategoryNavigationHandler] Scene selectedCategory updated to: ${this.scene.selectedCategory}`);
        
        // Reset item selection when changing categories
        this.scene.selectedItem = 0;
        this.scene.itemsHandler.resetScroll();
        
        // Update the item list for the new category
        const categoryName = this.getSelectedCategory();
        console.log(`[CategoryNavigationHandler] Updating item list for category: ${categoryName}`);
        this.scene.itemsHandler.updateItemList(categoryName);
        
        // Get the updated items to verify they've changed
        const updatedItems = this.scene.itemsHandler.getCurrentItems();
        console.log(`[CategoryNavigationHandler] Updated items for category ${categoryName}:`, updatedItems.map(item => item.name).join(', '));
        
        // Update the UI to reflect the new items
        console.log('[CategoryNavigationHandler] Updating UI item list');
        this.scene.ui.updateItemList();
        console.log('[CategoryNavigationHandler] Item list UI updated');
        
        // Update the visual selection (highlighting and description)
        console.log('[CategoryNavigationHandler] Updating visual selection');
        this.scene.updateSelection();
        console.log('[CategoryNavigationHandler] Visual selection updated');
        
        console.log('[CategoryNavigationHandler] Category selection update complete');
    }
}