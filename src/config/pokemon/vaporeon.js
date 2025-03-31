import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VAPOREON = {
    id: 134,
    name: 'Vaporeon',
    types: [TYPES.WATER],
    baseStats: { hp: 130, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 65 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.WATER_GUN],
        8: [MOVES.SAND_ATTACK],
        16: [MOVES.WATER_PULSE],
        23: [MOVES.QUICK_ATTACK],
        30: [MOVES.BITE],
        36: [MOVES.AURORA_BEAM],
        42: [MOVES.AQUA_RING],
        47: [MOVES.LAST_RESORT],
        52: [MOVES.HYDRO_PUMP]
    },
    height: 1.0,
    weight: 29.0,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Field'],
    eggCycles: 35,
    catchRate: 45,
    baseExp: 184,
    growthRate: 'Medium_Fast',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'When Vaporeons fins begin to vibrate, it is a sign that rain will come within a few hours. Its cell structure is similar to water molecules.',
    abilities: {
        normal: ['Water Absorb'],
        hidden: ['Hydration']
    },
    evolvesFrom: 'EEVEE'
};