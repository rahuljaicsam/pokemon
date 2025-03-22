// Handler for toss confirmation dialog in the BagMenu scene
export default class TossConfirmationHandler {
    constructor(scene) {
        this.scene = scene;
        this.isVisible = false;
        this.selectedOption = 0; // 0: No, 1: Yes
        this.item = null;
        this.quantity = 1;
    }

    /**
     * Show the toss confirmation dialog
     * @param {Object} item - The item to be tossed
     */
    showDialog(item) {
        this.isVisible = true;
        this.selectedOption = 0;
        this.item = item;
        this.quantity = 1;
        this.createDialog();
        // Update button hints for confirmation dialog
        this.scene.buttonHintsHandler.updateHints('TOSS_CONFIRMATION', item, this.selectedOption);
    }

    /**
     * Hide the toss confirmation dialog
     */
    hideDialog() {
        this.isVisible = false;
        if (this.dialogContainer) {
            this.dialogContainer.destroy();
            this.dialogContainer = null;
        }
        // Return to action menu
        this.scene.navigationHandler.setCurrentLevel('ACTION_MENU');
        this.scene.buttonHintsHandler.updateHints('ACTION_MENU');
    }

    /**
     * Create the confirmation dialog graphics
     */
    createDialog() {
        if (this.dialogContainer) {
            this.dialogContainer.destroy();
        }

        this.dialogContainer = this.scene.add.container(300, 200);

        // Create dialog background
        const dialogBg = this.scene.add.graphics();
        dialogBg.fillStyle(0xFFFFFF, 0.9);
        dialogBg.fillRect(0, 0, 200, 100);
        dialogBg.lineStyle(2, 0x000000);
        dialogBg.strokeRect(0, 0, 200, 100);

        // Add confirmation text
        const messageText = this.scene.add.text(10, 10,
            `Toss ${this.quantity} ${this.item.name}?\nAre you sure?`, {
                fontSize: '14px',
                fill: '#000000',
                wordWrap: { width: 180 }
            });

        // Add options
        const noText = this.scene.add.text(120, 60, 'NO', {
            fontSize: '16px',
            fill: '#000000'
        });
        const yesText = this.scene.add.text(160, 60, 'YES', {
            fontSize: '16px',
            fill: '#000000'
        });

        this.optionTexts = [noText, yesText];

        // Add all elements to container
        this.dialogContainer.add([dialogBg, messageText, ...this.optionTexts]);

        // Update selection indicator
        this.updateSelection();
    }

    /**
     * Update the selection indicator in the dialog
     */
    updateSelection() {
        this.optionTexts.forEach((text, index) => {
            text.setColor(index === this.selectedOption ? '#FF0000' : '#000000');
        });
    }

    /**
     * Navigate left in the dialog options
     */
    navigateLeft() {
        if (this.isVisible && this.selectedOption > 0) {
            this.selectedOption--;
            this.updateSelection();
            this.scene.buttonHintsHandler.updateHints('TOSS_CONFIRMATION', null, this.selectedOption);
        }
    }

    /**
     * Navigate right in the dialog options
     */
    navigateRight() {
        if (this.isVisible && this.selectedOption < 1) {
            this.selectedOption++;
            this.updateSelection();
            this.scene.buttonHintsHandler.updateHints('TOSS_CONFIRMATION', null, this.selectedOption);
        }
    }

    /**
     * Adjust the quantity of items to toss
     * @param {number} delta - The amount to adjust by (+1 or -1)
     */
    adjustQuantity(delta) {
        if (this.isVisible) {
            const newQuantity = this.quantity + delta;
            if (newQuantity >= 1 && newQuantity <= this.item.quantity) {
                this.quantity = newQuantity;
                this.createDialog(); // Refresh dialog with new quantity
            }
        }
    }

    /**
     * Confirm the toss action
     */
    confirm() {
        if (this.selectedOption === 1) { // YES
            // Actually toss the items
            this.scene.itemsHandler.executeToss(this.item, this.quantity);
        }
        this.hideDialog();
    }
}