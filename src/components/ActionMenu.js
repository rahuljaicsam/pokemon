export default class ActionMenu {
    constructor(scene) {
        this.scene = scene;
        this.menu = null;
        this.menuIndex = 0;
        this.options = ['Summary', 'Switch', 'Item', 'Cancel'];
    }

    show() {
        // Create action menu background
        const menuX = 600;
        const menuY = 200;
        const menuWidth = 150;
        const menuHeight = 160;

        this.menu = this.scene.add.container(menuX, menuY);
        
        // Add menu background
        const bg = this.scene.add.rectangle(0, 0, menuWidth, menuHeight, 0x000000, 0.9);
        this.menu.add(bg);

        // Add menu options
        this.options.forEach((option, index) => {
            const text = this.scene.add.text(0, -60 + (index * 35), option, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            }).setOrigin(0.5);
            this.menu.add(text);
        });

        this.menuIndex = 0;
        this.updateHighlight();
    }

    hide() {
        if (this.menu) {
            this.menu.destroy();
            this.menu = null;
        }
    }

    updateHighlight() {
        if (!this.menu) return;

        this.menu.list.forEach((item, index) => {
            if (index === 0) return; // Skip background rectangle
            const isSelected = index - 1 === this.menuIndex;
            item.setTint(isSelected ? 0xffff00 : 0xffffff);
        });
    }

    moveUp() {
        this.menuIndex = (this.menuIndex - 1 + this.options.length) % this.options.length;
        this.updateHighlight();
    }

    moveDown() {
        this.menuIndex = (this.menuIndex + 1) % this.options.length;
        this.updateHighlight();
    }

    getSelectedOption() {
        return this.options[this.menuIndex];
    }

    isVisible() {
        return this.menu !== null;
    }
} 