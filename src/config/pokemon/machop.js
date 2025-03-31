import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MACHOP = {
    id: 66,
    name: 'Machop',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 70, attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GROWL],
        8: [MOVES.QUICK_ATTACK],
        12: [MOVES.DEFENSE_CURL],
        16: [MOVES.POUND],
        20: [MOVES.DOUBLE_SLAP]
    },
    height: 0.8, // in meters
    weight: 19.5, // in kg
    gender: { male: 75, female: 25 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 180,
    baseExp: 61,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 28,
        evolvesTo: 'MACHOKE'
    }
};