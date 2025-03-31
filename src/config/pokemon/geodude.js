import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GEODUDE = {
    id: 74,
    name: 'Geodude',
    types: [TYPES.ROCK, TYPES.GROUND],
    baseStats: { hp: 40, attack: 80, defense: 100, spAtk: 30, spDef: 30, speed: 20 },
    moves: {
        1: [MOVES.TACKLE],
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
    height: 0.4, // in meters
    weight: 20.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Mineral'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 60,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 25,
        evolvesTo: 'GRAVELER'
    }
};