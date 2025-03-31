import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const EXEGGCUTE = {
    id: 102,
    name: 'Exeggcute',
    types: [TYPES.GRASS, TYPES.PSYCHIC],
    baseStats: { hp: 60, attack: 40, defense: 80, spAtk: 60, spDef: 45, speed: 40 },
    moves: {
        1: [MOVES.BARRAGE, MOVES.HYPNOSIS],
        5: [MOVES.REFLECT],
        9: [MOVES.LEECH_SEED],
        13: [MOVES.CONFUSION],
        17: [MOVES.STUN_SPORE],
        21: [MOVES.POISON_POWDER],
        25: [MOVES.SLEEP_POWDER],
        29: [MOVES.BULLET_SEED],
        33: [MOVES.GIGA_DRAIN],
        37: [MOVES.PSYCHIC],
        41: [MOVES.UPROAR],
        45: [MOVES.WORRY_SEED],
        49: [MOVES.SOLAR_BEAM]
    },
    height: 0.4,
    weight: 2.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Grass'],
    eggCycles: 20,
    catchRate: 90,
    baseExp: 65,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 }
};