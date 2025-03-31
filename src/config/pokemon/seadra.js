import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SEADRA = {
    id: 117,
    name: 'Seadra',
    types: [TYPES.WATER],
    baseStats: { hp: 55, attack: 65, defense: 95, spAtk: 95, spDef: 45, speed: 85 },
    moves: {
        1: [MOVES.BUBBLE, MOVES.SMOKESCREEN, MOVES.LEER, MOVES.WATER_GUN],
        17: [MOVES.TWISTER],
        21: [MOVES.BUBBLE_BEAM],
        25: [MOVES.FOCUS_ENERGY],
        29: [MOVES.DRAGON_RAGE],
        33: [MOVES.BRINE],
        37: [MOVES.AGILITY],
        41: [MOVES.DRAGON_PULSE],
        45: [MOVES.DRAGON_DANCE],
        49: [MOVES.HYDRO_PUMP],
        53: [MOVES.DRAGON_BREATH]
    },
    height: 1.2,
    weight: 25.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_1', 'Dragon'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 172,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 1, spDef: 0, speed: 0 },
    evolvesFrom: 'HORSEA'
};