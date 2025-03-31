import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const RAPIDASH = {
    id: 78,
    name: 'Rapidash',
    types: [TYPES.FIRE],
    baseStats: { hp: 65, attack: 100, defense: 70, spAtk: 80, spDef: 80, speed: 105 },
    moves: {
        1: [MOVES.TACKLE, MOVES.GROWL, MOVES.EMBER, MOVES.FLAME_WHEEL],
        4: [MOVES.GROWL],
        8: [MOVES.EMBER],
        13: [MOVES.FLAME_WHEEL],
        19: [MOVES.STOMP],
        25: [MOVES.FIRE_SPIN],
        31: [MOVES.TAKE_DOWN],
        37: [MOVES.AGILITY],
        43: [MOVES.FIRE_BLAST],
        49: [MOVES.FLARE_BLITZ],
        54: [MOVES.MEGAHORN]
    },
    height: 1.7, // in meters
    weight: 95.0, // in kg
    gender: { male: 50, female: 50 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 60,
    baseExp: 175,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    evolvesFrom: 'PONYTA'
};