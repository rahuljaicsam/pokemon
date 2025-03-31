import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const OMANYTE = {
    id: 138,
    name: 'Omanyte',
    types: [TYPES.ROCK, TYPES.WATER],
    baseStats: { hp: 35, attack: 40, defense: 100, spAtk: 90, spDef: 55, speed: 35 },
    moves: {
        1: [MOVES.WATER_GUN, MOVES.WITHDRAW],
        13: [MOVES.BITE],
        19: [MOVES.ROLLOUT],
        25: [MOVES.LEER],
        31: [MOVES.MUD_SHOT],
        37: [MOVES.BRINE],
        43: [MOVES.PROTECT],
        49: [MOVES.ANCIENT_POWER],
        55: [MOVES.HYDRO_PUMP]
    },
    height: 0.4,
    weight: 7.5,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Water_1', 'Water_3'],
    eggCycles: 30,
    catchRate: 45,
    baseExp: 71,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 40,
        evolvesTo: 'OMASTAR'
    }
};