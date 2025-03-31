import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PERSIAN = {
    id: 53,
    name: 'Persian',
    types: [TYPES.NORMAL],
    baseStats: { hp: 65, attack: 70, defense: 60, spAtk: 65, spDef: 65, speed: 115 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.GROWL, MOVES.BITE, MOVES.FAKE_OUT],
        6: [MOVES.BITE],
        10: [MOVES.FAKE_OUT],
        15: [MOVES.FURY_SWIPES],
        20: [MOVES.SCREECH],
        25: [MOVES.FAINT_ATTACK],
        28: [MOVES.POWER_GEM],
        32: [MOVES.TAUNT],
        37: [MOVES.PAY_DAY],
        44: [MOVES.SLASH],
        49: [MOVES.NASTY_PLOT],
        56: [MOVES.NIGHT_SLASH]
    },
    height: 1.0, // in meters
    weight: 32.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 90,
    baseExp: 154,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 }
};
