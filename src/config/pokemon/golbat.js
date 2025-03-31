import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GOLBAT = {
    id: 42,
    name: 'Golbat',
    types: [TYPES.POISON, TYPES.FLYING],
    baseStats: { hp: 75, attack: 80, defense: 70, spAtk: 65, spDef: 75, speed: 90 },
    moves: {
        1: [MOVES.LEECH_LIFE, MOVES.SUPERSONIC, MOVES.ASTONISH, MOVES.MEAN_LOOK],
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
        45: [MOVES.BRAVE_BIRD],
        49: [MOVES.ACROBATICS]
    },
    height: 1.6, // in meters
    weight: 55.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 90,
    baseExp: 159,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 }
};