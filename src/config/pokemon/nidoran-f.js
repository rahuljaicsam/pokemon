import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const NIDORAN_F = {
    id: 29,
    name: 'Nidoran♀',
    types: [TYPES.POISON],
    baseStats: { hp: 55, attack: 47, defense: 52, spAtk: 40, spDef: 40, speed: 41 },
    moves: {
        1: [MOVES.GROWL, MOVES.SCRATCH],
        7: [MOVES.TAIL_WHIP],
        9: [MOVES.DOUBLE_KICK],
        13: [MOVES.POISON_STING],
        19: [MOVES.FURY_SWIPES],
        21: [MOVES.BITE],
        25: [MOVES.HELPING_HAND],
        31: [MOVES.TOXIC_SPIKES],
        33: [MOVES.FLATTER],
        37: [MOVES.CRUNCH],
        43: [MOVES.POISON_FANG],
        45: [MOVES.CAPTIVATE]
    },
    height: 0.4,
    weight: 7.0,
    gender: { female: 100 },
    eggGroups: ['Monster', 'Field'],
    eggCycles: 20,
    catchRate: 235,
    baseExp: 55,
    growthRate: 'Medium Slow',
    evYields: { hp: 1, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns.',
    abilities: {
        normal: ['Poison Point', 'Rivalry'],
        hidden: ['Hustle']
    },
    evolution: {
        level: 16,
        evolvesTo: 'NIDORINA'
    }
}