import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const HITMONCHAN = {
    id: 107,
    name: 'Hitmonchan',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 50, attack: 105, defense: 79, spAtk: 35, spDef: 110, speed: 76 },
    moves: {
        1: [MOVES.COMET_PUNCH, MOVES.AGILITY],
        5: [MOVES.PURSUIT],
        9: [MOVES.MACH_PUNCH],
        13: [MOVES.BULLET_PUNCH],
        17: [MOVES.FEINT],
        21: [MOVES.VACUUM_WAVE],
        25: [MOVES.QUICK_GUARD],
        29: [MOVES.THUNDER_PUNCH],
        33: [MOVES.ICE_PUNCH],
        37: [MOVES.FIRE_PUNCH],
        41: [MOVES.SKY_UPPERCUT],
        45: [MOVES.MEGA_PUNCH],
        49: [MOVES.DETECT],
        53: [MOVES.COUNTER]
    },
    height: 1.4,
    weight: 50.2,
    gender: { male: 100, female: 0 },
    eggGroups: ['Human_Like'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 159,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 2, speed: 0 }
};