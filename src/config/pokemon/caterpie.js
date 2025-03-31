import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CATERPIE = {
    id: 10,
    name: 'Caterpie',
    types: [TYPES.BUG],
    baseStats: { hp: 45, attack: 30, defense: 35, spAtk: 20, spDef: 20, speed: 45 },
    moves: {
        1: [MOVES.TACKLE, MOVES.STRING_SHOT]
    },
    height: 0.3, // in meters
    weight: 2.9, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 39,
    growthRate: 'Medium_Fast',
    evYields: { hp: 1, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 7,
        evolvesTo: 'METAPOD'
    }
};