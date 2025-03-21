import { gameState } from '../config/game-state';
import '../components/trainercard.css';

// Logger utility for trainer card
const logTrainerCard = (message, data) => {
    console.log(`[TrainerCard] ${message}`, data || '');
};

// Error logger utility for trainer card
const logTrainerCardError = (message, error) => {
    console.error(`[TrainerCard] ERROR: ${message}`, error || '');
};

export default class TrainerCardScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TrainerCard' });
        logTrainerCard('TrainerCardScene initialized');
    }

    create() {
        logTrainerCard('Creating trainer card scene');
        try {
            // Add semi-transparent black background
            this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);
        
            // Create DOM element for trainer card
            logTrainerCard('Creating DOM elements for trainer card');
            const cardElement = document.createElement('div');
        cardElement.className = 'trainer-card';
        cardElement.style.width = '600px';
        cardElement.style.height = '400px';
        cardElement.style.position = 'absolute';
        cardElement.style.left = '50%';
        cardElement.style.top = '50%';
        cardElement.style.transform = 'translate(-50%, -50%)';
        
        // Create header
        const headerElement = document.createElement('div');
        headerElement.className = 'trainer-card-header';
        headerElement.textContent = 'TRAINER CARD';
        cardElement.appendChild(headerElement);
        
        // Create ID number
        const idElement = document.createElement('div');
        idElement.className = 'id-number';
        idElement.textContent = `ID No. ${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
        cardElement.appendChild(idElement);
        
        // Create trainer info container
        const infoContainer = document.createElement('div');
        infoContainer.className = 'trainer-info-container';
        cardElement.appendChild(infoContainer);
        
        // Create trainer info section
        const infoElement = document.createElement('div');
        infoElement.className = 'trainer-info';
        infoContainer.appendChild(infoElement);
        
        // Add trainer name
        const nameRow = document.createElement('div');
        nameRow.className = 'info-row';
        const nameLabel = document.createElement('span');
        nameLabel.className = 'info-label';
        nameLabel.textContent = 'NAME:';
        const nameValue = document.createElement('span');
        nameValue.className = 'info-value';
            try {
                nameValue.textContent = gameState.playerName;
                logTrainerCard('Set player name', gameState.playerName);
            } catch (error) {
                logTrainerCardError('Failed to set player name', error);
                nameValue.textContent = 'TRAINER';
            }
        nameRow.appendChild(nameLabel);
        nameRow.appendChild(nameValue);
        infoElement.appendChild(nameRow);
        
        // Add money
        const moneyRow = document.createElement('div');
        moneyRow.className = 'info-row';
        const moneyLabel = document.createElement('span');
        moneyLabel.className = 'info-label';
        moneyLabel.textContent = 'MONEY:';
        const moneyValue = document.createElement('span');
        moneyValue.className = 'info-value';
            try {
                moneyValue.textContent = `₽${gameState.money}`;
                logTrainerCard('Set money value', gameState.money);
            } catch (error) {
                logTrainerCardError('Failed to set money value', error);
                moneyValue.textContent = '₽0';
            }
        moneyRow.appendChild(moneyLabel);
        moneyRow.appendChild(moneyValue);
        infoElement.appendChild(moneyRow);
        this.moneyElement = moneyValue;
        
        // Add time
        const timeRow = document.createElement('div');
        timeRow.className = 'info-row';
        const timeLabel = document.createElement('span');
        timeLabel.className = 'info-label';
        timeLabel.textContent = 'TIME:';
        const timeValue = document.createElement('span');
        timeValue.className = 'info-value';
            // Initialize play time if it doesn't exist
            try {
                if (!gameState.playTime) {
                    logTrainerCard('Initializing play time to 0');
                    gameState.playTime = 0;
                }
                timeValue.textContent = this.formatPlayTime(gameState.playTime);
                logTrainerCard('Set play time', gameState.playTime);
            } catch (error) {
                logTrainerCardError('Failed to set play time', error);
                timeValue.textContent = '00:00';
            }
        timeRow.appendChild(timeLabel);
        timeRow.appendChild(timeValue);
        infoElement.appendChild(timeRow);
        this.timeElement = timeValue;
        
        // Add Pokedex completion
        const pokedexRow = document.createElement('div');
        pokedexRow.className = 'info-row';
        const pokedexLabel = document.createElement('span');
        pokedexLabel.className = 'info-label';
        pokedexLabel.textContent = 'POKÉDEX:';
        const pokedexValue = document.createElement('span');
        pokedexValue.className = 'info-value';
            try {
                const caughtCount = gameState.pokedex?.caught?.size || 0;
                pokedexValue.textContent = `${caughtCount} CAUGHT`;
                logTrainerCard('Set Pokedex count', caughtCount);
            } catch (error) {
                logTrainerCardError('Failed to set Pokedex count', error);
                pokedexValue.textContent = '0 CAUGHT';
            }
        pokedexRow.appendChild(pokedexLabel);
        pokedexRow.appendChild(pokedexValue);
        infoElement.appendChild(pokedexRow);
        this.pokedexElement = pokedexValue;
        
        // Add trainer sprite container
        const spriteContainer = document.createElement('div');
        spriteContainer.className = 'trainer-sprite';
        infoContainer.appendChild(spriteContainer);
        
        // Add badges section
        const badgesContainer = document.createElement('div');
        badgesContainer.className = 'badges-container';
        cardElement.appendChild(badgesContainer);
        
        const badgesTitle = document.createElement('div');
        badgesTitle.className = 'badges-title';
        badgesTitle.textContent = 'BADGES';
        badgesContainer.appendChild(badgesTitle);
        
        // Create badge slots
        const badgeSlots = document.createElement('div');
        badgeSlots.className = 'badge-slots';
        badgesContainer.appendChild(badgeSlots);
            try {
                this.createBadgeSlots(badgeSlots);
                logTrainerCard('Created badge slots');
            } catch (error) {
                logTrainerCardError('Failed to create badge slots', error);
            }
        
        // Add controls hint
        const controlsHint = document.createElement('div');
        controlsHint.className = 'controls-hint';
        controlsHint.textContent = 'B: Back';
        cardElement.appendChild(controlsHint);
        
            // Add the DOM element to the scene
            try {
                this.add.dom(400, 300, cardElement);
                logTrainerCard('Added trainer card DOM element to scene');
            } catch (error) {
                logTrainerCardError('Failed to add DOM element to scene', error);
            }
        
            // Add trainer sprite as a Phaser image on top of the DOM element
            try {
                const sprite = this.add.image(550, 230, 'player').setScale(3);
                sprite.setDepth(1);
                logTrainerCard('Added player sprite to trainer card');
            } catch (error) {
                logTrainerCardError('Failed to add player sprite', error);
            }

        // No need for these elements as they're now part of the DOM

            // Add keyboard controls
            this.input.keyboard.on('keydown-B', () => {
                logTrainerCard('B key pressed, returning to menu');
                this.scene.stop();
                this.scene.resume('InGameMenu');
            });
            logTrainerCard('Keyboard controls initialized');

            // Start timer to update play time
            this.time.addEvent({
                delay: 1000,
                callback: this.updatePlayTime,
                callbackScope: this,
                loop: true
            });
            logTrainerCard('Play time timer started');
        } catch (error) {
            logTrainerCardError('Error in create method', error);
        }
    }

    createBadgeSlots(badgeSlotsContainer) {
        logTrainerCard('Creating badge slots');
        const badgeSlots = 8;
        
        for (let i = 0; i < badgeSlots; i++) {
            const badgeSlot = document.createElement('div');
            badgeSlot.className = 'badge-slot';
            
            // If player has this badge, mark it as earned
            try {
                if (gameState.badges & (1 << i)) {
                    badgeSlot.classList.add('earned');
                    logTrainerCard(`Badge ${i+1} is earned`);
                } else {
                    logTrainerCard(`Badge ${i+1} is not earned`);
                }
            } catch (error) {
                logTrainerCardError(`Failed to check badge ${i+1} status`, error);
            }
            
            badgeSlotsContainer.appendChild(badgeSlot);
        }
    }

    updatePlayTime() {
        try {
            gameState.playTime += 1;
            this.timeElement.textContent = this.formatPlayTime(gameState.playTime);
            // Only log every minute to avoid console spam
            if (gameState.playTime % 60 === 0) {
                logTrainerCard('Updated play time', this.formatPlayTime(gameState.playTime));
            }
        } catch (error) {
            logTrainerCardError('Failed to update play time', error);
        }
    }

    formatPlayTime(seconds) {
        try {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        } catch (error) {
            logTrainerCardError('Failed to format play time', error);
            return '00:00';
        }
    }
}