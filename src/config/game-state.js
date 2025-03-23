import { POKEMON_DATA, calculateStats, getMovesForLevel } from './pokemon-data';
import { initializePokemonMoves } from '../utils/moveInitializer';
import databaseService from '../services/database';

class GameState {
    constructor() {
        console.log('[GameState] Initializing game state');
        this.playTime = 0;
        this.initNewGame(); // Initialize with default values first
        this.initialize(); // Start async initialization
    }

    async initialize() {
        await this.loadGame();
    }

    async loadGame() {
        console.log('[GameState] Attempting to load saved game');
        
        // Initialize the database
        const dbInitialized = await databaseService.init();
        if (dbInitialized) {
            // Try to load from database
            const data = await databaseService.loadGameState();
            if (data) {
                console.log('[GameState] Found saved data in database:', {
                    playerName: data.playerName,
                    pokemonCount: data?.pokemon?.length,
                    inventory: data?.inventory
                });
                this.playerName = data.playerName;
                this.playerPosition = data.playerPosition;
                this.pokemon = data.pokemon;
                this.inventory = data.inventory;
                this.badges = data.badges;
                this.pokedex = data.pokedex;
                this.money = data.money;
                this.playTime = data.playTime || 0;
                return;
            }
        }
        
        // If database loading failed or no data found, try localStorage as fallback
        console.log('[GameState] No database data found or database not initialized, trying localStorage');
        this.loadFromLocalStorage();
    }
    
