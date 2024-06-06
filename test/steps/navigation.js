import { When, Then } from '@cucumber/cucumber';
import { expect } from "chai";

When("I navigate to {string}", async (url) => {
  await browser.url(url);
});

When(/^I click (.*)$/, async (linkText) => {
  console.log("Looking for =" + linkText);
  await $("=" + linkText).click();
  await browser.pause(5000);
  expect(true).to.equal(true);
});

Then(/the page title is '(.*)'/, { timeout: 60 * 1000 }, async (title) => {
  const actual = await browser.getTitle();
  expect(actual).to.equal(title);
});

Then("take a screenshot {string}", async (name) => {
  await browser.saveScreenshot("./screenshots/" + name + ".png");
});