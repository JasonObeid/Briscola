import { test, expect } from "@playwright/test";

test("homepage has title and links to intro page", async ({
  page,
  context,
}) => {
  const pageTwo = await context.newPage();
  await page.goto("http://127.0.0.1:5173/briscola/");
  await page.getByRole("link", { name: "Create Match" }).click();
  await page.getByRole("button", { name: "Copy Match Link" }).click();

  const matchURL = await page.evaluate(async () => {
    return await window.navigator.clipboard.readText();
  });

  expect(matchURL).toContain("http://127.0.0.1:5173/briscola/match");

  await pageTwo.goto(matchURL);

  await expect(
    page.getByRole("heading", { name: "2 of 2 players connected" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Briscola" })).toBeVisible();

  await expect(
    pageTwo.getByRole("heading", { name: "2 of 2 players connected" }),
  ).toBeVisible();
  await expect(
    pageTwo.getByRole("heading", { name: "Briscola" }),
  ).toBeVisible();
});
