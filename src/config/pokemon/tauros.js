import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const TAUROS = {
    id: 128,
    name: 'Tauros',
    types: [TYPES.NORMAL],
    baseStats: { hp: 75, attack: 100, defense: 95, spAtk: 40, spDef: 70, speed: 110 },
    moves: {
        1: [MOVES.TACKLE],
        4: [MOVES.TAIL_WHIP],
        8: [MOVES.RAGE],
        13: [MOVES.HORN_ATTACK],
        19: [MOVES.SCARY_FACE],
        26: [MOVES.PURSUIT],
        34: [MOVES.REST],
        41: [MOVES.TAKE_DOWN],
        49: [MOVES.ZEN_HEADBUTT],
        56: [MOVES.SWAGGER],
        64: [MOVES.THRASH],
        71: [MOVES.GIGA_IMPACT]
    },
    height: 1.4,
    weight: 88.4,
    gender: { male: 100, female: 0 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 172,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 1 }
};