import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PONYTA = {
    id: 77,
    name: 'Ponyta',
    types: [TYPES.FIRE],
    baseStats: { hp: 50, attack: 85, defense: 55, spAtk: 65, spDef: 65, speed: 90 },
    moves: {
        1: [MOVES.TACKLE],
        4: [MOVES.GROWL],
        8: [MOVES.EMBER],
        13: [MOVES.FLAME_WHEEL],
        19: [MOVES.STOMP],
        25: [MOVES.FIRE_SPIN],
        31: [MOVES.TAKE_DOWN],
        37: [MOVES.AGILITY],
        43: [MOVES.FIRE_BLAST],
        49: [MOVES.FLARE_BLITZ]
    },
    height: 1.0, // in meters
    weight: 30.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 82,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 1 },
    evolution: {
        level: 40,
        evolvesTo: 'RAPIDASH'
    }
};