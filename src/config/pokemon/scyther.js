import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SCYTHER = {
    id: 123,
    name: 'Scyther',
    types: [TYPES.BUG, TYPES.FLYING],
    baseStats: { hp: 70, attack: 110, defense: 80, spAtk: 55, spDef: 80, speed: 105 },
    moves: {
        1: [MOVES.QUICK_ATTACK, MOVES.LEER],
        5: [MOVES.FOCUS_ENERGY],
        9: [MOVES.PURSUIT],
        13: [MOVES.FALSE_SWIPE],
        17: [MOVES.AGILITY],
        21: [MOVES.WING_ATTACK],
        25: [MOVES.FURY_CUTTER],
        29: [MOVES.SLASH],
        33: [MOVES.RAZOR_WIND],
        37: [MOVES.DOUBLE_TEAM],
        41: [MOVES.X_SCISSOR],
        45: [MOVES.NIGHT_SLASH],
        49: [MOVES.AIR_SLASH],
        53: [MOVES.SWORDS_DANCE]
    },
    height: 1.5,
    weight: 56.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 187,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};