import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const STARMIE = {
    id: 121,
    name: 'Starmie',
    types: [TYPES.WATER, TYPES.PSYCHIC],
    baseStats: { hp: 60, attack: 75, defense: 85, spAtk: 100, spDef: 85, speed: 115 },
    moves: {
        1: [MOVES.TACKLE, MOVES.HARDEN, MOVES.WATER_GUN, MOVES.RAPID_SPIN],
        4: [MOVES.RECOVER],
        7: [MOVES.PSYWAVE],
        10: [MOVES.SWIFT],
        13: [MOVES.BUBBLE_BEAM],
        16: [MOVES.CONFUSE_RAY],
        19: [MOVES.PSYCHIC],
        22: [MOVES.LIGHT_SCREEN],
        25: [MOVES.POWER_GEM],
        28: [MOVES.COSMIC_POWER],
        31: [MOVES.HYDRO_PUMP],
        34: [MOVES.THUNDER],
        37: [MOVES.ICE_BEAM]
    },
    height: 1.1,
    weight: 80.0,
    gender: { male: 0, female: 0 },
    eggGroups: ['Water_3'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 182,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolvesFrom: 'STARYU'
};