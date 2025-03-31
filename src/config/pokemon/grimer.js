import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GRIMER = {
    id: 88,
    name: 'Grimer',
    types: [TYPES.POISON],
    baseStats: { hp: 80, attack: 80, defense: 50, spAtk: 40, spDef: 50, speed: 25 },
    moves: {
        1: [MOVES.POUND, MOVES.POISON_GAS],
        7: [MOVES.HARDEN],
        13: [MOVES.MUD_SLAP],
        19: [MOVES.DISABLE],
        25: [MOVES.MINIMIZE],
        31: [MOVES.SLUDGE],
        37: [MOVES.SLUDGE_BOMB],
        43: [MOVES.SCREECH],
        49: [MOVES.ACID_ARMOR],
        55: [MOVES.GUNK_SHOT]
    },
    height: 0.9, // in meters
    weight: 30.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 65,
    growthRate: 'Medium_Fast',
    evYields: { hp: 1, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 38,
        evolvesTo: 'MUK'
    }
};