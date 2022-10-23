export const rectanglesHorizontalCollision = (r1, r2) => (
  r1.position.x + r1.width + r1.velocity.x >= r2.position.x
  && r1.position.x + r1.velocity.x <= r2.position.x + r2.width
  && r1.position.y + r1.height >= r2.position.y
  && r1.position.y <= r2.position.y + r2.height
);

export const rectanglesVerticalCollision = (r1, r2) => (
  r1.position.x + r1.width >= r2.position.x
  && r1.position.x <= r2.position.x + r2.width
  && r1.position.y + r1.velocity.y + r1.height >= r2.position.y
  && r1.position.y + r1.velocity.y <= r2.position.y + r2.height
);
