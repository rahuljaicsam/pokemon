import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const RATICATE = {
    id: 20,
    name: 'Raticate',
    types: [TYPES.NORMAL],
    baseStats: { hp: 55, attack: 81, defense: 60, spAtk: 50, spDef: 70, speed: 97 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.QUICK_ATTACK],
        7: [MOVES.HYPER_FANG],
        20: [MOVES.SCARY_FACE]
    },
    height: 0.7, // in meters
    weight: 18.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 15,
    catchRate: 127,
    baseExp: 145,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolvesFrom: 'RATTATA'
};