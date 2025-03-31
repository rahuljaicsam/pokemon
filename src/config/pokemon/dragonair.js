import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DRAGONAIR = {
    id: 148,
    name: 'Dragonair',
    types: [TYPES.DRAGON],
    baseStats: { hp: 61, attack: 84, defense: 65, spAtk: 70, spDef: 70, speed: 70 },
    moves: {
        1: [MOVES.WRAP, MOVES.LEER, MOVES.THUNDER_WAVE, MOVES.TWISTER],
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
    height: 4.0,
    weight: 16.5,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Dragon'],
    eggCycles: 40,
    catchRate: 45,
    baseExp: 147,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.',
    abilities: {
        normal: ['Shed Skin'],
        hidden: ['Marvel Scale']
    },
    evolution: {
        level: 55,
        evolvesTo: 'DRAGONITE'
    },
    evolvesFrom: 'DRATINI'
}