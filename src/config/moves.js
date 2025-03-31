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
    },
    ABSORB: {
        name: 'Absorb',
        type: TYPES.GRASS,
        power: 30,
        accuracy: 100,
        pp: 10,
        effect: 'absorb'
    },
    GROWTH: {
        name: 'Growth',
        type: TYPES.GRASS,
        power: 0,
        accuracy: 100,
        pp: 40,
        statEffect: { stat: 'attack', change: 1 }
    },
    SWEET_SCENT: {
        name: 'Sweet Scent',
        type: TYPES.GRASS,
        power: 0,
        accuracy: 100,
        pp: 40,
        effect: 'sweats'
    },
    POISON_STING: {
        name: 'Poison Sting',
        type: TYPES.POISON,
        power: 20,
        accuracy: 100,
        pp: 25,
        statusEffect: { status: 'poisoned', chance: 0.1 }
    },
    WRAP: {
        name: 'Wrap',
        type: TYPES.NORMAL,
        power: 10,
        accuracy: 100,
        pp: 20,
        effect: 'wrap'
    },
    PSYCHIC: {
        name: 'Psychic',
        type: TYPES.PSYCHIC,
        power: 90,
        accuracy: 100,
        pp: 10,
        statEffect: { stat: 'spDef', change: -1, chance: 0.1 }
    },
    MEGA_PUNCH: {
        name: 'Mega Punch',
        type: TYPES.NORMAL,
        power: 80,
        accuracy: 85,
        pp: 20
    },
    METRONOME: {
        name: 'Metronome',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'metronome'
    },
    BARRIER: {
        name: 'Barrier',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 20,
        statEffect: { stat: 'defense', change: 2 }
    },
    ANCIENT_POWER: {
        name: 'Ancient Power',
        type: TYPES.ROCK,
        power: 60,
        accuracy: 100,
        pp: 5,
        statEffect: { stat: 'all', change: 1, chance: 0.1 }
    },
    AMNESIA: {
        name: 'Amnesia',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 20,
        statEffect: { stat: 'spDef', change: 2 }
    },
    ME_FIRST: {
        name: 'Me First',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 20,
        effect: 'meFirst'
    },
    BATON_PASS: {
        name: 'Baton Pass',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 40,
        effect: 'batonPass'
    },
    NASTY_PLOT: {
        name: 'Nasty Plot',
        type: TYPES.DARK,
        power: 0,
        accuracy: 100,
        pp: 20,
        statEffect: { stat: 'spAtk', change: 2 }
    },
    AURA_SPHERE: {
        name: 'Aura Sphere',
        type: TYPES.FIGHTING,
        power: 80,
        accuracy: 100,
        pp: 20
    },
    THUNDER_WAVE: {
        name: 'Thunder Wave',
        type: TYPES.ELECTRIC,
        power: 0,
        accuracy: 90,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 1.0 }
    },
    CHARGE: {
        name: 'Charge',
        type: TYPES.ELECTRIC,
        power: 0,
        accuracy: 100,
        pp: 20,
        effect: 'charge'
    },
    SPARK: {
        name: 'Spark',
        type: TYPES.ELECTRIC,
        power: 65,
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ROLLOUT: {
        name: 'Rollout',
        type: TYPES.ROCK,
        power: 30,
        accuracy: 90,
        pp: 20,
        effect: 'rollout'
    },
    CHARGE_BEAM: {
        name: 'Charge Beam',
        type: TYPES.ELECTRIC,
        power: 50,
        accuracy: 90,
        pp: 10,
        statEffect: { stat: 'spAtk', change: 1, chance: 0.7 }
    },
    SWIFT: {
        name: 'Swift',
        type: TYPES.NORMAL,
        power: 60,
        accuracy: 100,
        pp: 20
    },
    SELF_DESTRUCT: {
        name: 'Self-Destruct',
        type: TYPES.NORMAL,
        power: 200,
        accuracy: 100,
        pp: 5,
        effect: 'selfDestruct'
    },
    LIGHT_SCREEN: {
        name: 'Light Screen',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 30,
        effect: 'lightScreen'
    },
    MAGNET_RISE: {
        name: 'Magnet Rise',
        type: TYPES.ELECTRIC,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'magnetRise'
    },
    DISCHARGE: {
        name: 'Discharge',
        type: TYPES.ELECTRIC,
        power: 80,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    EXPLOSION: {
        name: 'Explosion',
        type: TYPES.NORMAL,
        power: 250,
        accuracy: 100,
        pp: 5,
        effect: 'explosion'
    },
    GYRO_BALL: {
        name: 'Gyro Ball',
        type: TYPES.STEEL,
        power: 0,
        accuracy: 100,
        pp: 5,
        effect: 'gyroBall'
    },
    TRANSFORM: {
        name: 'Transform',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'transform'
    },
    HYPER_BEAM: {
        name: 'Hyper Beam',
        type: TYPES.NORMAL,
        power: 150,
        accuracy: 90,
        pp: 5,
        effect: 'recharge'
    },
    FIRE_BLAST: {
        name: 'Fire Blast',
        type: TYPES.FIRE,
        power: 110,
        accuracy: 85,
        pp: 5,
        statusEffect: { status: 'burned', chance: 0.3 }
    },
    HYDRO_PUMP: {
        name: 'Hydro Pump',
        type: TYPES.WATER,
        power: 110,
        accuracy: 80,
        pp: 5
    },
    BLIZZARD: {
        name: 'Blizzard',
        type: TYPES.ICE,
        power: 110,
        accuracy: 70,
        pp: 5,
        statusEffect: { status: 'frozen', chance: 0.1 }
    },
    THUNDER: {
        name: 'Thunder',
        type: TYPES.ELECTRIC,
        power: 110,
        accuracy: 70,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SOLAR_BEAM: {
        name: 'Solar Beam',
        type: TYPES.GRASS,
        power: 120,
        accuracy: 100,
        pp: 10,
        effect: 'charge'
    },
    EARTHQUAKE: {
        name: 'Earthquake',
        type: TYPES.GROUND,
        power: 100,
        accuracy: 100,
        pp: 10
    },
    ROCK_SLIDE: {
        name: 'Rock Slide',
        type: TYPES.ROCK,
        power: 75,
        accuracy: 90,
        pp: 10,
        statEffect: { stat: 'flinch', chance: 0.3 }
    },
    SURF: {
        name: 'Surf',
        type: TYPES.WATER,
        power: 90,
        accuracy: 100,
        pp: 15
    },
    ICE_BEAM: {
        name: 'Ice Beam',
        type: TYPES.ICE,
        power: 90,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'frozen', chance: 0.1 }
    },
    FLAMETHROWER: {
        name: 'Flamethrower',
        type: TYPES.FIRE,
        power: 90,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'burned', chance: 0.1 }
    },
    THUNDERBOLT: {
        name: 'Thunderbolt',
        type: TYPES.ELECTRIC,
        power: 90,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.1 }
    },
    SWORDS_DANCE: {
        name: 'Swords Dance',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 20,
        statEffect: { stat: 'attack', change: 2 }
    },
    DOUBLE_TEAM: {
        name: 'Double Team',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 15,
        statEffect: { stat: 'evasion', change: 1 }
    },
    RECOVER: {
        name: 'Recover',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'recover'
    },
    TOXIC: {
        name: 'Toxic',
        type: TYPES.POISON,
        power: 0,
        accuracy: 90,
        pp: 10,
        statusEffect: { status: 'badly_poisoned', chance: 1.0 }
    },
    AGILITY: {
        name: 'Agility',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 30,
        statEffect: { stat: 'speed', change: 2 }
    },
    REFLECT: {
        name: 'Reflect',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 20,
        effect: 'reflect'
    },
    REST: {
        name: 'Rest',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'rest'
    },
    CONFUSE_RAY: {
        name: 'Confuse Ray',
        type: TYPES.GHOST,
        power: 0,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'confused', chance: 1.0 }
    },
    HYPNOSIS: {
        name: 'Hypnosis',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 60,
        pp: 20,
        statusEffect: { status: 'asleep', chance: 1.0 }
    },
    DRAGON_RAGE: {
        name: 'Dragon Rage',
        type: TYPES.DRAGON,
        power: 40,
        accuracy: 100,
        pp: 10,
        effect: 'dragonRage'
    },
    BODY_SLAM: {
        name: 'Body Slam',
        type: TYPES.NORMAL,
        power: 85,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    DIG: {
        name: 'Dig',
        type: TYPES.GROUND,
        power: 80,
        accuracy: 100,
        pp: 10,
        effect: 'dig'
    },
    RAGE: {
        name: 'Rage',
        type: TYPES.NORMAL,
        power: 20,
        accuracy: 100,
        pp: 20,
        effect: 'rage'
    },
    MIMIC: {
        name: 'Mimic',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'mimic'
    },
    SCREECH: {
        name: 'Screech',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 85,
        pp: 40,
        statEffect: { stat: 'defense', change: -2 }
    },
    DOUBLE_EDGE: {
        name: 'Double-Edge',
        type: TYPES.NORMAL,
        power: 120,
        accuracy: 100,
        pp: 15,
        effect: 'recoil'
    },
    SUBMISSION: {
        name: 'Submission',
        type: TYPES.FIGHTING,
        power: 80,
        accuracy: 80,
        pp: 20,
        effect: 'recoil'
    },
    COUNTER: {
        name: 'Counter',
        type: TYPES.FIGHTING,
        power: 0,
        accuracy: 100,
        pp: 20,
        effect: 'counter'
    },
    DRILL_PECK: {
        name: 'Drill Peck',
        type: TYPES.FLYING,
        power: 80,
        accuracy: 100,
        pp: 20
    },
    WING_ATTACK: {
        name: 'Wing Attack',
        type: TYPES.FLYING,
        power: 60,
        accuracy: 100,
        pp: 35
    },
    HORN_ATTACK: {
        name: 'Horn Attack',
        type: TYPES.NORMAL,
        power: 65,
        accuracy: 100,
        pp: 25
    },
    FURY_ATTACK: {
        name: 'Fury Attack',
        type: TYPES.NORMAL,
        power: 15,
        accuracy: 85,
        pp: 20,
        multiHit: { min: 2, max: 5 }
    },
    PECK: {
        name: 'Peck',
        type: TYPES.FLYING,
        power: 35,
        accuracy: 100,
        pp: 35
    },
    SAND_ATTACK: {
        name: 'Sand Attack',
        type: TYPES.GROUND,
        power: 0,
        accuracy: 100,
        pp: 15,
        statEffect: { stat: 'accuracy', change: -1 }
    },
    SLASH: {
        name: 'Slash',
        type: TYPES.NORMAL,
        power: 70,
        accuracy: 100,
        pp: 20,
        criticalHit: true
    },
    STOMP: {
        name: 'Stomp',
        type: TYPES.NORMAL,
        power: 65,
        accuracy: 100,
        pp: 20,
        statEffect: { stat: 'flinch', chance: 0.3 }
    },
    LEER: {
        name: 'Leer',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 30,
        statEffect: { stat: 'defense', change: -1 }
    },
    BITE: {
        name: 'Bite',
        type: TYPES.DARK,
        power: 60,
        accuracy: 100,
        pp: 25,
        statEffect: { stat: 'flinch', chance: 0.3 }
    },
    KARATE_CHOP: {
        name: 'Karate Chop',
        type: TYPES.FIGHTING,
        power: 50,
        accuracy: 100,
        pp: 25,
        criticalHit: true
    },
    RAZOR_LEAF: {
        name: 'Razor Leaf',
        type: TYPES.GRASS,
        power: 55,
        accuracy: 95,
        pp: 25,
        criticalHit: true
    },
    PIN_MISSILE: {
        name: 'Pin Missile',
        type: TYPES.BUG,
        power: 25,
        accuracy: 95,
        pp: 20,
        multiHit: { min: 2, max: 5 }
    },
    TRI_ATTACK: {
        name: 'Tri Attack',
        type: TYPES.NORMAL,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: ['burned', 'frozen', 'paralyzed'], chance: 0.2 }
    },
    SUPERSONIC: {
        name: 'Supersonic',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect: 'supersonic'
    },
    WATER_PULSE: {
        name: 'Water Pulse',
        type: TYPES.WATER,
        power: 40,
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'frozen', chance: 0.3 }
    },
    FLAIL: {
        name: 'Flail',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'flail'
    },
    AQUA_RING: {
        name: 'Aqua Ring',
        type: TYPES.WATER,
        power: 40,
        accuracy: 100,
        pp: 10,
        effect:'aquaRing'
    },
    WATERFALL: {
        name: 'Waterfall',
        type: TYPES.WATER,
        power: 80,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'frozen', chance: 0.3 }
    },
    HORN_DRILL: {
        name: 'Horn Drill',
        type: TYPES.NORMAL,
        power: 90,
        accuracy: 75,
        pp: 15,
        effect:'hornDrill'
    },
    SOAK: {
        name: 'Soak',
        type: TYPES.WATER,
        power: 20,
        accuracy: 100,
        pp: 20,
        effect:'soak'
    },
    MEGAHORN: {
        name: 'Mega Horn',
        type: TYPES.NORMAL,
        power: 100,
        accuracy: 90,
        pp: 10,
        effect:'megaHorn'
    },
    VICE_GRIP: {
        name: 'Vice Grip',
        type: TYPES.NORMAL,
        power: 50,
        accuracy: 100,
        pp: 10,
        effect:'viceGrip'
    },
    HARDEN: {
        name: 'Harden',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'harden'
    },
    BUBBLE_BEAM: {
        name: 'Bubble Beam',
        type: TYPES.WATER,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'frozen', chance: 0.3 }
    },
    MUD_SHOT: {
        name: 'Mud Shot',
        type: TYPES.GROUND,
        power: 50,
        accuracy: 95,
        pp: 15,
        statusEffect: { status: 'slowed', chance: 0.3 }
    },
    PROTECT: {
        name: 'Protect',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'protect'
    },
    GUILLOTINE: {
        name: 'Guillotine',
        type: TYPES.NORMAL,
        power: 120,
        accuracy: 100,
        pp: 10,
        effect:'guillotine'
    },
    CRABHAMMER: {
        name: 'Crabhammer',
        type: TYPES.WATER,
        power: 120,
        accuracy: 100,
        pp: 5,
        effect:'crabhammer'
    },
    SLAM: {
        name: 'Slam',
        type: TYPES.NORMAL,
        power: 80,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    WIDE_GUARD: {
        name: 'Wide Guard',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'wideGuard'
    },
    THRASH: {
        name: 'Thrash',
        type: TYPES.NORMAL,
        power: 110,
        accuracy: 80,
        pp: 5,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ICE_FANG: {
        name: 'Ice Fang',
        type: TYPES.ICE,
        power: 65,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'frozen', chance: 0.3 }
    },
    TWISTER: {
        name: 'Twister',
        type: TYPES.BUG,
        power: 65,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SCARY_FACE: {
        name: 'Scary Face',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'scaryFace'
    },
    AQUA_TAIL: {
        name: 'Aqua Tail',
        type: TYPES.WATER,
        power: 40,
        accuracy: 100,
        pp: 20,
        effect:'aquaTail'
    },
    CRUNCH: {
        name: 'Crunch',
        type: TYPES.DARK,
        power: 80,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    DRAGON_DANCE: {
        name: 'Dragon Dance',
        type: TYPES.DRAGON,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'dragonDance'
    },
    HURRICANE: {
        name: 'Hurricane',
        type: TYPES.WATER,
        power: 110,
        accuracy: 70,
        pp: 5,
        effect:'hurricane'
    },
    RAIN_DANCE: {
        name: 'Rain Dance',
        type: TYPES.WATER,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'rainDance'
    },
    CURSE: {
        name: 'Curse',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'curse'
    },
    CONFUSION: {
        name: 'Confusion',
        type: TYPES.PSYCHIC,
        power: 40,
        accuracy: 100,
        pp: 10,
        effect:'confusion' 
    },
    DISABLE: {
        name: 'Disable',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'disable'
    },
    HEADBUTT: {
        name: 'Headbutt',
        type: TYPES.NORMAL,
        power: 70,
        accuracy: 100,
        pp: 15,
        criticalHit: true
    },
    ZEN_HEADBUTT: {
        name: 'Zen Headbutt',
        type: TYPES.NORMAL,
        power: 100,
        accuracy: 100,
        pp: 5,
        criticalHit: true
    },
    SLACK_OFF: {
        name: 'Slack Off',
        type: TYPES.NORMAL, 
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'slackOff'
    },
    PSYCH_UP: {
        name: 'Psych Up',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'psychUp'
    },
    HEAL_PULSE: {
        name: 'Heal Pulse',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'healPulse'
    },
    BRINE: {
        name: 'Brine',
        type: TYPES.WATER,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'brine'
    },
    WITHDRAW: {
        name: 'Withdraw',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'withdraw'
    },
    ROCK_BLAST: {
        name: 'Rock Blast',
        type: TYPES.ROCK,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    AURORA_BEAM: {
        name: 'Aurora Beam',
        type: TYPES.FAIRY,
        power: 90,
        accuracy: 100,
        pp: 5,
        effect:'auroraBeam'
    },
    LAST_RESORT: {
        name: 'Last Resort',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'lastResort'
    },
    ROCK_THROW: {
        name: 'Rock Throw',
        type: TYPES.ROCK,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    TAKE_DOWN: {
        name: 'Take Down',
        type: TYPES.NORMAL,
        power: 90,
        accuracy: 85,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SKY_DROP: {
        name: 'Sky Drop',
        type: TYPES.FLYING,
        power: 80,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    IRON_HEAD: {
        name: 'Iron Head',
        type: TYPES.STEEL,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 } 
    },
    GIGA_IMPACT: {
        name: 'Giga Impact',
        type: TYPES.GRASS,
        power: 120,
        accuracy: 90,
        pp: 5,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    DRAGON_RUSH: {
        name: 'Dragon Rush',
        type: TYPES.DRAGON,
        power: 110,
        accuracy: 85,
        pp: 5,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    DRAGON_TAIL: {
        name: 'Dragon Tail',
        type: TYPES.DRAGON,
        power: 40,
        accuracy: 100,
        pp: 20,
        effect:'dragonTail'
    },
    SAFEGUARD: {
        name: 'Safeguard',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'safeguard' 
    },
    OUTRAGE: {
        name: 'Outrage',
        type: TYPES.NORMAL,
        power: 130,
        accuracy: 85,
        pp: 5,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    BUBBLEBEAM: {
        name: 'Bubble Beam',
        type: TYPES.WATER,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    IRON_TAIL: {
        name: 'Iron Tail',
        type: TYPES.STEEL,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    RAZOR_WIND: {
        name: 'Razor Wind',
        type: TYPES.FLYING,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    CRUSH_CLAW: {
        name: 'Crush Claw',
        type: TYPES.BUG,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 } 
    },
    DIVE: {
        name: 'Dive',
        type: TYPES.NORMAL,
        power: 80,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    BULLDOZE: {
        name: 'Bulk Up',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'bulkUp'
    },
    WATER_SHIELD: {
        name: 'Water Shield',
        type: TYPES.WATER,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'waterShield'
    },
    ROCK_TOMB: {
        name: 'Rock Tomb',
        type: TYPES.ROCK,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ROCK_SMASH: {
        name: 'Rock Smash',
        type: TYPES.ROCK,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    WATER_POWER: {
        name: 'Water Power',
        type: TYPES.WATER,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'waterPower' 
    },
    IRON_DEFENSE: {
        name: 'Iron Defense',
        type: TYPES.STEEL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'ironDefense'
    },
    CONSTRICT: {
        name: 'Constrict',
        type: TYPES.NORMAL,
        power: 70,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ACID: {
        name: 'Acid',
        type: TYPES.POISON,
        power: 40,
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    POISON_JAB: {
        name: 'Poison Jab',
        type: TYPES.POISON,
        power: 40,
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SLUDGE_WAVE: {
        name: 'Sludge Wave',
        type: TYPES.POISON,
        power: 40,
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    RAPID_SPIN: {
        name: 'Rapid Spin',
        type: TYPES.NORMAL,
        power: 60,
        accuracy: 100,
        pp: 10,
        effect:'rapidSpin' 
    },
    PSYWAVE: {
        name: 'Psywave',
        type: TYPES.PSYCHIC,
        power: 90,
        accuracy: 100,
        pp: 5,
        effect:'psywave' 
    },
    MINIMIZE: {
        name: 'Minimize',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'minimize'
    },
    POWER_GEM: {
        name: 'Power Gem',
        type: TYPES.PSYCHIC,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'powerGem'
    },
    COSMIC_POWER: {
        name: 'Cosmic Power',
        type: TYPES.PSYCHIC, 
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'cosmicPower'
    },
    SWAGGER: {
        name: 'Swagger',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'swagger'
    },
    DRAGON_CLAW: {
        name: 'Dragon Claw',
        type: TYPES.DRAGON,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ROAR: {
        name: 'Roar',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'roar' 
    },
    SEISMIC_TOSS: {
        name: 'Seismic Toss',
        type: TYPES.GROUND,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SLUDGE: {
        name: 'Sludge',
        type: TYPES.POISON,
        power: 40,
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SLUDGE_BOMB: {
        name: 'Sludge Bomb',
        type: TYPES.POISON,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 } 
    },
    ICICLE_SPEAR: {
        name: 'Icicle Spear',
        type: TYPES.ICE,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    CLAMP: {
        name: 'Clamp',
        type: TYPES.NORMAL,
        power: 70,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SHELL_SMASH: {
        name: 'Shell Smash',
        type: TYPES.WATER,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ICY_WIND: {
        name: 'Icy Wind',
        type: TYPES.ICE,
        power: 50,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SMOKESCREEN: {
        name: 'Smokescreen',
        type: TYPES.POISON,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'smokescreen'
    },
    FOCUS_ENERGY: {
        name: 'Focus Energy',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'focusEnergy'
    },
    DRAGON_BREATH: {
        name: 'Dragon Breath',
        type: TYPES.DRAGON,
        power: 60,
        accuracy: 100,
        pp: 15,
        statusEffect: { status: 'paralyzed', chance: 0.3 } 
    },
    DRAGON_PULSE: {
        name: 'Dragon Pulse',
        type: TYPES.DRAGON,
        power: 80,
        accuracy: 100,
        pp: 5,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    BELLY_DRUM: {
        name: 'Belly Drum',
        type: TYPES.NORMAL,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'bellyDrum'
    },
    MIND_READER: {
        name: 'Mind Reader',
        type: TYPES.NORMAL,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'mindReader'
    },
    DYNAMIC_PUNCH: {
        name: 'Dynamic Punch',
        type: TYPES.NORMAL,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'dynamicPunch'
    },
    SPLASH: {
        name: 'Splash',
        type: TYPES.WATER,
        power: 0,
        accuracy: 100,
        pp: 30,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ENDURE: {
        name: 'Endure',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'endure'
    },
    AQUA_JET: {
        name: 'Aqua Jet',
        type: TYPES.WATER,
        power: 60, 
        accuracy: 100,
        pp: 20,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    MEGA_DRAIN: {
        name: 'Mega Drain',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 5,
        effect:'megaDrain'
    },
    WRING_OUT: {
        name: 'Wring Out',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'wingOut'
    },
    NIGHT_SLASH: {
        name: 'Night Slash',
        type: TYPES.NORMAL,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'nightSlash'
    },  
    METAL_SOUND: {
        name: 'Metal Sound',
        type: TYPES.STEEL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'metalSound'
    },
    SHEER_COLD: {
        name: 'Sheer Cold',
        type: TYPES.ICE,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SPIKE_CANNON: {
        name: 'Spike Cannon',
        type: TYPES.NORMAL,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'spikeCannon'
    },
    ICE_PUNCH: {
        name: 'Ice Punch',
        type: TYPES.ICE,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    ICE_SHARD: {
        name: 'Ice Shard',
        type: TYPES.ICE,
        power: 80, 
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    SHADOW_CLAW: {
        name: 'Shadow Claw',
        type: TYPES.GHOST,
        power: 80,
        accuracy: 100,
        pp: 10,
        statusEffect: { status: 'paralyzed', chance: 0.3 }
    },
    POWDER_SNOW: {
        name: 'Powder Snow',
        type: TYPES.ICE,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'powderSnow'
    },
    MIST: {
        name: 'Mist',
        type: TYPES.NORMAL,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'mist'
    },
    FREEZE_DRY: {
        name: 'Freeze Dry',
        type: TYPES.ICE,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'freezeDry'
    },
    HAIL: {
        name: 'Hail',
        type: TYPES.FLYING,
        power: 0, 
        accuracy: 100,
        pp: 10,
        effect:'hail'
    },
    TAILWIND: {
        name: 'Tailwind',
        type: TYPES.FLYING,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'tailwind'
    },
    ROOST: {
        name: 'Roost',
        type: TYPES.NORMAL,
        power: 0,
        accuracy: 100,
        pp: 10,
        effect:'roost'
    },
};