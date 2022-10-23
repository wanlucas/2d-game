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
          this.position.y = platform.position.y - this.height;
        }
        this.velocity.y = 0;
      }
    });

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  gravity() {
    const gravityForce = 0.008;

    this.velocity.y += gravityForce * this.weight;
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
