// src/getSlideTemplate.js
import { SlideTemplates } from "./SlideTemplates.js";

export function getSlideTemplate(type) {
  const template = SlideTemplates[type];

  if (!template) {
    throw new Error(`Unknown slide template type "${type}"`);
  }

  return template;
}
