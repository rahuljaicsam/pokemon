// DirectionController.js - Handles the character's appearance based on direction

export default class DirectionController {
    constructor(playerCharacter) {
        this.playerCharacter = playerCharacter;
        this.scene = playerCharacter.scene;
    }

    updateCharacterDirection() {
        // Update character appearance based on direction
        const bodyParts = this.playerCharacter.bodyParts;
        const leftArm = this.playerCharacter.characterCreator.leftArm;
        const rightArm = this.playerCharacter.characterCreator.rightArm;
        const leftLeg = this.playerCharacter.characterCreator.leftLeg;
        const rightLeg = this.playerCharacter.characterCreator.rightLeg;
        const backpack = bodyParts.backpack;
        
        switch (this.playerCharacter.direction) {
            case 'left':
                // Show left side of character
                // Adjust hat and brim
                bodyParts.hat.x = 0;
                bodyParts.hatBrim.x = -5;
                bodyParts.hatBrim.y = -16;
                bodyParts.hatBrim.width = 12;
                
                // Adjust eyes to show profile
                bodyParts.leftEye.x = -5;
                bodyParts.rightEye.visible = false;
                bodyParts.leftEye.visible = true;
                
                // Adjust mouth for profile view
                bodyParts.mouth.x = -3;
                bodyParts.mouth.width = 2;
                
                // Adjust arms for side view
                leftArm.x = -8;
                leftArm.width = 6;
                rightArm.visible = false;
                leftArm.visible = true;
                
                // Adjust legs for side view
                leftLeg.x = -2;
                rightLeg.visible = false;
                leftLeg.visible = true;
                
                // Adjust body for side view
                bodyParts.body.width = 16;
                
                // Adjust backpack
                backpack.visible = true;
                backpack.x = 4;
                break;
                
            case 'right':
                // Show right side of character
                // Adjust hat and brim
                bodyParts.hat.x = 0;
                bodyParts.hatBrim.x = 5;
                bodyParts.hatBrim.y = -16;
                bodyParts.hatBrim.width = 12;
                
                // Adjust eyes to show profile
                bodyParts.rightEye.x = 5;
                bodyParts.leftEye.visible = false;
                bodyParts.rightEye.visible = true;
                
                // Adjust mouth for profile view
                bodyParts.mouth.x = 3;
                bodyParts.mouth.width = 2;
                
                // Adjust arms for side view
                rightArm.x = 8;
                rightArm.width = 6;
                leftArm.visible = false;
                rightArm.visible = true;
                
                // Adjust legs for side view
                rightLeg.x = 2;
                leftLeg.visible = false;
                rightLeg.visible = true;
                
                // Adjust body for side view
                bodyParts.body.width = 16;
                
                // Adjust backpack
                backpack.visible = true;
                backpack.x = -4;
                break;
                
            case 'up':
                // Show backside of character
                // Adjust hat and brim
                bodyParts.hat.x = 0;
                bodyParts.hatBrim.x = 0;
                bodyParts.hatBrim.y = -18;
                bodyParts.hatBrim.width = 20;
                
                // Hide face details when showing back
                bodyParts.leftEye.visible = false;
                bodyParts.rightEye.visible = false;
                bodyParts.mouth.visible = false;
                
                // Show both arms from behind
                leftArm.x = -12;
                rightArm.x = 12;
                leftArm.visible = true;
                rightArm.visible = true;
                
                // Show both legs from behind
                leftLeg.x = -6;
                rightLeg.x = 6;
                leftLeg.visible = true;
                rightLeg.visible = true;
                
                // Adjust body for back view
                bodyParts.body.width = 20;
                
                // Show backpack prominently
                backpack.visible = true;
                backpack.x = 0;
                backpack.setDepth(3); // Place in front of body
                break;
                
            case 'down':
                // Reset character parts to default front view
                bodyParts.hat.x = 0;
                bodyParts.hatBrim.x = 5;
                bodyParts.hatBrim.y = -16;
                bodyParts.hatBrim.width = 12;
                
                // Show both eyes for front view
                bodyParts.leftEye.x = -3;
                bodyParts.rightEye.x = 3;
                bodyParts.leftEye.visible = true;
                bodyParts.rightEye.visible = true;
                
                // Show mouth for front view
                bodyParts.mouth.x = 0;
                bodyParts.mouth.width = 4;
                bodyParts.mouth.visible = true;
                
                // Show both arms for front view
                leftArm.x = -12;
                rightArm.x = 12;
                leftArm.visible = true;
                rightArm.visible = true;
                
                // Show both legs for front view
                leftLeg.x = -6;
                rightLeg.x = 6;
                leftLeg.visible = true;
                rightLeg.visible = true;
                
                // Adjust body for front view
                bodyParts.body.width = 20;
                
                // Hide backpack from front
                backpack.visible = true;
                backpack.x = 0;
                backpack.setDepth(-1); // Place behind body
                break;
        }
    }
}