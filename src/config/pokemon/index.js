// This file aggregates all individual Pokémon data files and exports them as a single object
import { BULBASAUR } from './bulbasaur';
import { IVYSAUR } from './ivysaur';
import { VENUSAUR } from './venusaur';
import { CHARMANDER } from './charmander';
import { CHARMELEON } from './charmeleon';
import { CHARIZARD } from './charizard';
import { SQUIRTLE } from './squirtle';
import { WARTORTLE } from './wartortle';
import { BLASTOISE } from './blastoise';
import { CATERPIE } from './caterpie';
import { METAPOD } from './metapod';
import { BUTTERFREE } from './butterfree';
import { WEEDLE } from './weedle';
import { KAKUNA } from './kakuna';
import { BEEDRILL } from './beedrill';
import { PIDGEY } from './pidgey';
import { PIDGEOTTO } from './pidgeotto';
import { PIDGEOT } from './pidgeot';
import { RATTATA } from './rattata';
import { RATICATE } from './raticate';
import { SPEAROW } from './spearow';
import { FEAROW } from './fearow';
import { EKANS } from './ekans';
import { ARBOK } from './arbok';
import { PIKACHU } from './pikachu';
import { RAICHU } from './raichu';
import { SANDSHREW } from './sandshrew';
import { SANDSLASH } from './sandslash';
import { NIDORAN_F } from './nidoran-f';
import { NIDORINA } from './nidorina';
import { NIDOQUEEN } from './nidoqueen';
import { NIDORAN_M } from './nidoran-m';
import { NIDORINO } from './nidorino';
import { NIDOKING } from './nidoking';
import { CLEFAIRY } from './clefairy';
import { CLEFABLE } from './clefable';
import { VULPIX } from './vulpix';
import { NINETALES } from './ninetales';
import { JIGGLYPUFF } from './jigglypuff';
import { WIGGLYTUFF } from './wigglytuff';
import { ZUBAT } from './zubat';
import { GOLBAT } from './golbat';
import { ODDISH } from './oddish';
import { GLOOM } from './gloom';
import { VILEPLUME } from './vileplume';
import { PARAS } from './paras';
import { PARASECT } from './parasect';
import { VENONAT } from './venonat';
import { VENOMOTH } from './venomoth';
import { DIGLETT } from './diglett';
import { DUGTRIO } from './dugtrio';
import { MEOWTH } from './meowth';
import { PERSIAN } from './persian';
import { PSYDUCK } from './psyduck';
import { GOLDUCK } from './golduck';
import { MANKEY } from './mankey';
import { PRIMEAPE } from './primeape';
import { GROWLITHE } from './growlithe';
import { ARCANINE } from './arcanine';
import { POLIWAG } from './poliwag';
import { POLIWHIRL } from './poliwhirl';
import { POLIWRATH } from './poliwrath';
import { ABRA } from './abra';
import { KADABRA } from './kadabra';
import { ALAKAZAM } from './alakazam';
import { MACHOP } from './machop';
import { MACHOKE } from './machoke';
import { MACHAMP } from './machamp';
import { BELLSPROUT } from './bellsprout';
import { WEEPINBELL } from './weepinbell';
import { VICTREEBEL } from './victreebel';
import { TENTACOOL } from './tentacool';
import { TENTACRUEL } from './tentacruel';
import { GEODUDE } from './geodude';
import { GRAVELER } from './graveler';
import { GOLEM } from './golem';
import { PONYTA } from './ponyta';
import { RAPIDASH } from './rapidash';
import { SLOWPOKE } from './slowpoke';
import { SLOWBRO } from './slowbro';
import { MAGNEMITE } from './magnemite';
import { MAGNETON } from './magneton';
import { FARFETCHD } from './farfetchd';
import { DODUO } from './doduo';
import { DODRIO } from './dodrio';
import { SEEL } from './seel';
import { DEWGONG } from './dewgong';
import { GRIMER } from './grimer';
import { MUK } from './muk';
import { SHELLDER } from './shellder';
import { CLOYSTER } from './cloyster';
import { GASTLY } from './gastly';
import { HAUNTER } from './haunter';
import { GENGAR } from './gengar';
import { ONIX } from './onix';
import { DROWZEE } from './drowzee';
import { HYPNO } from './hypno';
import { KRABBY } from './krabby';
import { KINGLER } from './kingler';
import { VOLTORB } from './voltorb';
import { ELECTRODE } from './electrode';
import { EXEGGCUTE } from './exeggcute';
import { EXEGGUTOR } from './exeggutor';
import { CUBONE } from './cubone';
import { MAROWAK } from './marowak';
import { HITMONLEE } from './hitmonlee';
import { HITMONCHAN } from './hitmonchan';
import { LICKITUNG } from './lickitung';
import { KOFFING } from './koffing';
import { WEEZING } from './weezing';
import { RHYHORN } from './rhyhorn';
import { RHYDON } from './rhydon';
import { CHANSEY } from './chansey';
import { TANGELA } from './tangela';
import { KANGASKHAN } from './kangaskhan';
import { HORSEA } from './horsea';
import { SEADRA } from './seadra';
import { GOLDEEN } from './goldeen';
import { SEAKING } from './seaking';
import { STARYU } from './staryu';
import { STARMIE } from './starmie';
import { MR_MIME } from './mr-mime';
import { SCYTHER } from './scyther';
import { JYNX } from './jynx';
import { ELECTABUZZ } from './electabuzz';
import { MAGMAR } from './magmar';
import { PINSIR } from './pinsir';
import { TAUROS } from './tauros';
import { MAGIKARP } from './magikarp';
import { GYARADOS } from './gyarados';
import { LAPRAS } from './lapras';
import { DITTO } from './ditto';
import { EEVEE } from './eevee';
import { VAPOREON } from './vaporeon';
import { JOLTEON } from './jolteon';
import { FLAREON } from './flareon';
import { PORYGON } from './porygon';
import { OMANYTE } from './omanyte';
import { OMASTAR } from './omastar';
import { KABUTO } from './kabuto';
import { KABUTOPS } from './kabutops';
import { AERODACTYL } from './aerodactyl';
import { SNORLAX } from './snorlax';
import { ARTICUNO } from './articuno';
import { ZAPDOS } from './zapdos';
import { MOLTRES } from './moltres';
import { DRATINI } from './dratini';
import { DRAGONAIR } from './dragonair';
import { DRAGONITE } from './dragonite';
import { MEWTWO } from './mewtwo';
import { MEW } from './mew';

