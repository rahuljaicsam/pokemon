import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PIDGEOTTO = {
    id: 17,
    name: 'Pidgeotto',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 63, attack: 60, defense: 55, spAtk: 50, spDef: 50, speed: 71 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GUST, MOVES.SAND_ATTACK],
        5: [MOVES.QUICK_ATTACK],
        21: [MOVES.WING_ATTACK]
    },
    height: 1.1, // in meters
    weight: 30.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 120,
    baseExp: 122,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolution: {
        level: 36,
        evolvesTo: 'PIDGEOT'
    },
    evolvesFrom: 'PIDGEY'
};