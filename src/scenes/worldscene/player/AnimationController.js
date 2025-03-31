// AnimationController.js - Handles the character's walking animations

export default class AnimationController {
    constructor(playerCharacter) {
        this.playerCharacter = playerCharacter;
        this.scene = playerCharacter.scene;
        this.animationTimers = [];
    }

    animateWalking() {
        if (!this.playerCharacter.isMoving) return;
        
        // Clear any existing animation timers
        this.stopAnimation();
        
        // Get references to character parts
        const leftLeg = this.playerCharacter.characterCreator.leftLeg;
        const rightLeg = this.playerCharacter.characterCreator.rightLeg;
        const leftArm = this.playerCharacter.characterCreator.leftArm;
        const rightArm = this.playerCharacter.characterCreator.rightArm;
        
        // Create walking animation by moving legs and arms
        const walkCycle = () => {
            // Animate legs
            this.scene.tweens.add({
                targets: leftLeg,
                y: leftLeg.y === 16 ? 14 : 16,
                duration: this.playerCharacter.animationSpeed / 2,
                ease: 'Power1'
            });
            
            this.scene.tweens.add({
                targets: rightLeg,
                y: rightLeg.y === 16 ? 18 : 16,
                duration: this.playerCharacter.animationSpeed / 2,
                ease: 'Power1'
            });
            
            // Animate arms
            this.scene.tweens.add({
                targets: leftArm,
                angle: leftArm.angle === 0 ? 15 : 0,
                duration: this.playerCharacter.animationSpeed / 2,
                ease: 'Power1'
            });
            
            this.scene.tweens.add({
                targets: rightArm,
                angle: rightArm.angle === 0 ? -15 : 0,
                duration: this.playerCharacter.animationSpeed / 2,
                ease: 'Power1'
            });
            
            // Subtle body bounce
            this.scene.tweens.add({
                targets: this.scene.player,
                y: this.scene.player.y + 1,
                yoyo: true,
                duration: this.playerCharacter.animationSpeed / 2,
                ease: 'Power1'
            });
        };
        
        // Start walk cycle
        walkCycle();
        
        // Set up timer to continue animation
        const timer = this.scene.time.addEvent({
            delay: this.playerCharacter.animationSpeed / 2,
            callback: walkCycle,
            loop: true
        });
        
        this.animationTimers.push(timer);
    }
    
    stopAnimation() {
        // Stop all animation timers
        this.animationTimers.forEach(timer => {
            if (timer) timer.remove();
        });
        this.animationTimers = [];
        
        // Reset leg and arm positions
        const leftLeg = this.playerCharacter.characterCreator.leftLeg;
        const rightLeg = this.playerCharacter.characterCreator.rightLeg;
        const leftArm = this.playerCharacter.characterCreator.leftArm;
        const rightArm = this.playerCharacter.characterCreator.rightArm;
        
        if (leftLeg && rightLeg) {
            leftLeg.y = 16;
            rightLeg.y = 16;
            leftArm.angle = 0;
            rightArm.angle = 0;
        }
    }
}