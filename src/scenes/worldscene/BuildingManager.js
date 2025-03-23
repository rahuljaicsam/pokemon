// BuildingManager.js - Handles building entrances and interactions
import { gameState } from '../../config/game-state';

export default class BuildingManager {
    constructor(scene) {
        this.scene = scene;
    }

    checkBuildingEntrances() {
        const playerBounds = new Phaser.Geom.Rectangle(
            this.scene.player.x - 16, this.scene.player.y - 16, 32, 32
        );

        // Check for Pokémon Center entrance manually
        const centerEntranceBounds = new Phaser.Geom.Rectangle(
            this.scene.pokemonCenterEntrance.x - 16, 
            this.scene.pokemonCenterEntrance.y - 4, 
            32, 8
        );
        if (Phaser.Geom.Rectangle.Overlaps(playerBounds, centerEntranceBounds) && 
            this.scene.cursors.up.isDown) {
            this.enterPokemonCenter();
        }

        // Check for Poké Shop entrance manually
        const shopEntranceBounds = new Phaser.Geom.Rectangle(
            this.scene.pokeShopEntrance.x - 16, 
            this.scene.pokeShopEntrance.y - 4, 
            32, 8
        );
        if (Phaser.Geom.Rectangle.Overlaps(playerBounds, shopEntranceBounds) && 
            this.scene.cursors.up.isDown) {
            this.enterPokeShop();
        }
    }
    
    enterPokemonCenter() {
        console.log('[WorldScene] Entering Pokémon Center');
        gameState.playerPosition = {
            x: this.scene.pokemonCenterEntrance.x,
            y: this.scene.pokemonCenterEntrance.y + 32
        };
        gameState.saveGame();
        this.scene.scene.start('PokemonCenter');
    }

    enterPokeShop() {
        console.log('[WorldScene] Entering Poké Shop');
        gameState.playerPosition = {
            x: this.scene.pokeShopEntrance.x,
            y: this.scene.pokeShopEntrance.y + 32
        };
        gameState.saveGame();
        this.scene.scene.start('PokeShop');
    }
}