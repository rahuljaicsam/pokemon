import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const KABUTOPS = {
    id: 141,
    name: 'Kabutops',
    types: [TYPES.ROCK, TYPES.WATER],
    baseStats: { hp: 60, attack: 115, defense: 105, spAtk: 65, spDef: 70, speed: 80 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.HARDEN, MOVES.ABSORB, MOVES.LEER],
        6: [MOVES.ABSORB],
        11: [MOVES.LEER],
        16: [MOVES.MUD_SHOT],
        21: [MOVES.SAND_ATTACK],
        26: [MOVES.ENDURE],
        31: [MOVES.AQUA_JET],
        36: [MOVES.MEGA_DRAIN],
        41: [MOVES.SLASH],
        46: [MOVES.ANCIENT_POWER],
        51: [MOVES.WRING_OUT],
        56: [MOVES.NIGHT_SLASH]
    },
    height: 1.3,
    weight: 40.5,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Water 1', 'Water 3'],
    eggCycles: 30,
    catchRate: 45,
    baseExp: 173,
    growthRate: 'Medium_Fast',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids.',
    abilities: {
        normal: ['Swift Swim', 'Battle Armor'],
        hidden: ['Weak Armor']
    },
    evolvesFrom: 'KABUTO'
};