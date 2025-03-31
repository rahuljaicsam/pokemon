import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DODRIO = {
    id: 85,
    name: 'Dodrio',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 60, attack: 110, defense: 70, spAtk: 60, spDef: 60, speed: 110 },
    moves: {
        1: [MOVES.PECK, MOVES.GROWL, MOVES.QUICK_ATTACK, MOVES.RAGE],
        7: [MOVES.QUICK_ATTACK],
        13: [MOVES.RAGE],
        19: [MOVES.FURY_ATTACK],
        25: [MOVES.PURSUIT],
        31: [MOVES.UPROAR],
        39: [MOVES.ACUPRESSURE],
        47: [MOVES.DRILL_PECK],
        55: [MOVES.AGILITY],
        63: [MOVES.THRASH],
        71: [MOVES.TRI_ATTACK]
    },
    height: 1.8, // in meters
    weight: 85.2, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 165,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'DODUO'
};