// Handler for item list navigation in the BagMenu scene
export default class ItemListNavigationHandler {
    constructor(scene) {
        this.scene = scene;
    }

    /**
     * Navigate up in the item list
     */
    navigateUp() {
        const items = this.scene.itemsHandler.getCurrentItems();
        if (items.length > 0) {
            // No wrapping - stop at the top
            if (this.scene.selectedItem > 0) {
                this.scene.selectedItem--;
                
                // Check if we need to scroll the list up
                const visibleItems = this.scene.itemsHandler.getVisibleItemCount();
                const scrollOffset = this.scene.itemsHandler.getScrollOffset();
                
                if (this.scene.selectedItem < scrollOffset) {
                    this.scene.itemsHandler.scrollUp();
                }
                
                this.scene.updateSelection();
            }
        }
    }

    /**
     * Navigate down in the item list
     */
    navigateDown() {
        const items = this.scene.itemsHandler.getCurrentItems();
        if (items.length > 0) {
            // No wrapping - stop at the bottom
            if (this.scene.selectedItem < items.length - 1) {
                this.scene.selectedItem++;
                
                // Check if we need to scroll the list down
                const visibleItems = this.scene.itemsHandler.getVisibleItemCount();
                const scrollOffset = this.scene.itemsHandler.getScrollOffset();
                
                if (this.scene.selectedItem >= scrollOffset + visibleItems) {
                    this.scene.itemsHandler.scrollDown();
                }
                
                this.scene.updateSelection();
            }
        }
    }

    /**
     * Select an item from the list
     */
    selectItem() {
        const items = this.scene.itemsHandler.getCurrentItems();
        if (items.length > 0) {
            const selectedItem = items[this.scene.selectedItem];
            if (this.scene.actionMenuHandler.isVisible) {
                // If action menu is visible, execute the selected action
                this.scene.actionMenuHandler.executeAction(selectedItem);
            } else {
                // If action menu is not visible, show it for the selected item
                this.scene.actionMenuHandler.showMenu(selectedItem);
            }
        }
    }

    /**
     * Reset the item selection to the top
     */
    resetSelection() {
        this.scene.selectedItem = 0;
        this.scene.updateSelection();
    }
}