// Input component for the ShopMenu scene

export default class ShopMenuInput {
    constructor(scene) {
        this.scene = scene;
        
        // Add keyboard controls
        this.setupKeyboardControls();
    }
    
    /**
     * Set up keyboard controls for the shop menu
     */
    setupKeyboardControls() {
        this.scene.input.keyboard.on('keydown-UP', () => this.handleUpKey());
        this.scene.input.keyboard.on('keydown-DOWN', () => this.handleDownKey());
        this.scene.input.keyboard.on('keydown-LEFT', () => this.handleLeftKey());
        this.scene.input.keyboard.on('keydown-RIGHT', () => this.handleRightKey());
        this.scene.input.keyboard.on('keydown-A', () => this.handleAKey());
        this.scene.input.keyboard.on('keydown-B', () => this.handleBKey());
    }
    
    /**
     * Handle the UP key press
     */
    handleUpKey() {
        if (this.scene.isSelectingQuantity) return;

        if (this.scene.isInItemList) {
            const items = this.scene.itemsHandler.getCurrentItems();
            if (items.length > 0) {
                this.scene.selectedItem = (this.scene.selectedItem - 1 + items.length) % items.length;
            }
        } else {
            this.scene.selectedOption = (this.scene.selectedOption - 1 + this.scene.shopOptions.length) % this.scene.shopOptions.length;
        }
        this.scene.updateSelection();
    }
    
    /**
     * Handle the DOWN key press
     */
    handleDownKey() {
        if (this.scene.isSelectingQuantity) return;

        if (this.scene.isInItemList) {
            const items = this.scene.itemsHandler.getCurrentItems();
            if (items.length > 0) {
                this.scene.selectedItem = (this.scene.selectedItem + 1) % items.length;
            }
        } else {
            this.scene.selectedOption = (this.scene.selectedOption + 1) % this.scene.shopOptions.length;
        }
        this.scene.updateSelection();
    }
    
    /**
     * Handle the LEFT key press
     */
    handleLeftKey() {
        if (this.scene.isSelectingQuantity) {
            this.scene.itemQuantity = Math.max(1, this.scene.itemQuantity - 1);
            this.scene.ui.updateQuantityText(this.scene.itemQuantity);
        }
    }
    
    /**
     * Handle the RIGHT key press
     */
    handleRightKey() {
        if (this.scene.isSelectingQuantity) {
            const maxQuantity = this.scene.itemsHandler.getMaxQuantity();
            this.scene.itemQuantity = Math.min(maxQuantity, this.scene.itemQuantity + 1);
            this.scene.ui.updateQuantityText(this.scene.itemQuantity);
        }
    }
    
    /**
     * Handle the A key press
     */
    handleAKey() {
        if (this.scene.isSelectingQuantity) {
            this.confirmTransaction();
            return;
        }

        if (this.scene.isInItemList) {
            const items = this.scene.itemsHandler.getCurrentItems();
            if (items.length > 0) {
                this.startQuantitySelection();
            }
        } else {
            const option = this.scene.shopOptions[this.scene.selectedOption];
            if (option === 'Exit') {
                this.scene.exitShop();
            } else {
                this.scene.isInItemList = true;
                this.scene.selectedItem = 0;
                this.scene.updateSelection();
            }
        }
    }
    
    /**
     * Handle the B key press
     */
    handleBKey() {
        if (this.scene.isSelectingQuantity) {
            this.scene.isSelectingQuantity = false;
            this.scene.ui.quantityText?.destroy();
            this.scene.updateSelection();
        } else if (this.scene.isInItemList) {
            this.scene.isInItemList = false;
            this.scene.selectedItem = 0;
            this.scene.updateSelection();
        } else {
            this.scene.exitShop();
        }
    }
    
    /**
     * Start the quantity selection process
     */
    startQuantitySelection() {
        this.scene.isSelectingQuantity = true;
        this.scene.itemQuantity = 1;
        this.scene.ui.createQuantitySelector();
    }
    
    /**
     * Confirm the transaction
     */
    confirmTransaction() {
        this.scene.transactionHandler.processTransaction(this.scene.itemQuantity);
        this.scene.isSelectingQuantity = false;
        this.scene.ui.quantityText.destroy();
        this.scene.updateSelection();
    }
}