import { logTrainerCard, logTrainerCardError } from './logger';

/**
 * Formats the play time in seconds to a readable format (HH:MM)
 * @param {number} seconds - The play time in seconds
 * @returns {string} - Formatted time string
 */
export const formatPlayTime = (seconds) => {
    try {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } catch (error) {
        logTrainerCardError('Failed to format play time', error);
        return '00:00';
    }
};

/**
 * Updates the play time in the game state and updates the UI
 * @param {object} scene - The Phaser scene
 * @param {object} gameState - The game state object
 * @param {HTMLElement} timeElement - The DOM element to update
 */
export const updatePlayTime = function() {
    try {
        // 'this' refers to the scene
        const gameState = this.scene.systems.game.registry.values.gameState;
        gameState.playTime += 1;
        this.timeElement.textContent = formatPlayTime(gameState.playTime);
        // Only log every minute to avoid console spam
        if (gameState.playTime % 60 === 0) {
            logTrainerCard('Updated play time', formatPlayTime(gameState.playTime));
        }
    } catch (error) {
        logTrainerCardError('Failed to update play time', error);
    }
};