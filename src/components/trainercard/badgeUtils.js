import { gameState } from '../../config/game-state';
import { logTrainerCard, logTrainerCardError } from './logger';

/**
 * Creates badge slots in the trainer card
 * @param {HTMLElement} badgeSlotsContainer - The container element for badge slots
 */
export const createBadgeSlots = (badgeSlotsContainer) => {
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
};