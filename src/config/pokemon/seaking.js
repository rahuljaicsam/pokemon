import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SEAKING = {
    id: 119,
    name: 'Seaking',
    types: [TYPES.WATER],
    baseStats: { hp: 80, attack: 92, defense: 65, spAtk: 65, spDef: 80, speed: 68 },
    moves: {
        1: [MOVES.PECK, MOVES.TAIL_WHIP, MOVES.SUPERSONIC, MOVES.HORN_ATTACK],
        13: [MOVES.WATER_PULSE],
        16: [MOVES.FLAIL],
        21: [MOVES.AQUA_RING],
        24: [MOVES.FURY_ATTACK],
        29: [MOVES.WATERFALL],
        32: [MOVES.HORN_DRILL],
        37: [MOVES.AGILITY],
        40: [MOVES.SOAK],
        45: [MOVES.MEGAHORN],
        48: [MOVES.HORN_DRILL],
        52: [MOVES.POISON_JAB]
    },
    height: 1.3,
    weight: 39.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water_2'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 158,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'GOLDEEN'
};