import Entity from './Entity.js';
import { inputs, canvasH } from '../game.js';

export default class Player extends Entity {
  constructor(x, y, width, height, weight) {
    super();

    this.position = {
      x,
      y,
    };

    this.velocity = {
      x: 0,
      y: 0,
      max: 10,
    };

    this.width = width;
    this.height = height;
    this.weight = weight;
    this.remainingJumps = 2;
    this.readyToJump = true;
  }

  jump() {
    if (!this.remainingJumps || !this.readyToJump) return;

    this.remainingJumps -= 1;
    this.readyToJump = false;
    this.velocity.y = -11;
  }

  movement() {
    const vel = this.velocity.x;
    const { max } = this.velocity;
    const { right, left, jump } = inputs;

    if (right && !left) this.velocity.x += 0.7;
    else if (left && !right) this.velocity.x -= 0.7;
    else if (Math.abs(vel) > 0.2) this.velocity.x -= vel > 0 ? 0.4 : -0.4;
    else this.velocity.x = 0;

    if (Math.abs(vel) > max) this.velocity.x = vel > 0 ? max : -max;

    if (jump) this.jump();
    else if (this.position.y + this.height < canvasH) {
      this.velocity.y += 0.3;
      this.readyToJump = true;
    }
  }

  update() {
    this.draw();
    this.movement();
    this.move();
    this.gravity();
  }
}
