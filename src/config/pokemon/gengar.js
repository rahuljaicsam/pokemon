import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GENGAR = {
    id: 94,
    name: 'Gengar',
    types: [TYPES.GHOST, TYPES.POISON],
    baseStats: { hp: 60, attack: 65, defense: 60, spAtk: 130, spDef: 75, speed: 110 },
    moves: {
        1: [MOVES.LICK, MOVES.HYPNOSIS, MOVES.SPITE, MOVES.MEAN_LOOK, MOVES.SHADOW_PUNCH],
        8: [MOVES.SPITE],
        13: [MOVES.MEAN_LOOK],
        16: [MOVES.CURSE],
        21: [MOVES.NIGHT_SHADE],
        28: [MOVES.CONFUSE_RAY],
        33: [MOVES.SUCKER_PUNCH],
        36: [MOVES.SHADOW_BALL],
        41: [MOVES.DREAM_EATER],
        48: [MOVES.DARK_PULSE],
        53: [MOVES.DESTINY_BOND],
        60: [MOVES.SHADOW_PUNCH],
        65: [MOVES.NIGHTMARE]
    },
    height: 1.5, // in meters
    weight: 40.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 225,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 },
    evolvesFrom: 'HAUNTER'
};