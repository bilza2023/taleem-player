// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { createTaleemBrowser } from "../src/engines/browser/browser.js";
import { goldenDeck } from "./fixtures/goldenDeck.js";

describe("taleem-browser golden deck", () => {
  it("renders slide 0 correctly", () => {
    const root = document.createElement("div");
    document.body.appendChild(root);

    const browser = createTaleemBrowser({
      mount: root,
      deck: goldenDeck
    });

    browser.render(0);
    expect(root.innerHTML).toContain("Slide One");
  });

  it("renders slide 1 correctly", () => {
    const root = document.createElement("div");
    document.body.appendChild(root);

    const browser = createTaleemBrowser({
      mount: root,
      deck: goldenDeck
    });

    browser.render(1);
    expect(root.innerHTML).toContain("Slide Two");
  });

  it("replaces slide content when rendering again", () => {
    const root = document.createElement("div");
    document.body.appendChild(root);

    const browser = createTaleemBrowser({
      mount: root,
      deck: goldenDeck
    });

    browser.render(0);
    expect(root.innerHTML).toContain("Slide One");

    browser.render(1);
    expect(root.innerHTML).not.toContain("Slide One");
    expect(root.innerHTML).toContain("Slide Two");
  });

  it("does nothing on out-of-range index", () => {
    const root = document.createElement("div");
    const browser = createTaleemBrowser({ mount: root, deck: goldenDeck });

    expect(() => browser.render(99)).not.toThrow();
  });

  it("reports correct total slide count", () => {
    const root = document.createElement("div");
    const browser = createTaleemBrowser({ mount: root, deck: goldenDeck });

    expect(browser.getTotal()).toBe(2);
  });
});
