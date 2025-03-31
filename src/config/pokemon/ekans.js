import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const EKANS = {
    id: 23,
    name: 'Ekans',
    types: [TYPES.POISON],
    baseStats: { hp: 35, attack: 60, defense: 44, spAtk: 40, spDef: 54, speed: 55 },
    moves: {
        1: [MOVES.WRAP, MOVES.LEER],
        10: [MOVES.POISON_STING],
        17: [MOVES.BITE],
        24: [MOVES.GLARE]
    },
    height: 2.0, // in meters
    weight: 6.9, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field', 'Dragon'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 58,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 22,
        evolvesTo: 'ARBOK'
    }
};