import { gameState } from '../config/game-state';
import { calculateDamageMultiplier } from '../config/pokemon-types';
import { POKEMON_BACK_SPRITES } from '../config/pokemon-back-sprites';

export default class BattleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Battle' });
        this.playerPokemon = null;
        this.wildPokemon = null;
        this.battleState = 'START'; // START, PLAYER_TURN, ENEMY_TURN, WIN, LOSE
        this.menuItems = [];
        this.currentMove = null;
        this.isTransitioning = false; // Add flag to prevent multiple transitions
    }

    init(data) {
        console.log('[BattleScene] Initializing battle with data:', {
            playerPokemon: data.playerPokemon?.name,
            wildPokemon: data.wildPokemon?.name,
            previousState: this.battleState
        });
        
        // Reset battle state
        this.battleState = 'START';
        console.log('[BattleScene] Battle state reset to:', this.battleState);
        
        // Store battle data
        this.playerPokemon = data.playerPokemon;
        this.wildPokemon = data.wildPokemon;
        this.isWildBattle = data.isWildBattle;
    }

    create() {
        console.log('[BattleScene] Starting scene creation');
        
        // Validate required data
        if (!this.playerPokemon || !this.wildPokemon) {
            console.error('[BattleScene] Missing required Pokemon data:', {
                playerPokemon: !!this.playerPokemon,
                wildPokemon: !!this.wildPokemon
            });
            this.scene.start('World');
            return;
        }

        // Additional validation
        if (!this.playerPokemon.moves || !this.wildPokemon.moves) {
            console.error('[BattleScene] Missing moves data:', {
                playerMoves: !!this.playerPokemon.moves,
                wildMoves: !!this.wildPokemon.moves
            });
            this.scene.start('World');
            return;
        }

        // Create battle background
        const background = this.add.rectangle(400, 300, 800, 600, 0x87CEEB);
        background.setDepth(0);
        
        // Create battle platforms
        const playerPlatform = this.add.rectangle(200, 400, 200, 40, 0x654321);
        const enemyPlatform = this.add.rectangle(600, 250, 200, 40, 0x654321);
        playerPlatform.setDepth(1);
        enemyPlatform.setDepth(1);
        
        console.log('[BattleScene] Creating Pokemon sprites and UI');
        
        // Create Pokemon sprites with proper depth
        const playerSpriteKey = this.playerPokemon.key;
        const enemySpriteKey = this.wildPokemon.key.toLowerCase();
        
        // Use back sprite for player Pokemon
        this.playerPokemonSprite = this.add.sprite(200, 350, `${playerSpriteKey.toLowerCase()}-back`);
        this.enemyPokemonSprite = this.add.sprite(600, 200, enemySpriteKey);
        
        // Scale sprites appropriately
        this.playerPokemonSprite.setScale(3); // Back sprites are smaller, so scale up more
        this.enemyPokemonSprite.setScale(2);
        
        this.playerPokemonSprite.setDepth(2);
        this.enemyPokemonSprite.setDepth(2);

        // Create HP bars and level display
        this.createHPBars();
        
        // Create battle menu with proper depth
        this.createBattleMenu();
        
        console.log('[BattleScene] Scene creation complete, starting battle sequence');
        
        // Start battle sequence with delay
        this.time.delayedCall(500, () => {
            this.startBattle();
        });
    }

    createHPBars() {
        // Player Pokemon info
        this.add.text(50, 450, `${this.playerPokemon.name} Lv.${this.playerPokemon.level}`, { 
            fontSize: '24px', 
            fill: '#fff' 
        });
        
        const playerHPPercent = (this.playerPokemon.currentHp / this.playerPokemon.stats.hp) * 100;
        this.add.text(50, 480, 'HP:', { fontSize: '20px', fill: '#fff' });
        this.add.rectangle(150, 500, 200, 20, 0x000000);
        this.playerHPBar = this.add.rectangle(150, 500, 200, 20, this.getHPColor(playerHPPercent));
        this.playerHPBar.setOrigin(0, 0.5);
        this.playerHPBar.setScale(playerHPPercent / 100, 1);
        
        // Enemy Pokemon info
        this.add.text(500, 50, `${this.wildPokemon.name} Lv.${this.wildPokemon.level}`, { 
            fontSize: '24px', 
            fill: '#fff' 
        });
        
        const enemyHPPercent = (this.wildPokemon.currentHp / this.wildPokemon.stats.hp) * 100;
        this.add.text(500, 80, 'HP:', { fontSize: '20px', fill: '#fff' });
        this.add.rectangle(600, 100, 200, 20, 0x000000);
        this.enemyHPBar = this.add.rectangle(600, 100, 200, 20, this.getHPColor(enemyHPPercent));
        this.enemyHPBar.setOrigin(0, 0.5);
        this.enemyHPBar.setScale(enemyHPPercent / 100, 1);
    }

    getHPColor(percentage) {
        if (percentage > 50) return 0x00FF00;
        if (percentage > 20) return 0xFFFF00;
        return 0xFF0000;
    }

    createBattleMenu() {
        console.log(`[BattleScene] createBattleMenu called - Current State: ${this.battleState}`);
        console.log('[BattleScene] Creating battle menu');
        
        // Destroy existing menu items if they exist
        if (this.menuItems.length > 0) {
            this.menuItems.forEach(item => item.destroy());
            this.menuItems = [];
        }
        
        // Create menu background with proper depth
        const menuBackground = this.add.rectangle(400, 525, 780, 140, 0x000000);
        menuBackground.setAlpha(0.7);
        menuBackground.setDepth(3);
        console.log('[BattleScene] Menu background created with depth:', menuBackground.depth);
        
        const options = ['Fight', 'Bag', 'Pokemon', 'Run'];
        this.menuItems = options.map((option, index) => {
            const x = 200 + (index % 2) * 400;
            const y = 490 + Math.floor(index / 2) * 70;
            
            const text = this.add.text(x, y, option, {
                fontSize: '32px',
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 4,
                backgroundColor: '#00000000'
            });
            
            text.setDepth(4);
            console.log(`[BattleScene] Created menu item "${option}" with depth:`, text.depth, 'and style:', {
                fill: text.style.color,
                stroke: text.style.stroke,
                strokeThickness: text.style.strokeThickness
            });
            
            text.setInteractive();
            
            text.on('pointerover', () => {
                text.setScale(1.1);
                text.setTint(0xffff00);
            });
            
            text.on('pointerout', () => {
                text.setScale(1);
                text.clearTint();
            });
            
            text.on('pointerdown', () => {
                console.log(`[BattleScene] Menu option clicked: ${option}`);
                this.handleMenuSelection(option);
            });
            
            return text;
        });
        
        console.log('[BattleScene] Battle menu created with options:', options);
    }

    calculateDamage(attacker, defender, move) {
        console.log(`[BattleScene] Calculating damage for ${move.name}:`, {
            attacker: attacker.name,
            defender: defender.name,
            move: move.name,
            attackerLevel: attacker.level,
            attackStat: attacker.stats.attack,
            defenseStat: defender.stats.defense,
            movePower: move.power
        });

        const level = attacker.level;
        const attack = attacker.stats.attack;
        const defense = defender.stats.defense;
        const power = move.power;
        
        // Calculate type effectiveness
        let typeMultiplier = 1;
        defender.types.forEach(defenderType => {
            const multiplier = calculateDamageMultiplier(move.type, defenderType);
            typeMultiplier *= multiplier;
            console.log(`[BattleScene] Type effectiveness against ${defenderType}:`, multiplier);
        });
        
        // Calculate random factor (85-100%)
        const random = Math.random() * 0.15 + 0.85;
        
        // Pokemon damage formula
        const damage = Math.floor(((2 * level / 5 + 2) * power * attack / defense / 50 + 2) * typeMultiplier * random);
        
        console.log('[BattleScene] Damage calculation result:', {
            baseDamage: ((2 * level / 5 + 2) * power * attack / defense / 50 + 2),
            typeMultiplier,
            random,
            finalDamage: damage
        });

        return {
            damage,
            typeMultiplier
        };
    }

    useMove(move) {
        console.log(`[BattleScene] useMove called - Current State: ${this.battleState}, Move: ${move.name}`);
        if (this.isTransitioning) {
            console.log('[BattleScene] Move ignored - transition in progress');
            return;
        }
        
        this.battleState = 'EXECUTING_MOVE';
        this.isTransitioning = true;
        
        console.log(`[BattleScene] ${this.playerPokemon.name} using move: ${move.name}`);
        
        this.showMessage(`${this.playerPokemon.name} used ${move.name}!`);
        
        // Calculate and apply damage
        const damage = this.calculateDamage(this.playerPokemon, this.wildPokemon, move);
        this.wildPokemon.currentHp = Math.max(0, this.wildPokemon.currentHp - damage.damage);
        this.updateHPBars();
        
        // Check if enemy fainted
        if (this.wildPokemon.currentHp <= 0) {
            this.battleState = 'BATTLE_END';
            this.showMessage(`${this.wildPokemon.name} fainted!`);
            this.time.delayedCall(2000, () => {
                const expGained = this.calculateExpGain();
                this.showMessage(`${this.playerPokemon.name} gained ${expGained} EXP!`);
                this.time.delayedCall(2000, () => {
                    this.endBattle(true);
                });
            });
            return;
        }

        // Enemy turn
        this.time.delayedCall(2000, () => {
            this.isTransitioning = false; // Reset transition flag before enemy turn
            this.enemyTurn();
        });
    }

    enemyTurn() {
        console.log(`[BattleScene] enemyTurn called - Current State: ${this.battleState}`);
        if (this.isTransitioning) {
            console.log('[BattleScene] Enemy turn ignored - transition in progress');
            return;
        }

        this.battleState = 'ENEMY_TURN';
        this.isTransitioning = true;
        
        // Get a random move from enemy's moveset
        const availableMoves = this.wildPokemon.moves;
        const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        
        this.showMessage(`${this.wildPokemon.name} used ${move.name}!`);
        
        // Calculate and apply damage
        const damage = this.calculateDamage(this.wildPokemon, this.playerPokemon, move);
        this.playerPokemon.currentHp = Math.max(0, this.playerPokemon.currentHp - damage.damage);
        this.updateHPBars();
        
        // Check if player fainted
        if (this.playerPokemon.currentHp <= 0) {
            this.battleState = 'BATTLE_END';
            this.isTransitioning = false; // Reset transition flag before showing faint message
            this.showMessage(`${this.playerPokemon.name} fainted!`);
            this.time.delayedCall(2000, () => {
                this.endBattle(false);
            });
            return;
        }

        // Return to player turn
        this.time.delayedCall(2000, () => {
            this.isTransitioning = false; // Reset transition flag before player turn
            this.battleState = 'PLAYER_TURN';
            this.showMessage('What will you do?');
            this.createBattleMenu();
        });
    }

    calculateExpGain() {
        const baseExp = this.wildPokemon.level * 3;
        return Math.floor(baseExp * (this.isWildBattle ? 1 : 1.5));
    }

    endBattle(victory) {
        console.log('[BattleScene] Ending battle, victory:', victory, 'current state:', this.battleState);
        
        // Cleanup before transitioning
        this.cleanup();
        
        console.log('[BattleScene] Transitioning to World scene');
        this.scene.start('World');
    }

    cleanup() {
        console.log('[BattleScene] Starting cleanup, current state:', this.battleState);
        
        // Log all active game objects before cleanup
        console.log('[BattleScene] Active game objects before cleanup:', 
            this.children.list.map(obj => ({
                type: obj.type,
                name: obj.name,
                active: obj.active
            }))
        );
        
        // Cleanup existing code
        if (this.menuItems) {
            console.log('[BattleScene] Cleaning up menu items');
            this.menuItems.forEach(item => {
                if (item && item.destroy) item.destroy();
            });
            this.menuItems = [];
        }
        
        if (this.messageText) {
            console.log('[BattleScene] Cleaning up message text');
            this.messageText.destroy();
            this.messageText = null;
        }
        
        console.log('[BattleScene] Cleanup complete');
    }

    showMessage(text) {
        console.log(`[BattleScene] showMessage: "${text}" - Current State: ${this.battleState}`);
        
        // Add a small delay to ensure Phaser is ready
        this.time.delayedCall(50, () => {
            try {
                if (!this.messageText || !this.messageText.active) {
                    console.log('[BattleScene] Creating new message text');
                    if (this.messageText) {
                        this.messageText.destroy();
                    }
                    this.messageText = this.add.text(20, 460, '', {
                        fontSize: '24px',
                        fill: '#fff',
                        wordWrap: { width: 760 }
                    });
                    this.messageText.setDepth(5);
                }
                
                // Use a try-catch specifically for setText
                try {
                    this.messageText.setText(text);
                } catch (textError) {
                    console.error('[BattleScene] Error setting text:', textError);
                    // Attempt to recreate the text object after a small delay
                    this.time.delayedCall(50, () => {
                        try {
                            this.messageText.destroy();
                            this.messageText = this.add.text(20, 460, text, {
                                fontSize: '24px',
                                fill: '#fff',
                                wordWrap: { width: 760 }
                            });
                            this.messageText.setDepth(5);
                        } catch (retryError) {
                            console.error('[BattleScene] Failed to recreate text:', retryError);
                        }
                    });
                }
            } catch (error) {
                console.error('[BattleScene] Critical error in showMessage:', error);
                // Only restart if we're not already transitioning
                if (!this.isTransitioning) {
                    this.scene.restart();
                }
            }
        });
    }

    handleMenuSelection(option) {
        console.log(`[BattleScene] Menu selection: ${option}, Current state: ${this.battleState}`);
        
        if (this.battleState !== 'PLAYER_TURN') {
            console.log(`[BattleScene] Ignoring menu selection - not player turn`);
            return;
        }

        switch (option) {
            case 'Fight':
                this.showFightMenu();
                break;
            case 'Bag':
                this.showBagMenu();
                break;
            case 'Pokemon':
                this.showPokemonMenu();
                break;
            case 'Run':
                this.attemptRun();
                break;
        }
    }

    showFightMenu() {
        this.menuItems.forEach(item => item.destroy());
        
        this.menuItems = this.playerPokemon.moves.map((move, index) => {
            const x = 200 + (index % 2) * 400;
            const y = 490 + Math.floor(index / 2) * 70;
            
            const text = this.add.text(x, y, move.name, {
                fontSize: '32px',
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 4,
                backgroundColor: '#00000000'
            });
            
            text.setDepth(4);
            console.log(`[BattleScene] Created move option "${move.name}" with depth:`, text.depth, 'and style:', {
                fill: text.style.color,
                stroke: text.style.stroke,
                strokeThickness: text.style.strokeThickness
            });
            
            text.setInteractive();
            text.on('pointerover', () => {
                text.setScale(1.1);
                text.setTint(0xffff00);
            });
            
            text.on('pointerout', () => {
                text.setScale(1);
                text.clearTint();
            });
            
            text.on('pointerdown', () => {
                this.useMove(move);
            });
            
            return text;
        });
    }

    showBagMenu() {
        this.menuItems.forEach(item => item.destroy());
        
        const items = gameState.inventory.items;
        this.menuItems = items.map((item, index) => {
            const x = 200;
            const y = 460 + index * 40;
            
            const text = this.add.text(x, y, `${item.name} x${item.quantity}`, {
                fontSize: '24px',
                fill: '#ffffff',
                stroke: '#000000',
                strokeThickness: 4,
                backgroundColor: '#00000000'
            });
            
            text.setDepth(4);
            console.log(`[BattleScene] Created inventory item "${item.name}" with depth:`, text.depth, 'and style:', {
                fill: text.style.color,
                stroke: text.style.stroke,
                strokeThickness: text.style.strokeThickness
            });
            
            text.setInteractive();
            text.on('pointerover', () => {
                text.setScale(1.1);
                text.setTint(0xffff00);
            });
            
            text.on('pointerout', () => {
                text.setScale(1);
                text.clearTint();
            });
            
            text.on('pointerdown', () => {
                this.useItem(item);
            });
            
            return text;
        });
        
        // Add back button
        const backButton = this.add.text(600, 550, 'Back', {
            fontSize: '24px',
            fill: '#fff'
        });
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.createBattleMenu();
        });
        this.menuItems.push(backButton);
    }

    useItem(item) {
        if (gameState.useItem(item.id, this.playerPokemon)) {
            this.showMessage(`Used ${item.name}!`);
            
            // Update HP bar if it was a healing item
            if (item.id === 'POTION') {
                const hpPercentage = this.playerPokemon.currentHp / this.playerPokemon.stats.hp;
                this.playerHPBar.setScale(hpPercentage, 1);
                this.playerHPBar.setFillStyle(this.getHPColor(hpPercentage * 100));
            }
            
            this.time.delayedCall(1500, () => {
                this.enemyTurn();
            });
        } else {
            this.showMessage("Can't use that now!");
            this.time.delayedCall(1500, () => {
                this.showBagMenu();
            });
        }
    }

    attemptRun() {
        if (!this.isWildBattle) {
            this.showMessage("Can't run from a trainer battle!");
            this.time.delayedCall(1500, () => {
                this.createBattleMenu();
            });
            return;
        }

        const escapeOdds = Math.random();
        if (escapeOdds > 0.25) {
            this.showMessage('Got away safely!');
            this.time.delayedCall(1500, () => {
                this.scene.start('World');
            });
        } else {
            this.showMessage("Can't escape!");
            this.time.delayedCall(1500, () => {
                this.enemyTurn();
            });
        }
    }

    showPokemonMenu() {
        this.menuItems.forEach(item => item.destroy());
        
        if (gameState.pokemon.length === 1) {
            this.showMessage('No other Pokémon in party!');
            this.time.delayedCall(1500, () => {
                this.createBattleMenu();
            });
            return;
        }
        
        this.menuItems = gameState.pokemon.map((pokemon, index) => {
            const x = 200;
            const y = 460 + index * 40;
            
            const text = this.add.text(x, y, 
                `${pokemon.name} Lv.${pokemon.level} HP: ${pokemon.currentHp}/${pokemon.stats.hp}`, {
                fontSize: '24px',
                fill: pokemon.currentHp <= 0 ? '#ff0000' : '#fff'
            });
            
            if (pokemon.currentHp > 0) {
                text.setInteractive();
                text.on('pointerover', () => {
                    text.setScale(1.1);
                    text.setTint(0xffff00);
                });
                
                text.on('pointerout', () => {
                    text.setScale(1);
                    text.clearTint();
                });
                
                text.on('pointerdown', () => {
                    this.switchPokemon(pokemon);
                });
            }
            
            return text;
        });
        
        // Add back button
        const backButton = this.add.text(600, 550, 'Back', {
            fontSize: '24px',
            fill: '#fff'
        });
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.createBattleMenu();
        });
        this.menuItems.push(backButton);
    }

    switchPokemon(newPokemon) {
        if (newPokemon === this.playerPokemon) {
            this.showMessage(`${newPokemon.name} is already in battle!`);
            this.time.delayedCall(1500, () => {
                this.showPokemonMenu();
            });
            return;
        }
        
        this.showMessage(`Come back, ${this.playerPokemon.name}!`);
        this.time.delayedCall(1500, () => {
            // Destroy old sprite
            if (this.playerPokemonSprite) {
                this.playerPokemonSprite.destroy();
            }
            
            this.playerPokemon = newPokemon;
            
            // Create new sprite with back sprite
            this.playerPokemonSprite = this.add.sprite(200, 350, `${newPokemon.key.toLowerCase()}-back`);
            this.playerPokemonSprite.setScale(3);
            this.playerPokemonSprite.setDepth(2);
            
            this.showMessage(`Go, ${newPokemon.name}!`);
            
            // Update HP display
            this.createHPBars();
            
            this.time.delayedCall(1500, () => {
                this.enemyTurn();
            });
        });
    }

    startBattle() {
        console.log('[BattleScene] Initializing battle sequence, state:', this.battleState);
        this.battleState = 'START';
        this.isTransitioning = true;

        // Create message text with a small delay to ensure Phaser is ready
        this.time.delayedCall(100, () => {
            try {
                if (!this.messageText) {
                    this.messageText = this.add.text(20, 460, '', {
                        fontSize: '24px',
                        fill: '#fff',
                        wordWrap: { width: 760 }
                    });
                    this.messageText.setDepth(5);
                }

                // Show initial message
                this.messageText.setText(`A wild ${this.wildPokemon.name} appeared!`);

                // Transition to player turn after showing the initial message
                this.time.delayedCall(1500, () => {
                    if (!this.scene.isActive('Battle')) return;
                    
                    try {
                        console.log('[BattleScene] Transitioning to player turn');
                        this.battleState = 'PLAYER_TURN';
                        this.isTransitioning = false;
                        
                        if (!this.messageText || !this.messageText.active) {
                            this.messageText = this.add.text(20, 460, '', {
                                fontSize: '24px',
                                fill: '#fff',
                                wordWrap: { width: 760 }
                            });
                            this.messageText.setDepth(5);
                        }
                        
                        this.messageText.setText('What will you do?');
                        this.createBattleMenu();
                    } catch (error) {
                        console.error('[BattleScene] Error during player turn transition:', error);
                        this.scene.restart();
                    }
                });
            } catch (error) {
                console.error('[BattleScene] Error in battle initialization:', error);
                this.scene.restart();
            }
        });
    }

    updateHPBars() {
        // Update player HP bar
        const hpPercentage = this.playerPokemon.currentHp / this.playerPokemon.stats.hp;
        this.playerHPBar.setScale(hpPercentage, 1);
        this.playerHPBar.setFillStyle(this.getHPColor(hpPercentage * 100));
        
        // Update enemy HP bar
        const enemyHPPercentage = this.wildPokemon.currentHp / this.wildPokemon.stats.hp;
        this.enemyHPBar.setScale(enemyHPPercentage, 1);
        this.enemyHPBar.setFillStyle(this.getHPColor(enemyHPPercentage * 100));
    }
} 