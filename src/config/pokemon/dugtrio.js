import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DUGTRIO = {
    id: 51,
    name: 'Dugtrio',
    types: [TYPES.GROUND],
    baseStats: { hp: 35, attack: 100, defense: 50, spAtk: 50, spDef: 70, speed: 120 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.SAND_ATTACK, MOVES.GROWL, MOVES.ASTONISH],
        4: [MOVES.GROWL],
        7: [MOVES.ASTONISH],
        12: [MOVES.MUD_SLAP],
        15: [MOVES.MAGNITUDE],
        18: [MOVES.BULLDOZE],
        23: [MOVES.SUCKER_PUNCH],
        26: [MOVES.TRI_ATTACK],
        29: [MOVES.EARTH_POWER],
        34: [MOVES.DIG],
        37: [MOVES.SLASH],
        40: [MOVES.EARTHQUAKE],
        45: [MOVES.SAND_TOMB],
        50: [MOVES.FISSURE]
    },
    height: 0.7, // in meters
    weight: 33.3, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 50,
    baseExp: 149,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 }
};