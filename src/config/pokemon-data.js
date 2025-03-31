import { POKEMON_DATA } from './pokemon/index';
import { calculateStats, getMovesForLevel } from './pokemon/utils';

// Re-export everything
export { POKEMON_DATA, calculateStats, getMovesForLevel };

// Utility function for checking Pokemon validity
export const isPokemonValid = (pokemonKey) => ({
    hasData: !!POKEMON_DATA[pokemonKey.toUpperCase()], // Use uppercase key for lookup
});

console.log('[pokemon-data] Simplified: Using imported POKEMON_DATA:', {
    count: Object.keys(POKEMON_DATA).length,
    firstKey: Object.keys(POKEMON_DATA)[0],
    hasData: !!POKEMON_DATA
});