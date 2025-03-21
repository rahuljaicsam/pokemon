import { MOVES } from '../config/moves';
import { POKEMON_DATA, getMovesForLevel } from '../config/pokemon-data';

export const initializePokemonMoves = (pokemonKey, level, providedMoves = []) => {
    console.log('[MoveInitializer] Initializing moves for:', pokemonKey);
    
    try {
        // First try to use provided moves if available
        if (providedMoves && providedMoves.length > 0) {
            console.log('[MoveInitializer] Using provided moves:', providedMoves);
            const initializedMoves = providedMoves.map(moveKey => createMoveObject(moveKey));
            console.log('[MoveInitializer] Initialized provided moves:', initializedMoves);
            return initializedMoves.filter(move => move !== null);
        }
        
        // Then try to get level moves
        const levelMoves = getMovesForLevel(pokemonKey, level);
        console.log('[MoveInitializer] Level moves:', levelMoves);
        
        // If no level moves, use default moves for the Pokémon
        if (!levelMoves || levelMoves.length === 0) {
            console.log('[MoveInitializer] No moves found for', pokemonKey, '- using default moves');
            const defaultMoves = getDefaultMoves(pokemonKey);
            console.log('[MoveInitializer] Default moves for', pokemonKey, ':', defaultMoves);
            
            // If we have default moves as keys, convert them to move objects
            if (Array.isArray(defaultMoves) && defaultMoves.every(m => typeof m === 'string')) {
                return defaultMoves.map(moveKey => createMoveObject(moveKey));
            }
            
            // If we have default moves as objects, return them directly
            return defaultMoves.map(move => createMoveObject(move));
        }
        
        // Initialize moves with PP values
        const initializedMoves = levelMoves.map(moveKey => createMoveObject(moveKey));
        console.log('[MoveInitializer] Initialized level moves:', initializedMoves);
        return initializedMoves.filter(move => move !== null);
    } catch (error) {
        console.error('[MoveInitializer] Error initializing moves:', error);
        // Return default move on error
        return [createMoveObject('TACKLE')];
    }
};

const createMoveObject = (moveKey) => {
    console.log('[MoveInitializer] Creating move object for key:', moveKey);
    
    // If moveKey is already a full move object, return it
    if (moveKey && typeof moveKey === 'object' && moveKey.name && moveKey.type && moveKey.power) {
        return moveKey;
    }
    
    // Get move data from MOVES object
    const moveData = MOVES[moveKey];
    if (!moveData) {
        console.error('[MoveInitializer] No move data found for key:', moveKey);
        return null;
    }
    
    // Create move object with PP
    return {
        name: moveData.name,
        type: moveData.type,
        power: moveData.power,
        accuracy: moveData.accuracy,
        pp: moveData.pp,
        description: moveData.description,
        category: moveData.category,
        effects: moveData.effects || []
    };
};

export const getDefaultMoves = (pokemonKey) => {
    switch (pokemonKey) {
        case 'SQUIRTLE':
            return ['TACKLE', 'TAIL_WHIP', 'BUBBLE', 'WATER_GUN'];
        case 'CHARMANDER':
            return ['SCRATCH', 'GROWL', 'EMBER', 'METAL_CLAW'];
        case 'BULBASAUR':
            return ['TACKLE', 'GROWL', 'VINE_WHIP', 'LEECH_SEED'];
        case 'BELLSPROUT':
            return ['VINE_WHIP', 'GROWTH'];
        case 'PIKACHU':
            return ['THUNDER_SHOCK', 'GROWL', 'TAIL_WHIP', 'QUICK_ATTACK'];
        case 'JIGGLYPUFF':
            return ['SING', 'POUND', 'DEFENSE_CURL'];
        case 'EEVEE':
            return ['TACKLE', 'TAIL_WHIP', 'SAND_ATTACK', 'QUICK_ATTACK'];
        case 'VAPOREON':
            return ['WATER_GUN', 'QUICK_ATTACK', 'BITE', 'AURORA_BEAM'];
        case 'JOLTEON':
            return ['THUNDER_SHOCK', 'QUICK_ATTACK', 'DOUBLE_KICK', 'THUNDER_WAVE'];
        case 'FLAREON':
            return ['EMBER', 'QUICK_ATTACK', 'BITE', 'FIRE_SPIN'];
        case 'CLEFAIRY':
            return ['POUND', 'GROWL', 'SING', 'DOUBLE_SLAP'];
        case 'VULPIX':
            return ['EMBER', 'TAIL_WHIP', 'QUICK_ATTACK', 'CONFUSE_RAY'];
        case 'MEW':
            return ['PSYCHIC', 'AURA_SPHERE', 'ANCIENT_POWER', 'TRANSFORM'];
        case 'MEWTWO':
            return ['PSYCHIC', 'PSYSTRIKE', 'RECOVER', 'AURA_SPHERE'];
        default:
            return ['TACKLE'];
    }
}; 