import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SANDSLASH = {
    id: 28,
    name: 'Sandslash',
    types: [TYPES.GROUND],
    baseStats: { hp: 75, attack: 100, defense: 110, spAtk: 45, spDef: 55, speed: 65 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.DEFENSE_CURL, MOVES.SAND_ATTACK],
        10: [MOVES.POISON_STING],
        17: [MOVES.SLASH],
        24: [MOVES.SWIFT],
        31: [MOVES.FURY_SWIPES],
        38: [MOVES.SAND_TOMB]
    },
    height: 1.0, // in meters
    weight: 29.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 90,
    baseExp: 158,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'SANDSHREW'
};