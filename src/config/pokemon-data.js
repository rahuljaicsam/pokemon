import { TYPES } from './pokemon-types';
import { MOVES } from './moves';

export const POKEMON_DATA = {
    BULBASAUR: {
        id: 1,
        name: 'Bulbasaur',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: { hp: 45, attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
        moves: {
            1: [MOVES.TACKLE],
            3: [MOVES.GROWL],
            7: [MOVES.VINE_WHIP],
            10: [MOVES.LEECH_SEED]
        }
    },
    IVYSAUR: {
        id: 2,
        name: 'Ivysaur',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: { hp: 60, attack: 62, defense: 63, spAtk: 80, spDef: 80, speed: 60 },
        moves: {
            1: [MOVES.TACKLE, MOVES.GROWL, MOVES.VINE_WHIP],
            3: [MOVES.LEECH_SEED]
        }
    },
    VENUSAUR: {
        id: 3,
        name: 'Venusaur',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: { hp: 80, attack: 82, defense: 83, spAtk: 100, spDef: 100, speed: 80 },
        moves: {
            1: [MOVES.TACKLE, MOVES.GROWL, MOVES.VINE_WHIP, MOVES.LEECH_SEED]
        }
    },
    CHARMANDER: {
        id: 4,
        name: 'Charmander',
        types: [TYPES.FIRE],
        baseStats: { hp: 39, attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 },
        moves: {
            1: [MOVES.SCRATCH],
            4: [MOVES.GROWL],
            7: [MOVES.EMBER],
            10: [MOVES.METAL_CLAW]
        }
    },
    CHARMELEON: {
        id: 5,
        name: 'Charmeleon',
        types: [TYPES.FIRE],
        baseStats: { hp: 58, attack: 64, defense: 58, spAtk: 80, spDef: 65, speed: 80 },
        moves: {
            1: [MOVES.SCRATCH, MOVES.GROWL, MOVES.EMBER],
            3: [MOVES.METAL_CLAW]
        }
    },
    CHARIZARD: {
        id: 6,
        name: 'Charizard',
        types: [TYPES.FIRE, TYPES.FLYING],
        baseStats: { hp: 78, attack: 84, defense: 78, spAtk: 109, spDef: 85, speed: 100 },
        moves: {
            1: [MOVES.SCRATCH, MOVES.GROWL, MOVES.EMBER, MOVES.METAL_CLAW]
        }
    },
    SQUIRTLE: {
        id: 7,
        name: 'Squirtle',
        types: [TYPES.WATER],
        baseStats: { hp: 44, attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 },
        moves: {
            1: [MOVES.TACKLE],
            4: [MOVES.TAIL_WHIP],
            7: [MOVES.BUBBLE],
            10: [MOVES.WATER_GUN]
        }
    },
    WARTORTLE: {
        id: 8,
        name: 'Wartortle',
        types: [TYPES.WATER],
        baseStats: { hp: 59, attack: 63, defense: 80, spAtk: 65, spDef: 80, speed: 58 },
        moves: {
            1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.BUBBLE],
            3: [MOVES.WATER_GUN]
        }
    },
    BLASTOISE: {
        id: 9,
        name: 'Blastoise',
        types: [TYPES.WATER],
        baseStats: { hp: 79, attack: 83, defense: 100, spAtk: 85, spDef: 105, speed: 78 },
        moves: {
            1: [MOVES.TACKLE, MOVES.TAIL_WHIP, MOVES.BUBBLE, MOVES.WATER_GUN]
        }
    },
    CATERPIE: {
        id: 10,
        name: 'Caterpie',
        types: [TYPES.BUG],
        baseStats: { hp: 45, attack: 30, defense: 35, spAtk: 20, spDef: 20, speed: 45 }
    },
    METAPOD: {
        id: 11,
        name: 'Metapod',
        types: [TYPES.BUG],
        baseStats: { hp: 50, attack: 20, defense: 55, spAtk: 25, spDef: 25, speed: 30 }
    },
    BUTTERFREE: {
        id: 12,
        name: 'Butterfree',
        types: [TYPES.BUG, TYPES.FLYING],
        baseStats: { hp: 60, attack: 45, defense: 50, spAtk: 90, spDef: 80, speed: 70 }
    },
    WEEDLE: {
        id: 13,
        name: 'Weedle',
        types: [TYPES.BUG, TYPES.POISON],
        baseStats: {
            hp: 40,
            attack: 35,
            defense: 30,
            spAtk: 20,
            spDef: 20,
            speed: 50
        },
        evolution: {
            level: 7,
            evolvesTo: 'KAKUNA'
        },
        moves: {
            1: [MOVES.TACKLE],
            2: [MOVES.STRING_SHOT]
        }
    },
    KAKUNA: {
        id: 14,
        name: 'Kakuna',
        types: [TYPES.BUG, TYPES.POISON],
        baseStats: { hp: 45, attack: 25, defense: 50, spAtk: 25, spDef: 25, speed: 35 }
    },
    BEEDRILL: {
        id: 15,
        name: 'Beedrill',
        types: [TYPES.BUG, TYPES.POISON],
        baseStats: { hp: 65, attack: 90, defense: 40, spAtk: 45, spDef: 80, speed: 75 }
    },
    PIDGEY: {
        id: 16,
        name: 'Pidgey',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: {
            hp: 40,
            attack: 45,
            defense: 40,
            spAtk: 35,
            spDef: 35,
            speed: 56
        },
        evolution: {
            level: 18,
            evolvesTo: 'PIDGEOTTO'
        },
        moves: {
            1: [MOVES.TACKLE],
            5: [MOVES.GUST]
        }
    },
    PIDGEOTTO: {
        id: 17,
        name: 'Pidgeotto',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: {
            hp: 60,
            attack: 65,
            defense: 60,
            spAtk: 55,
            spDef: 55,
            speed: 76
        },
        evolution: {
            level: 36,
            evolvesTo: 'PIDGEOT'
        },
        moves: {
            1: [MOVES.TACKLE],
            5: [MOVES.GUST]
        }
    },
    PIDGEOT: {
        id: 18,
        name: 'Pidgeot',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: {
            hp: 80,
            attack: 85,
            defense: 80,
            spAtk: 75,
            spDef: 75,
            speed: 76
        },
        evolution: {
            level: 36,
            evolvesTo: 'PIDGEOT'
        },
        moves: {
            1: [MOVES.TACKLE],
            5: [MOVES.GUST]
        }
    },
    RATTATA: {
        id: 19,
        name: 'Rattata',
        types: [TYPES.NORMAL],
        baseStats: {
            hp: 30,
            attack: 56,
            defense: 35,
            spAtk: 25,
            spDef: 35,
            speed: 72
        },
        evolution: {
            level: 20,
            evolvesTo: 'RATICATE'
        },
        moves: {
            1: [MOVES.TACKLE],
            4: [MOVES.SCRATCH]
        }
    },
    RATICATE: {
        id: 20,
        name: 'Raticate',
        types: [TYPES.NORMAL],
        baseStats: {
            hp: 50,
            attack: 76,
            defense: 55,
            spAtk: 55,
            spDef: 55,
            speed: 92
        },
        evolution: {
            level: 20,
            evolvesTo: 'RATICATE'
        },
        moves: {
            1: [MOVES.TACKLE],
            4: [MOVES.SCRATCH]
        }
    },
    SPEAROW: {
        id: 21,
        name: 'Spearow',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: {
            hp: 40,
            attack: 60,
            defense: 30,
            spAtk: 31,
            spDef: 31,
            speed: 70
        },
        evolution: {
            level: 20,
            evolvesTo: 'FEAROW'
        },
        moves: {
            1: [MOVES.TACKLE],
            5: [MOVES.GUST]
        }
    },
    FEAROW: {
        id: 22,
        name: 'Fearow',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: {
            hp: 65,
            attack: 90,
            defense: 65,
            spAtk: 61,
            spDef: 61,
            speed: 100
        },
        evolution: {
            level: 20,
            evolvesTo: 'FEAROW'
        },
        moves: {
            1: [MOVES.TACKLE],
            5: [MOVES.GUST]
        }
    },
    EKANS: {
        id: 23,
        name: 'Ekans',
        types: [TYPES.POISON],
        baseStats: {
            hp: 35,
            attack: 60,
            defense: 44,
            spAtk: 40,
            spDef: 54,
            speed: 55
        },
        evolution: {
            level: 22,
            evolvesTo: 'ARBOK'
        },
        moves: {
            1: [MOVES.TACKLE]
        }
    },
    ARBOK: {
        id: 24,
        name: 'Arbok',
        types: [TYPES.POISON],
        baseStats: {
            hp: 60,
            attack: 95,
            defense: 69,
            spAtk: 65,
            spDef: 79,
            speed: 80
        },
        moves: {
            1: [MOVES.TACKLE],
            4: [MOVES.WRAP],
            9: [MOVES.POISON_STING],
            12: [MOVES.BITE]
        }
    },
    PIKACHU: {
        id: 25,
        name: 'Pikachu',
        types: [TYPES.ELECTRIC],
        baseStats: { hp: 35, attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 },
        moves: {
            1: [MOVES.THUNDER_SHOCK],
            3: [MOVES.GROWL],
            6: [MOVES.TAIL_WHIP],
            10: [MOVES.QUICK_ATTACK]
        }
    },
    RAICHU: {
        id: 26,
        name: 'Raichu',
        types: [TYPES.ELECTRIC],
        baseStats: {
            hp: 35,
            attack: 60,
            defense: 44,
            spAtk: 40,
            spDef: 54,
            speed: 55
        },
        evolution: {
            level: 25,
            evolvesTo: 'RAICHU'
        },
        moves: {
            1: [MOVES.TACKLE],
            4: [MOVES.THUNDER_SHOCK]
        }
    },
    SANDSHREW: {
        id: 27,
        name: 'Sandshrew',
        types: [TYPES.GROUND],
        baseStats: {
            hp: 50,
            attack: 75,
            defense: 85,
            spAtk: 20,
            spDef: 30,
            speed: 40
        },
        evolution: {
            level: 22,
            evolvesTo: 'SANDSLASH'
        },
        moves: {
            1: [MOVES.SCRATCH]
        }
    },
    NIDORAN_F: {
        id: 29,
        name: 'Nidoran♀',
        types: [TYPES.POISON],
        baseStats: {
            hp: 55,
            attack: 47,
            defense: 52,
            spAtk: 40,
            spDef: 40,
            speed: 41
        },
        evolution: {
            level: 16,
            evolvesTo: 'NIDORINA'
        },
        moves: {
            1: [MOVES.TACKLE]
        }
    },
    NIDORAN_M: {
        id: 32,
        name: 'Nidoran♂',
        types: [TYPES.POISON],
        baseStats: {
            hp: 46,
            attack: 57,
            defense: 40,
            spAtk: 40,
            spDef: 40,
            speed: 50
        },
        evolution: {
            level: 16,
            evolvesTo: 'NIDORINO'
        },
        moves: {
            1: [MOVES.TACKLE]
        }
    },
    CLEFAIRY: {
        id: 35,
        name: 'Clefairy',
        types: [TYPES.FAIRY],
        baseStats: {
            hp: 70,
            attack: 45,
            defense: 48,
            spAtk: 60,
            spDef: 65,
            speed: 35
        },
        evolution: {
            item: 'MOON_STONE',
            evolvesTo: 'CLEFABLE'
        },
        moves: {
            1: [MOVES.TACKLE]
        }
    },
    VULPIX: {
        id: 37,
        name: 'Vulpix',
        types: [TYPES.FIRE],
        baseStats: {
            hp: 38,
            attack: 41,
            defense: 40,
            spAtk: 50,
            spDef: 65,
            speed: 65
        },
        evolution: {
            item: 'FIRE_STONE',
            evolvesTo: 'NINETALES'
        },
        moves: {
            1: [MOVES.EMBER]
        }
    },
    JIGGLYPUFF: {
        id: 39,
        name: 'Jigglypuff',
        types: [TYPES.NORMAL, TYPES.FAIRY],
        baseStats: {
            hp: 115,
            attack: 45,
            defense: 20,
            spAtk: 45,
            spDef: 25,
            speed: 20
        },
        evolution: {
            item: 'MOON_STONE',
            evolvesTo: 'WIGGLYTUFF'
        },
        moves: {
            1: [MOVES.TACKLE]
        }
    },
    ODDISH: {
        id: 43,
        name: 'Oddish',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: {
            hp: 45,
            attack: 50,
            defense: 55,
            spAtk: 75,
            spDef: 65,
            speed: 30
        },
        evolution: {
            level: 21,
            evolvesTo: 'GLOOM'
        },
        moves: {
            1: [MOVES.TACKLE],
            4: [MOVES.VINE_WHIP]
        }
    },
    BELLSPROUT: {
        id: 69,
        name: 'Bellsprout',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: {
            hp: 50,
            attack: 75,
            defense: 35,
            spAtk: 70,
            spDef: 30,
            speed: 40
        },
        evolution: {
            level: 21,
            evolvesTo: 'WEEPINBELL'
        },
        moves: {
            1: [MOVES.VINE_WHIP]
        }
    },
    MANKEY: {
        id: 56,
        name: 'Mankey',
        types: [TYPES.FIGHTING],
        baseStats: {
            hp: 40,
            attack: 80,
            defense: 35,
            spAtk: 35,
            spDef: 45,
            speed: 70
        },
        evolution: {
            level: 28,
            evolvesTo: 'PRIMEAPE'
        },
        moves: {
            1: [MOVES.SCRATCH]
        }
    },
    PRIMEAPE: {
        id: 57,
        name: 'Primeape',
        types: [TYPES.FIGHTING],
        baseStats: { hp: 65, attack: 105, defense: 60, spAtk: 60, spDef: 70, speed: 95 }
    },
    GROWLITHE: {
        id: 58,
        name: 'Growlithe',
        types: [TYPES.FIRE],
        baseStats: { hp: 55, attack: 70, defense: 45, spAtk: 70, spDef: 50, speed: 60 }
    },
    ARCANINE: {
        id: 59,
        name: 'Arcanine',
        types: [TYPES.FIRE],
        baseStats: { hp: 90, attack: 110, defense: 80, spAtk: 100, spDef: 80, speed: 95 }
    },
    POLIWAG: {
        id: 60,
        name: 'Poliwag',
        types: [TYPES.WATER],
        baseStats: { hp: 40, attack: 50, defense: 40, spAtk: 40, spDef: 40, speed: 90 }
    },
    POLIWHIRL: {
        id: 61,
        name: 'Poliwhirl',
        types: [TYPES.WATER],
        baseStats: { hp: 65, attack: 65, defense: 65, spAtk: 50, spDef: 50, speed: 90 }
    },
    POLIWRATH: {
        id: 62,
        name: 'Poliwrath',
        types: [TYPES.WATER, TYPES.FIGHTING],
        baseStats: { hp: 90, attack: 95, defense: 95, spAtk: 70, spDef: 90, speed: 70 }
    },
    ABRA: {
        id: 63,
        name: 'Abra',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 25, attack: 20, defense: 15, spAtk: 105, spDef: 55, speed: 90 }
    },
    KADABRA: {
        id: 64,
        name: 'Kadabra',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 40, attack: 35, defense: 30, spAtk: 120, spDef: 70, speed: 105 }
    },
    ALAKAZAM: {
        id: 65,
        name: 'Alakazam',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 55, attack: 50, defense: 45, spAtk: 135, spDef: 95, speed: 120 }
    },
    MACHOP: {
        id: 66,
        name: 'Machop',
        types: [TYPES.FIGHTING],
        baseStats: { hp: 70, attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 }
    },
    MACHOKE: {
        id: 67,
        name: 'Machoke',
        types: [TYPES.FIGHTING],
        baseStats: { hp: 80, attack: 100, defense: 70, spAtk: 50, spDef: 60, speed: 45 }
    },
    MACHAMP: {
        id: 68,
        name: 'Machamp',
        types: [TYPES.FIGHTING],
        baseStats: { hp: 90, attack: 130, defense: 80, spAtk: 65, spDef: 85, speed: 55 }
    },
    WEEPINBELL: {
        id: 70,
        name: 'Weepinbell',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: { hp: 65, attack: 90, defense: 50, spAtk: 85, spDef: 45, speed: 55 }
    },
    VICTREEBEL: {
        id: 71,
        name: 'Victreebel',
        types: [TYPES.GRASS, TYPES.POISON],
        baseStats: { hp: 80, attack: 105, defense: 65, spAtk: 100, spDef: 70, speed: 70 }
    },
    TENTACOOL: {
        id: 72,
        name: 'Tentacool',
        types: [TYPES.WATER, TYPES.POISON],
        baseStats: { hp: 40, attack: 40, defense: 35, spAtk: 50, spDef: 100, speed: 70 }
    },
    TENTACRUEL: {
        id: 73,
        name: 'Tentacruel',
        types: [TYPES.WATER, TYPES.POISON],
        baseStats: { hp: 80, attack: 70, defense: 65, spAtk: 80, spDef: 120, speed: 100 }
    },
    GEODUDE: {
        id: 74,
        name: 'Geodude',
        types: [TYPES.ROCK, TYPES.GROUND],
        baseStats: { hp: 40, attack: 80, defense: 100, spAtk: 30, spDef: 30, speed: 20 }
    },
    GRAVELER: {
        id: 75,
        name: 'Graveler',
        types: [TYPES.ROCK, TYPES.GROUND],
        baseStats: { hp: 55, attack: 95, defense: 115, spAtk: 45, spDef: 45, speed: 35 }
    },
    GOLEM: {
        id: 76,
        name: 'Golem',
        types: [TYPES.ROCK, TYPES.GROUND],
        baseStats: { hp: 80, attack: 120, defense: 130, spAtk: 55, spDef: 65, speed: 45 }
    },
    PONYTA: {
        id: 77,
        name: 'Ponyta',
        types: [TYPES.FIRE],
        baseStats: { hp: 50, attack: 85, defense: 55, spAtk: 65, spDef: 65, speed: 90 }
    },
    RAPIDASH: {
        id: 78,
        name: 'Rapidash',
        types: [TYPES.FIRE],
        baseStats: { hp: 65, attack: 100, defense: 70, spAtk: 80, spDef: 80, speed: 105 }
    },
    SLOWPOKE: {
        id: 79,
        name: 'Slowpoke',
        types: [TYPES.WATER, TYPES.PSYCHIC],
        baseStats: { hp: 90, attack: 65, defense: 65, spAtk: 40, spDef: 40, speed: 15 }
    },
    SLOWBRO: {
        id: 80,
        name: 'Slowbro',
        types: [TYPES.WATER, TYPES.PSYCHIC],
        baseStats: { hp: 95, attack: 75, defense: 110, spAtk: 100, spDef: 80, speed: 30 }
    },
    MAGNEMITE: {
        id: 81,
        name: 'Magnemite',
        types: [TYPES.ELECTRIC, TYPES.STEEL],
        baseStats: { hp: 25, attack: 35, defense: 70, spAtk: 95, spDef: 55, speed: 45 }
    },
    MAGNETON: {
        id: 82,
        name: 'Magneton',
        types: [TYPES.ELECTRIC, TYPES.STEEL],
        baseStats: { hp: 50, attack: 60, defense: 95, spAtk: 120, spDef: 70, speed: 70 }
    },
    FARFETCHD: {
        id: 83,
        name: "Farfetch'd",
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: { hp: 52, attack: 90, defense: 55, spAtk: 58, spDef: 62, speed: 60 }
    },
    DODUO: {
        id: 84,
        name: 'Doduo',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: { hp: 35, attack: 85, defense: 45, spAtk: 35, spDef: 35, speed: 75 }
    },
    DODRIO: {
        id: 85,
        name: 'Dodrio',
        types: [TYPES.NORMAL, TYPES.FLYING],
        baseStats: { hp: 60, attack: 110, defense: 70, spAtk: 60, spDef: 60, speed: 110 }
    },
    SEEL: {
        id: 86,
        name: 'Seel',
        types: [TYPES.WATER],
        baseStats: { hp: 65, attack: 45, defense: 55, spAtk: 45, spDef: 70, speed: 45 }
    },
    DEWGONG: {
        id: 87,
        name: 'Dewgong',
        types: [TYPES.WATER, TYPES.ICE],
        baseStats: { hp: 90, attack: 70, defense: 80, spAtk: 70, spDef: 95, speed: 70 }
    },
    GRIMER: {
        id: 88,
        name: 'Grimer',
        types: [TYPES.POISON],
        baseStats: { hp: 80, attack: 80, defense: 50, spAtk: 40, spDef: 50, speed: 25 }
    },
    MUK: {
        id: 89,
        name: 'Muk',
        types: [TYPES.POISON],
        baseStats: { hp: 105, attack: 105, defense: 75, spAtk: 65, spDef: 100, speed: 50 }
    },
    SHELLDER: {
        id: 90,
        name: 'Shellder',
        types: [TYPES.WATER],
        baseStats: { hp: 30, attack: 65, defense: 100, spAtk: 45, spDef: 25, speed: 40 }
    },
    CLOYSTER: {
        id: 91,
        name: 'Cloyster',
        types: [TYPES.WATER, TYPES.ICE],
        baseStats: { hp: 50, attack: 95, defense: 180, spAtk: 85, spDef: 45, speed: 70 }
    },
    GASTLY: {
        id: 92,
        name: 'Gastly',
        types: [TYPES.GHOST, TYPES.POISON],
        baseStats: { hp: 30, attack: 35, defense: 30, spAtk: 100, spDef: 35, speed: 80 }
    },
    HAUNTER: {
        id: 93,
        name: 'Haunter',
        types: [TYPES.GHOST, TYPES.POISON],
        baseStats: { hp: 45, attack: 50, defense: 45, spAtk: 115, spDef: 55, speed: 95 }
    },
    GENGAR: {
        id: 94,
        name: 'Gengar',
        types: [TYPES.GHOST, TYPES.POISON],
        baseStats: { hp: 60, attack: 65, defense: 60, spAtk: 130, spDef: 75, speed: 110 }
    },
    ONIX: {
        id: 95,
        name: 'Onix',
        types: [TYPES.ROCK, TYPES.GROUND],
        baseStats: { hp: 35, attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70 }
    },
    DROWZEE: {
        id: 96,
        name: 'Drowzee',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 60, attack: 48, defense: 45, spAtk: 43, spDef: 90, speed: 42 }
    },
    HYPNO: {
        id: 97,
        name: 'Hypno',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 85, attack: 73, defense: 70, spAtk: 73, spDef: 115, speed: 67 }
    },
    KRABBY: {
        id: 98,
        name: 'Krabby',
        types: [TYPES.WATER],
        baseStats: { hp: 30, attack: 105, defense: 90, spAtk: 25, spDef: 25, speed: 50 }
    },
    KINGLER: {
        id: 99,
        name: 'Kingler',
        types: [TYPES.WATER],
        baseStats: { hp: 55, attack: 130, defense: 115, spAtk: 50, spDef: 50, speed: 75 }
    },
    VOLTORB: {
        id: 100,
        name: 'Voltorb',
        types: [TYPES.ELECTRIC],
        baseStats: { hp: 40, attack: 30, defense: 50, spAtk: 55, spDef: 55, speed: 100 }
    },
    ELECTRODE: {
        id: 101,
        name: 'Electrode',
        types: [TYPES.ELECTRIC],
        baseStats: { hp: 60, attack: 50, defense: 70, spAtk: 80, spDef: 80, speed: 150 }
    },
    EXEGGCUTE: {
        id: 102,
        name: 'Exeggcute',
        types: [TYPES.GRASS, TYPES.PSYCHIC],
        baseStats: { hp: 60, attack: 40, defense: 80, spAtk: 60, spDef: 45, speed: 40 }
    },
    EXEGGUTOR: {
        id: 103,
        name: 'Exeggutor',
        types: [TYPES.GRASS, TYPES.PSYCHIC],
        baseStats: { hp: 95, attack: 95, defense: 85, spAtk: 125, spDef: 75, speed: 55 }
    },
    CUBONE: {
        id: 104,
        name: 'Cubone',
        types: [TYPES.GROUND],
        baseStats: { hp: 50, attack: 50, defense: 95, spAtk: 40, spDef: 50, speed: 35 }
    },
    MAROWAK: {
        id: 105,
        name: 'Marowak',
        types: [TYPES.GROUND],
        baseStats: { hp: 60, attack: 80, defense: 110, spAtk: 50, spDef: 80, speed: 45 }
    },
    HITMONLEE: {
        id: 106,
        name: 'Hitmonlee',
        types: [TYPES.FIGHTING],
        baseStats: { hp: 50, attack: 120, defense: 53, spAtk: 35, spDef: 110, speed: 87 }
    },
    HITMONCHAN: {
        id: 107,
        name: 'Hitmonchan',
        types: [TYPES.FIGHTING],
        baseStats: { hp: 50, attack: 105, defense: 79, spAtk: 35, spDef: 110, speed: 76 }
    },
    LICKITUNG: {
        id: 108,
        name: 'Lickitung',
        types: [TYPES.NORMAL],
        baseStats: { hp: 90, attack: 55, defense: 75, spAtk: 60, spDef: 75, speed: 30 }
    },
    KOFFING: {
        id: 109,
        name: 'Koffing',
        types: [TYPES.POISON],
        baseStats: { hp: 40, attack: 65, defense: 95, spAtk: 60, spDef: 45, speed: 35 }
    },
    WEEZING: {
        id: 110,
        name: 'Weezing',
        types: [TYPES.POISON],
        baseStats: { hp: 65, attack: 90, defense: 120, spAtk: 85, spDef: 70, speed: 60 }
    },
    RHYHORN: {
        id: 111,
        name: 'Rhyhorn',
        types: [TYPES.GROUND, TYPES.ROCK],
        baseStats: { hp: 80, attack: 85, defense: 95, spAtk: 30, spDef: 30, speed: 25 }
    },
    RHYDON: {
        id: 112,
        name: 'Rhydon',
        types: [TYPES.GROUND, TYPES.ROCK],
        baseStats: { hp: 105, attack: 130, defense: 120, spAtk: 45, spDef: 45, speed: 40 }
    },
    CHANSEY: {
        id: 113,
        name: 'Chansey',
        types: [TYPES.NORMAL],
        baseStats: { hp: 250, attack: 5, defense: 5, spAtk: 35, spDef: 105, speed: 50 }
    },
    TANGELA: {
        id: 114,
        name: 'Tangela',
        types: [TYPES.GRASS],
        baseStats: { hp: 65, attack: 55, defense: 115, spAtk: 100, spDef: 40, speed: 60 }
    },
    KANGASKHAN: {
        id: 115,
        name: 'Kangaskhan',
        types: [TYPES.NORMAL],
        baseStats: { hp: 105, attack: 95, defense: 80, spAtk: 40, spDef: 80, speed: 90 }
    },
    HORSEA: {
        id: 116,
        name: 'Horsea',
        types: [TYPES.WATER],
        baseStats: { hp: 30, attack: 40, defense: 70, spAtk: 70, spDef: 25, speed: 60 }
    },
    SEADRA: {
        id: 117,
        name: 'Seadra',
        types: [TYPES.WATER],
        baseStats: { hp: 55, attack: 65, defense: 95, spAtk: 95, spDef: 45, speed: 85 }
    },
    GOLDEEN: {
        id: 118,
        name: 'Goldeen',
        types: [TYPES.WATER],
        baseStats: { hp: 45, attack: 67, defense: 60, spAtk: 35, spDef: 50, speed: 63 }
    },
    SEAKING: {
        id: 119,
        name: 'Seaking',
        types: [TYPES.WATER],
        baseStats: { hp: 80, attack: 92, defense: 65, spAtk: 65, spDef: 80, speed: 68 }
    },
    STARYU: {
        id: 120,
        name: 'Staryu',
        types: [TYPES.WATER],
        baseStats: { hp: 30, attack: 45, defense: 55, spAtk: 70, spDef: 55, speed: 85 }
    },
    STARMIE: {
        id: 121,
        name: 'Starmie',
        types: [TYPES.WATER, TYPES.PSYCHIC],
        baseStats: { hp: 60, attack: 75, defense: 85, spAtk: 100, spDef: 85, speed: 115 }
    },
    MR_MIME: {
        id: 122,
        name: 'Mr. Mime',
        types: [TYPES.PSYCHIC, TYPES.FAIRY],
        baseStats: { hp: 40, attack: 45, defense: 65, spAtk: 100, spDef: 120, speed: 90 }
    },
    SCYTHER: {
        id: 123,
        name: 'Scyther',
        types: [TYPES.BUG, TYPES.FLYING],
        baseStats: { hp: 70, attack: 110, defense: 80, spAtk: 55, spDef: 80, speed: 105 }
    },
    JYNX: {
        id: 124,
        name: 'Jynx',
        types: [TYPES.ICE, TYPES.PSYCHIC],
        baseStats: { hp: 65, attack: 50, defense: 35, spAtk: 115, spDef: 95, speed: 95 }
    },
    ELECTABUZZ: {
        id: 125,
        name: 'Electabuzz',
        types: [TYPES.ELECTRIC],
        baseStats: { hp: 65, attack: 83, defense: 57, spAtk: 95, spDef: 85, speed: 105 }
    },
    MAGMAR: {
        id: 126,
        name: 'Magmar',
        types: [TYPES.FIRE],
        baseStats: { hp: 65, attack: 95, defense: 57, spAtk: 100, spDef: 85, speed: 93 }
    },
    PINSIR: {
        id: 127,
        name: 'Pinsir',
        types: [TYPES.BUG],
        baseStats: { hp: 65, attack: 125, defense: 100, spAtk: 55, spDef: 70, speed: 85 }
    },
    TAUROS: {
        id: 128,
        name: 'Tauros',
        types: [TYPES.NORMAL],
        baseStats: { hp: 75, attack: 100, defense: 95, spAtk: 40, spDef: 70, speed: 110 }
    },
    MAGIKARP: {
        id: 129,
        name: 'Magikarp',
        types: [TYPES.WATER],
        baseStats: { hp: 20, attack: 10, defense: 55, spAtk: 15, spDef: 20, speed: 80 }
    },
    GYARADOS: {
        id: 130,
        name: 'Gyarados',
        types: [TYPES.WATER, TYPES.FLYING],
        baseStats: { hp: 95, attack: 125, defense: 79, spAtk: 60, spDef: 100, speed: 81 }
    },
    LAPRAS: {
        id: 131,
        name: 'Lapras',
        types: [TYPES.WATER, TYPES.ICE],
        baseStats: { hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60 }
    },
    DITTO: {
        id: 132,
        name: 'Ditto',
        types: [TYPES.NORMAL],
        baseStats: { hp: 48, attack: 48, defense: 48, spAtk: 48, spDef: 48, speed: 48 }
    },
    EEVEE: {
        id: 133,
        name: 'Eevee',
        types: [TYPES.NORMAL],
        baseStats: { hp: 55, attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 }
    },
    VAPOREON: {
        id: 134,
        name: 'Vaporeon',
        types: [TYPES.WATER],
        baseStats: { hp: 130, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 65 }
    },
    JOLTEON: {
        id: 135,
        name: 'Jolteon',
        types: [TYPES.ELECTRIC],
        baseStats: { hp: 65, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 130 }
    },
    FLAREON: {
        id: 136,
        name: 'Flareon',
        types: [TYPES.FIRE],
        baseStats: { hp: 65, attack: 130, defense: 60, spAtk: 95, spDef: 110, speed: 65 }
    },
    PORYGON: {
        id: 137,
        name: 'Porygon',
        types: [TYPES.NORMAL],
        baseStats: { hp: 65, attack: 60, defense: 70, spAtk: 85, spDef: 75, speed: 40 }
    },
    OMANYTE: {
        id: 138,
        name: 'Omanyte',
        types: [TYPES.ROCK, TYPES.WATER],
        baseStats: { hp: 35, attack: 40, defense: 100, spAtk: 90, spDef: 55, speed: 35 }
    },
    OMASTAR: {
        id: 139,
        name: 'Omastar',
        types: [TYPES.ROCK, TYPES.WATER],
        baseStats: { hp: 70, attack: 60, defense: 125, spAtk: 115, spDef: 70, speed: 55 }
    },
    KABUTO: {
        id: 140,
        name: 'Kabuto',
        types: [TYPES.ROCK, TYPES.WATER],
        baseStats: { hp: 30, attack: 80, defense: 90, spAtk: 55, spDef: 45, speed: 55 }
    },
    KABUTOPS: {
        id: 141,
        name: 'Kabutops',
        types: [TYPES.ROCK, TYPES.WATER],
        baseStats: { hp: 60, attack: 115, defense: 105, spAtk: 65, spDef: 70, speed: 80 }
    },
    AERODACTYL: {
        id: 142,
        name: 'Aerodactyl',
        types: [TYPES.ROCK, TYPES.FLYING],
        baseStats: { hp: 80, attack: 105, defense: 65, spAtk: 60, spDef: 75, speed: 130 }
    },
    SNORLAX: {
        id: 143,
        name: 'Snorlax',
        types: [TYPES.NORMAL],
        baseStats: { hp: 160, attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30 }
    },
    ARTICUNO: {
        id: 144,
        name: 'Articuno',
        types: [TYPES.ICE, TYPES.FLYING],
        baseStats: { hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85 }
    },
    ZAPDOS: {
        id: 145,
        name: 'Zapdos',
        types: [TYPES.ELECTRIC, TYPES.FLYING],
        baseStats: { hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100 }
    },
    MOLTRES: {
        id: 146,
        name: 'Moltres',
        types: [TYPES.FIRE, TYPES.FLYING],
        baseStats: { hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90 }
    },
    DRATINI: {
        id: 147,
        name: 'Dratini',
        types: [TYPES.DRAGON],
        baseStats: { hp: 41, attack: 64, defense: 45, spAtk: 50, spDef: 50, speed: 50 }
    },
    DRAGONAIR: {
        id: 148,
        name: 'Dragonair',
        types: [TYPES.DRAGON],
        baseStats: { hp: 61, attack: 84, defense: 65, spAtk: 70, spDef: 70, speed: 70 }
    },
    DRAGONITE: {
        id: 149,
        name: 'Dragonite',
        types: [TYPES.DRAGON, TYPES.FLYING],
        baseStats: { hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80 }
    },
    MEWTWO: {
        id: 150,
        name: 'Mewtwo',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 106, attack: 110, defense: 90, spAtk: 154, spDef: 90, speed: 130 }
    },
    MEW: {
        id: 151,
        name: 'Mew',
        types: [TYPES.PSYCHIC],
        baseStats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 }
    }
};

