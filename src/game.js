const canvas = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

export const canvasW = canvas.width;
export const canvasH = canvas.height;

export const camera = {
  x: 0,
  y: 0,
};

export const config = {
  map: 0,
  tileSize: 50,
};

export const inputs = {
  right: false,
  left: false,
  jump: false,
};

export const players = [];

export const platforms = [];
