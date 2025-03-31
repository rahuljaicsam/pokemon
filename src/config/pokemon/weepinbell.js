import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const WEEPINBELL = {
    id: 70,
    name: 'Weepinbell',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 65, attack: 90, defense: 50, spAtk: 85, spDef: 45, speed: 55 },
    moves: {
        1: [MOVES.VINE_WHIP, MOVES.GROWTH, MOVES.WRAP],
        13: [MOVES.POISON_POWDER],
        15: [MOVES.SLEEP_POWDER],
        18: [MOVES.STUN_SPORE],
        23: [MOVES.ACID],
        29: [MOVES.RAZOR_LEAF],
        38: [MOVES.SLAM],
        49: [MOVES.WRING_OUT]
    },
    height: 1.0,
    weight: 6.4,
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 120,
    baseExp: 137,
    growthRate: 'Medium Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'It spits out poisonpowder to immobilize the enemy and then finishes it with a spray of acid.',
    abilities: {
        normal: ['Chlorophyll'],
        hidden: ['Gluttony']
    },
    evolution: {
        item: 'LEAF_STONE',
        evolvesTo: 'VICTREEBEL'
    },
    evolvesFrom: 'BELLSPROUT'
}