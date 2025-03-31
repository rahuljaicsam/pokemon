import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const JYNX = {
    id: 124,
    name: 'Jynx',
    types: [TYPES.ICE, TYPES.PSYCHIC],
    baseStats: { hp: 65, attack: 50, defense: 35, spAtk: 115, spDef: 95, speed: 95 },
    moves: {
        1: [MOVES.POUND, MOVES.LICK],
        5: [MOVES.LOVELY_KISS],
        8: [MOVES.POWDER_SNOW],
        11: [MOVES.DOUBLE_SLAP],
        15: [MOVES.ICE_PUNCH],
        18: [MOVES.HEART_STAMP],
        21: [MOVES.MEAN_LOOK],
        25: [MOVES.FAKE_TEARS],
        28: [MOVES.WAKE_UP_SLAP],
        33: [MOVES.ICE_BEAM],
        39: [MOVES.BODY_SLAM],
        44: [MOVES.WRING_OUT],
        49: [MOVES.PERISH_SONG],
        55: [MOVES.BLIZZARD],
        60: [MOVES.PSYCHIC]
    },
    height: 1.4,
    weight: 40.6,
    gender: { male: 0, female: 100 },
    eggGroups: ['Human_Like'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 159,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 }
};