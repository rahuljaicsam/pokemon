import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NIDOKING = {
    id: 34,
    name: 'Nidoking',
    types: [TYPES.POISON, TYPES.GROUND],
    baseStats: { hp: 81, attack: 102, defense: 77, spAtk: 85, spDef: 75, speed: 85 },
    moves: {
        1: [MOVES.TACKLE, MOVES.HORN_ATTACK, MOVES.SAND_ATTACK, MOVES.QUICK_ATTACK],
        8: [MOVES.POISON_STING],
        14: [MOVES.FOCUS_ENERGY],
        23: [MOVES.FURY_ATTACK],
        32: [MOVES.HORN_DRILL]
        },
        height: 1.5, // in meters
        weight: 99.5, // in kg
        gender: { male: 100, female: 0 },
        eggGroups: ['Monster', 'Field'],
        eggCycles: 20,
        catchRate: 120,
        baseExp: 216,
        growthRate: 'Medium_Slow',
        evYields: { hp: 0, attack: 5, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
        evolvesFrom: 'NIDORINO'
    };