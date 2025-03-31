import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NIDOQUEEN = {
    id: 31,
    name: 'Nidoqueen',
    types: [TYPES.POISON, TYPES.GROUND],
    baseStats: { hp: 90, attack: 92, defense: 87, spAtk: 75, spDef: 85, speed: 76 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.TAIL_WHIP, MOVES.DOUBLE_KICK, MOVES.POISON_STING],
        8: [MOVES.SCRATCH],
        12: [MOVES.DOUBLE_KICK],
        23: [MOVES.POISON_STING],
        32: [MOVES.BODY_SLAM],
        41: [MOVES.EARTH_POWER],
        43: [MOVES.SUPERPOWER],
        50: [MOVES.FURY_SWIPES],
        58: [MOVES.CRUNCH],
        67: [MOVES.EARTHQUAKE]
    },
    height: 1.3, // in meters
    weight: 60.0, // in kg
    gender: { male: 0, female: 100 }, // Female only
    eggGroups: ['Monster', 'Ground'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 227,
    growthRate: 'Medium_Slow',
    evYields: { hp: 3, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};