import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const AERODACTYL = {
    id: 142,
    name: 'Aerodactyl',
    types: [TYPES.ROCK, TYPES.FLYING],
    baseStats: { hp: 80, attack: 105, defense: 65, spAtk: 60, spDef: 75, speed: 130 },
    moves: {
        1: [MOVES.WING_ATTACK, MOVES.ROCK_THROW, MOVES.SCARY_FACE, MOVES.AGILITY],
        9: [MOVES.BITE],
        17: [MOVES.SUPERSONIC],
        25: [MOVES.ANCIENT_POWER],
        33: [MOVES.CRUNCH],
        41: [MOVES.TAKE_DOWN],
        49: [MOVES.SKY_DROP],
        57: [MOVES.IRON_HEAD],
        65: [MOVES.HYPER_BEAM],
        73: [MOVES.ROCK_SLIDE],
        81: [MOVES.GIGA_IMPACT]
    },
    height: 1.8,
    weight: 59.0,
    gender: { male: 87.5, female: 12.5 },
    eggGroups: ['Flying'],
    eggCycles: 35,
    catchRate: 45,
    baseExp: 180,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 2 },
    description: 'A ferocious, prehistoric Pokémon that goes for the enemys throat with its serrated saw-like fangs.',
    abilities: {
        normal: ['Rock Head', 'Pressure'],
        hidden: ['Unnerve']
    }
}