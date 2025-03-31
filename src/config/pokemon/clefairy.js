import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const CLEFAIRY = {
    id: 35,
    name: 'Clefairy',
    types: [TYPES.FAIRY],
    baseStats: { hp: 70, attack: 45, defense: 48, spAtk: 60, spDef: 65, speed: 35 },
    moves: {
        1: [MOVES.POUND, MOVES.GROWL],
        7: [MOVES.SING],
        13: [MOVES.DOUBLE_SLAP],
        19: [MOVES.MINIMIZE],
        25: [MOVES.METRONOME],
        31: [MOVES.DEFENSE_CURL],
        37: [MOVES.LIGHT_SCREEN],
        43: [MOVES.COSMIC_POWER],
        49: [MOVES.MOONBLAST]
    },
    height: 0.6, // in meters
    weight: 7.5, // in kg
    gender: { male: 25, female: 75 },
    eggGroups: ['Fairy'],
    eggCycles: 10,
    catchRate: 150,
    baseExp: 113,
    growthRate: 'Fast',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 }
};