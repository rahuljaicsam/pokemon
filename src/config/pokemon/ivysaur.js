import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const IVYSAUR = {
    id: 2,
    name: 'Ivysaur',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 60, attack: 62, defense: 63, spAtk: 80, spDef: 80, speed: 60 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GROWL, MOVES.VINE_WHIP],
        3: [MOVES.LEECH_SEED]
    },
    height: 1.0, // in meters
    weight: 13.0, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 142,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 1, speed: 0 },
    evolution: {
        level: 32,
        evolvesTo: 'VENUSAUR'
    },
    evolvesFrom: 'BULBASAUR'
};