// Handler for managing item list display and scrolling in the BagMenu scene
export default class ItemListManager {
    constructor(scene, itemDataProvider) {
        this.scene = scene;
        this.itemDataProvider = itemDataProvider;
        this.currentItems = [];
        this.scrollOffset = 0;
        this.itemsPerPage = 4; // Number of items visible at once
    }

    /**
     * Update the item list for the given category
     * @param {String} category - The category name
     */
    updateItemList(category) {
        // Get items from the data provider
        this.currentItems = this.itemDataProvider.getItemsForCategory(category);
        // Reset scroll position
        this.scrollOffset = 0;
    }

    /**
     * Get the currently visible items based on scroll position
     * @returns {Array} List of visible items
     */
    getVisibleItems() {
        return this.currentItems.slice(
            this.scrollOffset,
            this.scrollOffset + this.itemsPerPage
        );
    }

    /**
     * Get all items in the current category
     * @returns {Array} List of all items
     */
    getAllItems() {
        return this.currentItems;
    }

    /**
     * Get the current scroll offset
     * @returns {Number} Current scroll offset
     */
    getScrollOffset() {
        return this.scrollOffset;
    }

    /**
     * Get the maximum scroll offset possible
     * @returns {Number} Maximum scroll offset
     */
    getMaxScrollOffset() {
        return Math.max(0, this.currentItems.length - this.itemsPerPage);
    }

    /**
     * Scroll the item list up
     * @returns {Boolean} Whether the scroll was successful
     */
    scrollUp() {
        if (this.scrollOffset > 0) {
            this.scrollOffset--;
            return true;
        }
        return false;
    }

    /**
     * Scroll the item list down
     * @returns {Boolean} Whether the scroll was successful
     */
    scrollDown() {
        if (this.scrollOffset < this.getMaxScrollOffset()) {
            this.scrollOffset++;
            return true;
        }
        return false;
    }

    /**
     * Get the currently selected item
     * @returns {Object|null} The selected item or null if no items
     */
    getSelectedItem() {
        const selectedIndex = this.scene.selectedItem - this.scrollOffset;
        const visibleItems = this.getVisibleItems();
        return visibleItems[selectedIndex] || null;
    }

    /**
     * Check if the current selection is valid
     * @returns {Boolean} Whether the selection is valid
     */
    isSelectionValid() {
        return this.getSelectedItem() !== null;
    }

    /**
     * Reset the scroll offset to the beginning
     */
    resetScroll() {
        console.log('[ItemListManager] Resetting scroll offset');
        this.scrollOffset = 0;
    }
}