// Handler for registering and managing items assigned to the SELECT button
export default class RegisterItemHandler {
    constructor(scene) {
        this.scene = scene;
        this.registeredItem = null;
    }

    /**
     * Register an item to the SELECT button
     * @param {Object} item - The item to register
     */
    registerItem(item) {
        // Only allow registering if the item is a Key Item or Berry
        if (item.category === 'Key Items' || item.category === 'Berries') {
            // If the same item is already registered, unregister it
            if (this.registeredItem && this.registeredItem.id === item.id) {
                this.unregisterItem();
                return;
            }

            this.registeredItem = item;
            this.showRegistrationConfirmation();
        }
    }

    /**
     * Unregister the currently registered item
     */
    unregisterItem() {
        this.registeredItem = null;
        // Update any UI elements that show the registered item
        this.scene.events.emit('itemUnregistered');
    }

    /**
     * Show a confirmation message when an item is registered
     */
    showRegistrationConfirmation() {
        // Create a temporary text message
        const confirmText = this.scene.add.text(400, 300,
            `${this.registeredItem.name} was registered\nto the SELECT button!`, {
                fontSize: '16px',
                fill: '#000000',
                align: 'center',
                backgroundColor: '#FFFFFF',
                padding: { x: 10, y: 5 }
            });
        confirmText.setOrigin(0.5);

        // Remove the text after 2 seconds
        this.scene.time.delayedCall(2000, () => {
            confirmText.destroy();
        });

        // Emit event for other components to update
        this.scene.events.emit('itemRegistered', this.registeredItem);
    }

    /**
     * Get the currently registered item
     * @returns {Object|null} The registered item or null if none is registered
     */
    getRegisteredItem() {
        return this.registeredItem;
    }

    /**
     * Check if an item is currently registered
     * @param {Object} item - The item to check
     * @returns {boolean} True if the item is registered
     */
    isItemRegistered(item) {
        return this.registeredItem && this.registeredItem.id === item.id;
    }

    /**
     * Activate the registered item from the overworld
     * This method should be called when the SELECT button is pressed
     */
    activateRegisteredItem() {
        if (this.registeredItem) {
            // Trigger the use action for the registered item
            this.scene.itemsHandler.useItem(this.registeredItem);
        }
    }
}