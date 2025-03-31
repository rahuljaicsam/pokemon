import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SLOWBRO = {
    id: 80,
    name: 'Slowbro',
    types: [TYPES.WATER, TYPES.PSYCHIC],
    baseStats: { hp: 95, attack: 75, defense: 110, spAtk: 100, spDef: 80, speed: 30 },
    moves: {
        1: [MOVES.TACKLE, MOVES.CURSE, MOVES.WATER_GUN, MOVES.CONFUSION],
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
    height: 1.6, // in meters
    weight: 78.5, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster', 'Water 1'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 172,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 2, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'SLOWPOKE'
};