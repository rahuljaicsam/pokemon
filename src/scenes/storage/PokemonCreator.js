import { POKEMON_DATA } from '../../config/pokemon-data';
import { initializePokemonMoves } from '../../utils/moveInitializer';

export const createPokemonData = (key, level, stats, moves, types, nature, ability) => {
    console.log(`[PokemonStorage] Creating Pokémon data for ${key} at level ${level}`);
    const pokemonData = POKEMON_DATA[key];
    if (!pokemonData) {
        console.error('[PokemonStorage] Missing data for Pokémon:', key);
        return null;
    }

    console.log(`[PokemonStorage] Raw moves from POKEMON_DATA for ${key}:`, pokemonData.moves);
    console.log(`[PokemonStorage] Moves passed to createPokemonData:`, moves);

    // Initialize moves properly
    const initializedMoves = initializePokemonMoves(key, level, moves);
    console.log(`[PokemonStorage] Initialized moves for ${key}:`, initializedMoves);

    const pokemon = {
        key,
        id: pokemonData.id,
        name: pokemonData.name,
        level,
        stats: {
            hp: stats.hp,
            attack: stats.attack,
            defense: stats.defense,
            spAttack: stats.spAttack || stats.attack,
            spDefense: stats.spDefense || stats.defense,
            speed: stats.speed || 50
        },
        currentHp: stats.hp,
        moves: initializedMoves,
        types: types || [key.toUpperCase()],
        nature: nature || 'HARDY',
        ability: ability || 'NONE',
        exp: level * 25,
        nextLevelExp: (level + 1) * 25
    };

    console.log(`[PokemonStorage] Created Pokémon object for ${key}:`, pokemon);
    return pokemon;
}; 