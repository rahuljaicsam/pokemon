import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MAROWAK = {
    id: 105,
    name: 'Marowak',
    types: [TYPES.GROUND],
    baseStats: { hp: 60, attack: 80, defense: 110, spAtk: 50, spDef: 80, speed: 45 },
    moves: {
        1: [MOVES.GROWL, MOVES.TAIL_WHIP, MOVES.BONE_CLUB, MOVES.HEADBUTT],
        13: [MOVES.LEER],
        17: [MOVES.FOCUS_ENERGY],
        21: [MOVES.BONEMERANG],
        25: [MOVES.RAGE],
        29: [MOVES.FALSE_SWIPE],
        33: [MOVES.THRASH],
        37: [MOVES.FLING],
        41: [MOVES.BONE_RUSH],
        45: [MOVES.ENDEAVOR],
        49: [MOVES.DOUBLE_EDGE],
        53: [MOVES.RETALIATE]
    },
    height: 1.0,
    weight: 45.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 149,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'CUBONE'
};