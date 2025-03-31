import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NIDORINO = {
    id: 33,
    name: 'Nidorino',
    types: [TYPES.POISON],
    baseStats: { hp: 61, attack: 72, defense: 57, spAtk: 55, spDef: 55, speed: 65 },
    moves: {
        1: [MOVES.LEER, MOVES.TACKLE, MOVES.HORN_ATTACK],
        8: [MOVES.POISON_STING],
        14: [MOVES.FOCUS_ENERGY],
        23: [MOVES.FURY_ATTACK],
        32: [MOVES.HORN_DRILL]
    },
    height: 0.9, // in meters
    weight: 19.5, // in kg
    gender: { male: 100, female: 0 },
    eggGroups: ['Monster', 'Field'],
    eggCycles: 20,
    catchRate: 120,
    baseExp: 118,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        item: 'MOON_STONE',
        evolvesTo: 'NIDOKING'
    },
    evolvesFrom: 'NIDORAN_M'
};