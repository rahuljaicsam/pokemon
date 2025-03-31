import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const JIGGLYPUFF = {
    id: 39,
    name: 'Jigglypuff',
    types: [TYPES.NORMAL, TYPES.FAIRY],
    baseStats: { hp: 115, attack: 45, defense: 20, spAtk: 45, spDef: 25, speed: 20 },
    moves: {
        1: [MOVES.SING, MOVES.POUND],
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
        49: [MOVES.DOUBLE_EDGE]
    },
    height: 0.5, // in meters
    weight: 5.5, // in kg
    gender: { male: 25, female: 75 },
    eggGroups: ['Fairy'],
    eggCycles: 10,
    catchRate: 170,
    baseExp: 95,
    growthRate: 'Fast',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};