import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ELECTABUZZ = {
    id: 125,
    name: 'Electabuzz',
    types: [TYPES.ELECTRIC],
    baseStats: { hp: 65, attack: 83, defense: 57, spAtk: 95, spDef: 85, speed: 105 },
    moves: {
        1: [MOVES.QUICK_ATTACK, MOVES.LEER],
        5: [MOVES.THUNDER_SHOCK],
        8: [MOVES.LOW_KICK],
        12: [MOVES.SWIFT],
        15: [MOVES.SHOCK_WAVE],
        19: [MOVES.THUNDER_WAVE],
        22: [MOVES.ELECTRO_BALL],
        26: [MOVES.LIGHT_SCREEN],
        29: [MOVES.THUNDER_PUNCH],
        36: [MOVES.DISCHARGE],
        42: [MOVES.SCREECH],
        49: [MOVES.THUNDERBOLT],
        55: [MOVES.THUNDER]
    },
    height: 1.1,
    weight: 30.0,
    gender: { male: 75, female: 25 },
    eggGroups: ['Human_Like'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 172,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 }
};