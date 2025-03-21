export class PartyDisplay {
    constructor(scene) {
        this.scene = scene;
        this.partySprites = [];
        this.partyTexts = [];
    }

    create(pokemon) {
        // Clear existing sprites and texts
        this.partySprites.forEach(sprite => sprite.destroy());
        this.partyTexts.forEach(text => text.destroy());
        this.partySprites = [];
        this.partyTexts = [];

        // Create new display for each Pokémon
        pokemon.forEach((pokemon, index) => {
            const y = 120 + (index * 70);
            
            // Add Pokémon sprite
            const sprite = this.scene.add.sprite(150, y, pokemon.key.toLowerCase());
            sprite.setScale(2);
            this.partySprites.push(sprite);

            // Add background for text
            const textBg = this.scene.add.rectangle(400, y, 450, 50, 0x000000, 0.3);
            
            // Add Pokémon name and level
            const nameText = this.scene.add.text(200, y - 15, pokemon.name, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });

            // Add Level
            const levelText = this.scene.add.text(200, y + 10, `Lv${pokemon.level}`, {
                fontSize: '16px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });

            // Add HP Bar
            const hpBarBg = this.scene.add.rectangle(400, y, 200, 10, 0x666666);
            const hpPercentage = pokemon.currentHp / pokemon.stats.hp;
            const hpBarColor = hpPercentage > 0.5 ? 0x00ff00 : hpPercentage > 0.2 ? 0xffff00 : 0xff0000;
            const hpBar = this.scene.add.rectangle(300 + (hpPercentage * 100), y, 200 * hpPercentage, 8, hpBarColor);
            hpBar.setOrigin(0, 0.5);

            // Add HP Text
            const hpText = this.scene.add.text(500, y - 5, `${pokemon.currentHp}/${pokemon.stats.hp}`, {
                fontSize: '14px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 2
            });

            // Add Status Icon if any
            if (pokemon.status) {
                const statusIcon = this.getStatusIcon(pokemon.status);
                const statusText = this.scene.add.text(550, y, statusIcon, {
                    fontSize: '20px',
                    fill: '#FFFFFF'
                });
                this.partyTexts.push(statusText);
            }

            this.partyTexts.push(nameText, levelText, hpText);
        });
    }

    updateSelection(selectedIndex) {
        // Reset all backgrounds
        this.partyTexts.forEach(text => text.setTint(0xffffff));
        
        if (this.partySprites.length > 0) {
            // Highlight selected Pokémon
            this.partySprites[selectedIndex].setScale(2.2); // Slightly enlarge selected Pokémon
            
            // Reset scale of other sprites
            this.partySprites.forEach((sprite, index) => {
                if (index !== selectedIndex) sprite.setScale(2);
            });
        }
    }

    getStatusIcon(status) {
        const statusIcons = {
            'frozen': '❄️',
            'paralyzed': '⚡',
            'poisoned': '☠️',
            'burned': '🔥',
            'asleep': '💤'
        };
        return statusIcons[status] || '';
    }

    updatePokemonText(index, pokemon) {
        const text = this.partyTexts[index];
        if (pokemon && text) {
            text.setText(
                `${pokemon.name} Lv.${pokemon.level}\n` +
                `HP: ${pokemon.currentHp}/${pokemon.stats.hp}`
            );
        }
    }
} 