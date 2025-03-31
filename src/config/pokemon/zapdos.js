import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ZAPDOS = {
    id: 145,
    name: 'Zapdos',
    types: [TYPES.ELECTRIC, TYPES.FLYING],
    baseStats: { hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100 },
    moves: {
        1: [MOVES.PECK, MOVES.THUNDER_SHOCK],
        10: [MOVES.THUNDER_WAVE],
        15: [MOVES.DETECT],
        25: [MOVES.PLUCK],
        35: [MOVES.ANCIENT_POWER],
        40: [MOVES.CHARGE],
        50: [MOVES.AGILITY],
        55: [MOVES.DISCHARGE],
        65: [MOVES.RAIN_DANCE],
        75: [MOVES.DRILL_PECK],
        85: [MOVES.THUNDER],
        90: [MOVES.LIGHT_SCREEN],
        100: [MOVES.ZAP_CANNON]
    },
    height: 1.6, // in meters
    weight: 52.6, // in kg
    gender: { male: 0, female: 0 }, // Genderless
    eggGroups: ['Undiscovered'],
    eggCycles: 80,
    catchRate: 3,
    baseExp: 290,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 }
};