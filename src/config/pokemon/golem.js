import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GOLEM = {
    id: 76,
    name: 'Golem',
    types: [TYPES.ROCK, TYPES.GROUND],
    baseStats: { hp: 80, attack: 120, defense: 130, spAtk: 55, spDef: 65, speed: 45 },
    moves: {
        1: [MOVES.TACKLE, MOVES.DEFENSE_CURL, MOVES.ROCK_THROW, MOVES.MAGNITUDE],
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
    height: 1.4, // in meters
    weight: 300.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Mineral'],
    eggCycles: 15,
    catchRate: 45,
    baseExp: 223,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 3, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'GRAVELER'
};