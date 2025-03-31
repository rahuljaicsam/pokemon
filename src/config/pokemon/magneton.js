import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MAGNETON = {
    id: 82,
    name: 'Magneton',
    types: [TYPES.ELECTRIC, TYPES.STEEL],
    baseStats: { hp: 50, attack: 60, defense: 95, spAtk: 120, spDef: 70, speed: 70 },
    moves: {
        1: [MOVES.TACKLE, MOVES.THUNDER_SHOCK, MOVES.SUPERSONIC, MOVES.THUNDER_WAVE],
        5: [MOVES.SUPERSONIC],
        7: [MOVES.THUNDER_WAVE],
        11: [MOVES.MAGNET_BOMB],
        13: [MOVES.METAL_SOUND],
        17: [MOVES.SPARK],
        19: [MOVES.MIRROR_SHOT],
        23: [MOVES.SCREECH],
        25: [MOVES.THUNDERBOLT],
        29: [MOVES.FLASH_CANNON],
        31: [MOVES.DISCHARGE],
        35: [MOVES.LOCK_ON],
        37: [MOVES.MAGNET_RISE],
        41: [MOVES.GYRO_BALL],
        43: [MOVES.ZAP_CANNON],
        46: [MOVES.TRI_ATTACK]
    },
    height: 1.0, // in meters
    weight: 60.0, // in kg
    gender: 'genderless',
    eggGroups: ['Mineral'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 163,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 },
    evolvesFrom: 'MAGNEMITE'
};