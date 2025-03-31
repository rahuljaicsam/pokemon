import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PORYGON = {
    id: 137,
    name: 'Porygon',
    types: [TYPES.NORMAL],
    baseStats: { hp: 65, attack: 60, defense: 70, spAtk: 85, spDef: 75, speed: 40 },
    moves: {
        1: [MOVES.TACKLE, MOVES.CONVERSION],
        9: [MOVES.SHARPEN],
        12: [MOVES.PSYBEAM],
        20: [MOVES.RECOVER],
        24: [MOVES.AGILITY],
        32: [MOVES.TRI_ATTACK],
        36: [MOVES.CONVERSION_2],
        44: [MOVES.ZAP_CANNON]
    },
    height: 0.8,
    weight: 36.5,
    gender: 'None',
    eggGroups: ['Mineral'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 79,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 }
};