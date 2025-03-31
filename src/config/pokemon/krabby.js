import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KRABBY = {
    id: 98,
    name: 'Krabby',
    types: [TYPES.WATER],
    baseStats: { hp: 30, attack: 105, defense: 90, spAtk: 25, spDef: 25, speed: 50 },
    moves: {
        1: [MOVES.BUBBLE, MOVES.LEER],
        5: [MOVES.VICE_GRIP],
        9: [MOVES.HARDEN],
        13: [MOVES.BUBBLE_BEAM],
        17: [MOVES.MUD_SHOT],
        21: [MOVES.METAL_CLAW],
        25: [MOVES.STOMP],
        29: [MOVES.PROTECT],
        33: [MOVES.GUILLOTINE],
        37: [MOVES.SLAM],
        41: [MOVES.CRABHAMMER],
        45: [MOVES.FLAIL]
    },
    height: 0.4,
    weight: 6.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_3'],
    eggCycles: 20,
    catchRate: 225,
    baseExp: 65,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};