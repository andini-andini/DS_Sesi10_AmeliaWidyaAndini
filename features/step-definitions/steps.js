import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

Given(/^Amelia is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Amelia login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Amelia should see home page$/, async () => {
    await HomePage.validateHomePage()
})

Then(/^Amelia should see cart page$/, async () => {
    await HomePage.btnCart()
})

Then(/^Amelia should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
})
