import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MEWTWO = {
    id: 150,
    name: 'Mewtwo',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 106, attack: 110, defense: 90, spAtk: 154, spDef: 90, speed: 130 },
    moves: {
        1: [MOVES.CONFUSION, MOVES.DISABLE],
        8: [MOVES.BARRIER],
        15: [MOVES.SWIFT],
        22: [MOVES.FUTURE_SIGHT],
        29: [MOVES.PSYCHO_CUT],
        36: [MOVES.SAFEGUARD],
        43: [MOVES.AMNESIA],
        50: [MOVES.PSYCHIC],
        57: [MOVES.RECOVER],
        64: [MOVES.MIST],
        71: [MOVES.ME_FIRST],
        79: [MOVES.PSYSTRIKE],
        86: [MOVES.AURA_SPHERE]
    },
    height: 2.0, // in meters
    weight: 122.0, // in kg
    gender: { male: 0, female: 0 }, // Genderless
    eggGroups: ['Undiscovered'],
    eggCycles: 120,
    catchRate: 3,
    baseExp: 306,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 }
};