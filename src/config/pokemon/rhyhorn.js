import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const RHYHORN = {
    id: 111,
    name: 'Rhyhorn',
    types: [TYPES.GROUND, TYPES.ROCK],
    baseStats: { hp: 80, attack: 85, defense: 95, spAtk: 30, spDef: 30, speed: 25 },
    moves: {
        1: [MOVES.HORN_ATTACK, MOVES.TAIL_WHIP],
        5: [MOVES.FURY_ATTACK],
        9: [MOVES.SCARY_FACE],
        13: [MOVES.STOMP],
        17: [MOVES.ROCK_BLAST],
        21: [MOVES.BULLDOZE],
        25: [MOVES.CHIP_AWAY],
        29: [MOVES.ROCK_SLIDE],
        33: [MOVES.TAKE_DOWN],
        37: [MOVES.DRILL_RUN],
        41: [MOVES.STONE_EDGE],
        45: [MOVES.EARTHQUAKE],
        49: [MOVES.MEGAHORN],
        53: [MOVES.HORN_DRILL]
    },
    height: 1.0,
    weight: 115.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster', 'Field'],
    eggCycles: 20,
    catchRate: 120,
    baseExp: 69,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};