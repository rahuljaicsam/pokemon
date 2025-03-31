import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DRAGONITE = {
    id: 149,
    name: 'Dragonite',
    types: [TYPES.DRAGON, TYPES.FLYING],
    baseStats: { hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80 },
    moves: {
        1: [MOVES.WRAP, MOVES.LEER, MOVES.THUNDER_WAVE, MOVES.TWISTER],
        15: [MOVES.DRAGON_RAGE],
        21: [MOVES.SLAM],
        25: [MOVES.AGILITY],
        31: [MOVES.DRAGON_TAIL],
        39: [MOVES.AQUA_TAIL],
        47: [MOVES.DRAGON_RUSH],
        55: [MOVES.SAFEGUARD],
        61: [MOVES.WING_ATTACK],
        67: [MOVES.DRAGON_DANCE],
        75: [MOVES.OUTRAGE],
        81: [MOVES.HYPER_BEAM]
    },
    height: 2.2, // in meters
    weight: 210.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Dragon'],
    eggCycles: 40,
    catchRate: 45,
    baseExp: 270,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 3, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'DRAGONAIR'
};