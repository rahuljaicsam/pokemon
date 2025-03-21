import { createPokemonData } from './PokemonCreator';

export const initializeSamplePokemon = (gameState) => {
    // Box 1: Starter Pokémon
    gameState.addPokemon(createPokemonData('BULBASAUR', 5, {
        hp: 45,
        attack: 49,
        defense: 49,
        spAttack: 65,
        spDefense: 65,
        speed: 45
    }, ['TACKLE', 'GROWL']));

    gameState.addPokemon(createPokemonData('CHARMANDER', 5, {
        hp: 39,
        attack: 52,
        defense: 43,
        spAttack: 60,
        spDefense: 50,
        speed: 65
    }, ['SCRATCH', 'GROWL']));

    gameState.addPokemon(createPokemonData('SQUIRTLE', 5, {
        hp: 44,
        attack: 48,
        defense: 65,
        spAttack: 50,
        spDefense: 64,
        speed: 43
    }, ['TACKLE', 'TAIL_WHIP']));

    // Box 2: Electric and Normal Types
    gameState.addPokemon(createPokemonData('PIKACHU', 10, {
        hp: 35,
        attack: 55,
        defense: 40,
        spAttack: 50,
        spDefense: 50,
        speed: 90
    }, ['THUNDERSHOCK', 'GROWL', 'TAIL_WHIP', 'QUICK_ATTACK']));

    gameState.addPokemon(createPokemonData('JIGGLYPUFF', 8, {
        hp: 115,
        attack: 45,
        defense: 20,
        spAttack: 45,
        spDefense: 25,
        speed: 20
    }, ['SING', 'POUND', 'DEFENSE_CURL']));

    // Box 3: Eevee and Eeveelutions
    gameState.addPokemon(createPokemonData('EEVEE', 15, {
        hp: 55,
        attack: 55,
        defense: 50,
        spAttack: 45,
        spDefense: 65,
        speed: 55
    }, ['TACKLE', 'TAIL_WHIP', 'SAND_ATTACK', 'QUICK_ATTACK']));

    gameState.addPokemon(createPokemonData('VAPOREON', 25, {
        hp: 130,
        attack: 65,
        defense: 60,
        spAttack: 110,
        spDefense: 95,
        speed: 65
    }, ['WATER_GUN', 'QUICK_ATTACK', 'BITE', 'AURORA_BEAM']));

    gameState.addPokemon(createPokemonData('JOLTEON', 25, {
        hp: 65,
        attack: 65,
        defense: 60,
        spAttack: 110,
        spDefense: 95,
        speed: 130
    }, ['THUNDERSHOCK', 'QUICK_ATTACK', 'DOUBLE_KICK', 'THUNDER_WAVE']));

    gameState.addPokemon(createPokemonData('FLAREON', 25, {
        hp: 65,
        attack: 130,
        defense: 60,
        spAttack: 95,
        spDefense: 110,
        speed: 65
    }, ['EMBER', 'QUICK_ATTACK', 'BITE', 'FIRE_SPIN']));

    // Box 4: Fairy and Fire Types
    gameState.addPokemon(createPokemonData('CLEFAIRY', 12, {
        hp: 70,
        attack: 45,
        defense: 48,
        spAttack: 60,
        spDefense: 65,
        speed: 35
    }, ['POUND', 'GROWL', 'SING', 'DOUBLE_SLAP']));

    gameState.addPokemon(createPokemonData('VULPIX', 15, {
        hp: 38,
        attack: 41,
        defense: 40,
        spAttack: 50,
        spDefense: 65,
        speed: 65
    }, ['EMBER', 'TAIL_WHIP', 'QUICK_ATTACK', 'CONFUSE_RAY']));

    // Box 5: Legendary Pokémon
    gameState.addPokemon(createPokemonData('MEW', 50, {
        hp: 100,
        attack: 100,
        defense: 100,
        spAttack: 100,
        spDefense: 100,
        speed: 100
    }, ['PSYCHIC', 'AURA_SPHERE', 'ANCIENT_POWER', 'TRANSFORM']));

    gameState.addPokemon(createPokemonData('MEWTWO', 70, {
        hp: 106,
        attack: 110,
        defense: 90,
        spAttack: 154,
        spDefense: 90,
        speed: 130
    }, ['PSYCHIC', 'PSYSTRIKE', 'RECOVER', 'AURA_SPHERE']));

    console.log('[PokemonStorage] Sample Pokémon added to storage boxes');
}; 