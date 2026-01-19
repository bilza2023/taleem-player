// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { createTaleemBrowser } from "../src/engines/browser/browser.js";
import { goldenDeck } from "./fixtures/goldenDeck.js";

describe("taleem-browser contract", () => {
  it("throws if mount is missing", () => {
    expect(() => {
      createTaleemBrowser({ deck: goldenDeck });
    }).toThrow();
  });

  it("throws if deck is missing", () => {
    const root = document.createElement("div");
    expect(() => {
      createTaleemBrowser({ mount: root });
    }).toThrow();
  });

  it("throws if deck.deck is not an array", () => {
    const root = document.createElement("div");
    expect(() => {
      createTaleemBrowser({
        mount: root,
        deck: {}
      });
    }).toThrow();
  });

  it("injects the browser DOM shell", () => {
    const root = document.createElement("div");

    createTaleemBrowser({
      mount: root,
      deck: goldenDeck
    });

    expect(root.querySelector(".taleem-browser-bg")).not.toBeNull();
    expect(root.querySelector(".taleem-browser-slide")).not.toBeNull();
  });
});
