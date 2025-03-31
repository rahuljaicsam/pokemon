import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ONIX = {
    id: 95,
    name: 'Onix',
    types: [TYPES.ROCK, TYPES.GROUND],
    baseStats: { hp: 35, attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70 },
    moves: {
        1: [MOVES.TACKLE, MOVES.SCREECH],
        9: [MOVES.BIND],
        13: [MOVES.ROCK_THROW],
        21: [MOVES.RAGE],
        25: [MOVES.ROCK_TOMB],
        33: [MOVES.DRAGON_BREATH],
        37: [MOVES.SLAM],
        45: [MOVES.SANDSTORM],
        49: [MOVES.ROCK_SLIDE],
        57: [MOVES.IRON_TAIL],
        61: [MOVES.DOUBLE_EDGE]
    },
    height: 8.8, // in meters
    weight: 210.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Mineral'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 77,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};