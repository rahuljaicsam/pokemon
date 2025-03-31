export default class PokedexUI {
    constructor(scene) {
        this.scene = scene;
        this.elements = {};
    }

    createPokedexInterface() {
        // Main Pokedex background
        this.elements.mainBackground = this.scene.add.rectangle(400, 300, 800, 600, 0xDC1B1B); // Classic red color
        this.elements.innerBackground = this.scene.add.rectangle(400, 300, 780, 580, 0x000000); // Inner black background
        
        // Display area for Pokemon sprite
        this.elements.spriteBackground = this.scene.add.rectangle(400, 200, 300, 300, 0xFFFFFF);
        
        // Create sprite container
        this.elements.spriteContainer = this.scene.add.container(400, 200);
        
        // Pokemon info display areas
        this.elements.nameText = this.scene.add.text(400, 380, '', {
            fontSize: '32px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        this.elements.numberText = this.scene.add.text(400, 420, '', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
        
        this.elements.typeText = this.scene.add.text(400, 460, '', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Navigation hint
        this.elements.navigationHint = this.scene.add.text(400, 540, 'UP/DOWN: Navigate  B: Close  A: Details', {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        // Seen/Caught indicators
        this.elements.seenIcon = this.scene.add.circle(650, 380, 10, 0x888888);
        this.elements.caughtIcon = this.scene.add.circle(650, 400, 10, 0x888888);
        
        this.elements.seenText = this.scene.add.text(670, 373, 'SEEN', {
            fontSize: '20px',
            fill: '#FFFFFF'
        });
        
        this.elements.caughtText = this.scene.add.text(670, 393, 'CAUGHT', {
            fontSize: '20px',
            fill: '#FFFFFF'
        });
    }

    updateMainView(pokemon) {
        if (!pokemon || !pokemon.data || !pokemon.data.name) {
            console.error('[PokedexUI] Invalid pokemon data:', pokemon);
            return;
        }

        // Clear previous sprite
        this.elements.spriteContainer.removeAll();
        
        // Add new sprite
        const spriteKey = (pokemon.key && typeof pokemon.key === 'string') ? pokemon.key.toLowerCase() : 'missing';
        const sprite = this.scene.add.sprite(0, 0, spriteKey);
        sprite.setScale(3);
        this.elements.spriteContainer.add(sprite);
        
        // Update text information
        this.elements.nameText.setText(pokemon.data.name.toUpperCase());
        this.elements.numberText.setText(`#${String(pokemon.data.id).padStart(3, '0')}`);
        this.elements.typeText.setText(`Type: ${pokemon.data.types.join('/')}`);
        
        // Update seen/caught indicators
        this.elements.seenIcon.setFillStyle(pokemon.isSeen ? 0x00FF00 : 0x888888);
        this.elements.caughtIcon.setFillStyle(pokemon.isCaught ? 0x00FF00 : 0x888888);
    }
    
    hideMainView() {
        // Hide all main view elements
        Object.values(this.elements).forEach(element => {
            if (element.setVisible) {
                element.setVisible(false);
            }
        });
    }
    
    showMainView() {
        // Show all main view elements
        Object.values(this.elements).forEach(element => {
            if (element.setVisible) {
                element.setVisible(true);
            }
        });
    }
}