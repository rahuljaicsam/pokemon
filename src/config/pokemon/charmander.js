import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CHARMANDER = {
    id: 4,
    name: 'Charmander',
    types: [TYPES.FIRE],
    baseStats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 },
    moves: {
        1: [MOVES.SCRATCH],
        4: [MOVES.GROWL],
        7: [MOVES.EMBER],
        10: [MOVES.METAL_CLAW]
    },
    height: 0.6, // in meters
    weight: 8.5, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Dragon'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 62,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 16,
        evolvesTo: 'CHARMELEON'
    }
};