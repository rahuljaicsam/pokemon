import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MAGNEMITE = {
    id: 81,
    name: 'Magnemite',
    types: [TYPES.ELECTRIC, TYPES.STEEL],
    baseStats: { hp: 25, attack: 35, defense: 70, spAtk: 95, spDef: 55, speed: 45 },
    moves: {
        1: [MOVES.TACKLE, MOVES.THUNDER_SHOCK],
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
        43: [MOVES.ZAP_CANNON]
    },
    height: 0.3, // in meters
    weight: 6.0, // in kg
    gender: 'genderless',
    eggGroups: ['Mineral'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 65,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 },
    evolution: {
        level: 30,
        evolvesTo: 'MAGNETON'
    }
};