export const layout = (n) => {
  return n * 16;
};

export const isSpaceFree = (walls, x, y) => {
  const str = `${x},${y}`;

  const isWallPrasent = walls.has(str);

  return !isWallPrasent;
};
