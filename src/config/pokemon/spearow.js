import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SPEAROW = {
    id: 21,
    name: 'Spearow',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 40, attack: 60, defense: 30, spAtk: 31, spDef: 31, speed: 70 },
    moves: {
        1: [MOVES.TACKLE],
        5: [MOVES.GUST]
    },
    height: 0.3, // in meters
    weight: 2.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 52,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 20,
        evolvesTo: 'FEAROW'
    }
};