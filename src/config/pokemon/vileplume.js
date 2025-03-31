import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VILEPLUME = {
    id: 45,
    name: 'Vileplume',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 75, attack: 80, defense: 85, spAtk: 110, spDef: 90, speed: 50 },
    moves: {
        1: [MOVES.ABSORB, MOVES.GROWTH, MOVES.SWEET_SCENT, MOVES.STUN_SPORE],
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
        54: [MOVES.PETAL_DANCE],
        59: [MOVES.SOLAR_BEAM]
    },
    height: 1.2, // in meters
    weight: 18.6, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 245,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 }
};