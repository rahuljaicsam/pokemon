import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SQUIRTLE = {
    id: 7,
    name: 'Squirtle',
    types: [TYPES.WATER],
    baseStats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 },
    moves: {
        1: [MOVES.TACKLE],
        4: [MOVES.TAIL_WHIP],
        7: [MOVES.BUBBLE],
        10: [MOVES.WATER_GUN],
        13: [MOVES.WATER_PULSE],
        16: [MOVES.SWIFT],
        19: [MOVES.IRON_TAIL],
        22: [MOVES.HYDRO_PUMP],
        25: [MOVES.SURF],
        28: [MOVES.WATERFALL],
        31: [MOVES.QUICK_ATTACK],
        34: [MOVES.SWORDS_DANCE],
        37: [MOVES.BUBBLEBEAM],
        40: [MOVES.HEADBUTT],
        43: [MOVES.SWAGGER],
        46: [MOVES.SUBMISSION],
        49: [MOVES.DRAGON_CLAW],
        52: [MOVES.DIVE],
        55: [MOVES.IRON_DEFENSE],
        58: [MOVES.ROAR],
        61: [MOVES.SEISMIC_TOSS],
        64: [MOVES.BODY_SLAM],
        67: [MOVES.TAKE_DOWN],
        70: [MOVES.DOUBLE_EDGE],
        73: [MOVES.WATERFALL],
        76: [MOVES.HYPER_BEAM],
        79: [MOVES.THUNDERBOLT],
        82: [MOVES.THUNDER],
        85: [MOVES.THUNDER_WAVE],
        88: [MOVES.PSYCH_UP],
        91: [MOVES.CONFUSE_RAY],
        94: [MOVES.SLUDGE_BOMB],
        97: [MOVES.SLUDGE_WAVE],
        100: [MOVES.SLUDGE]
    },
    height: 0.5, // in meters
    weight: 9.0, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Water 1'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 63,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 16,
        evolvesTo: 'WARTORTLE'
    }
};