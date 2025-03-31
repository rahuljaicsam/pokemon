import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const WARTORTLE = {
    id: 8,
    name: 'Wartortle',
    types: [TYPES.WATER],
    baseStats: { hp: 59, attack: 63, defense: 80, spAtk: 65, spDef: 80, speed: 58 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.BUBBLE],
        3: [MOVES.WATER_GUN],
        10: [MOVES.BUBBLEBEAM],
        15: [MOVES.SWIFT],
        20: [MOVES.WATER_PULSE],
        25: [MOVES.IRON_TAIL],
        30: [MOVES.HYDRO_PUMP],
        35: [MOVES.IRON_HEAD],
        40: [MOVES.RAZOR_WIND],
        45: [MOVES.CRUSH_CLAW],
        50: [MOVES.SURF],
        55: [MOVES.DIVE],
        60: [MOVES.ROCK_SLIDE],
        65: [MOVES.BULLDOZE],
        70: [MOVES.WATERFALL],
        75: [MOVES.WATER_SHIELD],
        80: [MOVES.ROCK_TOMB],
        85: [MOVES.ROCK_SMASH],
        90: [MOVES.WATER_POWER],
        95: [MOVES.DRAIN_PUNCH],
        100: [MOVES.IRON_DEFENSE]
    },
    height: 1.0, // in meters
    weight: 22.5, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Water 1'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 142,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 1, speed: 0 },
    evolution: {
        level: 36,
        evolvesTo: 'BLASTOISE'
    },
    evolvesFrom: 'SQUIRTLE'
};