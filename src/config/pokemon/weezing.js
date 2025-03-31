import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const WEEZING = {
    id: 110,
    name: 'Weezing',
    types: [TYPES.POISON],
    baseStats: { hp: 65, attack: 90, defense: 120, spAtk: 85, spDef: 70, speed: 60 },
    moves: {
        1: [MOVES.POISON_GAS, MOVES.TACKLE, MOVES.SMOG, MOVES.SMOKESCREEN],
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
        46: [MOVES.MEMENTO],
        49: [MOVES.DOUBLE_HIT]
    },
    height: 1.2,
    weight: 9.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Amorphous'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 172,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'KOFFING'
};