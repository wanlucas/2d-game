import map1 from './map1.js';

const joinMap = (parts) => {
  const map = [];

  parts[0].forEach(() => map.push([]));

  parts.forEach((part) => {
    part.forEach((line, i) => map[i].push(...line));
  });

  return map;
};

export default [
  joinMap(map1),
];
