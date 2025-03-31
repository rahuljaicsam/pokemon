import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VENOMOTH = {
    id: 49,
    name: 'Venomoth',
    types: [TYPES.BUG, TYPES.POISON],
    baseStats: { hp: 70, attack: 65, defense: 60, spAtk: 90, spDef: 75, speed: 90 },
    moves: {
        1: [MOVES.TACKLE, MOVES.DISABLE, MOVES.SUPERSONIC, MOVES.CONFUSION],
        5: [MOVES.SUPERSONIC],
        11: [MOVES.CONFUSION],
        13: [MOVES.POISON_POWDER],
        17: [MOVES.LEECH_LIFE],
        23: [MOVES.STUN_SPORE],
        29: [MOVES.PSYBEAM],
        31: [MOVES.GUST],
        37: [MOVES.SLEEP_POWDER],
        43: [MOVES.PSYCHIC],
        50: [MOVES.SIGNAL_BEAM],
        57: [MOVES.BUG_BUZZ]
    },
    height: 1.5, // in meters
    weight: 12.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 158,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 1 }
};