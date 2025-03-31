/**
 * This file contains utility functions for displaying Pokémon stats
 */

export default class PokemonStats {
    constructor(scene) {
        this.scene = scene;
    }
    
    createStatsPage(pokemon, container) {
        const stats = pokemon.data.baseStats;
        if (!stats) {
            const noStatsText = this.scene.add.text(0, 0, 'No stats data available', {
                fontSize: '20px',
                fill: '#FFFFFF'
            }).setOrigin(0.5);
            
            container.add(noStatsText);
            return 0; // No scroll needed
        }
        
        const statNames = ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'];
        const statValues = [stats.hp, stats.attack, stats.defense, stats.spAtk, stats.spDef, stats.speed];
        
        const title = this.scene.add.text(0, -150, 'Base Stats', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        const statBars = [];
        const maxStatValue = 255; // Maximum possible stat value
        
        statNames.forEach((name, index) => {
            const y = -100 + (index * 40);
            
            // Stat name
            const nameText = this.scene.add.text(-250, y, name, {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            // Stat value
            const valueText = this.scene.add.text(-150, y, statValues[index].toString(), {
                fontSize: '18px',
                fill: '#FFFFFF'
            }).setOrigin(0, 0.5);
            
            // Stat bar background
            const barBg = this.scene.add.rectangle(0, y, 300, 20, 0x444444);
            
            // Stat bar fill
            const barWidth = (statValues[index] / maxStatValue) * 300;
            const barColor = this.getStatBarColor(statValues[index]);
            const barFill = this.scene.add.rectangle(-150 + (barWidth/2), y, barWidth, 20, barColor);
            
            statBars.push(nameText, valueText, barBg, barFill);
        });
        
        // Add all elements to container
        container.add([title, ...statBars]);
        
        // Return the height of content for scrolling calculations
        return 140; // Height of stats section
    }
    
    getStatBarColor(statValue) {
        if (statValue < 50) {
            return 0xFF0000; // Red for low stats
        } else if (statValue < 80) {
            return 0xFFA500; // Orange for medium stats
        } else if (statValue < 120) {
            return 0x00FF00; // Green for good stats
        } else {
            return 0x00FFFF; // Cyan for excellent stats
        }
    }
    
    createTypeEffectivenessSection(pokemon, container, yPosition) {
        const typeEffTitle = this.scene.add.text(0, yPosition, 'Type Effectiveness', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        container.add(typeEffTitle);
        
        // Create and add type effectiveness text
        const typeEffText = this.createTypeEffectivenessText(pokemon);
        typeEffText.setPosition(0, yPosition + 40);
        container.add(typeEffText);
        
        // Return the height of the content for scrolling calculations
        return typeEffText.height + 80; // Title height + padding + text height
    }
    
    createTypeEffectivenessText(pokemon) {
        // This would be implemented with the actual type effectiveness calculation
        // For now, return a placeholder
        return this.scene.add.text(0, 0, 'Type effectiveness information would be displayed here.', {
            fontSize: '16px',
            fill: '#FFFFFF',
            align: 'center',
            wordWrap: { width: 600 }
        }).setOrigin(0.5);
    }
}