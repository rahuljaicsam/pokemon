import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const TENTACRUEL = {
    id: 73,
    name: 'Tentacruel',
    types: [TYPES.WATER, TYPES.POISON],
    baseStats: { hp: 80, attack: 70, defense: 65, spAtk: 80, spDef: 120, speed: 100 },
    moves: {
        1: [MOVES.POISON_STING, MOVES.SUPERSONIC, MOVES.CONSTRICT],
        4: [MOVES.SUPERSONIC],
        8: [MOVES.CONSTRICT],
        12: [MOVES.ACID],
        16: [MOVES.BUBBLE_BEAM],
        20: [MOVES.WRAP],
        24: [MOVES.POISON_JAB],
        28: [MOVES.WATER_PULSE],
        32: [MOVES.SCREECH],
        36: [MOVES.HYDRO_PUMP],
        44: [MOVES.SLUDGE_WAVE]
    },
    height: 1.6, // in meters
    weight: 55.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 3'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 180,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 2, speed: 0 }
};