import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ELECTRODE = {
    id: 101,
    name: 'Electrode',
    types: [TYPES.ELECTRIC],
    baseStats: { hp: 60, attack: 50, defense: 70, spAtk: 80, spDef: 80, speed: 150 },
    moves: {
        1: [MOVES.TACKLE, MOVES.SCREECH, MOVES.THUNDER_WAVE, MOVES.CHARGE],
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
        47: [MOVES.GYRO_BALL],
        51: [MOVES.MIRROR_COAT]
    },
    height: 1.2,
    weight: 66.6,
    gender: { male: 0, female: 0 },
    eggGroups: ['Mineral'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 172,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 }
};