import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PIDGEOT = {
    id: 18,
    name: 'Pidgeot',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 83, attack: 80, defense: 75, spAtk: 70, spDef: 70, speed: 101 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GUST, MOVES.SAND_ATTACK, MOVES.QUICK_ATTACK],
        5: [MOVES.WING_ATTACK]
    },
    height: 1.5, // in meters
    weight: 39.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 45,
    baseExp: 216,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 3 },
    evolvesFrom: 'PIDGEOTTO'
};