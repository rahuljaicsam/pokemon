import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const FARFETCHD = {
    id: 83,
    name: "Farfetch'd",
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 52, attack: 90, defense: 55, spAtk: 58, spDef: 62, speed: 60 },
    moves: {
        1: [MOVES.PECK, MOVES.SAND_ATTACK],
        7: [MOVES.LEER],
        13: [MOVES.FURY_ATTACK],
        19: [MOVES.CUT],
        25: [MOVES.AERIAL_ACE],
        31: [MOVES.AIR_CUTTER],
        37: [MOVES.KNOCK_OFF],
        43: [MOVES.FALSE_SWIPE],
        49: [MOVES.AIR_SLASH],
        55: [MOVES.SWORDS_DANCE],
        61: [MOVES.BRAVE_BIRD]
    },
    height: 0.8, // in meters
    weight: 15.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying', 'Field'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 132,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};