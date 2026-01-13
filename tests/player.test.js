
/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
import { createTaleemPlayer } from "../src/index.js";

const mockDeck = {
  version: "deck-v1",
  deck: [
    { type: "title", start: 0, end: 5, data: [] },
    { type: "eq", start: 5, end: 10, data: [] }
  ]
};

function createMockRenderer() {
  return {
    render: jest.fn()
  };
}

describe("taleem-player", () => {
  let mount;

  beforeEach(() => {
    mount = document.createElement("div");
    document.body.appendChild(mount);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });

  test("renders slide at valid time", () => {
    const renderer = createMockRenderer();

    const player = createTaleemPlayer({
      mount,
      deck: mockDeck,
      renderer
    });

    player.renderAt(2);

    expect(renderer.render).toHaveBeenCalledTimes(1);

    const args = renderer.render.mock.calls[0][0];
    expect(args.slide.type).toBe("title");
    expect(args.time).toBe(2);
    expect(args.mount).toBeInstanceOf(HTMLElement);
  });

  test("switches slides when time crosses boundary", () => {
    const renderer = createMockRenderer();

    const player = createTaleemPlayer({
      mount,
      deck: mockDeck,
      renderer
    });

    player.renderAt(2);
    player.renderAt(6);

    expect(renderer.render).toHaveBeenCalledTimes(2);
    expect(renderer.render.mock.calls[1][0].slide.type).toBe("eq");
  });

  test("clears stage content when time has no slide", () => {
    const renderer = createMockRenderer();

    const player = createTaleemPlayer({
      mount,
      deck: mockDeck,
      renderer
    });

    player.renderAt(2);    // valid slide
    player.renderAt(20);   // no slide

    expect(renderer.render).toHaveBeenCalledTimes(1);

    const stage = mount.querySelector(".taleem-player-stage");
    expect(stage).not.toBeNull();
    expect(stage.innerHTML).toBe("");
  });

  test("throws if renderer is missing", () => {
    expect(() =>
      createTaleemPlayer({
        mount,
        deck: mockDeck
      })
    ).toThrow();
  });

  test("throws on invalid deck", () => {
    const renderer = createMockRenderer();

    expect(() =>
      createTaleemPlayer({
        mount,
        deck: {},
        renderer
      })
    ).toThrow();
  });
});
