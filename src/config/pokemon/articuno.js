import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ARTICUNO = {
    id: 144,
    name: 'Articuno',
    types: [TYPES.ICE, TYPES.FLYING],
    baseStats: { hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85 },
    moves: {
        1: [MOVES.GUST, MOVES.POWDER_SNOW],
        10: [MOVES.MIST],
        15: [MOVES.ICE_SHARD],
        25: [MOVES.MIND_READER],
        35: [MOVES.ANCIENT_POWER],
        40: [MOVES.AGILITY],
        50: [MOVES.FREEZE_DRY],
        55: [MOVES.REFLECT],
        65: [MOVES.HAIL],
        75: [MOVES.TAILWIND],
        85: [MOVES.ICE_BEAM],
        90: [MOVES.ROOST],
        100: [MOVES.BLIZZARD]
    },
    height: 1.7, // in meters
    weight: 55.4, // in kg
    gender: { male: 0, female: 0 }, // Genderless
    eggGroups: ['Undiscovered'],
    eggCycles: 80,
    catchRate: 3,
    baseExp: 290,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 3, speed: 0 }
};