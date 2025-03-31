import { POKEMON_DATA } from './index';
import { MOVES } from '../moves';

export const calculateStats = (pokemon, level) => {
    console.log('[pokemon-data] Calculating stats for:', {
        pokemon,
        level,
        hasData: !!POKEMON_DATA[pokemon],
        availableKeys: Object.keys(POKEMON_DATA)
    });

    const baseStats = POKEMON_DATA[pokemon]?.baseStats;
    
    if (!baseStats) {
        console.error('[pokemon-data] Missing base stats for:', pokemon);
        // Provide fallback stats to prevent crash
        return {
            hp: 50,
            attack: 50,
            defense: 50,
            spAtk: 50,
            spDef: 50,
            speed: 50
        };
    }

    return {
        hp: Math.floor((baseStats.hp * 2 * level) / 100 + level + 10),
        attack: Math.floor((baseStats.attack * 2 * level) / 100 + 5),
        defense: Math.floor((baseStats.defense * 2 * level) / 100 + 5),
        spAtk: Math.floor((baseStats.spAtk * 2 * level) / 100 + 5),
        spDef: Math.floor((baseStats.spDef * 2 * level) / 100 + 5),
        speed: Math.floor((baseStats.speed * 2 * level) / 100 + 5)
    };
};

export function getMovesForLevel(pokemonKey, level) {
    console.log(`[PokemonUtils] Getting moves for ${pokemonKey} at level ${level}`);
    const upperCaseKey = pokemonKey.toUpperCase();
    const pokemonData = POKEMON_DATA[upperCaseKey];

    if (!pokemonData || typeof pokemonData.moves !== 'object') {
        console.warn(`[PokemonUtils] No move data found for ${upperCaseKey}. Default: TACKLE.`);
        return ['TACKLE'];
    }

    let learnedMoveKeys = [];
    for (const levelLearnedStr in pokemonData.moves) {
        const levelLearned = parseInt(levelLearnedStr);
        if (!isNaN(levelLearned) && levelLearned <= level) {
            const movesAtThisLevel = pokemonData.moves[levelLearnedStr];

            if (Array.isArray(movesAtThisLevel)) {
                movesAtThisLevel.forEach(moveEntry => {
                    let moveKeyString = null;
                    if (typeof moveEntry === 'string') {
                        moveKeyString = moveEntry.toUpperCase();
                    } else if (typeof moveEntry === 'object' && moveEntry && moveEntry.name) {
                        moveKeyString = Object.keys(MOVES).find(key => 
                            MOVES[key].name === moveEntry.name && 
                            MOVES[key].type === moveEntry.type
                        );
                        if (!moveKeyString) {
                            console.error(`[PokemonUtils] Could not find KEY in MOVES config for move:`, moveEntry.name);
                        }
                    } else {
                        console.error(`[PokemonUtils] Invalid move entry structure in ${upperCaseKey} data for level ${levelLearnedStr}:`, moveEntry);
                    }

                    if (moveKeyString && MOVES[moveKeyString]) {
                        learnedMoveKeys.push(moveKeyString);
                    } else if (moveKeyString) {
                        console.error(`[PokemonUtils] Move key "${moveKeyString}" derived from ${upperCaseKey} data does not exist in MOVES config!`);
                    }
                });
            } else {
                console.warn(`[PokemonUtils] Move data for level ${levelLearnedStr} was not an array for ${upperCaseKey}`);
            }
        }
    }

    learnedMoveKeys = [...new Set(learnedMoveKeys)];

    console.log(`[PokemonUtils] All moves learned up to level ${level}:`, learnedMoveKeys);

    if (learnedMoveKeys.length === 0) {
        console.warn(`[PokemonUtils] No valid moves found for ${upperCaseKey} up to level ${level}. Default: TACKLE.`);
        return ['TACKLE'];
    }

    return learnedMoveKeys;
}