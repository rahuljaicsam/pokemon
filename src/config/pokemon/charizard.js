import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CHARIZARD = {
    id: 6,
    name: 'Charizard',
    types: [TYPES.FIRE, TYPES.FLYING],
    baseStats: { hp: 78, attack: 84, defense: 78, spAtk: 109, spDef: 85, speed: 100 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.GROWL, MOVES.EMBER, MOVES.METAL_CLAW]
    },
    height: 1.7, // in meters
    weight: 90.5, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Dragon'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 240,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 },
    evolvesFrom: 'CHARMELEON'
};