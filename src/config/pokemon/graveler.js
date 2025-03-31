import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GRAVELER = {
    id: 75,
    name: 'Graveler',
    types: [TYPES.ROCK, TYPES.GROUND],
    baseStats: { hp: 55, attack: 95, defense: 115, spAtk: 45, spDef: 45, speed: 35 },
    moves: {
        1: [MOVES.TACKLE, MOVES.DEFENSE_CURL, MOVES.ROCK_THROW],
        4: [MOVES.DEFENSE_CURL],
        8: [MOVES.ROCK_THROW],
        12: [MOVES.MAGNITUDE],
        16: [MOVES.ROCK_POLISH],
        20: [MOVES.ROLLOUT],
        24: [MOVES.ROCK_BLAST],
        28: [MOVES.EARTHQUAKE],
        32: [MOVES.EXPLOSION],
        36: [MOVES.DOUBLE_EDGE],
        40: [MOVES.STONE_EDGE]
    },
    height: 1.0, // in meters
    weight: 105.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Mineral'],
    eggCycles: 15,
    catchRate: 120,
    baseExp: 137,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 40,
        evolvesTo: 'GOLEM'
    },
    evolvesFrom: 'GEODUDE'
};