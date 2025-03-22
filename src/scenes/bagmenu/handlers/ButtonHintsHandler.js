// Handler for button hints in the BagMenu scene
export default class ButtonHintsHandler {
    constructor(scene) {
        this.scene = scene;
        this.container = null;
        this.currentContext = 'ITEM_LIST';
        this.hints = [];
        console.log('[ButtonHintsHandler] Initialized');
    }

    createHints() {
        console.log('[ButtonHintsHandler] Creating hints container');
        this.container = this.scene.add.container(0, 550); // Position at bottom of screen

        // Create background
        const bg = this.scene.add.graphics();
        bg.fillStyle(0x000000, 0.8);
        bg.fillRect(0, 0, 800, 50);
        this.container.add(bg);

        // Initialize empty hints array
        this.hints = [];
        this.updateHints();
        console.log('[ButtonHintsHandler] Hints container created');
    }

    updateHints(context = 'ITEM_LIST', item = null, selectedAction = 0) {
        console.log(`[ButtonHintsHandler] Updating hints - Context: ${context}, Container exists: ${!!this.container}`);
        if (!this.container) {
            console.warn('[ButtonHintsHandler] Container not initialized, calling createHints()');
            this.createHints();
        }
        this.currentContext = context;
        
        // Clear existing hints
        this.hints.forEach(hint => hint.destroy());
        this.hints = [];

        const hintConfigs = this.getHintConfigs(context, item, selectedAction);
        
        // Create new hints
        hintConfigs.forEach((config, index) => {
            const x = 20 + (index * 200);
            
            // Create button circle
            const button = this.scene.add.graphics();
            button.lineStyle(2, 0xFFFFFF);
            button.strokeCircle(x + 15, 25, 15);
            
            // Add button text
            const buttonText = this.scene.add.text(x + 15, 25, config.button, {
                fontSize: '14px',
                fill: '#FFFFFF'
            }).setOrigin(0.5);
            
            // Add action text
            const actionText = this.scene.add.text(x + 40, 25, config.action, {
                fontSize: '16px',
                fill: config.highlighted ? '#FFD700' : '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            this.hints.push(button, buttonText, actionText);
            this.container.add([button, buttonText, actionText]);
        });
    }

    /**
     * Get hint configurations based on context and item
     * @param {string} context - Current context
     * @param {Object} item - Selected item
     * @param {number} selectedAction - Selected action index
     * @returns {Array} Array of hint configurations
     */
    getHintConfigs(context, item, selectedAction) {
        const configs = [];
        
        if (context === 'ITEM_LIST') {
            configs.push({ button: 'A', action: 'USE', highlighted: false });
            
            // Show REGISTER for Key Items and Berries
            if (item && (item.category === 'Key Items' || item.category === 'Berries')) {
                configs.push({ button: 'SELECT', action: 'REGISTER', highlighted: false });
            }
            
            configs.push({ button: 'B', action: 'BACK', highlighted: false });
        } else if (context === 'ACTION_MENU') {
            const actions = this.scene.actionMenuHandler.actions;
            actions.forEach((action, index) => {
                configs.push({
                    button: index === 0 ? 'A' : index === 1 ? 'X' : 'Y',
                    action: action,
                    highlighted: index === selectedAction
                });
            });
            configs.push({ button: 'B', action: 'BACK', highlighted: false });
        }
        
        return configs;
    }

    /**
     * Clean up hints when leaving the scene
     */
    destroy() {
        if (this.container) {
            this.container.destroy();
            this.container = null;
        }
    }
}