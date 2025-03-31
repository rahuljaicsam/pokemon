import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DEWGONG = {
    id: 87,
    name: 'Dewgong',
    types: [TYPES.WATER, TYPES.ICE],
    baseStats: { hp: 90, attack: 70, defense: 80, spAtk: 70, spDef: 95, speed: 70 },
    moves: {
        1: [MOVES.HEADBUTT, MOVES.GROWL, MOVES.WATER_GUN, MOVES.ICY_WIND],
        7: [MOVES.GROWL],
        13: [MOVES.WATER_GUN],
        19: [MOVES.ICY_WIND],
        25: [MOVES.AURORA_BEAM],
        31: [MOVES.REST],
        34: [MOVES.SHEER_COLD],
        39: [MOVES.AQUA_RING],
        47: [MOVES.ICE_BEAM],
        55: [MOVES.AQUA_TAIL],
        63: [MOVES.SAFEGUARD],
        71: [MOVES.BLIZZARD]
    },
    height: 1.7, // in meters
    weight: 120.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Field'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 166,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 2, speed: 0 },
    evolvesFrom: 'SEEL'
};