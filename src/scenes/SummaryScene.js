import { gameState } from '../config/game-state';

export default class SummaryScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Summary' });
        this.currentTab = 'Info';
        this.selectedMoveIndex = 0;
    }

    init(data) {
        this.pokemon = data.pokemon;
        this.returnScene = data.returnScene;
    }

    create() {
        // Add semi-transparent black background
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);

        // Create tabs
        this.createTabs();

        // Create the main content container
        this.contentContainer = this.add.container(0, 0);

        // Show initial tab content
        this.showTabContent('Info');

        // Add keyboard controls
        this.input.keyboard.on('keydown-LEFT', () => this.switchTab('Info'));
        this.input.keyboard.on('keydown-RIGHT', () => this.switchTab('Moves'));
        this.input.keyboard.on('keydown-UP', () => this.handleUpKey());
        this.input.keyboard.on('keydown-DOWN', () => this.handleDownKey());
        this.input.keyboard.on('keydown-A', () => this.handleAKey());
        this.input.keyboard.on('keydown-B', () => this.handleBKey());
    }

    createTabs() {
        const tabY = 50;
        this.infoTab = this.add.text(300, tabY, 'INFO', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        this.movesTab = this.add.text(500, tabY, 'MOVES', {
            fontSize: '24px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);

        this.updateTabHighlight();
    }

    showTabContent(tab) {
        // Clear previous content
        this.contentContainer.removeAll(true);

        if (tab === 'Info') {
            this.showInfoContent();
        } else {
            this.showMovesContent();
        }
    }

    showInfoContent() {
        // Add Pokemon sprite
        const sprite = this.add.sprite(150, 150, this.pokemon.key.toLowerCase());
        sprite.setScale(3);
        this.contentContainer.add(sprite);

        // Add Pokemon name and level
        const nameText = this.add.text(300, 100, `${this.pokemon.name} Lv.${this.pokemon.level}`, {
            fontSize: '28px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 4
        });
        this.contentContainer.add(nameText);

        // Add gender symbol if applicable
        if (this.pokemon.gender) {
            const genderSymbol = this.pokemon.gender === 'male' ? '♂' : '♀';
            const genderText = this.add.text(nameText.x + nameText.width + 10, 100, genderSymbol, {
                fontSize: '28px',
                fill: this.pokemon.gender === 'male' ? '#3498db' : '#e74c3c',
                stroke: '#000000',
                strokeThickness: 4
            });
            this.contentContainer.add(genderText);
        }

        // Add HP bar
        const hpBarBg = this.add.rectangle(300, 150, 200, 20, 0x666666);
        const hpPercentage = this.pokemon.currentHp / this.pokemon.stats.hp;
        const hpBarColor = hpPercentage > 0.5 ? 0x00ff00 : hpPercentage > 0.2 ? 0xffff00 : 0xff0000;
        const hpBar = this.add.rectangle(200, 150, 200 * hpPercentage, 16, hpBarColor);
        hpBar.setOrigin(0, 0.5);
        this.contentContainer.add(hpBarBg);
        this.contentContainer.add(hpBar);

        // Add HP text
        const hpText = this.add.text(520, 142, `${this.pokemon.currentHp}/${this.pokemon.stats.hp}`, {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        });
        this.contentContainer.add(hpText);

        // Add type
        const typeText = this.add.text(300, 200, `Type: ${this.pokemon.types.join('/')}`, {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        });
        this.contentContainer.add(typeText);

        // Add nature
        const natureText = this.add.text(300, 240, `Nature: ${this.pokemon.nature || 'Hardy'}`, {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        });
        this.contentContainer.add(natureText);

        // Add ability
        const abilityText = this.add.text(300, 280, `Ability: ${this.pokemon.ability || 'None'}`, {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        });
        this.contentContainer.add(abilityText);

        // Add held item
        const itemText = this.add.text(300, 320, `Held Item: ${this.pokemon.heldItem || 'None'}`, {
            fontSize: '20px',
            fill: '#FFFFFF',
            stroke: '#000000',
            strokeThickness: 3
        });
        this.contentContainer.add(itemText);

        // Add stats
        const stats = ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'];
        stats.forEach((stat, index) => {
            const statText = this.add.text(300, 360 + (index * 30), 
                `${stat}: ${this.pokemon.stats[stat.toLowerCase().replace('.', '').replace(' ', '')] || 0}`, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 3
            });
            this.contentContainer.add(statText);
        });
    }

    showMovesContent() {
        // Add moves list
        this.pokemon.moves.forEach((move, index) => {
            const moveContainer = this.add.container(0, 100 + (index * 80));

            // Add move background
            const moveBg = this.add.rectangle(400, 0, 600, 70, 
                index === this.selectedMoveIndex ? 0x3498db : 0x2c3e50, 0.8);
            moveContainer.add(moveBg);

            // Add move name
            const moveText = this.add.text(150, -15, move.name, {
                fontSize: '24px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 4
            });
            moveContainer.add(moveText);

            // Add move type
            const typeText = this.add.text(150, 15, move.type, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 3
            });
            moveContainer.add(typeText);

            // Add PP
            const ppText = this.add.text(500, -15, 
                `PP ${move.currentPP}/${move.maxPP}`, {
                fontSize: '20px',
                fill: '#FFFFFF',
                stroke: '#000000',
                strokeThickness: 3
            });
            moveContainer.add(ppText);

            // Add power and accuracy
            if (move.power) {
                const powerText = this.add.text(500, 15, 
                    `Power: ${move.power} Acc: ${move.accuracy || '-'}`, {
                    fontSize: '20px',
                    fill: '#FFFFFF',
                    stroke: '#000000',
                    strokeThickness: 3
                });
                moveContainer.add(powerText);
            }

            this.contentContainer.add(moveContainer);
        });
    }

    switchTab(tab) {
        if (this.currentTab !== tab) {
            this.currentTab = tab;
            this.updateTabHighlight();
            this.showTabContent(tab);
        }
    }

    updateTabHighlight() {
        this.infoTab.setTint(this.currentTab === 'Info' ? 0xffff00 : 0xffffff);
        this.movesTab.setTint(this.currentTab === 'Moves' ? 0xffff00 : 0xffffff);
    }

    handleUpKey() {
        if (this.currentTab === 'Moves' && this.pokemon.moves.length > 0) {
            this.selectedMoveIndex = (this.selectedMoveIndex - 1 + this.pokemon.moves.length) % this.pokemon.moves.length;
            this.showTabContent('Moves');
        }
    }

    handleDownKey() {
        if (this.currentTab === 'Moves' && this.pokemon.moves.length > 0) {
            this.selectedMoveIndex = (this.selectedMoveIndex + 1) % this.pokemon.moves.length;
            this.showTabContent('Moves');
        }
    }

    handleAKey() {
        if (this.currentTab === 'Moves') {
            // Show move details
            const selectedMove = this.pokemon.moves[this.selectedMoveIndex];
            if (selectedMove) {
                // TODO: Implement move details view
                console.log('Move details:', selectedMove);
            }
        }
    }

    handleBKey() {
        this.scene.stop();
        this.scene.resume(this.returnScene);
    }
}