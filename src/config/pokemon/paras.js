import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PARAS = {
    id: 46,
    name: 'Paras',
    types: [TYPES.BUG, TYPES.GRASS],
    baseStats: { hp: 35, attack: 70, defense: 55, spAtk: 45, spDef: 55, speed: 25 },
    moves: {
        1: [MOVES.SCRATCH],
        6: [MOVES.STUN_SPORE],
        11: [MOVES.POISON_POWDER],
        17: [MOVES.ABSORB],
        22: [MOVES.FURY_CUTTER],
        27: [MOVES.SPORE],
        33: [MOVES.SLASH],
        38: [MOVES.GROWTH],
        43: [MOVES.GIGA_DRAIN],
        49: [MOVES.AROMATHERAPY],
        54: [MOVES.RAGE_POWDER],
        58: [MOVES.X_SCISSOR]
    },
    height: 0.3, // in meters
    weight: 5.4, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug', 'Grass'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 57,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};