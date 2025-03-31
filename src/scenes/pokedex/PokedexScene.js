import { POKEMON_DATA } from '../../config/pokemon-data';
import { gameState } from '../../config/game-state';
import PokedexUI from './PokedexUI';
import PokedexNavigation from './PokedexNavigation';
import PokedexDetailView from './PokedexDetailView';

export default class PokedexScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Pokedex' });
        this.currentIndex = 0;
        this.pokemonList = Object.keys(POKEMON_DATA).sort((a, b) => POKEMON_DATA[a].id - POKEMON_DATA[b].id);
        this.showingDetailView = false;
    }

    create() {
        // Create the UI components
        this.ui = new PokedexUI(this);
        this.ui.createPokedexInterface();
        
        // Set up navigation
        this.navigation = new PokedexNavigation(this);
        this.navigation.setupControls();
        
        // Create detail view (initially hidden)
        this.detailView = new PokedexDetailView(this);
        
        // Initial display
        this.updateDisplay();
    }

    updateDisplay() {
        const currentPokemon = this.getCurrentPokemon();
        console.log('[PokedexScene] Updating display with pokemon:', currentPokemon);
        
        if (!currentPokemon || !currentPokemon.data) {
            console.error('[PokedexScene] Invalid pokemon data:', currentPokemon);
            return;
        }
        
        if (this.showingDetailView) {
            this.detailView.updateDetailView(currentPokemon);
        } else {
            this.ui.updateMainView(currentPokemon);
        }
    }
    
    getCurrentPokemon() {
        console.log('[PokedexScene] Getting pokemon at index:', this.currentIndex);
        console.log('[PokedexScene] Available pokemon list:', this.pokemonList);
        
        if (!Array.isArray(this.pokemonList) || this.pokemonList.length === 0) {
            console.error('[PokedexScene] Pokemon list is invalid:', this.pokemonList);
            return null;
        }

        const pokemonKey = this.pokemonList[this.currentIndex];
        if (!pokemonKey) {
            console.error('[PokedexScene] Invalid pokemon key at index:', this.currentIndex);
            return null;
        }
        
        const pokemonData = POKEMON_DATA[pokemonKey];
        if (!pokemonData) {
            console.error('[PokedexScene] No data found for pokemon key:', pokemonKey);
            return null;
        }
        
        return {
            key: pokemonKey,
            data: pokemonData,
            isSeen: gameState.pokedex.seen.has(pokemonKey),
            isCaught: gameState.pokedex.caught.has(pokemonKey)
        };
    }
    
    toggleDetailView() {
        this.showingDetailView = !this.showingDetailView;
        
        if (this.showingDetailView) {
            // Hide main view elements
            this.ui.hideMainView();
            // Show detail view
            this.detailView.showDetailView(this.getCurrentPokemon());
        } else {
            // Hide detail view
            this.detailView.hideDetailView();
            // Show main view
            this.ui.showMainView();
            this.updateDisplay();
        }
    }
    
    exitPokedex() {
        // Make sure we're not in detail view when exiting
        if (this.showingDetailView) {
            this.toggleDetailView();
        }
        this.scene.stop();
        this.scene.resume('InGameMenu');
    }
}