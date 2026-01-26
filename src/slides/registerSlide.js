import { SlideRegistry } from "./registry.js";

export function registerSlide(type, renderer) {
  if (SlideRegistry[type]) {
    throw new Error(`Slide type "${type}" is already registered`);
  }

  SlideRegistry[type] = renderer;
}
