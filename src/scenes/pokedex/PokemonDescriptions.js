/**
 * This file contains descriptions for Pokémon in the Pokédex
 */

export default {
    // Kanto starters
    BULBASAUR: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
    IVYSAUR: "When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower's coming bloom.",
    VENUSAUR: "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
    
    CHARMANDER: "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
    CHARMELEON: "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.",
    CHARIZARD: "It is said that Charizard's fire burns hotter if it has experienced harsh battles.",
    
    SQUIRTLE: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    WARTORTLE: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    BLASTOISE: "The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.",
    
    // Other Kanto Pokémon
    CATERPIE: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    METAPOD: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    BUTTERFREE: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    
    WEEDLE: "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
    KAKUNA: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself.",
    BEEDRILL: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    
    PIDGEY: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    PIDGEOTTO: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
    PIDGEOT: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    
    RATTATA: "Will chew on anything with its fangs. If you see one, it is certain that 40 more live in the area.",
    RATICATE: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
    
    // Default description for Pokémon without specific entries
    getDescription(pokemonKey) {
        return this[pokemonKey] || `A mysterious Pokémon that is yet to be fully documented in the Pokédex.`;
    }
};