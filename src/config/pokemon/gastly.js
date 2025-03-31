import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GASTLY = {
    id: 92,
    name: 'Gastly',
    types: [TYPES.GHOST, TYPES.POISON],
    baseStats: { hp: 30, attack: 35, defense: 30, spAtk: 100, spDef: 35, speed: 80 },
    moves: {
        1: [MOVES.LICK, MOVES.HYPNOSIS],
        8: [MOVES.SPITE],
        13: [MOVES.MEAN_LOOK],
        16: [MOVES.CURSE],
        21: [MOVES.NIGHT_SHADE],
        28: [MOVES.CONFUSE_RAY],
        33: [MOVES.SUCKER_PUNCH],
        36: [MOVES.SHADOW_BALL],
        41: [MOVES.DREAM_EATER],
        48: [MOVES.DARK_PULSE],
        53: [MOVES.DESTINY_BOND]
    },
    height: 1.3, // in meters
    weight: 0.1, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 62,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 },
    evolution: {
        level: 25,
        evolvesTo: 'HAUNTER'
    }
};