import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SANDSHREW = {
    id: 27,
    name: 'Sandshrew',
    types: [TYPES.GROUND],
    baseStats: { hp: 50, attack: 75, defense: 85, spAtk: 20, spDef: 30, speed: 40 },
    moves: {
        1: [MOVES.SCRATCH],
        6: [MOVES.SAND_ATTACK],
        11: [MOVES.POISON_STING],
        17: [MOVES.SLASH],
        23: [MOVES.SWIFT],
        30: [MOVES.FURY_SWIPES]
    },
    height: 0.6, // in meters
    weight: 12.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 60,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 22,
        evolvesTo: 'SANDSLASH'
    }
};