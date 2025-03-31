import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const TENTACOOL = {
    id: 72,
    name: 'Tentacool',
    types: [TYPES.WATER, TYPES.POISON],
    baseStats: { hp: 40, attack: 40, defense: 35, spAtk: 50, spDef: 100, speed: 70 },
    moves: {
        1: [MOVES.POISON_STING],
        4: [MOVES.SUPERSONIC],
        8: [MOVES.CONSTRICT],
        12: [MOVES.ACID],
        16: [MOVES.BUBBLE_BEAM],
        20: [MOVES.WRAP],
        24: [MOVES.POISON_JAB],
        28: [MOVES.WATER_PULSE],
        32: [MOVES.SCREECH],
        36: [MOVES.HYDRO_PUMP]
    },
    height: 0.9, // in meters
    weight: 45.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 3'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 67,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 1, speed: 0 },
    evolution: {
        level: 30,
        evolvesTo: 'TENTACRUEL'
    }
};