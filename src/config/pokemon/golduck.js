import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GOLDUCK = {
    id: 55,
    name: 'Golduck',
    types: [TYPES.WATER],
    baseStats: { hp: 80, attack: 82, defense: 78, spAtk: 95, spDef: 80, speed: 85 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.WATER_GUN, MOVES.TAIL_WHIP, MOVES.CONFUSION],
        8: [MOVES.WATER_PULSE],
        15: [MOVES.DISABLE],
        22: [MOVES.ZEN_HEADBUTT],
        29: [MOVES.SCREECH],
        36: [MOVES.AQUA_TAIL],
        43: [MOVES.HYDRO_PUMP]
    },
    height: 1.7,
    weight: 76.6,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Field'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 175,
    growthRate: 'Medium Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 },
    description: 'Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster Kappa.',
    abilities: {
        normal: ['Damp', 'Cloud Nine'],
        hidden: ['Swift Swim']
    },
    evolvesFrom: 'PSYDUCK'
}