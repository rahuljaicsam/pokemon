import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VENONAT = {
    id: 48,
    name: 'Venonat',
    types: [TYPES.BUG, TYPES.POISON],
    baseStats: { hp: 60, attack: 55, defense: 50, spAtk: 40, spDef: 55, speed: 45 },
    moves: {
        1: [MOVES.TACKLE, MOVES.DISABLE],
        5: [MOVES.SUPERSONIC],
        11: [MOVES.CONFUSION],
        13: [MOVES.POISON_POWDER],
        17: [MOVES.LEECH_LIFE],
        23: [MOVES.STUN_SPORE],
        29: [MOVES.PSYBEAM],
        35: [MOVES.SLEEP_POWDER],
        41: [MOVES.PSYCHIC],
        47: [MOVES.SIGNAL_BEAM]
    },
    height: 1.0, // in meters
    weight: 30.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Bug'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 61,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 1, speed: 0 },
    evolution: {
        level: 31,
        evolvesTo: 'VENOMOTH'
    }
};