    loadFromLocalStorage() {
        const savedData = localStorage.getItem('pokemonGameSave');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                console.log('[GameState] Found saved data in localStorage:', {
                    playerName: data.playerName,
                    pokemonCount: data?.pokemon?.length,
                    inventory: data?.inventory
                });
                this.playerName = data.playerName;
                this.playerPosition = data.playerPosition;
                this.pokemon = data.pokemon;
                this.inventory = data.inventory;
                this.badges = data.badges;
                this.pokedex = {
                    seen: new Set(data.pokedex.seen),
                    caught: new Set(data.pokedex.caught)
                };
                this.money = data.money;
                this.playTime = data.playTime || 0;
            } catch (error) {
                console.error('[GameState] Error loading saved data from localStorage:', error);
                this.initNewGame();
            }
        } else {
            console.log('[GameState] No saved data found, using default new game values');
        }
    }

    initNewGame() {
        this.playerName = 'Red';
        this.playerPosition = { x: 400, y: 300 };
        this.pokemon = [];
        this.inventory = {
            items: [
                { id: 'POTION', name: 'Potion', quantity: 3 },
                { id: 'POKEBALL', name: 'Poké Ball', quantity: 5 }
            ],
            keyItems: []
        };
        this.badges = 0;
        this.pokedex = {
            seen: new Set(),
            caught: new Set()
        };
        this.money = 3000;
    }

    async saveGame() {
        // Try to save to database first
        if (databaseService.initialized) {
            const success = await databaseService.saveGameState(this);
            if (success) {
                console.log('[GameState] Game saved to database successfully');
                return;
            }
            console.error('[GameState] Failed to save to database, falling back to localStorage');
        } else {
            console.warn('[GameState] Database not initialized, saving to localStorage');
        }
        
        // Fallback to localStorage if database save failed or not initialized
        this.saveToLocalStorage();
    }
    
    saveToLocalStorage() {
        const saveData = {
            playerName: this.playerName,
            playerPosition: this.playerPosition,
            pokemon: this.pokemon,
            inventory: this.inventory,
            badges: this.badges,
            pokedex: {
                seen: Array.from(this.pokedex.seen),
                caught: Array.from(this.pokedex.caught)
            },
            money: this.money,
            playTime: this.playTime
        };
        localStorage.setItem('pokemonGameSave', JSON.stringify(saveData));
        console.log('[GameState] Game saved to localStorage successfully');
    }

    addPokemon(pokemonKey, level) {
        console.log('[GameState] Adding Pokémon:', pokemonKey, 'at level:', level);
        
        const pokemonData = POKEMON_DATA[pokemonKey];
        if (!pokemonData) {
            console.error('[GameState] Missing data for Pokémon:', pokemonKey);
            return null;
        }

        const stats = calculateStats(pokemonKey, level);
        
        const pokemon = {
            key: pokemonKey,
            id: pokemonData.id,
            name: pokemonData.name,
            level,
            types: pokemonData.types,
            stats,
            currentHp: stats.hp,
            exp: level * level * level,
            nextLevelExp: (level + 1) * (level + 1) * (level + 1)
        };

        // Initialize moves
        pokemon.moves = initializePokemonMoves(pokemon.key, pokemon.level);

        this.pokemon.push(pokemon);
        this.pokedex.seen.add(pokemonKey);
        this.pokedex.caught.add(pokemonKey);
        
        console.log('[GameState] Added Pokémon:', pokemon);
        return pokemon;
    }

    useItem(itemId, target) {
        const item = this.inventory.items.find(i => i.id === itemId);
        if (!item || item.quantity <= 0) return false;

        switch(itemId) {
            case 'POTION':
                if (target.currentHp === target.stats.hp) return false;
                target.currentHp = Math.min(target.currentHp + 20, target.stats.hp);
                break;
            case 'POKEBALL':
                // Implement catch mechanics
                break;
            default:
                return false;
        }

        item.quantity--;
        if (item.quantity <= 0) {
            this.inventory.items = this.inventory.items.filter(i => i.id !== itemId);
        }
        return true;
    }

    gainExp(pokemon, amount) {
        pokemon.exp += amount;
        if (pokemon.exp >= pokemon.nextLevelExp) {
            this.levelUp(pokemon);
        }
    }

    levelUp(pokemon) {
        pokemon.level++;
        const newStats = calculateStats(pokemon.key, pokemon.level);
        const hpDiff = newStats.hp - pokemon.stats.hp;
        
        pokemon.stats = newStats;
        pokemon.currentHp += hpDiff;
        pokemon.exp = 0;
        pokemon.nextLevelExp = (pokemon.level + 1) * (pokemon.level + 1) * (pokemon.level + 1);

        // Check for evolution
        const pokemonData = POKEMON_DATA[pokemon.key];
        if (pokemonData.evolution && 
            pokemonData.evolution.level && 
            pokemon.level >= pokemonData.evolution.level) {
            this.evolvePokemon(pokemon);
        }

        // Learn new moves
        const newMoves = getMovesForLevel(pokemon.key, pokemon.level);
        for (const move of newMoves) {
            if (!pokemon.moves.find(m => m.name === move.name)) {
                if (pokemon.moves.length < 4) {
                    pokemon.moves.push(move);
                } else {
                    // TODO: Implement move learning UI
                    console.log(`${pokemon.name} wants to learn ${move.name}`);
                }
            }
        }
    }

    evolvePokemon(pokemon) {
        const pokemonData = POKEMON_DATA[pokemon.key];
        const evolution = pokemonData.evolution;
        
        if (!evolution || !evolution.evolvesTo) return;

        const oldKey = pokemon.key;
        pokemon.key = evolution.evolvesTo;
        const newData = POKEMON_DATA[pokemon.key];
        
        pokemon.id = newData.id;
        pokemon.name = newData.name;
        pokemon.types = newData.types;
        
        const newStats = calculateStats(pokemon.key, pokemon.level);
        const hpDiff = newStats.hp - pokemon.stats.hp;
        pokemon.stats = newStats;
        pokemon.currentHp += hpDiff;

        this.pokedex.seen.add(evolution.evolvesTo);
        this.pokedex.caught.add(evolution.evolvesTo);
    }
}

// Create and export the singleton instance
export const gameState = new GameState();