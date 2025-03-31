import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ZUBAT = {
    id: 41,
    name: 'Zubat',
    types: [TYPES.POISON, TYPES.FLYING],
    baseStats: { hp: 40, attack: 45, defense: 35, spAtk: 30, spDef: 40, speed: 55 },
    moves: {
        1: [MOVES.LEECH_LIFE, MOVES.SUPERSONIC],
        5: [MOVES.ASTONISH],
        9: [MOVES.MEAN_LOOK],
        13: [MOVES.POISON_FANG],
        17: [MOVES.WING_ATTACK],
        21: [MOVES.CONFUSE_RAY],
        25: [MOVES.AIR_CUTTER],
        29: [MOVES.SWIFT],
        33: [MOVES.POISON_FANG],
        37: [MOVES.HAZE],
        41: [MOVES.AIR_SLASH],
        45: [MOVES.BRAVE_BIRD]
    },
    height: 0.8, // in meters
    weight: 7.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 49,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 }
};