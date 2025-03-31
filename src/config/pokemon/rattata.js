import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const RATTATA = {
    id: 19,
    name: 'Rattata',
    types: [TYPES.NORMAL],
    baseStats: { hp: 30, attack: 56, defense: 35, spAtk: 25, spDef: 35, speed: 72 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP],
        7: [MOVES.QUICK_ATTACK],
        13: [MOVES.HYPER_FANG]
    },
    height: 0.3, // in meters
    weight: 3.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 15,
    catchRate: 255,
    baseExp: 51,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 20,
        evolvesTo: 'RATICATE'
    }
};