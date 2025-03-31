import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MR_MIME = {
    id: 122,
    name: 'Mr. Mime',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 40, attack: 45, defense: 65, spAtk: 100, spDef: 120, speed: 90 },
    moves: {
        1: [MOVES.CONFUSION, MOVES.BARRIER],
        4: [MOVES.COPYCAT],
        8: [MOVES.MEDITATE],
        11: [MOVES.DOUBLE_SLAP],
        15: [MOVES.MIMIC],
        18: [MOVES.LIGHT_SCREEN],
        22: [MOVES.REFLECT],
        25: [MOVES.PSYBEAM],
        29: [MOVES.SUBSTITUTE],
        32: [MOVES.RECYCLE],
        36: [MOVES.TRICK],
        39: [MOVES.PSYCHIC],
        43: [MOVES.ROLE_PLAY],
        46: [MOVES.BATON_PASS],
        50: [MOVES.SAFEGUARD]
    },
    height: 1.3,
    weight: 54.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Human_Like'],
    eggCycles: 25,
    catchRate: 45,
    baseExp: 161,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 2, speed: 0 }
};