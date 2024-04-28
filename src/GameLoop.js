export class GameLoop {
  constructor(update, render) {
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    this.timeStep = 1000 / 60;

    this.update = update;
    this.render = render;

    this.rafId = null; // rafId(Requst Animation Frame ID)
    this.isRunning = false;
  }

  mainLoop = (timestamp) => {
    if (!this.isRunning) return;

    let deltatime = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    //Accumulate all the since the last frame
    this.accumulatedTime += deltatime;

    //Fixed time stop updates
    while (this.accumulatedTime >= this.timeStep) {
      this.update(this.timeStep);
      this.accumulatedTime -= this.timeStep;
    }

    //Render
    this.render();

    this.rafId = requestAnimationFrame(this.mainLoop);
  };

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(this.mainLoop);
    }
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.isRunning = false;
  }
}
