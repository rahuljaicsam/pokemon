import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const LAPRAS = {
    id: 131,
    name: 'Lapras',
    types: [TYPES.WATER, TYPES.ICE],
    baseStats: { hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60 },
    moves: {
        1: [MOVES.WATER_GUN, MOVES.GROWL, MOVES.SING],
        16: [MOVES.MIST],
        20: [MOVES.BODY_SLAM],
        25: [MOVES.CONFUSE_RAY],
        31: [MOVES.ICE_BEAM],
        38: [MOVES.RAIN_DANCE],
        46: [MOVES.SAFEGUARD],
        54: [MOVES.HYDRO_PUMP],
        62: [MOVES.SHEER_COLD]
    },
    height: 2.5,
    weight: 220.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster', 'Water_1'],
    eggCycles: 40,
    catchRate: 45,
    baseExp: 187,
    growthRate: 'Slow',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'A gentle soul that can read the minds of people. It can ferry people across the sea on its back.',
    abilities: {
        normal: ['Water Absorb', 'Shell Armor'],
        hidden: ['Hydration']
    }
};