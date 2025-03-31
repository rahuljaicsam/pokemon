import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NINETALES = {
    id: 38,
    name: 'Ninetales',
    types: [TYPES.FIRE],
    baseStats: { hp: 73, attack: 76, defense: 75, spAtk: 81, spDef: 100, speed: 100 },
    moves: {
        1: [MOVES.EMBER, MOVES.TAIL_WHIP, MOVES.QUICK_ATTACK, MOVES.CONFUSE_RAY],
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
        49: [MOVES.INFERNO],
        53: [MOVES.NASTY_PLOT]
    },
    height: 1.1, // in meters
    weight: 19.9, // in kg
    gender: { male: 25, female: 75 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 177,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 2, speed: 0 }
};