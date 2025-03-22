import { TYPES } from './pokemon-types';

export const MOVES = {
    TACKLE: {
        name: 'Tackle',
        type: TYPES.NORMAL,
        power: 40,
        accuracy: 100,
        pp: 35
    },
    SCRATCH: {
        name: 'Scratch',
        type: TYPES.NORMAL,
        power: 40,
        accuracy: 100,
        pp: 35
    },
    GROWL: {
        name: 'Growl',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 40,
        statEffect: { stat: 'attack', change: -1 }
    },
    TAIL_WHIP: {
        name: 'Tail Whip',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 30,
        statEffect: { stat: 'defense', change: -1 }
    },
    BUBBLE: {
        name: 'Bubble',
        type: TYPES.WATER,
        power: 40,
        accuracy: 100,
        pp: 30,
        statEffect: { stat: 'speed', change: -1, chance: 0.1 }
    },
    WATER_GUN: {
        name: 'Water Gun',
        type: TYPES.WATER,
        power: 40,
        accuracy: 100,
        pp: 25
    },
    EMBER: {
        name: 'Ember',
        type: TYPES.FIRE,
        power: 40,
        accuracy: 100,
        pp: 25,
        statusEffect: { status: 'burned', chance: 0.1 }
    },
    METAL_CLAW: {
        name: 'Metal Claw',
        type: TYPES.STEEL,
        power: 50,
        accuracy: 95,
        pp: 35,
        statEffect: { stat: 'attack', change: 1, chance: 0.1 }
    },
    VINE_WHIP: {
        name: 'Vine Whip',
        type: TYPES.GRASS,
        power: 45,
        accuracy: 100,
        pp: 25
    },
    LEECH_SEED: {
        name: 'Leech Seed',
        type: TYPES.GRASS,
        power: 0,
        accuracy: 90,
        pp: 10,
        effect: 'leech'
    },
    THUNDER_SHOCK: {
        name: 'Thunder Shock',
        type: TYPES.ELECTRIC,
        power: 40,
        accuracy: 100,
        pp: 30,
        statusEffect: { status: 'paralyzed', chance: 0.1 }
    },
    QUICK_ATTACK: {
        name: 'Quick Attack',
        type: TYPES.NORMAL,
        power: 40,
        accuracy: 100,
        pp: 30,
        priority: 1
    },
    GUST: {
        name: 'Gust',
        type: TYPES.FLYING,
        power: 40,
        accuracy: 100,
        pp: 35
    },
    STRING_SHOT: {
        name: 'String Shot',
        type: TYPES.BUG,
        power: 0,
        accuracy: 95,
        pp: 40,
        statEffect: { stat: 'speed', change: -1 }
    },
    SING: {
        name: 'Sing',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 55,
        pp: 15,
        statusEffect: { status: 'asleep', chance: 1.0 }
    },
    POUND: {
        name: 'Pound',
        type: TYPES.NORMAL,
        power: 40,
        accuracy: 100,
        pp: 35
    },
    DOUBLE_SLAP: {
        name: 'Double Slap',
        type: TYPES.NORMAL,
        power: 15,
        accuracy: 85,
        pp: 10,
        multiHit: { min: 2, max: 5 }
    },
    DEFENSE_CURL: {
        name: 'Defense Curl',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 40,
        statEffect: { stat: 'defense', change: 1 }
    }
};