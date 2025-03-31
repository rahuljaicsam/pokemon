import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const POLIWRATH = {
    id: 62,
    name: 'Poliwrath',
    types: [TYPES.WATER, TYPES.FIGHTING],
    baseStats: { hp: 90, attack: 95, defense: 95, spAtk: 70, spDef: 90, speed: 70 },
    moves: {
        1: [MOVES.BUBBLE, MOVES.HYPNOSIS, MOVES.WATER_GUN, MOVES.DOUBLE_SLAP],
        13: [MOVES.SUBMISSION],
        19: [MOVES.RAIN_DANCE],
        27: [MOVES.BODY_SLAM],
        35: [MOVES.MIND_READER],
        43: [MOVES.DYNAMIC_PUNCH],
        53: [MOVES.HYDRO_PUMP]
    },
    height: 1.3,
    weight: 54.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 230,
    growthRate: 'Medium Slow',
    evYields: { hp: 0, attack: 0, defense: 3, spAtk: 0, spDef: 0, speed: 0 },
    description: 'An adept swimmer, it can swim the length of a large lake in just two hours. It can also run powerfully.',
    abilities: {
        normal: ['Water Absorb', 'Damp'],
        hidden: ['Swift Swim']
    },
    evolvesFrom: 'POLIWHIRL'
}