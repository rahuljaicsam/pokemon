// Transactions component for the ShopMenu scene
import { gameState } from '../../config/game-state';

export default class ShopMenuTransactions {
    constructor(scene) {
        this.scene = scene;
    }
    
    /**
     * Process a transaction (buy or sell)
     * @param {number} quantity - The quantity of items to buy or sell
     */
    processTransaction(quantity) {
        const items = this.scene.itemsHandler.getCurrentItems();
        const selectedItem = items[this.scene.selectedItem];
        const totalPrice = selectedItem.price * quantity;
        
        if (this.scene.shopOptions[this.scene.selectedOption] === 'Buy') {
            this.processBuyTransaction(selectedItem, quantity, totalPrice);
        } else {
            this.processSellTransaction(selectedItem, quantity, totalPrice);
        }
        
        // Update money display
        this.scene.ui.updateMoneyDisplay(gameState.money);
        
        // Update item list
        this.scene.ui.updateItemList();
    }
    
    /**
     * Process a buy transaction
     * @param {Object} item - The item being purchased
     * @param {number} quantity - The quantity of items to buy
     * @param {number} totalPrice - The total price of the transaction
     */
    processBuyTransaction(item, quantity, totalPrice) {
        if ((gameState.money || 0) >= totalPrice) {
            // Deduct money
            gameState.money = (gameState.money || 0) - totalPrice;
            
            // Add item to inventory
            gameState.inventory = gameState.inventory || {};
            gameState.inventory[item.name] = (gameState.inventory[item.name] || 0) + quantity;
            
            // Show success message
            this.scene.showMessage(`Bought ${quantity} ${item.name}(s)!`);
        } else {
            // Show error message
            this.scene.showMessage("You don't have enough money!");
        }
    }
    
    /**
     * Process a sell transaction
     * @param {Object} item - The item being sold
     * @param {number} quantity - The quantity of items to sell
     * @param {number} totalPrice - The total price of the transaction
     */
    processSellTransaction(item, quantity, totalPrice) {
        // Add money
        gameState.money = (gameState.money || 0) + totalPrice;
        
        // Remove item from inventory
        gameState.inventory[item.name] -= quantity;
        if (gameState.inventory[item.name] <= 0) {
            delete gameState.inventory[item.name];
        }
        
        // Show success message
        this.scene.showMessage(`Sold ${quantity} ${item.name}(s)!`);
    }
}