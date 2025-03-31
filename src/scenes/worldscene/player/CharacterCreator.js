// CharacterCreator.js - Creates and manages the player character's visual appearance
import { GBA_PALETTE } from '../../../assets/tileset';

export default class CharacterCreator {
    constructor(playerCharacter) {
        this.playerCharacter = playerCharacter;
        this.scene = playerCharacter.scene;
    }

    createCharacterParts() {
        // Create character body parts using geometric shapes
        
        // Create shadow (ellipse beneath the character)
        const shadow = this.scene.add.ellipse(0, 12, 20, 10, 0x000000, 0.3);
        
        // Create body (main torso)
        const body = this.scene.add.rectangle(0, 0, 20, 24, GBA_PALETTE.TEXT_BLACK);
        body.setStrokeStyle(1, GBA_PALETTE.TEXT_WHITE);
        
        // Create head
        const head = this.scene.add.circle(0, -14, 10, GBA_PALETTE.TEXT_WHITE);
        head.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        
        // Create hat (Pokemon trainer style)
        const hat = this.scene.add.rectangle(0, -20, 20, 8, GBA_PALETTE.ROOF_RED);
        hat.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        
        // Create hat brim
        const hatBrim = this.scene.add.rectangle(5, -16, 12, 4, GBA_PALETTE.ROOF_RED);
        hatBrim.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        
        // Create face
        const face = this.scene.add.rectangle(0, -14, 12, 8, GBA_PALETTE.TEXT_WHITE);
        
        // Create eyes
        const leftEye = this.scene.add.circle(-3, -14, 1, GBA_PALETTE.TEXT_BLACK);
        const rightEye = this.scene.add.circle(3, -14, 1, GBA_PALETTE.TEXT_BLACK);
        
        // Create mouth (new detail)
        const mouth = this.scene.add.rectangle(0, -11, 4, 1, GBA_PALETTE.TEXT_BLACK);
        
        // Create arms
        this.leftArm = this.scene.add.rectangle(-12, -2, 6, 16, GBA_PALETTE.TEXT_WHITE);
        this.leftArm.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        this.rightArm = this.scene.add.rectangle(12, -2, 6, 16, GBA_PALETTE.TEXT_WHITE);
        this.rightArm.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        
        // Create legs
        this.leftLeg = this.scene.add.rectangle(-6, 16, 8, 16, GBA_PALETTE.PATH_BROWN);
        this.leftLeg.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        this.rightLeg = this.scene.add.rectangle(6, 16, 8, 16, GBA_PALETTE.PATH_BROWN);
        this.rightLeg.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        
        // Create shoes (new detail)
        const leftShoe = this.scene.add.rectangle(-6, 26, 8, 4, GBA_PALETTE.TEXT_BLACK);
        leftShoe.setStrokeStyle(1, GBA_PALETTE.TEXT_WHITE);
        const rightShoe = this.scene.add.rectangle(6, 26, 8, 4, GBA_PALETTE.TEXT_BLACK);
        rightShoe.setStrokeStyle(1, GBA_PALETTE.TEXT_WHITE);
        
        // Create backpack (new detail)
        const backpack = this.scene.add.rectangle(0, 4, 14, 18, GBA_PALETTE.GRASS_GREEN);
        backpack.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        backpack.setDepth(-1); // Place behind the body
        
        // Create belt (new detail)
        const belt = this.scene.add.rectangle(0, 8, 20, 2, GBA_PALETTE.ROOF_RED);
        belt.setStrokeStyle(1, GBA_PALETTE.TEXT_BLACK);
        
        // Add all parts to the container
        this.scene.player.add([
            shadow, 
            backpack,
            this.leftLeg, 
            this.rightLeg, 
            leftShoe,
            rightShoe,
            body, 
            belt,
            this.leftArm, 
            this.rightArm, 
            head, 
            hat, 
            hatBrim, 
            face, 
            leftEye, 
            rightEye,
            mouth
        ]);
        
        // Store references to animated parts
        this.playerCharacter.bodyParts = {
            body,
            head,
            hat,
            hatBrim,
            face,
            leftEye,
            rightEye,
            mouth,
            shadow,
            backpack,
            belt
        };
        
        // Store references to limbs
        this.playerCharacter.leftArm = this.leftArm;
        this.playerCharacter.rightArm = this.rightArm;
        this.playerCharacter.leftLeg = this.leftLeg;
        this.playerCharacter.rightLeg = this.rightLeg;
    }
}