import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ABRA = {
    id: 63,
    name: 'Abra',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 25, attack: 20, defense: 15, spAtk: 105, spDef: 55, speed: 90 },
    moves: {
        1: [MOVES.TELEPORT],
        16: [MOVES.CONFUSION],
        20: [MOVES.DISABLE],
        24: [MOVES.PSYBEAM],
        28: [MOVES.RECOVER],
        32: [MOVES.PSYCHIC],
        36: [MOVES.REFLECT]
    },
    height: 0.9, // in meters
    weight: 19.5, // in kg
    gender: { male: 75, female: 25 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 200,
    baseExp: 62,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 },
    evolution: {
        level: 16,
        evolvesTo: 'KADABRA'
    }
};