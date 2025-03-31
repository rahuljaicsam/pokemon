import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MAGMAR = {
    id: 126,
    name: 'Magmar',
    types: [TYPES.FIRE],
    baseStats: { hp: 65, attack: 95, defense: 57, spAtk: 100, spDef: 85, speed: 93 },
    moves: {
        1: [MOVES.EMBER, MOVES.LEER],
        5: [MOVES.SMOG],
        8: [MOVES.SMOKESCREEN],
        12: [MOVES.FEINT_ATTACK],
        15: [MOVES.FIRE_SPIN],
        19: [MOVES.CLEAR_SMOG],
        22: [MOVES.FLAME_BURST],
        26: [MOVES.CONFUSE_RAY],
        29: [MOVES.FIRE_PUNCH],
        36: [MOVES.LAVA_PLUME],
        42: [MOVES.SUNNY_DAY],
        49: [MOVES.FLAMETHROWER],
        55: [MOVES.FIRE_BLAST]
    },
    height: 1.3,
    weight: 44.5,
    gender: { male: 75, female: 25 },
    eggGroups: ['Human_Like'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 173,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 }
};