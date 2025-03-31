import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DRATINI = {
    id: 147,
    name: 'Dratini',
    types: [TYPES.DRAGON],
    baseStats: { hp: 41, attack: 64, defense: 45, spAtk: 50, spDef: 50, speed: 50 },
    moves: {
        1: [MOVES.WRAP, MOVES.LEER],
        5: [MOVES.THUNDER_WAVE],
        11: [MOVES.TWISTER],
        15: [MOVES.DRAGON_RAGE],
        21: [MOVES.SLAM],
        25: [MOVES.AGILITY],
        31: [MOVES.DRAGON_TAIL],
        35: [MOVES.AQUA_TAIL],
        41: [MOVES.DRAGON_RUSH],
        45: [MOVES.SAFEGUARD],
        51: [MOVES.DRAGON_DANCE],
        55: [MOVES.OUTRAGE],
        61: [MOVES.HYPER_BEAM]
    },
    height: 1.8,
    weight: 3.3,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Dragon'],
    eggCycles: 40,
    catchRate: 45,
    baseExp: 60,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 1, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Long considered a mythical Pokémon until recently, when a small colony was found living underwater.',
    abilities: {
        normal: ['Shed Skin'],
        hidden: ['Marvel Scale']
    },
    evolution: {
        level: 30,
        evolvesTo: 'DRAGONAIR'
    }
}