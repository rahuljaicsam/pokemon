import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const POLIWHIRL = {
    id: 61,
    name: 'Poliwhirl',
    types: [TYPES.WATER],
    baseStats: { hp: 65, attack: 65, defense: 65, spAtk: 50, spDef: 50, speed: 90 },
    moves: {
        1: [MOVES.BUBBLE, MOVES.HYPNOSIS, MOVES.WATER_GUN],
        13: [MOVES.DOUBLE_SLAP],
        19: [MOVES.RAIN_DANCE],
        27: [MOVES.BODY_SLAM],
        35: [MOVES.BELLY_DRUM],
        43: [MOVES.HYDRO_PUMP]
    },
    height: 1.0,
    weight: 20.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1'],
    eggCycles: 20,
    catchRate: 120,
    baseExp: 135,
    growthRate: 'Medium Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    description: 'Capable of living in or out of water. When out of water, it sweats to keep its body slimy.',
    abilities: {
        normal: ['Water Absorb', 'Damp'],
        hidden: ['Swift Swim']
    },
    evolution: {
        item: 'WATER_STONE',
        evolvesTo: 'POLIWRATH'
    },
    evolvesFrom: 'POLIWAG'
}