import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const BULBASAUR = {
    id: 1,
    name: 'Bulbasaur',
    types: [TYPES.GRASS, TYPES.POISON],
    baseStats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
    moves: {
        1: [MOVES.TACKLE],
        3: [MOVES.GROWL],
        7: [MOVES.VINE_WHIP],
        10: [MOVES.LEECH_SEED]
    },
    height: 0.7, // in meters
    weight: 6.9, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Grass'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 64,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 },
    evolution: {
        level: 16,
        evolvesTo: 'IVYSAUR'
    }
};