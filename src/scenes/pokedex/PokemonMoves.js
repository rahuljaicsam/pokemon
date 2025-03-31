/**
 * This file contains utility functions for displaying Pokémon moves
 */

export default class PokemonMoves {
    constructor(scene) {
        this.scene = scene;
    }
    
    createMovesPage(pokemon, container) {
        const moves = pokemon.data.moves;
        if (!moves) {
            const noMovesText = this.scene.add.text(0, 0, 'No move data available', {
                fontSize: '20px',
                fill: '#FFFFFF'
            }).setOrigin(0.5);
            
            container.add(noMovesText);
            return 0; // No scroll needed
        }
        
        const title = this.scene.add.text(0, -150, 'Learnable Moves', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        container.add(title);
        
        // Create table headers
        const headers = ['Level', 'Move', 'Type', 'Power', 'Acc.'];
        const headerX = -250;
        const headerY = -100;
        const columnWidth = 120;
        
        const headerTexts = [];
        
        headers.forEach((header, index) => {
            const headerText = this.scene.add.text(headerX + (index * columnWidth), headerY, header, {
                fontSize: '18px',
                fill: '#FFFFFF',
                fontStyle: 'bold'
            }).setOrigin(0, 0.5);
            
            headerTexts.push(headerText);
        });
        
        container.add(headerTexts);
        
        // Create move rows
        let rowY = headerY + 30;
        const moveElements = [];
        
        // Sort moves by level
        const sortedLevels = Object.keys(moves).sort((a, b) => parseInt(a) - parseInt(b));
        
        sortedLevels.forEach(level => {
            moves[level].forEach(move => {
                // Level
                const levelText = this.scene.add.text(headerX, rowY, level, {
                    fontSize: '16px',
                    fill: '#FFFFFF'
                }).setOrigin(0, 0.5);
                
                // Move name
                const moveText = this.scene.add.text(headerX + columnWidth, rowY, move.name, {
                    fontSize: '16px',
                    fill: '#FFFFFF'
                }).setOrigin(0, 0.5);
                
                // Move type
                const typeText = this.scene.add.text(headerX + (2 * columnWidth), rowY, move.type, {
                    fontSize: '16px',
                    fill: this.getTypeColor(move.type)
                }).setOrigin(0, 0.5);
                
                // Move power
                const powerText = this.scene.add.text(headerX + (3 * columnWidth), rowY, 
                    move.power ? move.power.toString() : '—', {
                    fontSize: '16px',
                    fill: '#FFFFFF'
                }).setOrigin(0, 0.5);
                
                // Move accuracy
                const accText = this.scene.add.text(headerX + (4 * columnWidth), rowY, 
                    move.accuracy ? `${move.accuracy}%` : '—', {
                    fontSize: '16px',
                    fill: '#FFFFFF'
                }).setOrigin(0, 0.5);
                
                moveElements.push(levelText, moveText, typeText, powerText, accText);
                
                rowY += 25; // Move to next row
            });
        });
        
        container.add(moveElements);
        
        // Return the height of content for scrolling calculations
        return Math.max(0, rowY - headerY); // Height of moves section
    }
    
    getTypeColor(type) {
        const typeColors = {
            'Normal': '#A8A878',
            'Fire': '#F08030',
            'Water': '#6890F0',
            'Electric': '#F8D030',
            'Grass': '#78C850',
            'Ice': '#98D8D8',
            'Fighting': '#C03028',
            'Poison': '#A040A0',
            'Ground': '#E0C068',
            'Flying': '#A890F0',
            'Psychic': '#F85888',
            'Bug': '#A8B820',
            'Rock': '#B8A038',
            'Ghost': '#705898',
            'Dragon': '#7038F8',
            'Dark': '#705848',
            'Steel': '#B8B8D0',
            'Fairy': '#EE99AC'
        };
        
        return typeColors[type] || '#FFFFFF';
    }
}