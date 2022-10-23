import { ctx, camera } from '../game.js';

export default class Platform {
  constructor(x, y, width, height) {
    this.position = {
      initialX: x,
      initialY: y,
      x,
      y,
    };

    this.width = width;
    this.height = height;
  }

  draw() {
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  update() {
    this.position.x = this.position.initialX + camera.x;
    this.position.y = this.position.initialY + camera.y;

    this.draw();
  }
}
