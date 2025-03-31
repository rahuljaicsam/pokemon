import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PINSIR = {
    id: 127,
    name: 'Pinsir',
    types: [TYPES.BUG],
    baseStats: { hp: 65, attack: 125, defense: 100, spAtk: 55, spDef: 70, speed: 85 },
    moves: {
        1: [MOVES.VICE_GRIP],
        4: [MOVES.FOCUS_ENERGY],
        8: [MOVES.BIND],
        13: [MOVES.SEISMIC_TOSS],
        18: [MOVES.HARDEN],
        21: [MOVES.REVENGE],
        25: [MOVES.VITAL_THROW],
        29: [MOVES.DOUBLE_HIT],
        33: [MOVES.BRICK_BREAK],
        37: [MOVES.X_SCISSOR],
        41: [MOVES.SUBMISSION],
        45: [MOVES.SWORDS_DANCE],
        49: [MOVES.THRASH],
        53: [MOVES.SUPERPOWER],
        57: [MOVES.GUILLOTINE]
    },
    height: 1.5,
    weight: 55.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 175,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};