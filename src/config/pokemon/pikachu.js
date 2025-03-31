import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PIKACHU = {
    id: 25,
    name: 'Pikachu',
    types: [TYPES.ELECTRIC],
    baseStats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 },
    moves: {
        1: [MOVES.THUNDER_SHOCK, MOVES.GROWL],
        5: [MOVES.TAIL_WHIP],
        10: [MOVES.QUICK_ATTACK],
        18: [MOVES.THUNDER_WAVE],
        26: [MOVES.THUNDERBOLT]
    },
    height: 0.4, // in meters
    weight: 6.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field', 'Fairy'],
    eggCycles: 10,
    catchRate: 190,
    baseExp: 112,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolution: {
        item: 'THUNDER_STONE',
        evolvesTo: 'RAICHU'
    }
};