// EncounterSystem.js - Handles Pokemon encounters in grass areas
import { gameState } from '../../config/game-state';

export default class EncounterSystem {
    constructor(scene) {
        this.scene = scene;
    }

    setupRandomEncounters() {
        console.log('[WorldScene] Setting up random encounters');
        // No physics overlap; handled in update()
    }

    checkGrassOverlap() {
        // Check for grass overlap manually
        const playerBounds = new Phaser.Geom.Rectangle(
            this.scene.player.x - 16, this.scene.player.y - 16, 32, 32
        );
        let inGrass = false;
        for (const grass of this.scene.grassAreas) {
            const grassBounds = new Phaser.Geom.Rectangle(
                grass.x - 16, grass.y - 16, 32, 32
            );
            if (Phaser.Geom.Rectangle.Overlaps(playerBounds, grassBounds)) {
                inGrass = true;
                break;
            }
        }
        this.checkRandomEncounter(inGrass);
    }

    checkRandomEncounter(inGrass) {
        console.log('[WorldScene] Encounter check:', {
            inGrass,
            hasTimer: !!this.scene.encounterTimer,
            timerActive: this.scene.encounterTimer?.active || false,
            playerX: Math.round(this.scene.player.x),
            playerY: Math.round(this.scene.player.y)
        });

        if (!inGrass && this.scene.encounterTimer) {
            console.log('[WorldScene] Leaving grass, clearing encounter timer');
            this.scene.encounterTimer.destroy();
            this.scene.encounterTimer = null;
            this.scene.isInGrass = false;
        } else if (inGrass && !this.scene.encounterTimer) {
            console.log('[WorldScene] Entering grass, starting encounter timer');
            this.scene.isInGrass = true;
            this.scene.encounterTimer = this.scene.time.addEvent({
                delay: 500, // Check every half second
                callback: () => {
                    if (Math.random() < 0.3) { // 30% chance per check
                        this.startBattle();
                    }
                },
                loop: true
            });
        }
    }

    startBattle() {
        if (this.scene.encounterTimer) {
            console.log('[WorldScene] Starting battle, clearing encounter timer');
            this.scene.encounterTimer.destroy();
            this.scene.encounterTimer = null;
            this.scene.isInGrass = false;
        }

        console.log('[WorldScene] Initiating battle transition');
        gameState.playerPosition = { x: this.scene.player.x, y: this.scene.player.y };
        gameState.saveGame();

        const wildPokemon = this.scene.pokemonGenerator.generateWildPokemon();
        if (!wildPokemon || !wildPokemon.moves || !wildPokemon.stats) {
            console.error('[WorldScene] Invalid wild Pokémon data:', wildPokemon);
            return;
        }

        console.log('[WorldScene] Generated wild Pokémon:', wildPokemon);
        gameState.pokedex.seen.add(wildPokemon.key);

        if (!gameState.pokemon || gameState.pokemon.length === 0) {
            console.error('[WorldScene] No player Pokémon available');
            return;
        }

        console.log('[WorldScene] Starting battle with:', {
            playerPokemon: gameState.pokemon[0],
            wildPokemon
        });

        this.scene.time.delayedCall(100, () => {
            this.scene.scene.start('Battle', {
                playerPokemon: gameState.pokemon[0],
                wildPokemon,
                isWildBattle: true
            });
        });
    }
}