// Handler for action menu in the BagMenu scene
import TossConfirmationHandler from './TossConfirmationHandler';
import RegisterItemHandler from './RegisterItemHandler';

export default class ActionMenuHandler {
    constructor(scene) {
        this.scene = scene;
        this.isVisible = false;
        this.selectedAction = 0;
        this.actions = [];
        // Initialize handlers
        this.tossConfirmationHandler = new TossConfirmationHandler(scene);
        this.registerItemHandler = new RegisterItemHandler(scene);
    }

    /**
     * Show the action menu for the selected item
     * @param {Object} item - The selected item
     */
    showMenu(item) {
        this.isVisible = true;
        this.actions = this.getAvailableActions(item);
        // Set default action to USE if available
        this.selectedAction = this.actions.indexOf('USE') !== -1 ? this.actions.indexOf('USE') : 0;
        this.createActionMenu();
        // Update button hints for action menu
        this.scene.buttonHintsHandler.updateHints('ACTION_MENU', item, this.selectedAction);
    }

    /**
     * Hide the action menu
     */
    hideMenu() {
        this.isVisible = false;
        // Clean up menu graphics
        if (this.menuContainer) {
            this.menuContainer.destroy();
            this.menuContainer = null;
        }
        // Update navigation state
        this.scene.navigationHandler.setCurrentLevel('ITEM_LIST');
        // Update button hints back to item list
        this.scene.buttonHintsHandler.updateHints('ITEM_LIST');
    }

    /**
     * Get available actions based on item type
     * @param {Object} item - The item to get actions for
     * @returns {Array} Array of available actions
     */
    getAvailableActions(item) {
        const actions = [];
        
        switch(item.category) {
            case 'Items':
                actions.push('USE');
                actions.push('TOSS');
                break;
            case 'Poké Balls':
                actions.push('USE');
                actions.push('TOSS');
                break;
            case 'Key Items':
                actions.push('USE');
                actions.push('REGISTER');
                break;
            case 'TMs & HMs':
                if (item.type === 'TM') {
                    actions.push('LEARN');
                    actions.push('TOSS');
                } else {
                    actions.push('LEARN');
                }
                break;
            case 'Berries':
                actions.push('USE');
                actions.push('TOSS');
                actions.push('REGISTER');
                break;
        }
        
        return actions;
    }

    /**
     * Create the action menu graphics
     */
    createActionMenu() {
        // Clean up existing menu if any
        if (this.menuContainer) {
            this.menuContainer.destroy();
        }

        // Create menu container with proper positioning and depth
        this.menuContainer = this.scene.add.container(500, 200);
        this.menuContainer.setDepth(100); // Ensure menu appears above other UI elements

        // Create menu background with border
        const menuBg = this.scene.add.graphics();
        menuBg.lineStyle(2, 0x000000, 1);
        menuBg.fillStyle(0xFFFFFF, 0.9);
        menuBg.fillRect(0, 0, 120, this.actions.length * 30 + 20);
        menuBg.strokeRect(0, 0, 120, this.actions.length * 30 + 20);
        menuBg.lineStyle(2, 0x000000);
        menuBg.strokeRect(0, 0, 120, this.actions.length * 30 + 20);

        // Add actions text
        this.actionTexts = this.actions.map((action, index) => {
            const text = this.scene.add.text(10, 10 + index * 30, action, {
                fontSize: '16px',
                fill: '#000000'
            });
            return text;
        });

        // Add all elements to container
        this.menuContainer.add(menuBg);
        this.actionTexts.forEach(text => this.menuContainer.add(text));

        // Update selection indicator
        this.updateSelection();
    }

    /**
     * Update the selection indicator in the menu
     */
    updateSelection() {
        this.actionTexts.forEach((text, index) => {
            text.setColor(index === this.selectedAction ? '#FF0000' : '#000000');
        });
    }

    /**
     * Navigate up in the action menu
     */
    navigateUp() {
        if (this.isVisible && this.selectedAction > 0) {
            this.selectedAction--;
            this.updateSelection();
            // Update button hints with new selection
            this.scene.buttonHintsHandler.updateHints('ACTION_MENU', null, this.selectedAction);
        }
    }

    /**
     * Navigate down in the action menu
     */
    navigateDown() {
        if (this.isVisible && this.selectedAction < this.actions.length - 1) {
            this.selectedAction++;
            this.updateSelection();
            // Update button hints with new selection
            this.scene.buttonHintsHandler.updateHints('ACTION_MENU', null, this.selectedAction);
        }
    }

    /**
     * Execute the selected action
     * @param {Object} item - The item to perform the action on
     */
    executeAction(item) {
        const action = this.actions[this.selectedAction];
        switch(action) {
            case 'USE':
                this.scene.itemsHandler.useItem(item);
                this.hideMenu();
                break;
            case 'TOSS':
                this.tossConfirmationHandler.showDialog(item);
                break;
            case 'REGISTER':
                this.registerItemHandler.registerItem(item);
                this.hideMenu();
                break;
            case 'LEARN':
                this.scene.itemsHandler.learnMove(item);
                this.hideMenu();
                break;
        }
    }
}