import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const BEEDRILL = {
    id: 15,
    name: 'Beedrill',
    types: [TYPES.BUG, TYPES.POISON],
    baseStats: { hp: 65, attack: 90, defense: 40, spAtk: 45, spDef: 80, speed: 75 },
    moves: {
        1: [MOVES.FURY_ATTACK, MOVES.TWINEEDLE],
        10: [MOVES.RAGE]
    },
    height: 1.0, // in meters
    weight: 29.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 15,
    catchRate: 45,
    baseExp: 178,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 1, speed: 0 },
    evolvesFrom: 'KAKUNA'
};