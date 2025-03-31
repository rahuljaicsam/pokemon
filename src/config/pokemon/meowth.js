import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MEOWTH = {
    id: 52,
    name: 'Meowth',
    types: [TYPES.NORMAL],
    baseStats: { hp: 40, attack: 45, defense: 35, spAtk: 40, spDef: 40, speed: 90 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.GROWL],
        6: [MOVES.BITE],
        10: [MOVES.FAKE_OUT],
        15: [MOVES.FURY_SWIPES],
        20: [MOVES.SCREECH],
        25: [MOVES.FAINT_ATTACK],
        30: [MOVES.TAUNT],
        35: [MOVES.PAY_DAY],
        40: [MOVES.SLASH],
        45: [MOVES.NASTY_PLOT],
        50: [MOVES.NIGHT_SLASH]
    },
    height: 0.4, // in meters
    weight: 4.2, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 255,
    baseExp: 58,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 28,
        evolvesTo: 'PERSIAN'
    }
};