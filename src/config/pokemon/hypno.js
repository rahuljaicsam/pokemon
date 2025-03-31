import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const HYPNO = {
    id: 97,
    name: 'Hypno',
    types: [TYPES.PSYCHIC],
    baseStats: { hp: 85, attack: 73, defense: 70, spAtk: 73, spDef: 115, speed: 67 },
    moves: {
        1: [MOVES.POUND, MOVES.HYPNOSIS, MOVES.DISABLE, MOVES.CONFUSION],
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
        57: [MOVES.PSYSHOCK],
        61: [MOVES.FUTURE_SIGHT]
    },
    height: 1.6,
    weight: 75.6,
    gender: { male: 50, female: 50 },
    eggGroups: ['Human-Like'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 169,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 2, speed: 0 }
};