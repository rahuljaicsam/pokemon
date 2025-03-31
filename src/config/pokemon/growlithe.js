import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const GROWLITHE = {
    id: 58,
    name: 'Growlithe',
    types: [TYPES.FIRE],
    baseStats: { hp: 55, attack: 70, defense: 45, spAtk: 70, spDef: 50, speed: 60 },
    moves: {
        1: [MOVES.BITE, MOVES.ROAR],
        6: [MOVES.EMBER],
        12: [MOVES.LEER],
        19: [MOVES.FLAME_WHEEL],
        26: [MOVES.TAKE_DOWN],
        33: [MOVES.FIRE_FANG],
        40: [MOVES.FLAMETHROWER],
        47: [MOVES.AGILITY],
        54: [MOVES.FIRE_BLAST]
    },
    height: 0.7,
    weight: 19.0,
    gender: { male: 75, female: 25 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 70,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Very protective of its territory. It will bark and bite to repel intruders from its space.',
    abilities: {
        normal: ['Intimidate', 'Flash Fire'],
        hidden: ['Justified']
    },
    evolution: {
        item: 'FIRE_STONE',
        evolvesTo: 'ARCANINE'
    }
}