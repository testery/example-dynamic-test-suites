const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, to, equal, $ } = require('@wdio/globals')

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(message);
});

When("I navigate to {string}", async (url) => {
  await browser.url(url);
});

When(/^I click (.*)$/, async (linkText) => {
  console.log("Looking for =" + linkText);
  await $("=" + linkText).click();
  await browser.pause(5000);
  await expect(true).to.equal(true);
});

Then(/the page title is '(.*)'/, { timeout: 60 * 1000 }, async (title) => {
    await expect(browser).toHaveTitle(title);
});
