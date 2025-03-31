import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const JOLTEON = {
    id: 135,
    name: 'Jolteon',
    types: [TYPES.ELECTRIC],
    baseStats: { hp: 65, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 130 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.THUNDER_SHOCK],
        8: [MOVES.SAND_ATTACK],
        16: [MOVES.THUNDER_WAVE],
        23: [MOVES.QUICK_ATTACK],
        30: [MOVES.DOUBLE_KICK],
        36: [MOVES.PIN_MISSILE],
        42: [MOVES.THUNDER_FANG],
        47: [MOVES.LAST_RESORT],
        52: [MOVES.THUNDER]
    },
    height: 0.8,
    weight: 24.5,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Field'],
    eggCycles: 35,
    catchRate: 45,
    baseExp: 184,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolvesFrom: 'EEVEE'
};