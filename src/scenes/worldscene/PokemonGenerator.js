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

            // Water Pokemon Pool
        this.waterPokemon = [
            'SQUIRTLE', 'WARTORTLE', 'BLASTOISE', // Example starters
            'PSYDUCK', 'GOLDUCK',
            'POLIWAG', 'POLIWHIRL', 'POLIWRATH',
            'TENTACOOL', 'TENTACRUEL',
            'SLOWPOKE', 'SLOWBRO',
            'SEEL', 'DEWGONG',
            'SHELLDER', 'CLOYSTER',
            'KRABBY', 'KINGLER',
            'HORSEA', 'SEADRA',
            'GOLDEEN', 'SEAKING',
            'STARYU', 'STARMIE',
            'MAGIKARP', 'GYARADOS',
            'LAPRAS',
            'VAPOREON',
            'OMANYTE', 'OMASTAR',
            'KABUTO', 'KABUTOPS',
            // Add more water types available in your POKEMON_DATA
        ].filter(key => POKEMON_DATA[key]); // Filter to ensure they exist in your data

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

    generateWaterPokemon() {
        console.log('[PokemonGenerator] Generating WATER type Pokemon.');
        if (this.waterPokemon.length === 0) {
            console.error('[PokemonGenerator] No water Pokemon defined or available in POKEMON_DATA!');
            return this.generateWildPokemon(); // Fallback to normal generation
        }
    
        const pokemonKey = this.waterPokemon[Math.floor(Math.random() * this.waterPokemon.length)];
        const playerLevel = gameState.pokemon[0]?.level || 5;
        // Adjust level range slightly for water encounters if desired
        const level = Math.max(5, Math.min(playerLevel + 5, playerLevel - 1 + Math.floor(Math.random() * 5)));
    
        const pokemonData = POKEMON_DATA[pokemonKey];
        if (!pokemonData) {
            console.error('[PokemonGenerator] Missing data for Water Pokémon:', pokemonKey);
            return null; // Or fallback
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
        pokemon.moves = initializePokemonMoves(pokemon.key, pokemon.level);
        return pokemon;
    }

}