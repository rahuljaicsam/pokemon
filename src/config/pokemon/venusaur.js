import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VENUSAUR = {
    id: 3,
    name: 'Venusaur',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 80, attack: 82, defense: 83, spAtk: 100, spDef: 100, speed: 80 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GROWL, MOVES.VINE_WHIP, MOVES.LEECH_SEED]
    },
    height: 2.0, // in meters
    weight: 100.0, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 236,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 2, spDef: 1, speed: 0 },
    evolvesFrom: 'IVYSAUR'
};