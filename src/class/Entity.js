import { ctx, canvasH } from '../game.js';

export default class Entity {
  move() {
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
