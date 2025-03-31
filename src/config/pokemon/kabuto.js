import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KABUTO = {
    id: 140,
    name: 'Kabuto',
    types: [TYPES.ROCK, TYPES.WATER],
    baseStats: { hp: 30, attack: 80, defense: 90, spAtk: 55, spDef: 45, speed: 55 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.HARDEN],
        6: [MOVES.ABSORB],
        11: [MOVES.LEER],
        16: [MOVES.MUD_SHOT],
        21: [MOVES.SAND_ATTACK],
        26: [MOVES.ENDURE],
        31: [MOVES.AQUA_JET],
        36: [MOVES.MEGA_DRAIN],
        41: [MOVES.METAL_SOUND],
        46: [MOVES.ANCIENT_POWER],
        51: [MOVES.WRING_OUT]
    },
    height: 0.5,
    weight: 11.5,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Water 1', 'Water 3'],
    eggCycles: 30,
    catchRate: 45,
    baseExp: 71,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 0, defense: 1, spAtk: 0, spDef: 0, speed: 0 },
    description: 'A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago.',
    abilities: {
        normal: ['Swift Swim', 'Battle Armor'],
        hidden: ['Weak Armor']
    },
    evolution: {
        level: 40,
        evolvesTo: 'KABUTOPS'
    }
};