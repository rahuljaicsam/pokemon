import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const FEAROW = {
    id: 22,
    name: 'Fearow',
    types: [TYPES.NORMAL, TYPES.FLYING],
    baseStats: { hp: 65, attack: 90, defense: 65, spAtk: 61, spDef: 61, speed: 100 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GUST],
        5: [MOVES.FURY_ATTACK],
        25: [MOVES.MIRROR_MOVE]
    },
    height: 1.2, // in meters
    weight: 38.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Flying'],
    eggCycles: 15,
    catchRate: 90,
    baseExp: 155,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolvesFrom: 'SPEAROW'
};