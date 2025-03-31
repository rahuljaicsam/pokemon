import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const LICKITUNG = {
    id: 108,
    name: 'Lickitung',
    types: [TYPES.NORMAL],
    baseStats: { hp: 90, attack: 55, defense: 75, spAtk: 60, spDef: 75, speed: 30 },
    moves: {
        1: [MOVES.LICK, MOVES.SUPERSONIC],
        5: [MOVES.DEFENSE_CURL],
        9: [MOVES.KNOCK_OFF],
        13: [MOVES.WRAP],
        17: [MOVES.STOMP],
        21: [MOVES.DISABLE],
        25: [MOVES.SLAM],
        29: [MOVES.ROLLOUT],
        33: [MOVES.SCREECH],
        37: [MOVES.REFRESH],
        41: [MOVES.POWER_WHIP],
        45: [MOVES.WRING_OUT],
        49: [MOVES.GYRO_BALL]
    },
    height: 1.2,
    weight: 65.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 77,
    growthRate: 'Medium_Fast',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};