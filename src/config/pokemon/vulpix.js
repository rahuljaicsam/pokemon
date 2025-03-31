import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const VULPIX = {
    id: 37,
    name: 'Vulpix',
    types: [TYPES.FIRE],
    baseStats: { hp: 38, attack: 41, defense: 40, spAtk: 50, spDef: 65, speed: 65 },
    moves: {
        1: [MOVES.EMBER, MOVES.TAIL_WHIP],
        4: [MOVES.QUICK_ATTACK],
        9: [MOVES.ROAR],
        13: [MOVES.FIRE_SPIN],
        17: [MOVES.CONFUSE_RAY],
        21: [MOVES.WILL_O_WISP],
        25: [MOVES.FLAMETHROWER],
        29: [MOVES.IMPRISON],
        33: [MOVES.SAFEGUARD],
        37: [MOVES.FIRE_BLAST],
        41: [MOVES.GRUDGE],
        45: [MOVES.CAPTIVATE],
        49: [MOVES.INFERNO]
    },
    height: 0.6, // in meters
    weight: 9.9, // in kg
    gender: { male: 25, female: 75 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 60,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 1, speed: 0 }
};