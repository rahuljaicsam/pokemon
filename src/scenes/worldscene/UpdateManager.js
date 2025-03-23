// UpdateManager.js - Handles the main update loop for the WorldScene

export default class UpdateManager {
    constructor(scene) {
        this.scene = scene;
    }

    /**
     * Main update method that coordinates all update activities
     */
    update() {
        if (!this.scene.player || !this.scene.cursors) {
            console.warn('[WorldScene] Update skipped - missing player or cursors:', {
                hasPlayer: !!this.scene.player,
                hasCursors: !!this.scene.cursors
            });
            return;
        }

        // Handle player movement and collision detection
        this.scene.playerController.handleMovement();
        
        // Check for grass overlap and random encounters
        this.scene.encounterSystem.checkGrassOverlap();
        
        // Check for building entrances
        this.scene.buildingManager.checkBuildingEntrances();
    }
}