// Handler for navigation in the BagMenu scene
export default class NavigationHandler {
    constructor(scene) {
        this.scene = scene;
        this.currentLevel = 'CATEGORY_TABS'; // CATEGORY_TABS, ITEM_LIST, ACTION_MENU
        this.previousLevel = null;
        this.selectedCategory = 0;
        this.selectedItem = null;
    }

    /**
     * Handle B button press based on current navigation level
     * @returns {boolean} True if the bag should be closed
     */
    handleBackButton() {
        switch(this.currentLevel) {
            case 'ACTION_MENU':
                this.closeActionMenu();
                return false;

            case 'ITEM_LIST':
                this.returnToCategoryTabs();
                return false;

            case 'CATEGORY_TABS':
                return true; // Signal to close the bag

            default:
                return false;
        }
    }

    /**
     * Close the action menu and return to item list
     */
    closeActionMenu() {
        this.scene.actionMenuHandler.hideMenu();
        this.currentLevel = 'ITEM_LIST';
        this.previousLevel = 'ACTION_MENU';
        // Ensure the previously selected item remains highlighted
        if (this.selectedItem !== null) {
            this.scene.itemsHandler.highlightItem(this.selectedItem);
        }
    }

    /**
     * Return from item list to category tabs
     */
    returnToCategoryTabs() {
        this.currentLevel = 'CATEGORY_TABS';
        this.previousLevel = 'ITEM_LIST';
        // Deselect the currently highlighted item
        if (this.selectedItem !== null) {
            this.scene.itemsHandler.dehighlightItem(this.selectedItem);
            this.selectedItem = null;
        }
        // Highlight the current category tab
        this.scene.categoryHandler.highlightCategory(this.selectedCategory);
    }

    /**
     * Set the current navigation level
     * @param {string} level - The navigation level to set (CATEGORY_TABS, ITEM_LIST, ACTION_MENU)
     */
    setCurrentLevel(level) {
        this.previousLevel = this.currentLevel;
        this.currentLevel = level;
    }

    /**
     * Set the selected category index
     * @param {number} index - The index of the selected category
     */
    setSelectedCategory(index) {
        this.selectedCategory = index;
    }

    /**
     * Set the selected item index
     * @param {number} index - The index of the selected item
     */
    setSelectedItem(index) {
        this.selectedItem = index;
    }

    /**
     * Get the current navigation level
     * @returns {string} The current navigation level
     */
    getCurrentLevel() {
        return this.currentLevel;
    }

    /**
     * Get the previous navigation level
     * @returns {string} The previous navigation level
     */
    getPreviousLevel() {
        return this.previousLevel;
    }
}