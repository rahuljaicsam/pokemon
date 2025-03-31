import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MANKEY = {
    id: 56,
    name: 'Mankey',
    types: [TYPES.FIGHTING],
    baseStats: { hp: 40, attack: 80, defense: 35, spAtk: 35, spDef: 45, speed: 70 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.LEER],
        9: [MOVES.QUICK_ATTACK],
        15: [MOVES.FURY_SWIPES],
        21: [MOVES.FOCUS_ENERGY],
        27: [MOVES.SEISMIC_TOSS]
    },
    height: 0.5,
    weight: 28.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 61,
    growthRate: 'Medium Fast',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Light and agile on its feet, and ferocious in temperament. When angered, it flies into an uncontrollable frenzy.',
    abilities: {
        normal: ['Vital Spirit', 'Anger Point'],
        hidden: ['Defiant']
    },
    evolution: {
        level: 28,
        evolvesTo: 'PRIMEAPE'
    }
}