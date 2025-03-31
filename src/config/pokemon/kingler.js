import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KINGLER = {
    id: 99,
    name: 'Kingler',
    types: [TYPES.WATER],
    baseStats: { hp: 55, attack: 130, defense: 115, spAtk: 50, spDef: 50, speed: 75 },
    moves: {
        1: [MOVES.BUBBLE, MOVES.LEER, MOVES.VICE_GRIP, MOVES.HARDEN],
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
        45: [MOVES.FLAIL],
        49: [MOVES.WIDE_GUARD],
        53: [MOVES.HYPER_BEAM]
    },
    height: 1.3,
    weight: 60.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_3'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 166,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};