export const calculateStats = (pokemon, level) => {
    console.log('[pokemon-data] Calculating stats for:', {
        pokemon,
        level,
        hasData: !!POKEMON_DATA[pokemon],
        availableKeys: Object.keys(POKEMON_DATA)
    });

    const baseStats = POKEMON_DATA[pokemon]?.baseStats;
    
    if (!baseStats) {
        console.error('[pokemon-data] Missing base stats for:', pokemon);
        // Provide fallback stats to prevent crash
        return {
            hp: 50,
            attack: 50,
            defense: 50,
            spAtk: 50,
            spDef: 50,
            speed: 50
        };
    }

    return {
        hp: Math.floor((baseStats.hp * 2 * level) / 100 + level + 10),
        attack: Math.floor((baseStats.attack * 2 * level) / 100 + 5),
        defense: Math.floor((baseStats.defense * 2 * level) / 100 + 5),
        spAtk: Math.floor((baseStats.spAtk * 2 * level) / 100 + 5),
        spDef: Math.floor((baseStats.spDef * 2 * level) / 100 + 5),
        speed: Math.floor((baseStats.speed * 2 * level) / 100 + 5)
    };
};

export function getMovesForLevel(pokemonKey, level) {
    console.log(`[PokemonData] Getting moves for ${pokemonKey} at level ${level}`);
    const pokemonData = POKEMON_DATA[pokemonKey];
    if (!pokemonData) {
        console.error(`[PokemonData] No data found for Pokémon: ${pokemonKey}`);
        return ['TACKLE'];
    }

    console.log(`[PokemonData] Available moves for ${pokemonKey}:`, pokemonData.moves);
    
    // Get all moves available at or below the current level
    const availableMoves = Object.entries(pokemonData.moves)
        .filter(([moveKey, levelReq]) => levelReq <= level)
        .map(([moveKey]) => moveKey);

    console.log(`[PokemonData] Moves available at level ${level}:`, availableMoves);
    
    // Sort by level requirement (highest first) and take the last 4
    const moves = availableMoves
        .sort((a, b) => pokemonData.moves[a] - pokemonData.moves[b])
        .slice(-4);

    console.log(`[PokemonData] Selected moves for level ${level}:`, moves);
    return moves;
} 