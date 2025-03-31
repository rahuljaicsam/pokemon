import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const PSYDUCK = {
    id: 54,
    name: 'Psyduck',
    types: [TYPES.WATER],
    baseStats: { hp: 50, attack: 52, defense: 48, spAtk: 65, spDef: 50, speed: 55 },
    moves: {
        1: [MOVES.SCRATCH, MOVES.WATER_GUN],
        8: [MOVES.TAIL_WHIP],
        15: [MOVES.CONFUSION],
        22: [MOVES.WATER_PULSE],
        29: [MOVES.DISABLE],
        36: [MOVES.SCREECH],
        43: [MOVES.HYDRO_PUMP]
    },
    height: 0.8,
    weight: 19.6,
    gender: { male: 50, female: 50 },
    eggGroups: ['Water 1', 'Field'],
    eggCycles: 20,
    catchRate: 190,
    baseExp: 64,
    growthRate: 'Medium Fast',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 1, spDef: 0, speed: 0 },
    description: 'While lulling its enemies with its vacant look, this wily Pokémon will use psychokinetic powers.',
    abilities: {
        normal: ['Damp', 'Cloud Nine'],
        hidden: ['Swift Swim']
    },
    evolution: {
        level: 33,
        evolvesTo: 'GOLDUCK'
    }
}