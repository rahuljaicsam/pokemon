import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const WEEDLE = {
    id: 13,
    name: 'Weedle',
    types: [TYPES.BUG, TYPES.POISON],
    baseStats: { hp: 40, attack: 35, defense: 30, spAtk: 20, spDef: 20, speed: 50 },
    moves: {
        1: [MOVES.POISON_STING, MOVES.STRING_SHOT]
    },
    height: 0.3, // in meters
    weight: 3.2, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 39,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 7,
        evolvesTo: 'KAKUNA'
    }
};