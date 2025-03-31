import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const BLASTOISE = {
    id: 9,
    name: 'Blastoise',
    types: [TYPES.WATER],
    baseStats: { hp: 79, attack: 83, defense: 100, spAtk: 85, spDef: 105, speed: 78 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.BUBBLE, MOVES.WATER_GUN],
        5: [MOVES.WATER_PULSE],
        6: [MOVES.BUBBLEBEAM],
        7: [MOVES.HYDRO_PUMP],
        8: [MOVES.SWIFT],
        9: [MOVES.SURF], 
        10: [MOVES.ICE_BEAM], 
        11: [MOVES.HYPER_BEAM], 
        12: [MOVES.SEISMIC_TOSS],
        15: [MOVES.ICE_PUNCH],
        20: [ MOVES.ICE_SHARD],
        25: [MOVES.ICY_WIND],
        30: [MOVES.ICE_FANG],
        35: [MOVES.SHADOW_CLAW],
        40: [MOVES.ROAR],
        45: [MOVES.SLUDGE_BOMB],
        50: [MOVES.SLUDGE_WAVE],
        55: [MOVES.SLUDGE],
    },
    height: 1.6, // in meters
    weight: 85.5, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Water 1'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 239,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 3, speed: 0 },
    evolvesFrom: 'WARTORTLE'
};