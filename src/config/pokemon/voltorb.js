import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VOLTORB = {
    id: 100,
    name: 'Voltorb',
    types: [TYPES.ELECTRIC],
    baseStats: { hp: 40, attack: 30, defense: 50, spAtk: 55, spDef: 55, speed: 100 },
    moves: {
        1: [MOVES.TACKLE, MOVES.SCREECH],
        5: [MOVES.THUNDER_WAVE],
        8: [MOVES.CHARGE],
        12: [MOVES.SPARK],
        15: [MOVES.ROLLOUT],
        19: [MOVES.SCREECH],
        22: [MOVES.CHARGE_BEAM],
        26: [MOVES.SWIFT],
        29: [MOVES.SELF_DESTRUCT],
        33: [MOVES.LIGHT_SCREEN],
        36: [MOVES.MAGNET_RISE],
        40: [MOVES.DISCHARGE],
        43: [MOVES.EXPLOSION],
        47: [MOVES.GYRO_BALL]
    },
    height: 0.5,
    weight: 10.4,
    gender: { male: 0, female: 0 },
    eggGroups: ['Mineral'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 66,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 }
};