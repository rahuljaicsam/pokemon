// Browser-compatible database service using IndexedDB

class DatabaseService {
    constructor() {
        this.db = null;
        this.initialized = false;
        this.dbName = 'pokemon_game';
        this.dbVersion = 1;
    }

    init() {
        return new Promise((resolve) => {
            try {
                console.log('[DatabaseService] Initializing IndexedDB database');
                
                // Open IndexedDB database
                const request = indexedDB.open(this.dbName, this.dbVersion);
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Failed to initialize IndexedDB:', event.target.error);
                    this.initialized = false;
                    resolve(false);
                };
                
                request.onsuccess = (event) => {
                    this.db = event.target.result;
                    this.initialized = true;
                    console.log('[DatabaseService] IndexedDB initialized successfully');
                    resolve(true);
                };
                
                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    this.createStores(db);
                };
            } catch (error) {
                console.error('[DatabaseService] Error initializing IndexedDB:', error);
                this.initialized = false;
                resolve(false);
            }
        });
    }

    createStores(db) {
        console.log('[DatabaseService] Creating object stores');
        
        // Player store
        if (!db.objectStoreNames.contains('player')) {
            db.createObjectStore('player', { keyPath: 'id' });
        }
        
        // Pokemon store
        if (!db.objectStoreNames.contains('pokemon')) {
            db.createObjectStore('pokemon', { keyPath: 'id', autoIncrement: true });
        }
        
        // Inventory store
        if (!db.objectStoreNames.contains('inventory')) {
            db.createObjectStore('inventory', { keyPath: 'id' });
        }
        
        // Pokedex store
        if (!db.objectStoreNames.contains('pokedex')) {
            db.createObjectStore('pokedex', { keyPath: 'id' });
        }
    }

    // Player methods
    async savePlayer(player) {
        if (!this.initialized) return false;
        
        try {
            const transaction = this.db.transaction(['player'], 'readwrite');
            const store = transaction.objectStore('player');
            
            const playerData = {
                id: 1,
                name: player.playerName,
                position_x: player.playerPosition.x,
                position_y: player.playerPosition.y,
                money: player.money,
                badges: player.badges,
                play_time: player.playTime || 0
            };
            
            return new Promise((resolve) => {
                const request = store.put(playerData);
                
                request.onsuccess = () => {
                    console.log('[DatabaseService] Player saved successfully');
                    resolve(true);
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error saving player:', event.target.error);
                    resolve(false);
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in savePlayer transaction:', error);
            return false;
        }
    }

    async loadPlayer() {
        if (!this.initialized) return null;
        
        try {
            const transaction = this.db.transaction(['player'], 'readonly');
            const store = transaction.objectStore('player');
            
            return new Promise((resolve) => {
                const request = store.get(1);
                
                request.onsuccess = () => {
                    const player = request.result;
                    if (!player) {
                        resolve(null);
                        return;
                    }
                    
                    resolve({
                        playerName: player.name,
                        playerPosition: {
                            x: player.position_x,
                            y: player.position_y
                        },
                        money: player.money,
                        badges: player.badges,
                        playTime: player.play_time
                    });
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error loading player:', event.target.error);
                    resolve(null);
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in loadPlayer transaction:', error);
            return null;
        }
    }

    // Pokemon methods
    async savePokemon(pokemonList) {
        if (!this.initialized) return false;
        
        try {
            const transaction = this.db.transaction(['pokemon'], 'readwrite');
            const store = transaction.objectStore('pokemon');
            
            // Clear existing pokemon
            await new Promise((resolve) => {
                const clearRequest = store.clear();
                clearRequest.onsuccess = () => resolve();
                clearRequest.onerror = () => resolve(); // Continue even if clear fails
            });
            
            // Add each pokemon
            const promises = pokemonList.map((pokemon, index) => {
                return new Promise((resolve) => {
                    const pokemonData = {
                        pokemon_id: pokemon.id,
                        pokemon_key: pokemon.key,
                        name: pokemon.name,
                        level: pokemon.level,
                        types: JSON.stringify(pokemon.types),
                        stats: JSON.stringify(pokemon.stats),
                        current_hp: pokemon.currentHp,
                        moves: JSON.stringify(pokemon.moves),
                        exp: pokemon.exp,
                        next_level_exp: pokemon.nextLevelExp,
                        party_position: index
                    };
                    
                    const request = store.add(pokemonData);
                    request.onsuccess = () => resolve(true);
                    request.onerror = (event) => {
                        console.error('[DatabaseService] Error saving pokemon:', event.target.error);
                        resolve(false);
                    };
                });
            });
            
            const results = await Promise.all(promises);
            return results.every(result => result === true);
        } catch (error) {
            console.error('[DatabaseService] Error in savePokemon transaction:', error);
            return false;
        }
    }

    async loadPokemon() {
        if (!this.initialized) return [];
        
        try {
            const transaction = this.db.transaction(['pokemon'], 'readonly');
            const store = transaction.objectStore('pokemon');
            
            return new Promise((resolve) => {
                const request = store.getAll();
                
                request.onsuccess = () => {
                    const pokemons = request.result;
                    if (!pokemons || !pokemons.length) {
                        resolve([]);
                        return;
                    }
                    
                    // Sort by party position
                    pokemons.sort((a, b) => a.party_position - b.party_position);
                    
                    const result = pokemons.map(p => ({
                        id: p.pokemon_id,
                        key: p.pokemon_key,
                        name: p.name,
                        level: p.level,
                        types: JSON.parse(p.types),
                        stats: JSON.parse(p.stats),
                        currentHp: p.current_hp,
                        moves: JSON.parse(p.moves),
                        exp: p.exp,
                        nextLevelExp: p.next_level_exp
                    }));
                    
                    resolve(result);
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error loading pokemon:', event.target.error);
                    resolve([]);
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in loadPokemon transaction:', error);
            return [];
        }
    }

    // Inventory methods
    async saveInventory(inventory) {
        if (!this.initialized) return false;
        
        try {
            const transaction = this.db.transaction(['inventory'], 'readwrite');
            const store = transaction.objectStore('inventory');
            
            // Save inventory with ID 1
            return new Promise((resolve) => {
                const inventoryData = {
                    id: 1,
                    items: inventory.items,
                    keyItems: inventory.keyItems
                };
                
                const request = store.put(inventoryData);
                
                request.onsuccess = () => {
                    console.log('[DatabaseService] Inventory saved successfully');
                    resolve(true);
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error saving inventory:', event.target.error);
                    resolve(false);
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in saveInventory transaction:', error);
            return false;
        }
    }

    async loadInventory() {
        if (!this.initialized) return { items: [], keyItems: [] };
        
        try {
            const transaction = this.db.transaction(['inventory'], 'readonly');
            const store = transaction.objectStore('inventory');
            
            return new Promise((resolve) => {
                const request = store.get(1);
                
                request.onsuccess = () => {
                    const inventory = request.result;
                    if (!inventory) {
                        resolve({ items: [], keyItems: [] });
                        return;
                    }
                    
                    resolve({
                        items: inventory.items || [],
                        keyItems: inventory.keyItems || []
                    });
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error loading inventory:', event.target.error);
                    resolve({ items: [], keyItems: [] });
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in loadInventory transaction:', error);
            return { items: [], keyItems: [] };
        }
    }

    // Pokedex methods
    async savePokedex(pokedex) {
        if (!this.initialized) return false;
        
        try {
            const transaction = this.db.transaction(['pokedex'], 'readwrite');
            const store = transaction.objectStore('pokedex');
            
            // Save pokedex with ID 1
            return new Promise((resolve) => {
                const pokedexData = {
                    id: 1,
                    seen: Array.from(pokedex.seen),
                    caught: Array.from(pokedex.caught)
                };
                
                const request = store.put(pokedexData);
                
                request.onsuccess = () => {
                    console.log('[DatabaseService] Pokedex saved successfully');
                    resolve(true);
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error saving pokedex:', event.target.error);
                    resolve(false);
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in savePokedex transaction:', error);
            return false;
        }
    }

    async loadPokedex() {
        if (!this.initialized) return { seen: new Set(), caught: new Set() };
        
        try {
            const transaction = this.db.transaction(['pokedex'], 'readonly');
            const store = transaction.objectStore('pokedex');
            
            return new Promise((resolve) => {
                const request = store.get(1);
                
                request.onsuccess = () => {
                    const pokedex = request.result;
                    if (!pokedex) {
                        resolve({ seen: new Set(), caught: new Set() });
                        return;
                    }
                    
                    resolve({
                        seen: new Set(pokedex.seen || []),
                        caught: new Set(pokedex.caught || [])
                    });
                };
                
                request.onerror = (event) => {
                    console.error('[DatabaseService] Error loading pokedex:', event.target.error);
                    resolve({ seen: new Set(), caught: new Set() });
                };
            });
        } catch (error) {
            console.error('[DatabaseService] Error in loadPokedex transaction:', error);
            return { seen: new Set(), caught: new Set() };
        }
    }

    // Save all game state
    async saveGameState(gameState) {
        if (!this.initialized) return false;
        
        try {
            const playerSaved = await this.savePlayer(gameState);
            const pokemonSaved = await this.savePokemon(gameState.pokemon);
            const inventorySaved = await this.saveInventory(gameState.inventory);
            const pokedexSaved = await this.savePokedex(gameState.pokedex);
            
            const success = playerSaved && pokemonSaved && inventorySaved && pokedexSaved;
            
            if (success) {
                console.log('[DatabaseService] Game state saved successfully');
            } else {
                console.error('[DatabaseService] Some parts of game state failed to save');
            }
            
            return success;
        } catch (error) {
            console.error('[DatabaseService] Error saving game state:', error);
            return false;
        }
    }

    // Load all game state
    async loadGameState() {
        if (!this.initialized) return null;
        
        try {
            const player = await this.loadPlayer();
            if (!player) return null;
            
            const pokemon = await this.loadPokemon();
            const inventory = await this.loadInventory();
            const pokedex = await this.loadPokedex();
            
            return {
                ...player,
                pokemon,
                inventory,
                pokedex
            };
        } catch (error) {
            console.error('[DatabaseService] Error loading game state:', error);
            return null;
        }
    }

    close() {
        if (this.db) {
            this.db.close();
            this.initialized = false;
            console.log('[DatabaseService] Database connection closed');
        }
    }
}

// Create a singleton instance
const databaseService = new DatabaseService();

// Export the singleton instance
export default databaseService;