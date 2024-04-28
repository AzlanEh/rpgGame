import "./style.css";
import { resources } from "./src/Resource.js";
import { Sprite } from "./src/Sprite.js";
import { Vector2 } from "./src/Vector2.js";
import { GameLoop } from "./src/GameLoop.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./src/Input.js";
import { isSpaceFree, layout } from "./src/lib/layout.js";
import { moveTowards } from "./src/lib/moveTowards.js";
import { walls } from "./src/levels/level1.js";

const canvas = document.querySelector("#gameScreen");
const ctx = canvas.getContext("2d");

const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(320, 180),
});

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
});

const hero = new Sprite({
  resource: resources.images.hero,
  frameSize: new Vector2(32, 32),
  hFrames: 3,
  vFrames: 8,
  frame: 1,
  position: new Vector2(layout(6), layout(5)),
});

const heroDestinationPosition = hero.position.duplicate();

const shadow = new Sprite({
  resource: resources.images.shadow,
  frameSize: new Vector2(32, 32),
});

const input = new Input();

const update = () => {
  const distance = moveTowards(hero, heroDestinationPosition, 1); // Calculate movement direction
  // const distance = hero.position.distanceTo(heroDestinationPosition);
  // console.log(distance);

  const hasArrived = distance <= 1;
  if (hasArrived) {
    // Handle movement direction based on input
    movementDirection();
  }
};

const movementDirection = () => {
  // Update hero movement based on user input
  if (!input.direction) {
    return;
  }

  let nextX = heroDestinationPosition.x;
  let nextY = heroDestinationPosition.y;
  const gridSize = 16;

  if (input.direction === DOWN) {
    nextY += gridSize;
    hero.frame = 0;
  }
  if (input.direction === UP) {
    nextY -= gridSize;
    hero.frame = 6;
  }
  if (input.direction === LEFT) {
    nextX -= gridSize;
    hero.frame = 9;
  }
  if (input.direction === RIGHT) {
    nextX += gridSize;
    hero.frame = 3;
  }

  //to check where to move

  if (isSpaceFree(walls, nextX, nextY)) {
    heroDestinationPosition.x = nextX;
    heroDestinationPosition.y = nextY;
  }
};

const draw = () => {
  // Draw game elements on the canvas
  skySprite.drawImage(ctx, 0, 0);
  groundSprite.drawImage(ctx, 0, 0);

  // Center the hero in the cell
  const heroOffset = new Vector2(-8, -21); // Adjusted offset for centering
  const heroPosX = hero.position.x + heroOffset.x;
  const heroPosY = hero.position.y + heroOffset.y;

  shadow.drawImage(ctx, heroPosX, heroPosY);
  hero.drawImage(ctx, heroPosX, heroPosY);
};

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
