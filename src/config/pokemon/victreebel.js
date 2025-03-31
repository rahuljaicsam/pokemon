import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VICTREEBEL = {
    id: 71,
    name: 'Victreebel',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 80, attack: 105, defense: 65, spAtk: 100, spDef: 70, speed: 70 },
    moves: {
        1: [MOVES.VINE_WHIP, MOVES.SLEEP_POWDER, MOVES.SWEET_SCENT, MOVES.RAZOR_LEAF],
        13: [MOVES.POISON_POWDER],
        15: [MOVES.STUN_SPORE],
        23: [MOVES.ACID],
        29: [MOVES.LEAF_BLADE],
        38: [MOVES.SLAM],
        47: [MOVES.LEAF_STORM]
    },
    height: 1.7,
    weight: 15.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 221,
    growthRate: 'Medium Slow',
    evYields: { hp: 0, attack: 3, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Said to live in huge colonies deep in jungles, although no one has ever returned from there.',
    abilities: {
        normal: ['Chlorophyll'],
        hidden: ['Gluttony']
    },
    evolvesFrom: 'WEEPINBELL'
}