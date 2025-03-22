// Items component for the BagMenu scene
import { gameState } from '../../config/game-state';

export default class BagMenuItems {
    constructor(scene) {
        this.scene = scene;
    }
    
    /**
     * Get items for the currently selected category
     * @returns {Array} List of items in the current category
     */
    getCurrentItems() {
        const category = this.scene.categoriesHandler.getSelectedCategory();
        return this.getItemsForCategory(category);
    }
    
    /**
     * Get items for a specific category
     * @param {String} category - The category name
     * @returns {Array} List of items in the specified category
     */
    getItemsForCategory(category) {
        // This would normally pull from gameState.inventory
        // For now, return some dummy data until the inventory system is fully implemented
        const dummyItems = {
            'Items': [
                { id: 'POTION', name: 'Potion', quantity: 5, description: 'Restores 20 HP to a single Pokémon.' },
                { id: 'ANTIDOTE', name: 'Antidote', quantity: 3, description: 'Cures a poisoned Pokémon.' },
                { id: 'PARALYZ_HEAL', name: 'Parlyz Heal', quantity: 2, description: 'Cures a paralyzed Pokémon.' },
                { id: 'AWAKENING', name: 'Awakening', quantity: 1, description: 'Wakes up a sleeping Pokémon.' }
            ],
            'Key Items': [
                { id: 'BICYCLE', name: 'Bicycle', quantity: 1, description: 'A folding Bike for fast movement.' },
                { id: 'TOWN_MAP', name: 'Town Map', quantity: 1, description: 'A map of the region.' }
            ],
            'Poké Balls': [
                { id: 'POKE_BALL', name: 'Poké Ball', quantity: 10, description: 'A device for catching wild Pokémon.' },
                { id: 'GREAT_BALL', name: 'Great Ball', quantity: 5, description: 'A good Ball with a higher catch rate.' },
                { id: 'ULTRA_BALL', name: 'Ultra Ball', quantity: 2, description: 'An ultra-performance Ball with a higher catch rate.' }
            ],
            'TMs & HMs': [
                { id: 'TM01', name: 'TM01', quantity: 1, description: 'Contains Focus Punch.' },
                { id: 'HM01', name: 'HM01', quantity: 1, description: 'Contains Cut.' },
                { id: 'HM02', name: 'HM02', quantity: 1, description: 'Contains Fly.' }
            ],
            'Berries': [
                { id: 'ORAN_BERRY', name: 'Oran Berry', quantity: 3, description: 'Restores 10 HP when held.' },
                { id: 'CHERI_BERRY', name: 'Cheri Berry', quantity: 2, description: 'Cures paralysis when held.' }
            ]
        };

        return dummyItems[category] || [];
    }
    
    /**
     * Get a specific item by its ID
     * @param {String} itemId - The ID of the item to find
     * @returns {Object|null} The item object or null if not found
     */
    getItemById(itemId) {
        // Search through all categories
        for (const category of this.scene.categoriesHandler.getCategories()) {
            const items = this.getItemsForCategory(category);
            const item = items.find(item => item.id === itemId);
            if (item) return item;
        }
        return null;
    }
    
    /**
     * Use an item from the bag
     * @param {Object} item - The item to use
     */
    useItem(item) {
        // In a real implementation, this would update the gameState
        // and perform the item's action
        this.scene.useItem(item);
    }
}