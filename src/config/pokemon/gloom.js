import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GLOOM = {
    id: 44,
    name: 'Gloom',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 60, attack: 65, defense: 70, spAtk: 85, spDef: 75, speed: 40 },
    moves: {
        1: [MOVES.ABSORB, MOVES.GROWTH, MOVES.SWEET_SCENT],
        5: [MOVES.SWEET_SCENT],
        9: [MOVES.ACID],
        13: [MOVES.POISON_POWDER],
        14: [MOVES.STUN_SPORE],
        15: [MOVES.SLEEP_POWDER],
        19: [MOVES.MEGA_DRAIN],
        24: [MOVES.LUCKY_CHANT],
        29: [MOVES.MOONLIGHT],
        34: [MOVES.GIGA_DRAIN],
        39: [MOVES.TOXIC],
        44: [MOVES.NATURAL_GIFT],
        49: [MOVES.MOONBLAST],
        54: [MOVES.PETAL_DANCE]
    },
    height: 0.8, // in meters
    weight: 8.6, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 120,
    baseExp: 138,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 }
};