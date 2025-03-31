import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NIDORAN_M = {
    id: 32,
    name: 'Nidoran♂',
    types: [TYPES.POISON],
    baseStats: { hp: 46, attack: 57, defense: 40, spAtk: 40, spDef: 40, speed: 50 },
    moves: {
        1: [MOVES.LEER, MOVES.TACKLE],
        8: [MOVES.HORN_ATTACK],
        14: [MOVES.POISON_STING],
        21: [MOVES.FOCUS_ENERGY],
        29: [MOVES.FURY_ATTACK]
    },
    height: 0.5, // in meters
    weight: 9.0, // in kg
    gender: { male: 100, female: 0 },
    eggGroups: ['Monster', 'Field'],
    eggCycles: 20,
    catchRate: 235,
    baseExp: 60,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 16,
        evolvesTo: 'NIDORINO'
    }
};