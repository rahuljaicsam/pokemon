import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const HITMONLEE = {
    id: 106,
    name: 'Hitmonlee',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 50, attack: 120, defense: 53, spAtk: 35, spDef: 110, speed: 87 },
    moves: {
        1: [MOVES.DOUBLE_KICK, MOVES.MEDITATE],
        5: [MOVES.ROLLING_KICK],
        9: [MOVES.JUMP_KICK],
        13: [MOVES.BRICK_BREAK],
        17: [MOVES.FOCUS_ENERGY],
        21: [MOVES.FEINT],
        25: [MOVES.HIGH_JUMP_KICK],
        29: [MOVES.MIND_READER],
        33: [MOVES.FORESIGHT],
        37: [MOVES.WIDE_GUARD],
        41: [MOVES.BLAZE_KICK],
        45: [MOVES.ENDURE],
        49: [MOVES.MEGA_KICK],
        53: [MOVES.CLOSE_COMBAT]
    },
    height: 1.5,
    weight: 49.8,
    gender: { male: 100, female: 0 },
    eggGroups: ['Human_Like'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 159,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};