import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const RHYDON = {
    id: 112,
    name: 'Rhydon',
    types: [TYPES.GROUND, TYPES.ROCK],
    baseStats: { hp: 105, attack: 130, defense: 120, spAtk: 45, spDef: 45, speed: 40 },
    moves: {
        1: [MOVES.HORN_ATTACK, MOVES.TAIL_WHIP, MOVES.FURY_ATTACK, MOVES.SCARY_FACE],
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
        53: [MOVES.HORN_DRILL],
        57: [MOVES.HAMMER_ARM]
    },
    height: 1.9,
    weight: 120.0,
    gender: { male: 50, female: 50 },
    eggGroups: ['Monster', 'Field'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 170,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    evolvesFrom: 'RHYHORN'
};