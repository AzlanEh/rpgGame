export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";

export class Input {
  constructor() {
    this.controlU = document.getElementById("controlerU");
    this.controlD = document.getElementById("controlerD");
    this.controlL = document.getElementById("controlerL");
    this.controlR = document.getElementById("controlerR");

    this.heldDirections = [];
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.onArrowPressed(UP);
      }

      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.onArrowPressed(DOWN);
      }

      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.onArrowPressed(LEFT);
      }

      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.onArrowPressed(RIGHT);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "ArrowUp" || e.code === "KeyW") {
        this.onArrowReleased(UP);
      }

      if (e.code === "ArrowDown" || e.code === "KeyS") {
        this.onArrowReleased(DOWN);
      }

      if (e.code === "ArrowLeft" || e.code === "KeyA") {
        this.onArrowReleased(LEFT);
      }

      if (e.code === "ArrowRight" || e.code === "KeyD") {
        this.onArrowReleased(RIGHT);
      }
    });

    //When BUtton is click by mouse Then get Direction() {
    this.controlU.addEventListener("mousedown", () => {
      this.onArrowPressed(UP);
    });

    this.controlU.addEventListener("mouseup", () => {
      this.onArrowReleased(UP);
    });

    this.controlD.addEventListener("mousedown", () => {
      this.onArrowPressed(DOWN);
    });

    this.controlD.addEventListener("mouseup", () => {
      this.onArrowReleased(DOWN);
    });

    this.controlL.addEventListener("mousedown", () => {
      this.onArrowPressed(LEFT);
    });

    this.controlL.addEventListener("mouseup", () => {
      this.onArrowReleased(LEFT);
    });

    this.controlR.addEventListener("mousedown", () => {
      this.onArrowPressed(RIGHT);
    });

    this.controlR.addEventListener("mouseup", () => {
      this.onArrowReleased(RIGHT);
    });
    //}

    ///****** ###### When Player is in phone ######  ******///
    //When BUtton is click by finger Then get Direction() {
    this.controlU.addEventListener("touchstart", () => {
      this.onArrowPressed(UP);
    });

    this.controlU.addEventListener("touchend", () => {
      this.onArrowReleased(UP);
    });

    this.controlD.addEventListener("touchstart", () => {
      this.onArrowPressed(DOWN);
    });

    this.controlD.addEventListener("touchend", () => {
      this.onArrowReleased(DOWN);
    });

    this.controlL.addEventListener("touchstart", () => {
      this.onArrowPressed(LEFT);
    });

    this.controlL.addEventListener("touchend", () => {
      this.onArrowReleased(LEFT);
    });

    this.controlR.addEventListener("touchstart", () => {
      this.onArrowPressed(RIGHT);
    });

    this.controlR.addEventListener("touchend", () => {
      this.onArrowReleased(RIGHT);
    });

    //}
  }

  get direction() {
    return this.heldDirections[0];
  }

  onArrowPressed(direction) {
    if (!this.heldDirections.includes(direction)) {
      this.heldDirections.unshift(direction);
    }
  }

  onArrowReleased(direction) {
    const index = this.heldDirections.indexOf(direction);
    if (index !== -1) {
      this.heldDirections.splice(index, 1);
    }
  }
}
