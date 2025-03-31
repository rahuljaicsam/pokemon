import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SHELLDER = {
    id: 90,
    name: 'Shellder',
    types: [TYPES.WATER],
    baseStats: { hp: 30, attack: 65, defense: 100, spAtk: 45, spDef: 25, speed: 40 },
    moves: {
        1: [MOVES.TACKLE, MOVES.WITHDRAW],
        8: [MOVES.SUPERSONIC],
        15: [MOVES.ICICLE_SPEAR],
        22: [MOVES.PROTECT],
        29: [MOVES.LEER],
        36: [MOVES.CLAMP],
        43: [MOVES.ICE_BEAM],
        50: [MOVES.SHELL_SMASH],
        57: [MOVES.HYDRO_PUMP]
    },
    height: 0.3, // in meters
    weight: 4.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 3'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 61,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        item: 'WATER_STONE',
        evolvesTo: 'CLOYSTER'
    }
};