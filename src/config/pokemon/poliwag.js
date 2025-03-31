import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const POLIWAG = {
    id: 60,
    name: 'Poliwag',
    types: [TYPES.WATER],
    baseStats: { hp: 40, attack: 50, defense: 40, spAtk: 40, spDef: 40, speed: 90 },
    moves: {
        1: [MOVES.BUBBLE],
        7: [MOVES.HYPNOSIS],
        13: [MOVES.WATER_GUN],
        19: [MOVES.DOUBLE_SLAP],
        25: [MOVES.RAIN_DANCE],
        31: [MOVES.BODY_SLAM],
        37: [MOVES.BELLY_DRUM],
        43: [MOVES.HYDRO_PUMP]
    },
    height: 0.6,
    weight: 12.4,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 60,
    growthRate: 'Medium Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    description: 'Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.',
    abilities: {
        normal: ['Water Absorb', 'Damp'],
        hidden: ['Swift Swim']
    },
    evolution: {
        level: 25,
        evolvesTo: 'POLIWHIRL'
    }
}