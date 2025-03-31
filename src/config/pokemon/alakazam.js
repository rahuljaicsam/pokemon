import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ALAKAZAM = {
    id: 65,
    name: 'Alakazam',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 55, attack: 50, defense: 45, spAtk: 135, spDef: 95, speed: 120 },
    moves: {
        1: [MOVES.TELEPORT, MOVES.CONFUSION, MOVES.DISABLE, MOVES.PSYBEAM],
        16: [MOVES.CONFUSION],
        20: [MOVES.DISABLE],
        24: [MOVES.PSYBEAM],
        28: [MOVES.RECOVER],
        32: [MOVES.PSYCHIC],
        36: [MOVES.REFLECT],
        40: [MOVES.FUTURE_SIGHT],
        44: [MOVES.CALM_MIND]
    },
    height: 1.5, // in meters
    weight: 48.0, // in kg
    gender: { male: 75, female: 25 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 50,
    baseExp: 225,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 },
    evolvesFrom: 'KADABRA'
};