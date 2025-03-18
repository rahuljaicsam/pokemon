export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Menu' });
    }

    create() {
        // Add semi-transparent background
        const bg = this.add.rectangle(400, 300, 800, 600, 0x000000);
        bg.setAlpha(0.8);

        // Add title
        this.add.text(400, 50, 'Settings', {
            fontSize: '48px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Create menu options
        const options = [
            { text: 'Sound: ON', action: () => this.toggleSound() },
            { text: 'Music: ON', action: () => this.toggleMusic() },
            { text: 'Controls', action: () => this.showControls() },
            { text: 'Save Game', action: () => this.saveGame() },
            { text: 'Back to Game', action: () => this.scene.start('World') }
        ];

        options.forEach((option, index) => {
            const y = 150 + (index * 80);
            const text = this.add.text(400, y, option.text, {
                fontSize: '32px',
                fill: '#fff'
            });
            
            text.setOrigin(0.5);
            text.setInteractive();
            
            // Hover effects
            text.on('pointerover', () => {
                text.setScale(1.2);
                text.setTint(0xffff00);
            });
            
            text.on('pointerout', () => {
                text.setScale(1);
                text.clearTint();
            });
            
            text.on('pointerdown', option.action);
        });

        // Add ESC key handler
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.start('World');
        });
    }

    toggleSound() {
        // Implement sound toggle logic
        const soundText = this.children.list.find(child => 
            child.text && child.text.includes('Sound')
        );
        if (soundText) {
            soundText.text = soundText.text.includes('ON') ? 
                'Sound: OFF' : 'Sound: ON';
        }
    }

    toggleMusic() {
        // Implement music toggle logic
        const musicText = this.children.list.find(child => 
            child.text && child.text.includes('Music')
        );
        if (musicText) {
            musicText.text = musicText.text.includes('ON') ? 
                'Music: OFF' : 'Music: ON';
        }
    }

    showControls() {
        // Clear existing menu
        this.children.list.forEach(child => child.destroy());
        
        // Add controls information
        const controls = [
            'Arrow Keys: Move character',
            'Space/Enter: Interact/Confirm',
            'ESC: Open/Close Menu',
            'Z: Back/Cancel'
        ];
        
        // Add title
        this.add.text(400, 50, 'Controls', {
            fontSize: '48px',
            fill: '#fff'
        }).setOrigin(0.5);
        
        // Add control instructions
        controls.forEach((control, index) => {
            this.add.text(400, 150 + (index * 60), control, {
                fontSize: '24px',
                fill: '#fff'
            }).setOrigin(0.5);
        });
        
        // Add back button
        const backButton = this.add.text(400, 500, 'Back', {
            fontSize: '32px',
            fill: '#fff'
        });
        backButton.setOrigin(0.5);
        backButton.setInteractive();
        
        backButton.on('pointerover', () => {
            backButton.setScale(1.2);
            backButton.setTint(0xffff00);
        });
        
        backButton.on('pointerout', () => {
            backButton.setScale(1);
            backButton.clearTint();
        });
        
        backButton.on('pointerdown', () => {
            this.scene.restart();
        });
    }

    saveGame() {
        // Implement save game logic
        const gameData = {
            playerPosition: { x: 400, y: 300 },
            pokemon: [
                {
                    name: 'Pikachu',
                    level: 5,
                    hp: 20,
                    maxHp: 20,
                    moves: [
                        { name: 'Tackle', power: 40, type: 'Normal' },
                        { name: 'Thunder Shock', power: 40, type: 'Electric' }
                    ]
                }
            ],
            items: [],
            badges: 0
        };
        
        try {
            localStorage.setItem('pokemonGameSave', JSON.stringify(gameData));
            this.showMessage('Game saved successfully!');
        } catch (error) {
            this.showMessage('Failed to save game!');
        }
    }

    showMessage(text) {
        const message = this.add.text(400, 550, text, {
            fontSize: '24px',
            fill: '#fff'
        });
        message.setOrigin(0.5);
        
        this.time.delayedCall(2000, () => {
            message.destroy();
        });
    }
} 