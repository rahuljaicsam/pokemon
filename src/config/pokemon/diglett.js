import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DIGLETT = {
    id: 50,
    name: 'Diglett',
    types: [TYPES.GROUND],
    baseStats: { hp: 10, attack: 55, defense: 25, spAtk: 35, spDef: 45, speed: 95 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.SAND_ATTACK],
        4: [MOVES.GROWL],
        7: [MOVES.ASTONISH],
        12: [MOVES.MUD_SLAP],
        15: [MOVES.MAGNITUDE],
        18: [MOVES.BULLDOZE],
        23: [MOVES.SUCKER_PUNCH],
        26: [MOVES.MUD_BOMB],
        29: [MOVES.EARTH_POWER],
        34: [MOVES.DIG],
        37: [MOVES.SLASH],
        40: [MOVES.EARTHQUAKE]
    },
    height: 0.2, // in meters
    weight: 0.8, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 53,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 26,
        evolvesTo: 'DUGTRIO'
    }
};