import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PRIMEAPE = {
    id: 57,
    name: 'Primeape',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 65, attack: 105, defense: 60, spAtk: 60, spDef: 70, speed: 95 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.LEER, MOVES.QUICK_ATTACK, MOVES.FURY_SWIPES],
        15: [MOVES.KARATE_CHOP],
        21: [MOVES.FOCUS_ENERGY],
        27: [MOVES.SEISMIC_TOSS],
        37: [MOVES.THRASH],
        46: [MOVES.CLOSE_COMBAT]
    },
    height: 1.0,
    weight: 32.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 159,
    growthRate: 'Medium Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.',
    abilities: {
        normal: ['Vital Spirit', 'Anger Point'],
        hidden: ['Defiant']
    },
    evolvesFrom: 'MANKEY'
}