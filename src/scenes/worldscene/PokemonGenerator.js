// PokemonGenerator.js - Handles wild Pokemon generation
import { POKEMON_DATA, calculateStats } from '../../config/pokemon-data';
import { gameState } from '../../config/game-state';
import { initializePokemonMoves } from '../../utils/moveInitializer';

export default class PokemonGenerator {
    constructor() {
        // Pokemon pools by rarity
        this.commonPokemon = [
            'RATTATA', 'PIDGEY', 'CATERPIE', 'WEEDLE', 'ODDISH', 'BELLSPROUT'
        ];
        
        this.uncommonPokemon = [
            'SPEAROW', 'EKANS', 'SANDSHREW', 'NIDORAN_F', 'NIDORAN_M', 'JIGGLYPUFF'
        ];
        
        this.rarePokemon = [
            'PIKACHU', 'CLEFAIRY', 'VULPIX', 'MANKEY'
        ];
    }

    generateWildPokemon() {
        const rarityRoll = Math.random();
        let pokemonPool;
        
        if (rarityRoll < 0.6) { // 60% common
            pokemonPool = this.commonPokemon;
        } else if (rarityRoll < 0.9) { // 30% uncommon
            pokemonPool = this.uncommonPokemon;
        } else { // 10% rare
            pokemonPool = this.rarePokemon;
        }

        const pokemonKey = pokemonPool[Math.floor(Math.random() * pokemonPool.length)];
        const playerLevel = gameState.pokemon[0]?.level || 5; // Fallback to 5 if no Pokémon
        const level = Math.max(2, Math.min(playerLevel + 3, playerLevel - 2 + Math.floor(Math.random() * 5)));

        const pokemonData = POKEMON_DATA[pokemonKey];
        if (!pokemonData) {
            console.error('[PokemonGenerator] Missing data for Pokémon:', pokemonKey);
            return null;
        }

        const stats = calculateStats(pokemonKey, level);

        // Create the Pokémon object
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

        // Initialize moves using the moveInitializer
        // Pass the pokemon key and level as separate parameters
        pokemon.moves = initializePokemonMoves(pokemon.key, pokemon.level);

        return pokemon;
    }
}