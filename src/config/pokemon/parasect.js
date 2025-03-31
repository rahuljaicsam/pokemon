import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PARASECT = {
    id: 47,
    name: 'Parasect',
    types: [TYPES.BUG, TYPES.GRASS],
    baseStats: { hp: 60, attack: 95, defense: 80, spAtk: 60, spDef: 80, speed: 30 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.STUN_SPORE, MOVES.POISON_POWDER],
        6: [MOVES.STUN_SPORE],
        11: [MOVES.POISON_POWDER],
        17: [MOVES.ABSORB],
        22: [MOVES.FURY_CUTTER],
        29: [MOVES.SPORE],
        37: [MOVES.SLASH],
        44: [MOVES.GROWTH],
        51: [MOVES.GIGA_DRAIN],
        58: [MOVES.AROMATHERAPY],
        65: [MOVES.RAGE_POWDER],
        72: [MOVES.X_SCISSOR]
    },
    height: 1.0, // in meters
    weight: 29.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug', 'Grass'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 142,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};