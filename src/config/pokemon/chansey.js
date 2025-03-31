import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CHANSEY = {
    id: 113,
    name: 'Chansey',
    types: [TYPES.NORMAL],
    baseStats: { hp: 250, attack: 5, defense: 5, spAtk: 35, spDef: 105, speed: 50 },
    moves: {
        1: [MOVES.POUND, MOVES.GROWL],
        5: [MOVES.TAIL_WHIP],
        9: [MOVES.REFRESH],
        12: [MOVES.DOUBLE_SLAP],
        16: [MOVES.SOFT_BOILED],
        20: [MOVES.MINIMIZE],
        23: [MOVES.TAKE_DOWN],
        27: [MOVES.SING],
        31: [MOVES.EGG_BOMB],
        35: [MOVES.LIGHT_SCREEN],
        39: [MOVES.DEFENSE_CURL],
        44: [MOVES.DOUBLE_EDGE],
        50: [MOVES.HEALING_WISH]
    },
    height: 1.1,
    weight: 34.6,
    gender: { male: 0, female: 100 },
    eggGroups: ['Fairy'],
    eggCycles: 40,
    catchRate: 30,
    baseExp: 395,
    growthRate: 'Fast',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};