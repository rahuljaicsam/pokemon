/**
 * This file contains utility functions for displaying Pokémon breeding information
 */

export default class PokemonBreeding {
    constructor(scene) {
        this.scene = scene;
    }
    
    createBreedingPage(pokemon, container) {
        const data = pokemon.data;
        if (!data) {
            const noDataText = this.scene.add.text(0, 0, 'No breeding data available', {
                fontSize: '20px',
                fill: '#FFFFFF'
            }).setOrigin(0.5);
            
            container.add(noDataText);
            return 0; // No scroll needed
        }
        
        const title = this.scene.add.text(0, -150, 'Breeding Information', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        container.add(title);
        
        // Create breeding info sections
        const elements = [];
        let yPosition = -100;
        
        // Egg Groups
        const eggGroupsTitle = this.scene.add.text(-250, yPosition, 'Egg Groups:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const eggGroups = data.eggGroups || ['Field'];
        const eggGroupsValue = this.scene.add.text(50, yPosition, 
            Array.isArray(eggGroups) ? eggGroups.join(', ') : eggGroups, {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(eggGroupsTitle, eggGroupsValue);
        yPosition += 40;
        
        // Gender Ratio
        const genderRatioTitle = this.scene.add.text(-250, yPosition, 'Gender Ratio:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        let genderRatioText = 'Unknown';
        if (data.genderRatio) {
            if (data.genderRatio === 'genderless') {
                genderRatioText = 'Genderless';
            } else if (typeof data.genderRatio === 'object') {
                const malePercent = data.genderRatio.male || 0;
                const femalePercent = data.genderRatio.female || 0;
                genderRatioText = `${malePercent}% Male, ${femalePercent}% Female`;
            }
        } else {
            // Default gender ratio (most Pokémon)
            genderRatioText = '50% Male, 50% Female';
        }
        
        const genderRatioValue = this.scene.add.text(50, yPosition, genderRatioText, {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(genderRatioTitle, genderRatioValue);
        yPosition += 40;
        
        // Egg Cycles
        const eggCyclesTitle = this.scene.add.text(-250, yPosition, 'Egg Cycles:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const eggCycles = data.eggCycles || 20; // Default egg cycles if not specified
        const eggCyclesValue = this.scene.add.text(50, yPosition, eggCycles.toString(), {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(eggCyclesTitle, eggCyclesValue);
        yPosition += 40;
        
        // Egg Steps
        const eggStepsTitle = this.scene.add.text(-250, yPosition, 'Egg Steps:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const eggSteps = (data.eggCycles || 20) * 255; // Each cycle is 255 steps
        const eggStepsValue = this.scene.add.text(50, yPosition, eggSteps.toString(), {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(eggStepsTitle, eggStepsValue);
        yPosition += 40;
        
        // Baby Pokémon
        if (data.babyPokemon) {
            const babyTitle = this.scene.add.text(-250, yPosition, 'Baby Form:', {
                fontSize: '18px',
                fill: '#FFFFFF',
                fontStyle: 'bold'
            }).setOrigin(0, 0.5);
            
            const babyValue = this.scene.add.text(50, yPosition, data.babyPokemon, {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            elements.push(babyTitle, babyValue);
            yPosition += 40;
        }
        
        // Evolution Chain
        const evoChainTitle = this.scene.add.text(0, yPosition, 'Evolution Chain', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5);
        
        elements.push(evoChainTitle);
        yPosition += 40;
        
        // Evolution information
        if (data.evolvesFrom) {
            const evolvesFromTitle = this.scene.add.text(-250, yPosition, 'Evolves From:', {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            const evolvesFromValue = this.scene.add.text(50, yPosition, data.evolvesFrom, {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            elements.push(evolvesFromTitle, evolvesFromValue);
            yPosition += 30;
        }
        
        if (data.evolvesTo) {
            const evolvesToTitle = this.scene.add.text(-250, yPosition, 'Evolves To:', {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            const evolvesToValue = this.scene.add.text(50, yPosition, 
                Array.isArray(data.evolvesTo) ? data.evolvesTo.join(', ') : data.evolvesTo, {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            elements.push(evolvesToTitle, evolvesToValue);
            yPosition += 30;
        }
        
        if (data.evolutionMethod) {
            const evoMethodTitle = this.scene.add.text(-250, yPosition, 'Evolution Method:', {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            const evoMethodValue = this.scene.add.text(50, yPosition, data.evolutionMethod, {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            elements.push(evoMethodTitle, evoMethodValue);
            yPosition += 30;
        }
        
        // Add all elements to container
        container.add(elements);
        
        // Return the height of content for scrolling calculations
        return yPosition + 150; // Total height of the content
    }
}