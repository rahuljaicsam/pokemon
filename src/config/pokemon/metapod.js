import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const METAPOD = {
    id: 11,
    name: 'Metapod',
    types: [TYPES.BUG],
    baseStats: { hp: 50, attack: 20, defense: 55, spAtk: 25, spDef: 25, speed: 30 },
    moves: {
        1: [MOVES.HARDEN]
    },
    height: 0.7, // in meters
    weight: 9.9, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 15,
    catchRate: 120,
    baseExp: 72,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 10,
        evolvesTo: 'BUTTERFREE'
    },
    evolvesFrom: 'CATERPIE'
};