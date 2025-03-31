import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const BUTTERFREE = {
    id: 12,
    name: 'Butterfree',
    types: [TYPES.BUG, TYPES.FLYING],
    baseStats: { hp: 60, attack: 45, defense: 50, spAtk: 90, spDef: 80, speed: 70 },
    moves: {
        1: [MOVES.CONFUSION, MOVES.GUST],
        12: [MOVES.SLEEP_POWDER],
        16: [MOVES.STUN_SPORE],
        20: [MOVES.PSYBEAM]
    },
    height: 1.1, // in meters
    weight: 32.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 15,
    catchRate: 45,
    baseExp: 178,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 1, speed: 0 },
    evolvesFrom: 'METAPOD'
};