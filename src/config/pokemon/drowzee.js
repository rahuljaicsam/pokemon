import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DROWZEE = {
    id: 96,
    name: 'Drowzee',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 60, attack: 48, defense: 45, spAtk: 43, spDef: 90, speed: 42 },
    moves: {
        1: [MOVES.POUND, MOVES.HYPNOSIS],
        5: [MOVES.DISABLE],
        9: [MOVES.CONFUSION],
        13: [MOVES.HEADBUTT],
        17: [MOVES.POISON_GAS],
        21: [MOVES.MEDITATE],
        25: [MOVES.PSYBEAM],
        29: [MOVES.WAKE_UP_SLAP],
        33: [MOVES.PSYCH_UP],
        37: [MOVES.SYNCHRONOISE],
        41: [MOVES.ZEN_HEADBUTT],
        45: [MOVES.SWAGGER],
        49: [MOVES.PSYCHIC],
        53: [MOVES.NASTY_PLOT],
        57: [MOVES.PSYSHOCK]
    },
    height: 1.0,
    weight: 32.4,
    gender: { male: 50, female: 50 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 66,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 1, speed: 0 }
};