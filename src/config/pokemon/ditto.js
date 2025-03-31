import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const DITTO = {
    id: 132,
    name: 'Ditto',
    types: [TYPES.NORMAL],
    baseStats: { hp: 48, attack: 48, defense: 48, spAtk: 48, spDef: 48, speed: 48 },
    moves: {
        1: [MOVES.TRANSFORM]
    },
    height: 0.3,
    weight: 4.0,
    gender: 'None',
    eggGroups: ['Ditto'],
    eggCycles: 20,
    catchRate: 35,
    baseExp: 101,
    growthRate: 'Medium_Fast',
    evYields: { hp: 1, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'Capable of copying an enemies genetic code to instantly transform into a duplicate of the enemy.',
    abilities: {
        normal: ['Limber'],
        hidden: ['Imposter']
    },
    breedingInfo: {
        canBreedWith: 'All non-legendary Pokémon',
        passingMoves: false,
        genderlessBreeding: true
    }
};