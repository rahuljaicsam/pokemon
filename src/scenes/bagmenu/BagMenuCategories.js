// Categories component for the BagMenu scene
import Phaser from 'phaser';

export default class BagMenuCategories {
    constructor(scene) {
        this.scene = scene;
        this.categories = [
            'Items',
            'Key Items',
            'Poké Balls',
            'TMs & HMs',
            'Berries'
        ];
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
        return this.categories[this.scene.selectedCategory];
    }
    
    /**
     * Select the previous category
     */
    selectPreviousCategory() {
        this.scene.selectedCategory = (this.scene.selectedCategory - 1 + this.categories.length) % this.categories.length;
        this.scene.selectedItem = 0; // Reset item selection when changing categories
        this.scene.updateSelection();
    }
    
    /**
     * Select the next category
     */
    selectNextCategory() {
        this.scene.selectedCategory = (this.scene.selectedCategory + 1) % this.categories.length;
        this.scene.selectedItem = 0; // Reset item selection when changing categories
        this.scene.updateSelection();
    }
    
    /**
     * Get the index of the current category
     * @returns {Number} The index of the selected category
     */
    getSelectedCategoryIndex() {
        return this.scene.selectedCategory;
    }
}