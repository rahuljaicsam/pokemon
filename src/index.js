import 'phaser';
import config from './config/game-config';
import BootScene from './scenes/BootScene';
import TitleScene from './scenes/TitleScene';
import WorldScene from './scenes/WorldScene';
import BattleScene from './scenes/BattleScene';
import MenuScene from './scenes/MenuScene';
import InGameMenuScene from './scenes/InGameMenuScene';
import PokedexScene from './scenes/PokedexScene';
import PartyScene from './scenes/PartyScene';
import PokemonCenterScene from './scenes/PokemonCenterScene';
import SummaryScene from './scenes/SummaryScene';
import BagScene from './scenes/BagScene';
import PokeShopScene from './scenes/PokeShopScene';
import ShopMenuScene from './scenes/ShopMenuScene';
import TrainerCardScene from './scenes/TrainerCardScene';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        
        // Register scenes
        this.scene.add('Boot', BootScene);
        this.scene.add('Title', TitleScene);
        this.scene.add('World', WorldScene);
        this.scene.add('Battle', BattleScene);
        this.scene.add('Menu', MenuScene);
        this.scene.add('InGameMenu', InGameMenuScene);
        this.scene.add('Pokedex', PokedexScene);
        this.scene.add('Party', PartyScene);
        this.scene.add('PokemonCenter', PokemonCenterScene);
        this.scene.add('Summary', SummaryScene);
        this.scene.add('Bag', BagScene);
        this.scene.add('PokeShop', PokeShopScene);
        this.scene.add('ShopMenu', ShopMenuScene);
        this.scene.add('TrainerCard', TrainerCardScene);
        
        // Start with the boot scene
        this.scene.start('Boot');
    }
}

// Wait for the DOM to be ready
window.onload = () => {
    new Game();
};