import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KOFFING = {
    id: 109,
    name: 'Koffing',
    types: [TYPES.POISON],
    baseStats: { hp: 40, attack: 65, defense: 95, spAtk: 60, spDef: 45, speed: 35 },
    moves: {
        1: [MOVES.POISON_GAS, MOVES.TACKLE],
        4: [MOVES.SMOG],
        7: [MOVES.SMOKESCREEN],
        12: [MOVES.CLEAR_SMOG],
        15: [MOVES.ASSURANCE],
        18: [MOVES.SLUDGE],
        21: [MOVES.SELF_DESTRUCT],
        26: [MOVES.HAZE],
        29: [MOVES.GYRO_BALL],
        32: [MOVES.SLUDGE_BOMB],
        37: [MOVES.EXPLOSION],
        40: [MOVES.DESTINY_BOND],
        43: [MOVES.BELCH],
        46: [MOVES.MEMENTO]
    },
    height: 0.6,
    weight: 1.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 68,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};