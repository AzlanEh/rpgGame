class Resources {
  constructor() {
    this.toLoad = {
      sky: "/res/sky.png",
      ground: "/res/ground.png",
      hero: "/res/hero-sheet.png",
      shadow: "/res/shadow.png",
    };

    this.images = {};

    Object.keys(this.toLoad).forEach((key) => {
      const img = new Image();
      img.src = this.toLoad[key];
      this.images[key] = {
        image: img,
        isLoaded: false,
      };
      img.onload = () => {
        this.images[key].isLoaded = true;
      };
      img.onerror = (error) => {
        console.error(`Error loading ${key} image:`, error);
      };
    });
  }
}

export const resources = new Resources();
