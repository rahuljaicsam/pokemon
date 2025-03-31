import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KAKUNA = {
    id: 14,
    name: 'Kakuna',
    types: [TYPES.BUG, TYPES.POISON],
    baseStats: { hp: 45, attack: 25, defense: 50, spAtk: 25, spDef: 25, speed: 35 },
    moves: {
        1: [MOVES.HARDEN]
    },
    height: 0.6, // in meters
    weight: 10.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 15,
    catchRate: 120,
    baseExp: 72,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 10,
        evolvesTo: 'BEEDRILL'
    },
    evolvesFrom: 'WEEDLE'
};