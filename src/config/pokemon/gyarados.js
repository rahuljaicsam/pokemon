import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GYARADOS = {
    id: 130,
    name: 'Gyarados',
    types: [TYPES.WATER, TYPES.FLYING],
    baseStats: { hp: 95, attack: 125, defense: 79, spAtk: 60, spDef: 100, speed: 81 },
    moves: {
        1: [MOVES.THRASH, MOVES.BITE, MOVES.LEER],
        20: [MOVES.ICE_FANG],
        23: [MOVES.TWISTER],
        26: [MOVES.SCARY_FACE],
        29: [MOVES.AQUA_TAIL],
        32: [MOVES.DRAGON_RAGE],
        35: [MOVES.CRUNCH],
        38: [MOVES.HYDRO_PUMP],
        41: [MOVES.DRAGON_DANCE],
        44: [MOVES.HURRICANE],
        47: [MOVES.RAIN_DANCE],
        50: [MOVES.HYPER_BEAM]
    },
    height: 6.5, // in meters
    weight: 235.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 2', 'Dragon'],
    eggCycles: 5,
    catchRate: 45,
    baseExp: 189,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'MAGIKARP'
};