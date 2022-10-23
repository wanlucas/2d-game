import maps from './maps/maps.js';
import Player from './class/Player.js';
import Platform from './class/Platform.js';

import {
  ctx,
  canvasW,
  canvasH,
  inputs,
  platforms,
  config,
  players,
  camera,
} from './game.js';

const setInput = (input, value) => {
  switch (input) {
    case 'KeyD':
      inputs.right = value;
      break;

    case 'KeyA':
      inputs.left = value;
      break;

    case 'Space':
      inputs.jump = value;
      break;
    default:
  }
};

const createPlatform = (i, j, type) => {
  const { tileSize } = config;
  let width;
  let height;

  switch (type) {
    case '_':
      width = 50;
      height = 20;
      break;
    default:
      width = 50;
      height = 50;
  }

  platforms.push(
    new Platform(
      i * tileSize,
      j * tileSize,
      width,
      height,
    ),
  );
};

const createPlayer = (x, y, weight) => {
  players.push(
    new Player(x, y, weight),
  );
};

const createMap = (map) => {
  maps[map].forEach((line, j) => {
    line.forEach((type, i) => {
      if (/[_+]/.test(type)) createPlatform(i, j, type);
    });
  });
};

function render() {
  ctx.clearRect(0, 0, canvasW, canvasH);

  players.forEach((player) => {
    player.update();

    if (player.position.x > canvasW * 0.7) {
      for (let i = 0; i < players.length; i += 1) {
        players[i].position.x -= player.velocity.x;
      }

      camera.x -= player.velocity.x;
    }
  });

  platforms.forEach((platform) => {
    platform.update();
  });

  requestAnimationFrame(render);
}

window.onload = () => {
  createMap(config.map);
  createPlayer(100, canvasH - 50, 50);
  render();
};

window.onkeydown = ({ code }) => setInput(code, true);

window.onkeyup = ({ code }) => setInput(code, false);
