import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/marketplace",
  "/rankings",
  "/connect-wallet",
  "/create-account",
  "/nft",
  "/artist",
];

for (const route of ROUTES) {
  test(`${route} has no automated accessibility violations`, async ({ page }) => {
    await page.goto(route);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y);
        await new Promise((resolve) => window.setTimeout(resolve, 25));
      }
      window.scrollTo(0, 0);
    });

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
      .analyze();

    expect(results.violations).toEqual([]);
  });
}

test("reduced motion keeps key pages visible", async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: "reduce",
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  for (const route of ["/", "/marketplace", "/artist", "/connect-wallet"]) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("main")).not.toHaveCSS("opacity", "0");
  }

  expect(consoleErrors).toEqual([]);
  await context.close();
});
