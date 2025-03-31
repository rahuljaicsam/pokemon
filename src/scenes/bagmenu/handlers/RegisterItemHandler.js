// Handler for registering items in the BagMenu scene
export default class RegisterItemHandler {
    constructor(scene) {
        this.scene = scene;
        this.isVisible = false;
        this.selectedOption = 0; // 0: No, 1: Yes
        this.item = null;
    }

    /**
     * Show the register confirmation dialog
     * @param {Object} item - The item to be registered
     */
    showDialog(item) {
        this.isVisible = true;
        this.selectedOption = 0;
        this.item = item;
        this.createDialog();
        // Update button hints for confirmation dialog
        this.scene.buttonHintsHandler.updateHints('REGISTER_CONFIRMATION', item, this.selectedOption);
    }

    /**
     * Hide the register confirmation dialog
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
            `Register ${this.item.name}?\nAre you sure?`, {
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
            this.scene.buttonHintsHandler.updateHints('REGISTER_CONFIRMATION', null, this.selectedOption);
        }
    }

    /**
     * Navigate right in the dialog options
     */
    navigateRight() {
        if (this.isVisible && this.selectedOption < 1) {
            this.selectedOption++;
            this.updateSelection();
            this.scene.buttonHintsHandler.updateHints('REGISTER_CONFIRMATION', null, this.selectedOption);
        }
    }

    /**
     * Confirm the register action
     */
    confirm() {
        if (this.selectedOption === 1) { // YES
            // Execute the registration
            this.scene.itemsHandler.executeRegister(this.item);
        }
        this.hideDialog();
    }
}