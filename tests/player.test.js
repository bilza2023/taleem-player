/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
import { goldenDeckV1 } from "taleem-core";
import { createTaleemPlayer } from "../src/index.js";

function createMockRenderer() {
  return {
    render: jest.fn()
  };
}

describe("taleem-player (golden deck)", () => {
  let mount;

  beforeEach(() => {
    mount = document.createElement("div");
    document.body.appendChild(mount);
  });

  afterEach(() => {
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });

  test("can be created with golden deck without throwing", () => {
    const renderer = createMockRenderer();

    expect(() =>
      createTaleemPlayer({
        mount,
        deck: goldenDeckV1,
        renderer
      })
    ).not.toThrow();
  });

  test("renderAt() calls renderer with a slide", () => {
    const renderer = createMockRenderer();

    const player = createTaleemPlayer({
      mount,
      deck: goldenDeckV1,
      renderer
    });

    player.renderAt(0);

    expect(renderer.render).toHaveBeenCalledTimes(1);

    const call = renderer.render.mock.calls[0][0];
    expect(call).toHaveProperty("slide");
  });
});
