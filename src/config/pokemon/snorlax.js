import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const SNORLAX = {
    id: 143,
    name: 'Snorlax',
    types: [TYPES.NORMAL],
    baseStats: { hp: 160, attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30 },
    moves: {
        1: [MOVES.TACKLE, MOVES.DEFENSE_CURL, MOVES.AMNESIA],
        4: [MOVES.LICK],
        9: [MOVES.YAWN],
        12: [MOVES.BITE],
        17: [MOVES.REST],
        20: [MOVES.SNORE],
        25: [MOVES.SLEEP_TALK],
        28: [MOVES.BODY_SLAM],
        33: [MOVES.BLOCK],
        36: [MOVES.BELLY_DRUM],
        41: [MOVES.CRUNCH],
        44: [MOVES.HEAVY_SLAM],
        49: [MOVES.GIGA_IMPACT],
        50: [MOVES.HIGH_HORSEPOWER]
    },
    height: 2.1,
    weight: 460.0,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Monster'],
    eggCycles: 40,
    catchRate: 25,
    baseExp: 189,
    growthRate: 'Slow',
    evYields: { hp: 2, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.',
    abilities: {
        normal: ['Immunity', 'Thick Fat'],
        hidden: ['Gluttony']
    }
}