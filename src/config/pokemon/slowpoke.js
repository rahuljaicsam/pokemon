import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SLOWPOKE = {
    id: 79,
    name: 'Slowpoke',
    types: [TYPES.WATER, TYPES.PSYCHIC],
    baseStats: { hp: 90, attack: 65, defense: 65, spAtk: 40, spDef: 40, speed: 15 },
    moves: {
        1: [MOVES.TACKLE, MOVES.CURSE],
        5: [MOVES.GROWL],
        9: [MOVES.WATER_GUN],
        14: [MOVES.CONFUSION],
        19: [MOVES.DISABLE],
        23: [MOVES.HEADBUTT],
        28: [MOVES.WATER_PULSE],
        32: [MOVES.ZEN_HEADBUTT],
        36: [MOVES.SLACK_OFF],
        41: [MOVES.AMNESIA],
        45: [MOVES.PSYCHIC],
        49: [MOVES.RAIN_DANCE],
        54: [MOVES.PSYCH_UP],
        58: [MOVES.HEAL_PULSE]
    },
    height: 1.2, // in meters
    weight: 36.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster', 'Water 1'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 63,
    growthRate: 'Medium_Fast',
    evYields: { hp: 1, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolution: {
        level: 37,
        evolvesTo: 'SLOWBRO'
    }
};