export default class PokedexNavigation {
    constructor(scene) {
        this.scene = scene;
    }

    setupControls() {
        // Navigation controls
        this.scene.input.keyboard.on('keydown-UP', () => {
            if (!this.scene.showingDetailView) {
                // Only navigate in main view
                this.scene.currentIndex = Math.max(0, this.scene.currentIndex - 1);
                this.scene.updateDisplay();
            } else {
                // In detail view, scroll up
                this.scene.detailView.scrollUp();
            }
        });
        
        this.scene.input.keyboard.on('keydown-DOWN', () => {
            if (!this.scene.showingDetailView) {
                // Only navigate in main view
                this.scene.currentIndex = Math.min(this.scene.pokemonList.length - 1, this.scene.currentIndex + 1);
                this.scene.updateDisplay();
            } else {
                // In detail view, scroll down
                this.scene.detailView.scrollDown();
            }
        });
        
        // Exit button
        this.scene.input.keyboard.on('keydown-B', () => {
            if (this.scene.showingDetailView) {
                // If in detail view, go back to main view
                this.scene.toggleDetailView();
            } else {
                // Otherwise exit the Pokedex
                this.scene.exitPokedex();
            }
        });
        
        // Detail view toggle
        this.scene.input.keyboard.on('keydown-A', () => {
            this.scene.toggleDetailView();
        });
        
        // Left/Right for page navigation in detail view
        this.scene.input.keyboard.on('keydown-LEFT', () => {
            if (this.scene.showingDetailView) {
                this.scene.detailView.previousPage();
            }
        });
        
        this.scene.input.keyboard.on('keydown-RIGHT', () => {
            if (this.scene.showingDetailView) {
                this.scene.detailView.nextPage();
            }
        });
    }
}