import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ODDISH = {
    id: 43,
    name: 'Oddish',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 45, attack: 50, defense: 55, spAtk: 75, spDef: 65, speed: 30 },
    moves: {
        1: [MOVES.ABSORB, MOVES.GROWTH],
        5: [MOVES.SWEET_SCENT],
        9: [MOVES.ACID],
        13: [MOVES.POISON_POWDER],
        14: [MOVES.STUN_SPORE],
        15: [MOVES.SLEEP_POWDER],
        19: [MOVES.MEGA_DRAIN],
        23: [MOVES.LUCKY_CHANT],
        27: [MOVES.MOONLIGHT],
        31: [MOVES.GIGA_DRAIN],
        35: [MOVES.TOXIC],
        39: [MOVES.NATURAL_GIFT],
        43: [MOVES.MOONBLAST],
        47: [MOVES.PETAL_DANCE]
    },
    height: 0.5, // in meters
    weight: 5.4, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 64,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 }
};