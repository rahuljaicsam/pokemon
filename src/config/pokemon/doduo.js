import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DODUO = {
    id: 84,
    name: 'Doduo',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 35, attack: 85, defense: 45, spAtk: 35, spDef: 35, speed: 75 },
    moves: {
        1: [MOVES.PECK, MOVES.GROWL],
        7: [MOVES.QUICK_ATTACK],
        13: [MOVES.RAGE],
        19: [MOVES.FURY_ATTACK],
        25: [MOVES.PURSUIT],
        31: [MOVES.UPROAR],
        37: [MOVES.ACUPRESSURE],
        43: [MOVES.DRILL_PECK],
        49: [MOVES.AGILITY],
        55: [MOVES.THRASH]
    },
    height: 1.4, // in meters
    weight: 39.2, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 62,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 31,
        evolvesTo: 'DODRIO'
    }
};