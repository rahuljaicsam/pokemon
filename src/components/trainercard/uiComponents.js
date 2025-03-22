import { gameState } from '../../config/game-state';
import { logTrainerCard, logTrainerCardError } from './logger';

/**
 * Creates the main trainer card UI element
 * @returns {HTMLElement} The created card element
 */
export const createCardElement = () => {
    logTrainerCard('Creating DOM elements for trainer card');
    const cardElement = document.createElement('div');
    cardElement.className = 'trainer-card';
    cardElement.style.width = '600px';
    cardElement.style.height = '400px';
    cardElement.style.position = 'absolute';
    cardElement.style.left = '50%';
    cardElement.style.top = '50%';
    cardElement.style.transform = 'translate(-50%, -50%)';
    logTrainerCard('Created main card element');
    
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
    
    return cardElement;
};

/**
 * Creates the trainer info section of the card
 * @param {HTMLElement} cardElement - The main card element
 * @returns {Object} Object containing references to created elements
 */
export const createTrainerInfo = (cardElement) => {
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
        timeValue.textContent = '00:00'; // Will be updated by the scene
        logTrainerCard('Set play time', gameState.playTime);
    } catch (error) {
        logTrainerCardError('Failed to set play time', error);
        timeValue.textContent = '00:00';
    }
    timeRow.appendChild(timeLabel);
    timeRow.appendChild(timeValue);
    infoElement.appendChild(timeRow);
    
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
    
    // Add trainer sprite container
    const spriteContainer = document.createElement('div');
    spriteContainer.className = 'trainer-sprite';
    infoContainer.appendChild(spriteContainer);
    
    return {
        infoContainer,
        moneyValue,
        timeValue,
        pokedexValue
    };
};

/**
 * Creates the badges section of the card
 * @param {HTMLElement} cardElement - The main card element
 * @param {Function} createBadgeSlotsFunc - Function to create badge slots
 */
export const createBadgesSection = (cardElement, createBadgeSlotsFunc) => {
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
        createBadgeSlotsFunc(badgeSlots);
        logTrainerCard('Created badge slots');
    } catch (error) {
        logTrainerCardError('Failed to create badge slots', error);
    }
    
    // Add controls hint
    const controlsHint = document.createElement('div');
    controlsHint.className = 'controls-hint';
    controlsHint.textContent = 'B: Back';
    cardElement.appendChild(controlsHint);
};