import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const EEVEE = {
    id: 133,
    name: 'Eevee',
    types: [TYPES.NORMAL],
    baseStats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 },
    moves: {
        1: [MOVES.TACKLE, MOVES.TAIL_WHIP],
        8: [MOVES.SAND_ATTACK],
        16: [MOVES.GROWL],
        23: [MOVES.QUICK_ATTACK],
        30: [MOVES.BITE],
        36: [MOVES.BATON_PASS],
        42: [MOVES.TAKE_DOWN],
        47: [MOVES.LAST_RESORT]
    },
    height: 0.3,
    weight: 6.5,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Field'],
    eggCycles: 35,
    catchRate: 45,
    baseExp: 65,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 1, speed: 0 },
    description: 'Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.',
    abilities: {
        normal: ['Run Away', 'Adaptability'],
        hidden: ['Anticipation']
    },
    evolution: {
        conditions: [
            { stone: 'WATER_STONE', evolvesTo: 'VAPOREON' },
            { stone: 'THUNDER_STONE', evolvesTo: 'JOLTEON' },
            { stone: 'FIRE_STONE', evolvesTo: 'FLAREON' },
            { happiness: true, timeOfDay: 'day', evolvesTo: 'ESPEON' },
            { happiness: true, timeOfDay: 'night', evolvesTo: 'UMBREON' },
            { location: 'Moss Rock', evolvesTo: 'LEAFEON' },
            { location: 'Ice Rock', evolvesTo: 'GLACEON' },
            { moveType: TYPES.FAIRY, evolvesTo: 'SYLVEON' }
        ]
    }
};