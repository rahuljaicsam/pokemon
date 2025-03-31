import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CUBONE = {
    id: 104,
    name: 'Cubone',
    types: [TYPES.GROUND],
    baseStats: { hp: 50, attack: 50, defense: 95, spAtk: 40, spDef: 50, speed: 35 },
    moves: {
        1: [MOVES.GROWL],
        3: [MOVES.TAIL_WHIP],
        7: [MOVES.BONE_CLUB],
        11: [MOVES.HEADBUTT],
        13: [MOVES.LEER],
        17: [MOVES.FOCUS_ENERGY],
        21: [MOVES.BONEMERANG],
        25: [MOVES.RAGE],
        29: [MOVES.FALSE_SWIPE],
        33: [MOVES.THRASH],
        37: [MOVES.FLING],
        41: [MOVES.BONE_RUSH],
        45: [MOVES.ENDEAVOR],
        49: [MOVES.DOUBLE_EDGE]
    },
    height: 0.4,
    weight: 6.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 64,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};