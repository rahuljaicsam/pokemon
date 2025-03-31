import { TYPE_EFFECTIVENESS } from '../../config/pokemon-types';
import PokemonDescriptions from './PokemonDescriptions';
import PokemonLocations from './PokemonLocations';
import PokemonStats from './PokemonStats';
import PokemonMoves from './PokemonMoves';
import PokemonTraining from './PokemonTraining';
import PokemonBreeding from './PokemonBreeding';

export default class PokedexDetailView {
    constructor(scene) {
        this.scene = scene;
        this.elements = {};
        this.currentPage = 0;
        this.totalPages = 5; // Summary, Stats, Moves, Training, Breeding
        this.scrollPosition = 0;
        this.maxScrollPosition = 0;
        this.isVisible = false;
        
        // Create the detail view elements (initially hidden)
        this.createDetailViewElements();
    }
    
    createDetailViewElements() {
        // Background for detail view
        this.elements.detailBackground = this.scene.add.rectangle(400, 300, 780, 580, 0x000000)
            .setStrokeStyle(2, 0xFFFFFF);
            
        // Header area
        this.elements.headerBackground = this.scene.add.rectangle(400, 50, 780, 80, 0xDC1B1B)
            .setStrokeStyle(2, 0xFFFFFF);
            
        this.elements.pokemonName = this.scene.add.text(400, 50, '', {
            fontSize: '28px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        // Navigation tabs
        this.createNavigationTabs();
        
        // Content area
        this.elements.contentContainer = this.scene.add.container(400, 300);
        
        // Page indicators
        this.elements.pageIndicator = this.scene.add.text(400, 560, 'Page 1/5', {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);
        
        // Navigation help
        this.elements.navigationHelp = this.scene.add.text(400, 580, 'LEFT/RIGHT: Change Page  UP/DOWN: Scroll  B: Back', {
            fontSize: '16px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);
        
        // Hide all elements initially
        this.hideDetailView();
    }
    
    createNavigationTabs() {
        const tabWidth = 150;
        const tabPositions = [
            { x: 115, y: 100, text: 'Summary' },
            { x: 275, y: 100, text: 'Stats' },
            { x: 435, y: 100, text: 'Moves' },
            { x: 595, y: 100, text: 'Training' },
            { x: 755, y: 100, text: 'Breeding' }
        ];
        
        this.elements.tabs = [];
        this.elements.tabTexts = [];
        
        tabPositions.forEach((tab, index) => {
            const tabBg = this.scene.add.rectangle(tab.x, tab.y, tabWidth, 40, 0x444444)
                .setStrokeStyle(2, 0xFFFFFF);
                
            const tabText = this.scene.add.text(tab.x, tab.y, tab.text, {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0.5);
            
            this.elements.tabs.push(tabBg);
            this.elements.tabTexts.push(tabText);
        });
    }
    
    updateTabSelection() {
        this.elements.tabs.forEach((tab, index) => {
            if (index === this.currentPage) {
                tab.setFillStyle(0xDC1B1B); // Highlight selected tab
            } else {
                tab.setFillStyle(0x444444); // Normal tab color
            }
        });
        
        this.elements.pageIndicator.setText(`Page ${this.currentPage + 1}/${this.totalPages}`);
    }
    
    showDetailView(pokemon) {
        // Store current pokemon data
        this.currentPokemon = pokemon;
        
        // Show all detail view elements
        Object.values(this.elements).forEach(element => {
            if (element.setVisible) {
                element.setVisible(true);
            }
        });
        
        // Update pokemon name in header
        this.elements.pokemonName.setText(pokemon.data.name.toUpperCase());
        
        // Reset to first page and scroll position
        this.currentPage = 0;
        this.scrollPosition = 0;
        
        // Update tab selection
        this.updateTabSelection();
        
        // Load content for current page
        this.loadPageContent();
        
        this.isVisible = true;
    }
    
    hideDetailView() {
        // Hide all detail view elements
        Object.values(this.elements).forEach(element => {
            if (element.setVisible) {
                element.setVisible(false);
            }
        });
        
        this.isVisible = false;
    }
    
    updateDetailView(pokemon) {
        if (!this.isVisible) return;
        
        // Update pokemon data
        this.currentPokemon = pokemon;
        
        // Update pokemon name in header
        this.elements.pokemonName.setText(pokemon.data.name.toUpperCase());
        
        // Reload current page content
        this.loadPageContent();
    }
    
    loadPageContent() {
        // Clear previous content
        this.elements.contentContainer.removeAll();
        
        // Reset scroll position
        this.scrollPosition = 0;
        
        // Load content based on current page
        switch (this.currentPage) {
            case 0: // Summary
                this.loadSummaryPage();
                break;
            case 1: // Stats
                this.loadStatsPage();
                break;
            case 2: // Moves
                this.loadMovesPage();
                break;
            case 3: // Training
                this.loadTrainingPage();
                break;
            case 4: // Breeding
                this.loadBreedingPage();
                break;
        }
    }
    
    loadSummaryPage() {
        // Create sprite
        const sprite = this.scene.add.sprite(0, -100, this.currentPokemon.key.toLowerCase());
        sprite.setScale(3);
        
        // Create type text
        const typeText = this.scene.add.text(0, -20, `Type: ${this.currentPokemon.data.types.join('/')}`, {
            fontSize: '20px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);
        
        // Create description text
        const description = PokemonDescriptions.getDescription(this.currentPokemon.key);
        const descriptionText = this.scene.add.text(0, 40, description, {
            fontSize: '18px',
            fill: '#FFFFFF',
            wordWrap: { width: 500 }
        }).setOrigin(0.5);
        
        // Create location text
        const location = PokemonLocations.getLocation(this.currentPokemon.key);
        const locationTitle = this.scene.add.text(0, 100, 'Location:', {
            fontSize: '20px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0.5);
        
        const locationText = this.scene.add.text(0, 130, location, {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0.5);
        
        // Add all elements to container
        this.elements.contentContainer.add([sprite, typeText, descriptionText, locationTitle, locationText]);
        
        // No scrolling needed for summary page
        this.maxScrollPosition = 0;
    }
    
    loadStatsPage() {
        // Create stats page using PokemonStats utility
        const statsUtil = new PokemonStats(this.scene);
        const contentHeight = statsUtil.createStatsPage(this.currentPokemon, this.elements.contentContainer);
        
        // Add type effectiveness section
        const typeEffHeight = statsUtil.createTypeEffectivenessSection(
            this.currentPokemon, 
            this.elements.contentContainer, 
            contentHeight
        );
        
        // Set max scroll position based on content height
        this.maxScrollPosition = Math.max(0, contentHeight + typeEffHeight - 300);
    }
    
    loadMovesPage() {
        // Create moves page using PokemonMoves utility
        const movesUtil = new PokemonMoves(this.scene);
        const contentHeight = movesUtil.createMovesPage(this.currentPokemon, this.elements.contentContainer);
        
        // Set max scroll position based on content height
        this.maxScrollPosition = Math.max(0, contentHeight - 300);
    }
    
    loadTrainingPage() {
        // Create training page using PokemonTraining utility
        const trainingUtil = new PokemonTraining(this.scene);
        const contentHeight = trainingUtil.createTrainingPage(this.currentPokemon, this.elements.contentContainer);
        
        // Set max scroll position based on content height
        this.maxScrollPosition = Math.max(0, contentHeight - 300);
    }
    
    loadBreedingPage() {
        // Create breeding page using PokemonBreeding utility
        const breedingUtil = new PokemonBreeding(this.scene);
        const contentHeight = breedingUtil.createBreedingPage(this.currentPokemon, this.elements.contentContainer);
        
        // Set max scroll position based on content height
        this.maxScrollPosition = Math.max(0, contentHeight - 300);
    }
    
    // Navigation methods
    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
            this.updateTabSelection();
            this.loadPageContent();
        }
    }
    
    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updateTabSelection();
            this.loadPageContent();
        }
    }
    
    scrollUp() {
        if (this.scrollPosition > 0) {
            this.scrollPosition = Math.max(0, this.scrollPosition - 30);
            this.elements.contentContainer.y = 300 + this.scrollPosition;
        }
    }
    
    scrollDown() {
        if (this.scrollPosition < this.maxScrollPosition) {
            this.scrollPosition = Math.min(this.maxScrollPosition, this.scrollPosition + 30);
            this.elements.contentContainer.y = 300 - this.scrollPosition;
        }
    }
}