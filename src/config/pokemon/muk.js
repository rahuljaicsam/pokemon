import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MUK = {
    id: 89,
    name: 'Muk',
    types: [TYPES.POISON],
    baseStats: { hp: 105, attack: 105, defense: 75, spAtk: 65, spDef: 100, speed: 50 },
    moves: {
        1: [MOVES.POUND, MOVES.POISON_GAS, MOVES.HARDEN, MOVES.MUD_SLAP],
        7: [MOVES.HARDEN],
        13: [MOVES.MUD_SLAP],
        19: [MOVES.DISABLE],
        25: [MOVES.MINIMIZE],
        31: [MOVES.SLUDGE],
        38: [MOVES.SLUDGE_WAVE],
        43: [MOVES.SLUDGE_BOMB],
        49: [MOVES.SCREECH],
        55: [MOVES.ACID_ARMOR],
        61: [MOVES.GUNK_SHOT],
        67: [MOVES.BELCH]
    },
    height: 1.2, // in meters
    weight: 30.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 175,
    growthRate: 'Medium_Fast',
    evYields: { hp: 1, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'GRIMER'
};