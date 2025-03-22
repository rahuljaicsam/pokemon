// Handler for managing items in the BagMenu scene
import BagMenuItems from '../BagMenuItems';

export default class ItemsHandler extends BagMenuItems {
    constructor(scene) {
        super(scene);
        this.scrollOffset = 0;
        this.visibleItemCount = 6; // Number of items visible at once
        this.currentItems = [];
    }

    /**
     * Update the item list for a given category
     * @param {String} category - The category to display items for
     */
    updateItemList(category) {
        this.currentItems = this.getItemsForCategory(category);
        this.resetScroll();
    }

    /**
     * Reset the scroll position to the top
     */
    resetScroll() {
        this.scrollOffset = 0;
    }

    /**
     * Get the number of items that can be displayed at once
     * @returns {Number} Number of visible items
     */
    getVisibleItemCount() {
        return this.visibleItemCount;
    }

    /**
     * Get the current scroll offset
     * @returns {Number} Current scroll offset
     */
    getScrollOffset() {
        return this.scrollOffset;
    }

    /**
     * Scroll the item list up
     */
    scrollUp() {
        if (this.scrollOffset > 0) {
            this.scrollOffset--;
        }
    }

    /**
     * Scroll the item list down
     */
    scrollDown() {
        const maxScroll = Math.max(0, this.currentItems.length - this.visibleItemCount);
        if (this.scrollOffset < maxScroll) {
            this.scrollOffset++;
        }
    }

    /**
     * Learn a move from a TM or HM
     * @param {Object} item - The TM or HM item to learn from
     */
    learnMove(item) {
        // Implementation for learning moves will be added later
        console.log(`Learning move from ${item.name}`);
    }
}