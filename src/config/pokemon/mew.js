import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MEW = {
    id: 151,
    name: 'Mew',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 },
    moves: {
        1: [MOVES.POUND, MOVES.TRANSFORM],
        10: [MOVES.MEGA_PUNCH],
        20: [MOVES.METRONOME],
        30: [MOVES.PSYCHIC],
        40: [MOVES.BARRIER],
        50: [MOVES.ANCIENT_POWER],
        60: [MOVES.AMNESIA],
        70: [MOVES.ME_FIRST],
        80: [MOVES.BATON_PASS],
        90: [MOVES.NASTY_PLOT],
        100: [MOVES.AURA_SPHERE]
    },
    height: 0.4, // in meters
    weight: 4.0, // in kg
    gender: { male: 0, female: 0 }, // Genderless
    eggGroups: ['Undiscovered'],
    eggCycles: 120,
    catchRate: 45,
    baseExp: 270,
    growthRate: 'Medium_Slow',
    evYields: { hp: 3, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};