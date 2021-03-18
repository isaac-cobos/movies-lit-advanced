import { html, fixture, expect } from "@open-wc/testing";

import "../MoviesLitApp.js";

describe("App movie lit component", () => {
  it("Render movie lit app component", async () => {
    const element = await fixture(html` <movies-lit-app></movies-lit-app> `);
  });
});
