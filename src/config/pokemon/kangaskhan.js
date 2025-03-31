import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KANGASKHAN = {
    id: 115,
    name: 'Kangaskhan',
    types: [TYPES.NORMAL],
    baseStats: { hp: 105, attack: 95, defense: 80, spAtk: 40, spDef: 80, speed: 90 },
    moves: {
        1: [MOVES.COMET_PUNCH, MOVES.LEER],
        7: [MOVES.FAKE_OUT],
        10: [MOVES.TAIL_WHIP],
        13: [MOVES.BITE],
        19: [MOVES.RAGE],
        22: [MOVES.MEGA_PUNCH],
        25: [MOVES.CHIP_AWAY],
        31: [MOVES.DIZZY_PUNCH],
        34: [MOVES.CRUNCH],
        37: [MOVES.ENDURE],
        43: [MOVES.OUTRAGE],
        46: [MOVES.SUCKER_PUNCH],
        49: [MOVES.DOUBLE_HIT],
        50: [MOVES.REVERSAL]
    },
    height: 2.2,
    weight: 80.0,
    gender: { male: 0, female: 100 },
    eggGroups: ['Monster'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 172,
    growthRate: 'Medium_Fast',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};