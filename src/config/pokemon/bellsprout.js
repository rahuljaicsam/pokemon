import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const BELLSPROUT = {
    id: 69,
    name: 'Bellsprout',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 50, attack: 75, defense: 35, spAtk: 70, spDef: 30, speed: 40 },
    moves: {
        1: [MOVES.VINE_WHIP],
        7: [MOVES.GROWTH],
        13: [MOVES.WRAP],
        15: [MOVES.POISON_POWDER],
        18: [MOVES.SLEEP_POWDER],
        21: [MOVES.STUN_SPORE],
        26: [MOVES.ACID],
        33: [MOVES.RAZOR_LEAF],
        42: [MOVES.SLAM]
    },
    height: 0.7,
    weight: 4.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 60,
    growthRate: 'Medium Slow',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'A carnivorous Pokémon that traps and eats bugs. It appears to use its root feet to replenish moisture.',
    abilities: {
        normal: ['Chlorophyll'],
        hidden: ['Gluttony']
    },
    evolution: {
        level: 21,
        evolvesTo: 'WEEPINBELL'
    }
}