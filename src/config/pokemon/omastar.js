import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const OMASTAR = {
    id: 139,
    name: 'Omastar',
    types: [TYPES.ROCK, TYPES.WATER],
    baseStats: { hp: 70, attack: 60, defense: 125, spAtk: 115, spDef: 70, speed: 55 },
    moves: {
        1: [MOVES.WATER_GUN, MOVES.WITHDRAW, MOVES.BITE, MOVES.ROLLOUT],
        13: [MOVES.BITE],
        19: [MOVES.ROLLOUT],
        25: [MOVES.LEER],
        31: [MOVES.MUD_SHOT],
        37: [MOVES.BRINE],
        43: [MOVES.PROTECT],
        49: [MOVES.ANCIENT_POWER],
        55: [MOVES.HYDRO_PUMP],
        60: [MOVES.ROCK_BLAST]
    },
    height: 1.0,
    weight: 35.0,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Water_1', 'Water_3'],
    eggCycles: 30,
    catchRate: 45,
    baseExp: 173,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'OMANYTE'
};