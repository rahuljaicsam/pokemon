import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const EXEGGUTOR = {
    id: 103,
    name: 'Exeggutor',
    types: [TYPES.GRASS, TYPES.PSYCHIC],
    baseStats: { hp: 95, attack: 95, defense: 85, spAtk: 125, spDef: 75, speed: 55 },
    moves: {
        1: [MOVES.BARRAGE, MOVES.HYPNOSIS, MOVES.CONFUSION, MOVES.STOMP],
        17: [MOVES.PSYSHOCK],
        27: [MOVES.EGG_BOMB],
        37: [MOVES.WOOD_HAMMER],
        47: [MOVES.LEAF_STORM]
    },
    height: 2.0,
    weight: 120.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 186,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 0, speed: 0 },
    evolvesFrom: 'EXEGGCUTE'
};