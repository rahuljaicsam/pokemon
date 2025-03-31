/**
 * This file contains utility functions for displaying Pokémon training information
 */

export default class PokemonTraining {
    constructor(scene) {
        this.scene = scene;
    }
    
    createTrainingPage(pokemon, container) {
        const data = pokemon.data;
        if (!data) {
            const noDataText = this.scene.add.text(0, 0, 'No training data available', {
                fontSize: '20px',
                fill: '#FFFFFF'
            }).setOrigin(0.5);
            
            container.add(noDataText);
            return 0; // No scroll needed
        }
        
        const title = this.scene.add.text(0, -150, 'Training Information', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        container.add(title);
        
        // Create training info sections
        const elements = [];
        let yPosition = -100;
        
        // Base Experience
        const baseExpTitle = this.scene.add.text(-250, yPosition, 'Base Experience:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const baseExpValue = this.scene.add.text(50, yPosition, 
            data.baseExp ? data.baseExp.toString() : 'Unknown', {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(baseExpTitle, baseExpValue);
        yPosition += 40;
        
        // Growth Rate
        const growthRateTitle = this.scene.add.text(-250, yPosition, 'Growth Rate:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const growthRateValue = this.scene.add.text(50, yPosition, 
            data.growthRate ? this.formatGrowthRate(data.growthRate) : 'Medium', {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(growthRateTitle, growthRateValue);
        yPosition += 40;
        
        // Catch Rate
        const catchRateTitle = this.scene.add.text(-250, yPosition, 'Catch Rate:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const catchRate = data.catchRate || 45; // Default catch rate if not specified
        const catchRateValue = this.scene.add.text(50, yPosition, catchRate.toString(), {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(catchRateTitle, catchRateValue);
        yPosition += 40;
        
        // Base Friendship
        const friendshipTitle = this.scene.add.text(-250, yPosition, 'Base Friendship:', {
            fontSize: '18px',
            fill: '#FFFFFF',
            fontStyle: 'bold'
        }).setOrigin(0, 0.5);
        
        const friendship = data.baseFriendship || 70; // Default base friendship if not specified
        const friendshipValue = this.scene.add.text(50, yPosition, friendship.toString(), {
            fontSize: '18px',
            fill: '#FFFFFF'
        }).setOrigin(0, 0.5);
        
        elements.push(friendshipTitle, friendshipValue);
        yPosition += 40;
        
        // EV Yields section
        const evYieldsTitle = this.scene.add.text(0, yPosition, 'EV Yields', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5);
        
        elements.push(evYieldsTitle);
        yPosition += 40;
        
        // EV Yields
        const evYields = data.evYields || this.getDefaultEVYields(data);
        const evStats = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
        const evValues = [evYields.hp || 0, evYields.attack || 0, evYields.defense || 0, 
                         evYields.spAtk || 0, evYields.spDef || 0, evYields.speed || 0];
        
        evStats.forEach((stat, index) => {
            if (evValues[index] > 0) {
                const evStatText = this.scene.add.text(-250, yPosition, stat + ':', {
                    fontSize: '18px',
                    fill: '#FFFFFF'
                }).setOrigin(0, 0.5);
                
                const evValueText = this.scene.add.text(50, yPosition, evValues[index].toString(), {
                    fontSize: '18px',
                    fill: '#FFFFFF'
                }).setOrigin(0, 0.5);
                
                elements.push(evStatText, evValueText);
                yPosition += 30;
            }
        });
        
        // Add all elements to container
        container.add(elements);
        
        // Return the height of content for scrolling calculations
        return yPosition + 150; // Total height of the content
    }
    
    formatGrowthRate(growthRate) {
        if (!growthRate) return 'Medium';
        
        // Convert from snake_case or camelCase to Title Case with spaces
        return growthRate
            .replace(/_/g, ' ')
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    }
    
    getDefaultEVYields(data) {
        // Generate default EV yields based on the Pokémon's highest stats
        const stats = data.baseStats || {};
        const evYields = { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 };
        
        // Find the highest stat and assign 1-3 EVs to it
        let highestStat = 'hp';
        let highestValue = stats.hp || 0;
        
        Object.entries(stats).forEach(([stat, value]) => {
            if (value > highestValue) {
                highestStat = stat;
                highestValue = value;
            }
        });
        
        // Assign EVs to the highest stat
        evYields[highestStat] = Math.min(3, Math.max(1, Math.floor(highestValue / 50)));
        
        return evYields;
    }
}