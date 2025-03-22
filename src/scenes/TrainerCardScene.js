import { gameState } from '../config/game-state';
import '../components/trainercard.css';
import { logTrainerCard, logTrainerCardError } from '../components/trainercard/logger';
import { formatPlayTime, updatePlayTime } from '../components/trainercard/timeUtils';
import { createBadgeSlots } from '../components/trainercard/badgeUtils';
import { createCardElement, createTrainerInfo, createBadgesSection } from '../components/trainercard/uiComponents';

export default class TrainerCardScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TrainerCard' });
        logTrainerCard('TrainerCardScene constructor called');
    }

    init() {
        logTrainerCard('TrainerCardScene init method called');
        // Check if DOM plugin is available
        if (!this.sys.game.device.features.domElement) {
            logTrainerCardError('DOM element support is not available! Make sure the DOM plugin is enabled in game config.');
            // We'll continue anyway to see what happens
        } else {
            logTrainerCard('DOM element support is available');
        }

        // Check if game config has DOM plugin enabled
        if (this.sys.game.config.dom && this.sys.game.config.dom.createContainer) {
            logTrainerCard('DOM container creation is enabled in game config');
        } else {
            logTrainerCardError('DOM container creation is NOT enabled in game config!');
        }
    }

    preload() {
        logTrainerCard('TrainerCardScene preload method called');
        // Check if player texture exists
        if (!this.textures.exists('player')) {
            logTrainerCardError('Player texture not found! Loading it now...');
            this.load.image('player', '../assets/player.png');
            // Add a load complete callback to verify the texture loaded
            this.load.on('complete', () => {
                logTrainerCard('Asset loading complete. Player texture exists:', this.textures.exists('player'));
            });
        } else {
            logTrainerCard('Player texture already loaded');
        }
    }

    create() {
        logTrainerCard('Creating trainer card scene');
        try {
            // Add semi-transparent black background
            this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);
            logTrainerCard('Added background rectangle');
            
            // Create the main card element
            const cardElement = createCardElement();
            
            // Create trainer info section
            const { timeValue, moneyValue, pokedexValue } = createTrainerInfo(cardElement);
            this.timeElement = timeValue;
            this.moneyElement = moneyValue;
            this.pokedexElement = pokedexValue;
            
            // Create badges section
            createBadgesSection(cardElement, createBadgeSlots);
            
            // Add the DOM element to the scene
            try {
                // Center the DOM element based on the game's width and height
                const domElement = this.add.dom(this.cameras.main.width / 2, this.cameras.main.height / 2, cardElement);
                logTrainerCard('Added trainer card DOM element to scene', domElement);
                // Check if the DOM element was actually added to the scene
                if (!domElement) {
                    logTrainerCardError('DOM element was not added to the scene!');
                }
                
                // Make sure the DOM element stays centered if the window is resized
                this.scale.on('resize', (gameSize) => {
                    domElement.x = gameSize.width / 2;
                    domElement.y = gameSize.height / 2;
                });
            } catch (error) {
                logTrainerCardError('Failed to add DOM element to scene', error);
                // Try to add a text element as a fallback
                this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'TRAINER CARD (DOM not available)', {
                    fontSize: '24px',
                    fill: '#ffffff',
                    align: 'center'
                }).setOrigin(0.5);
                logTrainerCard('Added fallback text element');
            }
        
            // Add trainer sprite as a Phaser image on top of the DOM element
            try {
                if (this.textures.exists('player')) {
                    const sprite = this.add.image(550, 230, 'player').setScale(3);
                    sprite.setDepth(1);
                    logTrainerCard('Added player sprite to trainer card');
                } else {
                    logTrainerCardError('Player texture does not exist! Cannot add player sprite.');
                    // Add a placeholder rectangle instead
                    const placeholder = this.add.rectangle(550, 230, 48, 48, 0x00ff00);
                    placeholder.setDepth(1);
                    logTrainerCard('Added placeholder rectangle for player sprite');
                }
            } catch (error) {
                logTrainerCardError('Failed to add player sprite', error);
            }

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
                callback: updatePlayTime,
                callbackScope: this,
                loop: true
            });
            logTrainerCard('Play time timer started');
        } catch (error) {
            logTrainerCardError('Error in create method', error);
            // Add a fallback UI in case of error
            this.add.text(400, 300, 'Error loading Trainer Card\nPress B to return', {
                fontSize: '24px',
                fill: '#ffffff',
                align: 'center'
            }).setOrigin(0.5);
            
            // Still add the keyboard control to go back
            this.input.keyboard.on('keydown-B', () => {
                this.scene.stop();
                this.scene.resume('InGameMenu');
            });
        }
    }

    // Format play time is now imported from timeUtils.js
    formatPlayTime(seconds) {
        return formatPlayTime(seconds);
    }
}