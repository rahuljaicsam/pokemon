// Items component for the ShopMenu scene
import { gameState } from '../../config/game-state';

export default class ShopMenuItems {
    constructor(scene) {
        this.scene = scene;
    }
    
    /**
     * Get the current list of items based on the selected shop option
     * @returns {Array} List of items with name, price, and description
     */
    getCurrentItems() {
        if (this.scene.shopOptions[this.scene.selectedOption] === 'Buy') {
            return this.getBuyItems();
        } else if (this.scene.shopOptions[this.scene.selectedOption] === 'Sell') {
            return this.getSellItems();
        }
        return [];
    }
    
    /**
     * Get the list of items available for purchase
     * @returns {Array} List of items with name, price, and description
     */
    getBuyItems() {
        return Object.entries(this.scene.shopItems).map(([name, data]) => ({
            name,
            price: data.price,
            description: data.description
        }));
    }
    
    /**
     * Get the list of items available for selling from player's inventory
     * @returns {Array} List of items with name, price, and quantity
     */
    getSellItems() {
        return gameState.inventory ? 
            Object.entries(gameState.inventory)
                .filter(([name]) => !name.includes('Key Item'))
                .map(([name, quantity]) => ({
                    name,
                    price: Math.floor((this.scene.shopItems[name]?.price || 0) / 2),
                    quantity
                })) : [];
    }
    
    /**
     * Calculate the maximum quantity of items that can be bought or sold
     * @returns {number} Maximum quantity
     */
    getMaxQuantity() {
        const items = this.getCurrentItems();
        const selectedItem = items[this.scene.selectedItem];
        
        if (this.scene.shopOptions[this.scene.selectedOption] === 'Buy') {
            const maxAffordable = Math.floor((gameState.money || 0) / selectedItem.price);
            return Math.min(99, maxAffordable);
        } else {
            return selectedItem.quantity || 0;
        }
    }
}