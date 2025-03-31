// player/index.js - Main player character controller that coordinates all player modules
import { gameState } from '../../../config/game-state';
import CharacterCreator from './CharacterCreator';
import MovementController from './MovementController';
import AnimationController from './AnimationController';
import DirectionController from './DirectionController';

export default class PlayerCharacter {
    constructor(scene) {
        this.scene = scene;
        this.direction = 'down'; // Default direction
        this.isMoving = false;
        this.animationSpeed = 200; // Animation speed in ms
        this.lastDirection = 'down';
        
        // Initialize sub-controllers
        this.characterCreator = new CharacterCreator(this);
        this.movementController = new MovementController(this);
        this.animationController = new AnimationController(this);
        this.directionController = new DirectionController(this);
    }

    createPlayer() {
        console.log('[WorldScene] Creating stylized player character');
        const data = this.scene.scene.settings.data;
        const position = data && data.fromPokemonCenter
            ? { x: this.scene.pokemonCenterEntrance.x, y: this.scene.pokemonCenterEntrance.y + 32 }
            : (gameState.playerPosition || { x: 400, y: 300 });

        // Create a container for all player parts
        this.scene.player = this.scene.add.container(position.x, position.y);
        this.scene.player.setDepth(2);
        
        // Create character parts using the CharacterCreator
        this.characterCreator.createCharacterParts();
        
        // Set up camera to follow player
        this.scene.cameras.main.setBounds(0, 0, 800, 600);
        this.scene.cameras.main.startFollow(this.scene.player, true, 0.1, 0.1);

        // Initialize controls
        console.log('[WorldScene] Setting up controls');
        this.scene.cursors = this.scene.input.keyboard.createCursorKeys();
        console.log('[WorldScene] Cursors initialized:', this.scene.cursors);
    }

    handleMovement() {
        // Delegate movement handling to the MovementController
        this.movementController.handleMovement();
    }
}