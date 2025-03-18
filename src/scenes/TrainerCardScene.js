import { gameState } from '../config/game-state';

export default class TrainerCardScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TrainerCard' });
    }

    create() {
        // Add semi-transparent black background
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);

        // Add trainer card background
        const cardBg = this.add.rectangle(400, 300, 600, 400, 0x4a90e2);
        cardBg.setStrokeStyle(4, 0x2c5687);

        // Add header
        this.add.text(400, 120, 'TRAINER CARD', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Add trainer name
        this.add.text(200, 180, 'NAME:', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        this.add.text(350, 180, gameState.playerName, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });

        // Add money
        this.add.text(200, 230, 'MONEY:', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        this.moneyText = this.add.text(350, 230, `₽${gameState.money}`, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });

        // Add time
        this.add.text(200, 280, 'TIME:', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        // Initialize play time if it doesn't exist
        if (!gameState.playTime) {
            gameState.playTime = 0;
        }
        
        this.timeText = this.add.text(350, 280, this.formatPlayTime(gameState.playTime), {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });

        // Add Pokedex completion
        this.add.text(200, 330, 'POKÉDEX:', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        const caughtCount = gameState.pokedex.caught.size;
        this.pokedexText = this.add.text(350, 330, `${caughtCount} CAUGHT`, {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        });

        // Add badges section
        this.add.text(400, 380, 'BADGES', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5);

        // Create badge slots
        this.createBadgeSlots();

        // Add controls hint
        this.add.text(400, 500, 'B: Back', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5);

        // Add trainer sprite
        this.add.image(550, 230, 'player').setScale(3);

        // Add keyboard controls
        this.input.keyboard.on('keydown-B', () => {
            this.scene.stop();
            this.scene.resume('InGameMenu');
        });

        // Start timer to update play time
        this.time.addEvent({
            delay: 1000,
            callback: this.updatePlayTime,
            callbackScope: this,
            loop: true
        });
    }

    createBadgeSlots() {
        const badgeSlots = 8;
        const startX = 200;
        const startY = 420;
        const spacing = 50;

        for (let i = 0; i < badgeSlots; i++) {
            const x = startX + (i * spacing);
            const badgeSlot = this.add.circle(x, startY, 20, 0x333333);
            badgeSlot.setStrokeStyle(2, 0xffffff);

            // If player has this badge, fill it
            if (gameState.badges & (1 << i)) {
                // Each bit in the badges integer represents a badge
                this.add.circle(x, startY, 18, 0xffcc00);
            }
        }
    }

    updatePlayTime() {
        gameState.playTime += 1;
        this.timeText.setText(this.formatPlayTime(gameState.playTime));
    }

    formatPlayTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
}