import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NIDORINA = {
    id: 30,
    name: 'Nidorina',
    types: [TYPES.POISON],
    baseStats: { hp: 70, attack: 62, defense: 67, spAtk: 55, spDef: 55, speed: 56 },
    moves: {
        1: [MOVES.GROWL, MOVES.SCRATCH, MOVES.TAIL_WHIP],
        8: [MOVES.DOUBLE_KICK],
        14: [MOVES.POISON_STING],
        23: [MOVES.BITE],
        32: [MOVES.FURY_SWIPES],
        41: [MOVES.CRUNCH]
    },
    height: 0.8, // in meters
    weight: 20.0, // in kg
    gender: { male: 0, female: 100 },
    eggGroups: ['Undiscovered'],
    eggCycles: 20,
    catchRate: 120,
    baseExp: 128,
    growthRate: 'Medium_Slow',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        item: 'MOON_STONE',
        evolvesTo: 'NIDOQUEEN'
    },
    evolvesFrom: 'NIDORAN_F'
};