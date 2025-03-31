import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GOLDEEN = {
    id: 118,
    name: 'Goldeen',
    types: [TYPES.WATER],
    baseStats: { hp: 45, attack: 67, defense: 60, spAtk: 35, spDef: 50, speed: 63 },
    moves: {
        1: [MOVES.PECK, MOVES.TAIL_WHIP],
        5: [MOVES.SUPERSONIC],
        8: [MOVES.HORN_ATTACK],
        13: [MOVES.WATER_PULSE],
        16: [MOVES.FLAIL],
        21: [MOVES.AQUA_RING],
        24: [MOVES.FURY_ATTACK],
        29: [MOVES.WATERFALL],
        32: [MOVES.HORN_DRILL],
        37: [MOVES.AGILITY],
        40: [MOVES.SOAK],
        45: [MOVES.MEGAHORN],
        48: [MOVES.HORN_DRILL]
    },
    height: 0.6,
    weight: 15.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_2'],
    eggCycles: 20,
    catchRate: 225,
    baseExp: 64,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};