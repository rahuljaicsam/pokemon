import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CHARMELEON = {
    id: 5,
    name: 'Charmeleon',
    types: [TYPES.FIRE],
    baseStats: { hp: 58, attack: 64, defense: 58, spAtk: 80, spDef: 65, speed: 80 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.GROWL, MOVES.EMBER],
        3: [MOVES.METAL_CLAW]
    },
    height: 1.1, // in meters
    weight: 19.0, // in kg
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster', 'Dragon'],
    eggCycles: 20,
    catchRate: 45,
    baseExp: 142,
    growthRate: 'Medium_Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 1 },
    evolution: {
        level: 36,
        evolvesTo: 'CHARIZARD'
    },
    evolvesFrom: 'CHARMANDER'
};