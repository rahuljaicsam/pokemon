import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const FLAREON = {
    id: 136,
    name: 'Flareon',
    types: [TYPES.FIRE],
    baseStats: { hp: 65, attack: 130, defense: 60, spAtk: 95, spDef: 110, speed: 65 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.EMBER],
        8: [MOVES.SAND_ATTACK],
        16: [MOVES.FIRE_SPIN],
        23: [MOVES.QUICK_ATTACK],
        30: [MOVES.BITE],
        36: [MOVES.FIRE_FANG],
        42: [MOVES.LAVA_PLUME],
        47: [MOVES.LAST_RESORT],
        52: [MOVES.FLARE_BLITZ]
    },
    height: 0.9,
    weight: 25.0,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Field'],
    eggCycles: 35,
    catchRate: 45,
    baseExp: 184,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'EEVEE'
};