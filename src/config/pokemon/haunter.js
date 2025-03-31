import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const HAUNTER = {
    id: 93,
    name: 'Haunter',
    types: [TYPES.GHOST, TYPES.POISON],
    baseStats: { hp: 45, attack: 50, defense: 45, spAtk: 115, spDef: 55, speed: 95 },
    moves: {
        1: [MOVES.LICK, MOVES.HYPNOSIS, MOVES.SPITE, MOVES.MEAN_LOOK],
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
        60: [MOVES.SHADOW_PUNCH]
    },
    height: 1.6, // in meters
    weight: 0.1, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 90,
    baseExp: 142,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 },
    evolution: {
        trade: true,
        evolvesTo: 'GENGAR'
    },
    evolvesFrom: 'GASTLY'
};