import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const STARYU = {
    id: 120,
    name: 'Staryu',
    types: [TYPES.WATER],
    baseStats: { hp: 30, attack: 45, defense: 55, spAtk: 70, spDef: 55, speed: 85 },
    moves: {
        1: [MOVES.TACKLE, MOVES.HARDEN],
        4: [MOVES.WATER_GUN],
        7: [MOVES.RAPID_SPIN],
        10: [MOVES.RECOVER],
        13: [MOVES.PSYWAVE],
        16: [MOVES.SWIFT],
        19: [MOVES.BUBBLE_BEAM],
        22: [MOVES.MINIMIZE],
        25: [MOVES.GYRO_BALL],
        28: [MOVES.LIGHT_SCREEN],
        31: [MOVES.POWER_GEM],
        34: [MOVES.COSMIC_POWER],
        37: [MOVES.HYDRO_PUMP],
        40: [MOVES.PSYCHIC]
    },
    height: 0.8,
    weight: 34.5,
    gender: { male: 0, female: 0 },
    eggGroups: ['Water_3'],
    eggCycles: 20,
    catchRate: 225,
    baseExp: 68,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        item: 'WATER_STONE',
        evolvesTo: 'STARMIE'
    }
};