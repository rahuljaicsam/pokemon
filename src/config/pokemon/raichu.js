import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const RAICHU = {
    id: 26,
    name: 'Raichu',
    types: [TYPES.ELECTRIC],
    baseStats: { hp: 60, attack: 90, defense: 55, spAtk: 90, spDef: 80, speed: 110 },
    moves: {
        1: [MOVES.THUNDER_SHOCK, MOVES.GROWL, MOVES.TAIL_WHIP, MOVES.QUICK_ATTACK],
        26: [MOVES.THUNDER_WAVE],
        33: [MOVES.SLAM],
        41: [MOVES.THUNDERBOLT]
    },
    height: 0.8, // in meters
    weight: 30.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field', 'Fairy'],
    eggCycles: 10,
    catchRate: 75,
    baseExp: 218,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 3 },
    evolvesFrom: 'PIKACHU'
};