// Export all Pokémon data as a single object
export const POKEMON_DATA = {
    BULBASAUR,
    IVYSAUR,
    VENUSAUR,
    CHARMANDER,
    CHARMELEON,
    CHARIZARD,
    SQUIRTLE,
    WARTORTLE,
    BLASTOISE,
    CATERPIE,
    METAPOD,
    BUTTERFREE,
    WEEDLE,
    KAKUNA,
    BEEDRILL,
    PIDGEY,
    PIDGEOTTO,
    PIDGEOT,
    RATTATA,
    RATICATE,
    SPEAROW,
    FEAROW,
    EKANS,
    ARBOK,
    PIKACHU,
    RAICHU,
    SANDSHREW,
    SANDSLASH,
    NIDORAN_F,
    NIDORINA,
    NIDOQUEEN,
    NIDORAN_M,
    NIDORINO,
    NIDOKING,
    CLEFAIRY,
    CLEFABLE,
    VULPIX,
    NINETALES,
    JIGGLYPUFF,
    WIGGLYTUFF,
    ZUBAT,
    GOLBAT,
    ODDISH,
    GLOOM,
    VILEPLUME,
    PARAS,
    PARASECT,
    VENONAT,
    VENOMOTH,
    DIGLETT,
    DUGTRIO,
    MEOWTH,
    PERSIAN,
    PSYDUCK,
    GOLDUCK,
    MANKEY,
    PRIMEAPE,
    GROWLITHE,
    ARCANINE,
    POLIWAG,
    POLIWHIRL,
    POLIWRATH,
    ABRA,
    KADABRA,
    ALAKAZAM,
    MACHOP,
    MACHOKE,
    MACHAMP,
    BELLSPROUT,
    WEEPINBELL,
    VICTREEBEL,
    TENTACOOL,
    TENTACRUEL,
    GEODUDE,
    GRAVELER,
    GOLEM,
    PONYTA,
    RAPIDASH,
    SLOWPOKE,
    SLOWBRO,
    MAGNEMITE,
    MAGNETON,
    FARFETCHD,
    DODUO,
    DODRIO,
    SEEL,
    DEWGONG,
    GRIMER,
    MUK,
    SHELLDER,
    CLOYSTER,
    GASTLY,
    HAUNTER,
    GENGAR,
    ONIX,
    DROWZEE,
    HYPNO,
    KRABBY,
    KINGLER,
    VOLTORB,
    ELECTRODE,
    EXEGGCUTE,
    EXEGGUTOR,
    CUBONE,
    MAROWAK,
    HITMONLEE,
    HITMONCHAN,
    LICKITUNG,
    KOFFING,
    WEEZING,
    RHYHORN,
    RHYDON,
    CHANSEY,
    TANGELA,
    KANGASKHAN,
    HORSEA,
    SEADRA,
    GOLDEEN,
    SEAKING,
    STARYU,
    STARMIE,
    MR_MIME,
    SCYTHER,
    JYNX,
    ELECTABUZZ,
    MAGMAR,
    PINSIR,
    TAUROS,
    MAGIKARP,
    GYARADOS,
    LAPRAS,
    DITTO,
    EEVEE,
    VAPOREON,
    JOLTEON,
    FLAREON,
    PORYGON,
    OMANYTE,
    OMASTAR,
    KABUTO,
    KABUTOPS,
    AERODACTYL,
    SNORLAX,
    ARTICUNO,
    ZAPDOS,
    MOLTRES,
    DRATINI,
    DRAGONAIR,
    DRAGONITE,
    MEWTWO,
    MEW
};

// Re-export utility functions from the utility file
export { calculateStats, getMovesForLevel } from './utils';

// Add any additional utility functions that were in the original file
export const isPokemonValid = (pokemon) => ({
    hasData: !!POKEMON_DATA[pokemon],
    availableKeys: Object.keys(POKEMON_DATA)
});