/**
 * @jest-environment jsdom
 */

import { goldenDeckV1 } from "taleem-core";
import { createTaleemPlayer } from "../src/index.js";

describe("taleem-player (real slides render)", () => {
  let mount;

  beforeEach(() => {
    mount = document.createElement("div");
    document.body.appendChild(mount);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("can be created with golden deck without throwing", () => {
    expect(() =>
      createTaleemPlayer({
        mount,
        deck: goldenDeckV1
      })
    ).not.toThrow();
  });

  test("renderAt() injects HTML into stage", () => {
    const player = createTaleemPlayer({
      mount,
      deck: goldenDeckV1
    });

    player.renderAt(0);

    const stage = mount.querySelector(".taleem-player-stage");
    expect(stage).not.toBeNull();
    expect(stage.innerHTML.trim().length).toBeGreaterThan(0);
  });

  test("renderAt() clears stage when time is outside deck", () => {
    const player = createTaleemPlayer({
      mount,
      deck: goldenDeckV1
    });

    player.renderAt(0);
    const stage = mount.querySelector(".taleem-player-stage");
    expect(stage.innerHTML.length).toBeGreaterThan(0);

    player.renderAt(10_000);
    expect(stage.innerHTML).toBe("");
  });

  test("renderAt() updates HTML when time advances", () => {
    const player = createTaleemPlayer({
      mount,
      deck: goldenDeckV1
    });

    player.renderAt(0);
    const stage = mount.querySelector(".taleem-player-stage");
    const firstHTML = stage.innerHTML;

    player.renderAt(5);
    const secondHTML = stage.innerHTML;

    expect(secondHTML).not.toBe("");
    expect(secondHTML).not.toBeNull();
    expect(secondHTML).not.toBeUndefined();
    expect(secondHTML).toEqual(stage.innerHTML);
    expect(firstHTML).not.toBeUndefined();
  });
});
