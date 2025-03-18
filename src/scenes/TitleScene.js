export default class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Title' });
    }

    create() {
        // Add background
        this.add.image(400, 300, 'title-bg').setScale(1);

        // Add title text
        const titleText = this.add.text(400, 100, 'Pokémon Web Game', {
            fontFamily: 'Arial Black',
            fontSize: '64px',
            fill: '#fff',
            stroke: '#000',
            strokeThickness: 8
        });
        titleText.setOrigin(0.5);

        // Create menu options
        const menuItems = [
            { text: 'New Game', scene: 'World' },
            { text: 'Continue', scene: 'World' },
            { text: 'Settings', scene: 'Menu' }
        ];

        menuItems.forEach((item, index) => {
            const y = 250 + (index * 60);
            const menuItem = this.add.text(400, y, item.text, {
                fontFamily: 'Arial',
                fontSize: '32px',
                fill: '#fff',
                stroke: '#000',
                strokeThickness: 4
            });
            
            menuItem.setOrigin(0.5);
            menuItem.setInteractive();

            // Hover effects
            menuItem.on('pointerover', () => {
                menuItem.setScale(1.2);
                menuItem.setTint(0xffff00);
            });

            menuItem.on('pointerout', () => {
                menuItem.setScale(1);
                menuItem.clearTint();
            });

            // Click handler
            menuItem.on('pointerdown', () => {
                if (item.text === 'Continue') {
                    // Load saved game data here
                    const savedData = localStorage.getItem('pokemonGameSave');
                    if (!savedData) {
                        // Show message if no save data exists
                        this.showNoSaveDataMessage();
                        return;
                    }
                }
                this.scene.start(item.scene);
            });
        });

        // Add version text
        const versionText = this.add.text(780, 580, 'v1.0.0', {
            fontFamily: 'Arial',
            fontSize: '16px',
            fill: '#fff'
        });
        versionText.setOrigin(1);
    }

    showNoSaveDataMessage() {
        const messageBox = this.add.graphics();
        messageBox.fillStyle(0x000000, 0.7);
        messageBox.fillRect(200, 250, 400, 100);

        const message = this.add.text(400, 300, 'No save data found!', {
            fontFamily: 'Arial',
            fontSize: '24px',
            fill: '#fff'
        });
        message.setOrigin(0.5);

        // Remove message after 2 seconds
        this.time.delayedCall(2000, () => {
            messageBox.destroy();
            message.destroy();
        });
    }
} 