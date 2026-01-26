// src/getSlideTemplate.js
import { SlideRegistry } from "./registry.js";

export function getSlideTemplate(type) {
  const template = SlideRegistry[type];

  if (!template) {
    throw new Error(`Unknown slide template type "${type}"`);
  }

  return template;
}

