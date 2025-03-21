import { gameState } from '../config/game-state';
import { POKEMON_DATA, getMovesForLevel } from '../config/pokemon-data';
import Phaser from 'phaser';
import { initializePokemonMoves } from '../utils/moveInitializer';

export default class PokemonStorageScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PokemonStorage' });
        this.currentBox = 0;
        this.totalBoxes = 8;
        this.boxSize = 30; // Each box can hold 30 Pokemon
        this.selectedSlot = { x: 0, y: 0 };
        this.isPartyView = false;
        this.selectedPokemon = null;
        this.sourceSlot = null; // To track where pokemon was picked from
        this.cursor = null;
        this.gridSlots = [];
        this.partySlots = [];
        this.optionsMenu = null;
        this.movingSprite = null; // Sprite that follows cursor when moving
        this.isMoving = false; // Flag to track if we're in moving state
        this.optionsMenuVisible = false; // Explicit flag for options menu visibility
        this.menuKeyPressed = false; // Flag to prevent repeated menu opening
        
        // Pokemon species to ID mapping
        this.pokemonIds = {
            'BULBASAUR': 1,
            'IVYSAUR': 2,
            'VENUSAUR': 3,
            'CHARMANDER': 4,
            'CHARMELEON': 5,
            'CHARIZARD': 6,
            'SQUIRTLE': 7,
            'WARTORTLE': 8,
            'BLASTOISE': 9,
            'PIKACHU': 25,
            'RAICHU': 26,
            'SANDSHREW': 27,
            'SANDSLASH': 28,
            'NIDORAN_F': 29,
            'NIDORINA': 30,
            'NIDOQUEEN': 31,
            'NIDORAN_M': 32,
            'NIDORINO': 33,
            'NIDOKING': 34,
            'CLEFAIRY': 35,
            'CLEFABLE': 36,
            'VULPIX': 37,
            'NINETALES': 38,
            'JIGGLYPUFF': 39,
            'WIGGLYTUFF': 40,
            'ZUBAT': 41,
            'GOLBAT': 42,
            'ODDISH': 43,
            'GLOOM': 44,
            'VILEPLUME': 45,
            'EEVEE': 133,
            'VAPOREON': 134,
            'JOLTEON': 135,
            'FLAREON': 136,
            'MEWTWO': 150,
            'MEW': 151
        };
        console.log('[PokemonStorage] Constructor initialized');
    }

    preload() {
        console.log('[PokemonStorage] Preload started');
        // Preload Pokemon sprites
        if (gameState.pokemon) {
            gameState.pokemon.forEach(pokemon => {
                if (pokemon && pokemon.key) {
                    const pokemonId = this.getPokemonId(pokemon.key);
                    console.log(`[PokemonStorage] Loading sprite for ${pokemon.key} (ID: ${pokemonId})`);
                    this.load.image(
                        `pokemon-${pokemon.key}`,
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
                    );
                }
            });
        } else {
            console.log('[PokemonStorage] No Pokémon found in gameState');
        }
        
        // Preload additional Pokémon sprites
        const additionalPokemon = ['BULBASAUR', 'CHARMANDER', 'SQUIRTLE', 'PIKACHU', 
                                   'EEVEE', 'JIGGLYPUFF', 'MEWTWO', 'MEW', 'VAPOREON', 
                                   'JOLTEON', 'FLAREON', 'CLEFAIRY', 'VULPIX'];
        
        additionalPokemon.forEach(key => {
            const pokemonId = this.getPokemonId(key);
            console.log(`[PokemonStorage] Loading additional sprite for ${key} (ID: ${pokemonId})`);
            this.load.image(
                `pokemon-${key}`,
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
            );
        });
        
        console.log('[PokemonStorage] Preload completed');
    }

    getPokemonId(key) {
        // Get ID from the mapping or default to 1 (Bulbasaur)
        return this.pokemonIds[key.toUpperCase()] || 1;
    }

    create() {
        console.log('[PokemonStorage] Create started');
        // Create themed background with gradient effect
        const background = this.add.rectangle(400, 300, 800, 600, 0x3A5EA8);
        const mainPanel = this.add.rectangle(400, 300, 780, 580, 0xF0F8FF)
            .setStrokeStyle(2, 0x3A5EA8);
        
        // Add decorative header
        const headerBg = this.add.rectangle(400, 40, 780, 60, 0xE0E0E0)
            .setStrokeStyle(2, 0x3A5EA8);
            
        // Add title with shadow effect
        const title = this.add.text(400, 40, 'POKÉMON STORAGE SYSTEM', {
            fontSize: '24px',
            fontStyle: 'bold',
            fill: '#3A5EA8',
            backgroundColor: '#FFFFFF80',
            padding: { x: 20, y: 5 }
        }).setOrigin(0.5);
        
        // Create box navigation
        this.createBoxNavigation();

        // Create storage grid
        this.createStorageGrid();

        // Create party view
        this.createPartyView();

        // Create info panel
        this.createInfoPanel();

        // Create cursor using triangle shape with outline
        this.cursor = this.add.triangle(0, 0, 0, 0, 15, 15, 0, 30, 0xFFFF00)
            .setStrokeStyle(2, 0x000000);
        this.cursor.setDepth(100);
        this.updateCursorPosition();

        // Add controls text with better styling
        this.add.rectangle(400, 560, 500, 30, 0xFFFFFF)
            .setStrokeStyle(1, 0x3A5EA8);
        this.add.text(400, 560, 'Arrow Keys: Navigate | A: Select | B: Exit | S: Summary', {
            fontSize: '14px',
            fill: '#3A5EA8',
            backgroundColor: '#FFFFFF',
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5);

        // Setup keyboard controls
        this.setupControls();

        // Initialize storage if not exists
        if (!gameState.storage) {
            console.log('[PokemonStorage] Initializing storage');
            gameState.storage = Array(this.totalBoxes).fill(null).map(() => 
                Array(this.boxSize).fill(null)
            );
            
            // Add some sample Pokémon to storage
            this.initializeSamplePokemon();
        }

        // Create options menu (initially hidden)
        this.createOptionsMenu();

        // Display initial box
        this.displayCurrentBox();
        
        console.log('[PokemonStorage] Create completed');
        
        // Add event listener for resume
        this.events.on('resume', this.onSceneResume, this);
    }
    
    onSceneResume(system, data) {
        console.log('[PokemonStorage] Scene resumed');
        this.menuKeyPressed = false;
        
        // Reset any movement that might have been happening
        if (this.isMoving) {
            this.cancelMove();
        }
        
        // Refresh display
        this.displayCurrentBox();
        
        // Reset info text
        this.infoText.setText('Use A to select a Pokémon to move. Use arrow keys to navigate.');
    }
    
    initializeSamplePokemon() {
        console.log('[PokemonStorage] Adding sample Pokémon to storage boxes');
        
        // Import the sample Pokémon initialization function from the storage module
        const { initializeSamplePokemon } = require('./storage/SamplePokemon');
        
        // Create a temporary gameState-like object to collect the Pokémon
        const tempGameState = {
            pokemonList: [],
            addPokemon: function(pokemon) {
                this.pokemonList.push(pokemon);
            }
        };
        
        // Initialize the sample Pokémon into the temporary object
        initializeSamplePokemon(tempGameState);
        
        // Distribute the Pokémon into storage boxes
        const boxSize = 5; // Number of Pokémon per box
        
        tempGameState.pokemonList.forEach((pokemon, index) => {
            const boxIndex = Math.floor(index / boxSize);
            const slotIndex = index % boxSize;
            
            if (boxIndex < this.totalBoxes) {
                gameState.storage[boxIndex][slotIndex] = pokemon;
            }
        });
        
        console.log('[PokemonStorage] Sample Pokémon added to storage boxes');
    }

    createBoxNavigation() {
        console.log('[PokemonStorage] Creating box navigation');
        
        // Create a container for box navigation
        const boxNavContainer = this.add.rectangle(400, 100, 300, 40, 0xFFFFFF)
            .setStrokeStyle(2, 0x3A5EA8);

        this.boxText = this.add.text(400, 100, 'BOX ' + (this.currentBox + 1), {
            fontSize: '20px',
            fontStyle: 'bold',
            fill: '#3A5EA8',
            backgroundColor: '#F0F8FF',
            padding: { x: 15, y: 5 }
        }).setOrigin(0.5);

        // Add navigation arrows with better styling
        const leftArrow = this.add.text(320, 100, '◀', { 
            fontSize: '28px', 
            fill: '#3A5EA8',
            fontStyle: 'bold',
            backgroundColor: '#E8F4FF',
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5);
        
        const rightArrow = this.add.text(480, 100, '▶', { 
            fontSize: '28px', 
            fill: '#3A5EA8',
            fontStyle: 'bold',
            backgroundColor: '#E8F4FF',
            padding: { x: 10, y: 5 }
        }).setOrigin(0.5);
        
        // Make arrows interactive with hover effect
        [leftArrow, rightArrow].forEach(arrow => {
            arrow.setInteractive({ useHandCursor: true })
                .on('pointerover', () => arrow.setStyle({ fill: '#1E90FF' }))
                .on('pointerout', () => arrow.setStyle({ fill: '#3A5EA8' }));
        });
        
        leftArrow.on('pointerdown', () => this.navigateBox(-1));
        rightArrow.on('pointerdown', () => this.navigateBox(1));
    }

    createStorageGrid() {
        console.log('[PokemonStorage] Creating storage grid');
        this.gridSlots = [];
        
        // Add storage section container
        this.add.rectangle(250, 320, 420, 400, 0xFFFFFF)
            .setStrokeStyle(2, 0x3A5EA8);
        
        // Add grid title with better styling
        this.add.text(250, 150, 'STORAGE', {
            fontSize: '18px',
            fontStyle: 'bold',
            fill: '#3A5EA8',
            backgroundColor: '#E8F4FF',
            padding: { x: 15, y: 5 }
        }).setOrigin(0.5);
        
        // Create 6x5 grid for Pokemon storage with more spacing
        for (let row = 0; row < 5; row++) {
            this.gridSlots[row] = [];
            for (let col = 0; col < 6; col++) {
                const x = 100 + col * 90; // Increased horizontal spacing
                const y = 180 + row * 90; // Increased vertical spacing and moved down
                const slot = this.add.rectangle(x, y, 80, 80, 0xEEEEEE)
                    .setStrokeStyle(2, 0x3A5EA8);
                this.gridSlots[row][col] = { slot, x, y };
            }
        }
    }

    createPartyView() {
        console.log('[PokemonStorage] Creating party view');
        this.partySlots = [];
        
        // Add party section container
        this.add.rectangle(650, 320, 120, 400, 0xFFFFFF)
            .setStrokeStyle(2, 0x3A5EA8);
        
        // Add party title with better styling
        this.add.text(650, 150, 'PARTY', {
            fontSize: '18px',
            fontStyle: 'bold',
            fill: '#3A5EA8',
            backgroundColor: '#E8F4FF',
            padding: { x: 15, y: 5 }
        }).setOrigin(0.5);
        
        // Create party Pokemon slots with more spacing
        for (let i = 0; i < 6; i++) {
            const y = 180 + i * 90; // Increased vertical spacing and moved down
            const slot = this.add.rectangle(650, y, 80, 80, 0xFFE4B5)
                .setStrokeStyle(2, 0x3A5EA8);
            this.partySlots.push({ slot, x: 650, y });
        }
    }

    createInfoPanel() {
        console.log('[PokemonStorage] Creating info panel');
        // Create info panel with better styling
        this.infoPanel = this.add.rectangle(400, 480, 700, 50, 0xE8F4FF)
            .setStrokeStyle(2, 0x3A5EA8);
        
        // Add gradient effect to info panel
        const gradientGraphics = this.add.graphics();
        gradientGraphics.fillGradientStyle(0xFFFFFF, 0xFFFFFF, 0xE8F4FF, 0xE8F4FF, 1);
        gradientGraphics.fillRect(50, 455, 700, 50);
        
        this.infoText = this.add.text(400, 480, 'Use A to select a Pokémon to move. Use arrow keys to navigate.', {
            fontSize: '14px',
            fill: '#3A5EA8',
            backgroundColor: '#FFFFFF80',
            padding: { x: 15, y: 5 },
            wordWrap: { width: 660 }
        }).setOrigin(0.5);
    }

    createOptionsMenu() {
        console.log('[PokemonStorage] Creating options menu');
        // Create menu group (initially hidden)
        this.optionsMenu = this.add.group();
        
        // Background
        const bg = this.add.rectangle(650, 420, 150, 100, 0xFFFFFF)
            .setStrokeStyle(2, 0x3A5EA8);
        
        // Options
        const moveOption = this.add.text(650, 400, 'MOVE', {
            fontSize: '14px',
            fill: '#3A5EA8',
            backgroundColor: '#F0F0F0',
            padding: { x: 30, y: 5 }
        }).setOrigin(0.5);
        
        const withdrawOption = this.add.text(650, 440, 'WITHDRAW', {
            fontSize: '14px',
            fill: '#3A5EA8',
            backgroundColor: '#F0F0F0',
            padding: { x: 20, y: 5 }
        }).setOrigin(0.5);
        
        // Add to group
        this.optionsMenu.add(bg);
        this.optionsMenu.add(moveOption);
        this.optionsMenu.add(withdrawOption);
        
        // Hide initially
        this.optionsMenu.setVisible(false);
        this.optionsMenuVisible = false;
        
        // Make options interactive
        moveOption.setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.selectMoveOption();
            });
            
        withdrawOption.setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.selectWithdrawOption();
            });
    }

    selectMoveOption() {
        console.log('[PokemonStorage] Move option selected');
        // Hide the menu and set state to moving
        this.optionsMenu.setVisible(false);
        this.optionsMenuVisible = false;
        this.infoText.setText('Select destination for the Pokémon.');
        
        // Start moving if we haven't already
        if (!this.isMoving) {
            this.startMovingPokemon();
        }
    }
    
    startMovingPokemon() {
        console.log('[PokemonStorage] Starting moving Pokémon');
        // Set moving flag
        this.isMoving = true;
        
        // Get the Pokémon to move
        const slotIndex = this.sourceSlot.isParty ? 
            this.sourceSlot.y :
            this.sourceSlot.y * 6 + this.sourceSlot.x;
            
        const pokemon = this.sourceSlot.isParty ? 
            gameState.pokemon[slotIndex] :
            gameState.storage[this.currentBox][slotIndex];
            
        if (!pokemon) {
            console.error('[PokemonStorage] ERROR: No Pokémon found in selected slot');
            this.cancelMove();
            return;
        }
        
        console.log(`[PokemonStorage] Moving Pokémon: ${pokemon.key} from ${this.sourceSlot.isParty ? 'party' : 'box'}`);
        
        // Create a sprite that follows the cursor
        const targetSlot = this.isPartyView ? 
            this.partySlots[this.selectedSlot.y] :
            this.gridSlots[this.selectedSlot.y][this.selectedSlot.x];
            
        // Remove existing moving sprite if any
        if (this.movingSprite) {
            this.movingSprite.destroy();
        }
        
        try {
            // Create new moving sprite
            this.movingSprite = this.add.sprite(targetSlot.x, targetSlot.y, `pokemon-${pokemon.key}`)
                .setScale(2)
                .setAlpha(0.8)
                .setDepth(110);
                
            console.log(`[PokemonStorage] Created hovering sprite for ${pokemon.key}`);
        } catch (err) {
            console.error('[PokemonStorage] ERROR creating sprite:', err);
            // Fall back to a colored rectangle if sprite fails
            this.movingSprite = this.add.rectangle(targetSlot.x, targetSlot.y, 50, 50, 0xFF00FF)
                .setAlpha(0.8)
                .setDepth(110);
        }
            
        // Store the pokemon reference
        this.selectedPokemon = pokemon;
    }
    
    selectWithdrawOption() {
        console.log('[PokemonStorage] Withdraw option selected');
        // Hide menu, withdraw the selected Pokemon to party if possible
        this.optionsMenu.setVisible(false);
        this.optionsMenuVisible = false;
        
        if (this.isPartyView) {
            console.log('[PokemonStorage] Cannot withdraw from party');
            this.infoText.setText("Can't withdraw from party!");
            this.selectedPokemon = null;
            this.cursor.setFillStyle(0xFFFF00);
            return;
        }
        
        if (gameState.pokemon.length >= 6) {
            console.log('[PokemonStorage] Party is full');
            this.showMessage("Party is full!");
            this.selectedPokemon = null;
            this.cursor.setFillStyle(0xFFFF00);
            return;
        }
        
        // Add to party
        const index = this.selectedSlot.y * 6 + this.selectedSlot.x;
        const pokemon = gameState.storage[this.currentBox][index];
        
        if (!pokemon) {
            console.error('[PokemonStorage] ERROR: No Pokémon found at index', index);
            return;
        }
        
        console.log(`[PokemonStorage] Withdrawing ${pokemon.key} to party`);
        gameState.storage[this.currentBox][index] = null;
        gameState.pokemon.push(pokemon);
        
        this.selectedPokemon = null;
        this.showMessage(`${pokemon.key} was withdrawn to party!`);
        this.displayCurrentBox();
    }

    updateCursorPosition() {
        const targetSlot = this.isPartyView ? 
            this.partySlots[this.selectedSlot.y] :
            this.gridSlots[this.selectedSlot.y][this.selectedSlot.x];

        if (targetSlot) {
            this.cursor.x = targetSlot.x - 45; // Position cursor to the left of the slot
            this.cursor.y = targetSlot.y;
            
            // Update moving sprite position if we're moving
            if (this.isMoving && this.movingSprite) {
                this.movingSprite.x = targetSlot.x;
                this.movingSprite.y = targetSlot.y;
                
                // Add some bounce effect to make it more noticeable 
                this.tweens.add({
                    targets: this.movingSprite,
                    y: targetSlot.y - 5,
                    duration: 100,
                    yoyo: true,
                    repeat: 0
                });
            }
        }
    }

    setupControls() {
        console.log('[PokemonStorage] Setting up controls');
        // Handle arrow key navigation
        this.input.keyboard.on('keydown-UP', () => {
            if (this.optionsMenuVisible) return;
            
            if (this.isPartyView) {
                this.selectedSlot.y = (this.selectedSlot.y - 1 + 6) % 6;
            } else {
                this.selectedSlot.y = (this.selectedSlot.y - 1 + 5) % 5;
            }
            this.updateCursorPosition();
        });

        this.input.keyboard.on('keydown-DOWN', () => {
            if (this.optionsMenuVisible) return;
            
            if (this.isPartyView) {
                this.selectedSlot.y = (this.selectedSlot.y + 1) % 6;
            } else {
                this.selectedSlot.y = (this.selectedSlot.y + 1) % 5;
            }
            this.updateCursorPosition();
        });

        this.input.keyboard.on('keydown-LEFT', () => {
            if (this.optionsMenuVisible) return;
            
            if (!this.isPartyView) {
                this.selectedSlot.x = (this.selectedSlot.x - 1 + 6) % 6;
                this.updateCursorPosition();
            } else {
                this.isPartyView = false;
                this.selectedSlot.x = 5; // Rightmost grid column
                this.updateCursorPosition();
            }
        });

        this.input.keyboard.on('keydown-RIGHT', () => {
            if (this.optionsMenuVisible) return;
            
            if (!this.isPartyView) {
                if (this.selectedSlot.x === 5) {
                    this.isPartyView = true;
                    this.selectedSlot.y = Math.min(this.selectedSlot.y, 5);
                } else {
                    this.selectedSlot.x = (this.selectedSlot.x + 1) % 6;
                }
                this.updateCursorPosition();
            }
        });

        // Selection controls
        this.input.keyboard.on('keydown-A', () => {
            console.log('[PokemonStorage] A key pressed');
            if (this.optionsMenuVisible) {
                console.log('[PokemonStorage] Selecting move option from menu');
                this.optionsMenu.setVisible(false);
                this.optionsMenuVisible = false;
                this.selectMoveOption();
                return;
            }
            
            if (this.isMoving) {
                // Place the Pokémon if we're moving
                console.log('[PokemonStorage] Placing Pokémon with A key');
                this.placePokemon();
                return;
            }
            
            this.handleSelection();
        });
        
        this.input.keyboard.on('keydown-B', () => {
            console.log('[PokemonStorage] B key pressed');
            if (this.optionsMenuVisible) {
                // Close menu if open
                console.log('[PokemonStorage] Closing options menu with B key');
                this.optionsMenu.setVisible(false);
                this.optionsMenuVisible = false;
                this.selectedPokemon = null;
                this.cursor.setFillStyle(0xFFFF00);
                return;
            }
            
            if (this.isMoving) {
                // Cancel moving
                console.log('[PokemonStorage] Canceling move with B key');
                this.cancelMove();
                return;
            }
            
            if (this.selectedPokemon) {
                // Deselect Pokemon if one is selected
                console.log('[PokemonStorage] Deselecting Pokémon with B key');
                this.selectedPokemon = null;
                this.cursor.setFillStyle(0xFFFF00);
                return;
            }
            
            console.log('[PokemonStorage] Exiting storage with B key');
            this.exitStorage();
        });

        // Add Summary key (S key)
        this.input.keyboard.on('keydown-S', () => {
            console.log('[PokemonStorage] S key pressed - Opening summary');
            if (this.optionsMenuVisible || this.isMoving) return;
            
            this.showPokemonSummary();
        });
    }

    cancelMove() {
        console.log('[PokemonStorage] Canceling move');
        // Reset moving state
        this.isMoving = false;
        this.selectedPokemon = null;
        
        // Remove moving sprite
        if (this.movingSprite) {
            this.movingSprite.destroy();
            this.movingSprite = null;
        }
        
        this.cursor.setFillStyle(0xFFFF00);
        this.infoText.setText('Move canceled.');
        
        // Reset after a delay
        this.time.delayedCall(1500, () => {
            if (this.infoText) {
                this.infoText.setText('Use A to select a Pokémon to move. Use arrow keys to navigate.');
            }
        });
    }
    
    placePokemon() {
        console.log('[PokemonStorage] Placing Pokémon');
        if (!this.selectedPokemon) {
            console.error('[PokemonStorage] ERROR: No Pokémon selected to place');
            return;
        }
        
        // Get source and destination info
        const sourceIsParty = this.sourceSlot.isParty;
        const targetIsParty = this.isPartyView;
        const sourceIndex = sourceIsParty ? 
            this.sourceSlot.y : 
            this.sourceSlot.y * 6 + this.sourceSlot.x;
        const targetIndex = targetIsParty ? 
            this.selectedSlot.y : 
            this.selectedSlot.y * 6 + this.selectedSlot.x;
            
        console.log(`[PokemonStorage] Moving from ${sourceIsParty ? 'party' : 'box'} index ${sourceIndex} to ${targetIsParty ? 'party' : 'box'} index ${targetIndex}`);
        
        // Check if target is party and party is full
        if (targetIsParty && !sourceIsParty && gameState.pokemon.length >= 6) {
            console.log('[PokemonStorage] Cannot place in party - party is full');
            this.showMessage("Party is full!");
            this.cancelMove();
            return;
        }
        
        // Don't move to same location
        if (sourceIsParty === targetIsParty && sourceIndex === targetIndex) {
            console.log('[PokemonStorage] Same location, canceling move');
            this.cancelMove();
            return;
        }
        
        try {
            // Save the Pokémon we're moving
            const pokemon = this.selectedPokemon;
            
            console.log(`[PokemonStorage] Moving ${pokemon.key} to ${targetIsParty ? 'party' : 'box'}`);
            
            // Remove from source
            if (sourceIsParty) {
                // Safe check when removing from party
                if (gameState.pokemon[sourceIndex] === pokemon) {
                    gameState.pokemon.splice(sourceIndex, 1);
                } else {
                    console.error('[PokemonStorage] ERROR: Pokémon not found at source in party, trying to remove by value');
                    const idx = gameState.pokemon.indexOf(pokemon);
                    if (idx >= 0) {
                        gameState.pokemon.splice(idx, 1);
                    } else {
                        throw new Error('Could not find Pokémon in party');
                    }
                }
            } else {
                gameState.storage[this.currentBox][sourceIndex] = null;
            }
            
            // Add to destination
            if (targetIsParty) {
                gameState.pokemon.splice(targetIndex, 0, pokemon);
                this.showMessage(`${pokemon.key} was moved to party position ${targetIndex + 1}!`);
            } else {
                gameState.storage[this.currentBox][targetIndex] = pokemon;
                this.showMessage(`${pokemon.key} was moved to Box ${this.currentBox + 1}!`);
            }
        } catch (error) {
            console.error('[PokemonStorage] ERROR during move operation:', error);
            this.showMessage('Error moving Pokémon!');
        }
        
        // Reset moving state
        this.isMoving = false;
        this.selectedPokemon = null;
        
        // Remove moving sprite
        if (this.movingSprite) {
            this.movingSprite.destroy();
            this.movingSprite = null;
        }
        
        this.cursor.setFillStyle(0xFFFF00);
        
        // Refresh display
        this.displayCurrentBox();
    }

    navigateBox(direction) {
        console.log(`[PokemonStorage] Navigating box by ${direction}`);
        if (this.optionsMenuVisible) return;
        
        this.currentBox = (this.currentBox + direction + this.totalBoxes) % this.totalBoxes;
        console.log(`[PokemonStorage] Switched to box ${this.currentBox + 1}`);
        this.displayCurrentBox();
    }

    displayCurrentBox() {
        console.log(`[PokemonStorage] Displaying box ${this.currentBox + 1}`);
        // Clear existing sprites and labels (except the moving sprite)
        const movingSprite = this.movingSprite;
        
        this.children.list
            .filter(child => 
                (child.texture && child.texture.key.startsWith('pokemon-') && child !== movingSprite) || 
                (child.text && child.text.length < 10))
            .forEach(sprite => sprite.destroy());

        // Display box Pokemon
        const box = gameState.storage[this.currentBox];
        for (let i = 0; i < box.length; i++) {
            const pokemon = box[i];
            if (pokemon) {
                try {
                    const row = Math.floor(i / 6);
                    const col = i % 6;
                    const { x, y } = this.gridSlots[row][col];
                    
                    // Add pokemon sprite with adjusted position
                    const sprite = this.add.sprite(x, y - 10, `pokemon-${pokemon.key}`).setScale(1.8);
                    
                    // Add name label with better styling
                    this.add.text(x, y + 30, pokemon.key.substring(0, 7), {
                        fontSize: '12px',
                        fill: '#000',
                        backgroundColor: '#FFFFFF90',
                        padding: { x: 4, y: 2 }
                    }).setOrigin(0.5);
                } catch (error) {
                    console.error(`[PokemonStorage] ERROR rendering Pokémon at index ${i}:`, error);
                }
            }
        }

        // Display party Pokemon
        gameState.pokemon.forEach((pokemon, index) => {
            if (pokemon) {
                try {
                    const { x, y } = this.partySlots[index];
                    
                    // Add pokemon sprite with adjusted position
                    const sprite = this.add.sprite(x, y - 10, `pokemon-${pokemon.key}`).setScale(1.8);
                    
                    // Add name label with better styling
                    this.add.text(x, y + 30, pokemon.key.substring(0, 7), {
                        fontSize: '12px',
                        fill: '#000',
                        backgroundColor: '#FFFFFF90',
                        padding: { x: 4, y: 2 }
                    }).setOrigin(0.5);
                } catch (error) {
                    console.error(`[PokemonStorage] ERROR rendering party Pokémon at index ${index}:`, error);
                }
            }
        });

        // Update box text with new styling
        this.boxText.setText('BOX ' + (this.currentBox + 1));
    }

    handleSelection() {
        console.log('[PokemonStorage] Handling selection');
        // Check if we're in moving state
        if (this.isMoving) {
            console.log('[PokemonStorage] Placing Pokémon in moving state');
            this.placePokemon();
            return;
        }
        
        // Select Pokemon from current slot
        const slotIndex = this.isPartyView ? 
            this.selectedSlot.y :
            this.selectedSlot.y * 6 + this.selectedSlot.x;
            
        const currentSlot = this.isPartyView ? 
            gameState.pokemon[slotIndex] :
            gameState.storage[this.currentBox][slotIndex];
        
        console.log(`[PokemonStorage] Selected slot at ${this.isPartyView ? 'party' : 'box'} index ${slotIndex}`);
        
        if (currentSlot) {
            console.log(`[PokemonStorage] Found Pokémon: ${currentSlot.key}`);
            this.selectedPokemon = currentSlot;
            this.cursor.setFillStyle(0xFF0000); // Red color to show selection
            
            // Store current slot position as source immediately
            this.sourceSlot = {
                x: this.selectedSlot.x,
                y: this.selectedSlot.y,
                isParty: this.isPartyView
            };
            
            // Skip the menu and directly enter move mode
            console.log('[PokemonStorage] Directly entering move mode');
            this.startMovingPokemon();
            
            // Show instruction
            this.infoText.setText(`Moving ${currentSlot.key}. Press A to place, B to cancel.`);
        } else {
            console.log('[PokemonStorage] No Pokémon in selected slot');
            this.showMessage('No Pokémon in this slot!');
        }
    }

    showMessage(text) {
        console.log(`[PokemonStorage] Message: ${text}`);
        this.infoText.setText(text);
        
        // Make sure the message stays visible during moving
        if (!this.isMoving) {
            this.time.delayedCall(2000, () => {
                if (this.infoText && !this.isMoving) {
                    this.infoText.setText('Use A to select a Pokémon to move. Use arrow keys to navigate.');
                }
            });
        }
    }

    exitStorage() {
        console.log('[PokemonStorage] Exiting storage');
        this.scene.stop();
        this.scene.resume('PokemonCenter');
    }

    showPokemonSummary() {
        // Get the currently selected Pokémon
        const slotIndex = this.isPartyView ? 
            this.selectedSlot.y :
            this.selectedSlot.y * 6 + this.selectedSlot.x;
            
        const pokemon = this.isPartyView ? 
            gameState.pokemon[slotIndex] :
            gameState.storage[this.currentBox][slotIndex];

        if (!pokemon) {
            this.showMessage('No Pokémon in this slot!');
            return;
        }

        console.log(`[PokemonStorage] Opening summary for ${pokemon.key}`);
        
        // Pause current scene
        this.scene.pause();
        
        // Launch summary scene with the selected Pokémon's data
        this.scene.launch('Summary', { 
            pokemon: pokemon,
            returnScene: 'PokemonStorage',
            location: this.isPartyView ? 'party' : 'storage',
            boxNumber: this.isPartyView ? null : this.currentBox + 1,
            position: this.isPartyView ? slotIndex + 1 : slotIndex
        });
    }

    update() {
        // Nothing needed here as we handle input with events
    }
}