/**
 * This file contains location information for Pokémon in the Pokédex
 */

export default {
    // Kanto starters
    BULBASAUR: "Grassy areas and gardens",
    IVYSAUR: "Grassy plains and forests",
    VENUSAUR: "Tropical forests and jungles",
    
    CHARMANDER: "Rocky mountains and volcanic areas",
    CHARMELEON: "Volcanic caves and mountains",
    CHARIZARD: "Mountains and volcanic valleys",
    
    SQUIRTLE: "Freshwater lakes and rivers",
    WARTORTLE: "Coastal areas and deep lakes",
    BLASTOISE: "Oceans and large bodies of water",
    
    // Other Kanto Pokémon
    CATERPIE: "Forests and wooded areas",
    METAPOD: "Tree trunks in forests",
    BUTTERFREE: "Flowery meadows and forests",
    
    WEEDLE: "Forests and grassy areas",
    KAKUNA: "Tree trunks and branches in forests",
    BEEDRILL: "Forests and flower gardens",
    
    PIDGEY: "Forests and grassy plains",
    PIDGEOTTO: "Forests and wooded areas",
    PIDGEOT: "Open skies and mountain ranges",
    
    RATTATA: "Grasslands and urban areas",
    RATICATE: "Riversides and urban areas",
    
    // Default location for Pokémon without specific entries
    getLocation(pokemonKey) {
        return this[pokemonKey] || "Unknown habitat";
    }
};