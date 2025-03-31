import { TYPES } from '../pokemon-types';
import { MOVES } from '../moves';

export const ARCANINE = {
    id: 59,
    name: 'Arcanine',
    types: [TYPES.FIRE],
    baseStats: { hp: 90, attack: 110, defense: 80, spAtk: 100, spDef: 80, speed: 95 },
    moves: {
        1: [MOVES.BITE, MOVES.ROAR, MOVES.EMBER, MOVES.LEER, MOVES.FLAME_WHEEL, MOVES.TAKE_DOWN, MOVES.FIRE_FANG, MOVES.FLAMETHROWER, MOVES.AGILITY, MOVES.FIRE_BLAST],
        4: [MOVES.EXTREME_SPEED],
        8: [MOVES.OUTRAGE],
        12: [MOVES.PLAY_ROUGH],
        16: [MOVES.CRUNCH]
    },
    height: 1.9,
    weight: 155.0,
    gender: { male: 75, female: 25 },
    eggGroups: ['Field'],
    eggCycles: 20,
    catchRate: 75,
    baseExp: 194,
    growthRate: 'Slow',
    evYields: { hp: 0, attack: 2, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    description: 'A Pokémon that has been admired since the past for its beauty. It runs agilely as if on wings.',
    abilities: {
        normal: ['Intimidate', 'Flash Fire'],
        hidden: ['Justified']
    },
    evolvesFrom: 'GROWLITHE'
}