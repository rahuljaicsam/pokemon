import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MAGIKARP = {
    id: 129,
    name: 'Magikarp',
    types: [TYPES.WATER],
    baseStats: { hp: 20, attack: 10, defense: 55, spAtk: 15, spDef: 20, speed: 80 },
    moves: {
        1: [MOVES.SPLASH],
        15: [MOVES.TACKLE],
        30: [MOVES.FLAIL]
    },
    height: 0.9,
    weight: 10.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_2', 'Dragon'],
    eggCycles: 5,
    catchRate: 255,
    baseExp: 40,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 20,
        evolvesTo: 'GYARADOS'
    }
};