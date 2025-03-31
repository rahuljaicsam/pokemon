import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CLEFABLE = {
    id: 36,
    name: 'Clefable',
    types: [TYPES.FAIRY],
    baseStats: { hp: 95, attack: 70, defense: 73, spAtk: 95, spDef: 90, speed: 60 },
    moves: {
        1: [MOVES.POUND, MOVES.GROWL, MOVES.SING, MOVES.DOUBLE_SLAP],
        7: [MOVES.SING],
        13: [MOVES.DOUBLE_SLAP],
        19: [MOVES.MINIMIZE],
        25: [MOVES.METRONOME],
        31: [MOVES.DEFENSE_CURL],
        37: [MOVES.LIGHT_SCREEN],
        43: [MOVES.COSMIC_POWER],
        49: [MOVES.MOONBLAST],
        55: [MOVES.STORED_POWER]
    },
    height: 1.3, // in meters
    weight: 40.0, // in kg
    gender: { male: 25, female: 75 },
    eggGroups: ['Fairy'],
    eggCycles: 10,
    catchRate: 25,
    baseExp: 242,
    growthRate: 'Fast',
    evYields: { hp: 3, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};