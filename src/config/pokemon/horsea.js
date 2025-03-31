import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const HORSEA = {
    id: 116,
    name: 'Horsea',
    types: [TYPES.WATER],
    baseStats: { hp: 30, attack: 40, defense: 70, spAtk: 70, spDef: 25, speed: 60 },
    moves: {
        1: [MOVES.BUBBLE],
        5: [MOVES.SMOKESCREEN],
        9: [MOVES.LEER],
        13: [MOVES.WATER_GUN],
        17: [MOVES.TWISTER],
        21: [MOVES.BUBBLE_BEAM],
        25: [MOVES.FOCUS_ENERGY],
        29: [MOVES.DRAGON_RAGE],
        33: [MOVES.BRINE],
        37: [MOVES.AGILITY],
        41: [MOVES.DRAGON_PULSE],
        45: [MOVES.DRAGON_DANCE],
        49: [MOVES.HYDRO_PUMP]
    },
    height: 0.4,
    weight: 8.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_1', 'Dragon'],
    eggCycles: 20,
    catchRate: 225,
    baseExp: 83,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 }
};