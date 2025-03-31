import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MACHOKE = {
    id: 67,
    name: 'Machoke',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 80, attack: 100, defense: 70, spAtk: 50, spDef: 60, speed: 45 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GROWL, MOVES.QUICK_ATTACK, MOVES.DEFENSE_CURL],
        8: [MOVES.QUICK_ATTACK],
        12: [MOVES.DEFENSE_CURL],
        16: [MOVES.POUND],
        20: [MOVES.DOUBLE_SLAP],
        32: [MOVES.POUND],
        36: [MOVES.DOUBLE_SLAP]
    },
    height: 1.5, // in meters
    weight: 70.5, // in kg
    gender: { male: 75, female: 25 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 90,
    baseExp: 142,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 40,
        evolvesTo: 'MACHAMP'
    },
    evolvesFrom: 'MACHOP'
};