import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MACHAMP = {
    id: 68,
    name: 'Machamp',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 90, attack: 130, defense: 80, spAtk: 65, spDef: 85, speed: 55 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GROWL, MOVES.QUICK_ATTACK, MOVES.DEFENSE_CURL, MOVES.POUND],
        8: [MOVES.QUICK_ATTACK],
        12: [MOVES.DEFENSE_CURL],
        16: [MOVES.POUND],
        20: [MOVES.DOUBLE_SLAP],
        32: [MOVES.POUND],
        36: [MOVES.DOUBLE_SLAP],
        44: [MOVES.DOUBLE_SLAP]
    },
    height: 1.6, // in meters
    weight: 130.0, // in kg
    gender: { male: 75, female: 25 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 227,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 3, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'MACHOKE'
};