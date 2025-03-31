import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ARBOK = {
    id: 24,
    name: 'Arbok',
    types: [TYPES.POISON],
    baseStats: { hp: 60, attack: 85, defense: 69, spAtk: 65, spDef: 79, speed: 80 },
    moves: {
        1: [MOVES.WRAP, MOVES.LEER, MOVES.POISON_STING],
        10: [MOVES.BITE],
        17: [MOVES.GLARE],
        27: [MOVES.SCREECH],
        36: [MOVES.ACID]
    },
    height: 3.5, // in meters
    weight: 65.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field', 'Dragon'],
    eggCycles: 20,
    catchRate: 90,
    baseExp: 157,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'EKANS'
};