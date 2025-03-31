import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CLOYSTER = {
    id: 91,
    name: 'Cloyster',
    types: [TYPES.WATER, TYPES.ICE],
    baseStats: { hp: 50, attack: 95, defense: 180, spAtk: 85, spDef: 45, speed: 70 },
    moves: {
        1: [MOVES.TACKLE, MOVES.WITHDRAW, MOVES.SUPERSONIC, MOVES.ICICLE_SPEAR],
        13: [MOVES.SUPERSONIC],
        20: [MOVES.ICICLE_SPEAR],
        27: [MOVES.PROTECT],
        34: [MOVES.LEER],
        41: [MOVES.CLAMP],
        48: [MOVES.ICE_BEAM],
        55: [MOVES.SHELL_SMASH],
        62: [MOVES.HYDRO_PUMP],
        70: [MOVES.SPIKE_CANNON]
    },
    height: 1.5, // in meters
    weight: 132.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 3'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 184,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'SHELLDER'
};