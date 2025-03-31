import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PIDGEY = {
    id: 16,
    name: 'Pidgey',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 40, attack: 45, defense: 40, spAtk: 35, spDef: 35, speed: 56 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GUST],
        5: [MOVES.SAND_ATTACK],
        12: [MOVES.QUICK_ATTACK]
    },
    height: 0.3, // in meters
    weight: 1.8, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 50,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 18,
        evolvesTo: 'PIDGEOTTO'
    }
};