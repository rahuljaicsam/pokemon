import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const MOLTRES = {
    id: 146,
    name: 'Moltres',
    types: [TYPES.FIRE, TYPES.FLYING],
    baseStats: { hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90 },
    moves: {
        1: [MOVES.WING_ATTACK, MOVES.EMBER],
        10: [MOVES.FIRE_SPIN],
        15: [MOVES.AGILITY],
        25: [MOVES.ENDURE],
        35: [MOVES.ANCIENT_POWER],
        40: [MOVES.FLAMETHROWER],
        50: [MOVES.SAFEGUARD],
        55: [MOVES.AIR_SLASH],
        65: [MOVES.SUNNY_DAY],
        75: [MOVES.HEAT_WAVE],
        85: [MOVES.SOLAR_BEAM],
        90: [MOVES.SKY_ATTACK],
        100: [MOVES.FIRE_BLAST]
    },
    height: 2.0, // in meters
    weight: 60.0, // in kg
    gender: { male: 0, female: 0 }, // Genderless
    eggGroups: ['Undiscovered'],
    eggCycles: 80,
    catchRate: 3,
    baseExp: 290,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 3, spDef: 0, speed: 0 }
};