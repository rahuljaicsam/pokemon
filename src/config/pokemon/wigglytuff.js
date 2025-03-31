import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const WIGGLYTUFF = {
    id: 40,
    name: 'Wigglytuff',
    types: [TYPES.NORMAL, TYPES.FAIRY],
    baseStats: { hp: 140, attack: 70, defense: 45, spAtk: 85, spDef: 50, speed: 45 },
    moves: {
        1: [MOVES.SING, MOVES.POUND, MOVES.DEFENSE_CURL, MOVES.DISABLE],
        5: [MOVES.DEFENSE_CURL],
        9: [MOVES.ROUND],
        13: [MOVES.DISABLE],
        17: [MOVES.DOUBLE_SLAP],
        21: [MOVES.ROLLOUT],
        25: [MOVES.REST],
        29: [MOVES.BODY_SLAM],
        33: [MOVES.GYRO_BALL],
        37: [MOVES.WAKE_UP_SLAP],
        41: [MOVES.MIMIC],
        45: [MOVES.HYPER_VOICE],
        49: [MOVES.DOUBLE_EDGE],
        53: [MOVES.PLAY_ROUGH]
    },
    height: 1.0, // in meters
    weight: 12.0, // in kg
    gender: { male: 25, female: 75 },
    eggGroups: ['Fairy'],
    eggCycles: 10,
    catchRate: 50,
    baseExp: 218,
    growthRate: 'Fast',
    evYields: { hp: 3, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};