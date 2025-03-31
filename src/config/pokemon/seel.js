import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SEEL = {
    id: 86,
    name: 'Seel',
    types: [TYPES.WATER],
    baseStats: { hp: 65, attack: 45, defense: 55, spAtk: 45, spDef: 70, speed: 45 },
    moves: {
        1: [MOVES.HEADBUTT],
        7: [MOVES.GROWL],
        13: [MOVES.WATER_GUN],
        19: [MOVES.ICY_WIND],
        25: [MOVES.AURORA_BEAM],
        31: [MOVES.REST],
        37: [MOVES.AQUA_RING],
        43: [MOVES.ICE_BEAM],
        49: [MOVES.AQUA_TAIL],
        55: [MOVES.SAFEGUARD]
    },
    height: 1.1, // in meters
    weight: 90.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Field'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 65,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 1, speed: 0 },
    evolution: {
        level: 34,
        evolvesTo: 'DEWGONG'
    }
};