import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const TANGELA = {
    id: 114,
    name: 'Tangela',
    types: [TYPES.GRASS],
    baseStats: { hp: 65, attack: 55, defense: 115, spAtk: 100, spDef: 40, speed: 60 },
    moves: {
        1: [MOVES.CONSTRICT, MOVES.ABSORB],
        4: [MOVES.GROWTH],
        7: [MOVES.VINE_WHIP],
        10: [MOVES.BIND],
        14: [MOVES.MEGA_DRAIN],
        17: [MOVES.SLEEP_POWDER],
        20: [MOVES.POISON_POWDER],
        23: [MOVES.STUN_SPORE],
        27: [MOVES.GIGA_DRAIN],
        30: [MOVES.ANCIENT_POWER],
        33: [MOVES.KNOCK_OFF],
        36: [MOVES.NATURAL_GIFT],
        38: [MOVES.SLAM],
        41: [MOVES.TICKLE],
        44: [MOVES.WRING_OUT],
        46: [MOVES.POWER_WHIP]
    },
    height: 1.0,
    weight: 35.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 87,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};