import { ctx, canvasH, platforms } from '../game.js';
import { rectanglesHorizontalCollision, rectanglesVerticalCollision } from '../functions/collision.js';

export default class Entity {
  move() {
    platforms.forEach((platform) => {
      if (rectanglesHorizontalCollision(this, platform)) {
        this.velocity.x = 0;
      }

      if (rectanglesVerticalCollision(this, platform)) {
        if (this.position.y + this.height < platform.position.y) {
          this.remainingJumps = 2;
        }
        this.velocity.y = 0;
      }
    });

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  gravity() {
    const y = this.position.y + this.height;
    const gravityForce = 0.008;

    if (y < canvasH) this.velocity.y += gravityForce * this.weight;

    if (y + this.velocity.y > canvasH) {
      this.velocity.y = 0;
      this.position.y = canvasH - this.height;
      this.remainingJumps += 2;
      this.readyToJump = true;
    }
  }

  draw() {
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }
}
