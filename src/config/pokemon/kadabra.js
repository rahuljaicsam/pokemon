import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KADABRA = {
    id: 64,
    name: 'Kadabra',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 40, attack: 35, defense: 30, spAtk: 120, spDef: 70, speed: 105 },
    moves: {
        1: [MOVES.TELEPORT, MOVES.CONFUSION],
        16: [MOVES.CONFUSION],
        20: [MOVES.DISABLE],
        24: [MOVES.PSYBEAM],
        28: [MOVES.RECOVER],
        32: [MOVES.PSYCHIC],
        36: [MOVES.REFLECT],
        40: [MOVES.FUTURE_SIGHT]
    },
    height: 1.3, // in meters
    weight: 56.5, // in kg
    gender: { male: 75, female: 25 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 100,
    baseExp: 140,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 },
    evolution: {
        method: 'trade',
        evolvesTo: 'ALAKAZAM'
    },
    evolvesFrom: 'ABRA'
};