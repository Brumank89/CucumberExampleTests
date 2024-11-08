import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect} from '@wdio/globals'
import { browser } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import { assert } from 'node:console';


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});


//LoginTest
Given(/^Abro la pagina "([^"]*)" en el navegador$/, async function (appUrl) {
    await browser.pause(5000);
    await browser.url(appUrl);
});
    
Then(/^Ingreso el usuario "([^"]*)" y la contraseña "([^"]*)"$/, async function (user, password) {
    await browser.$('//*[@id="username"]').click();
    await browser.keys(user);

    await browser.$('//*[@id="password"]').click();
    await browser.keys(password);

    await browser.pause(3000);
});

Then(/^Presiono el boton Login$/, async function () {
    await browser.$('//*[@id="login"]/button').click();
    await browser.pause(3000);
});

Then(/^Espero que el mensaje de error sea "([^"]*)"$/, async function (message) {
    const alertText = await browser.$('//*[@id="flash"]').getText();
    assert(alertText.includes(message));
});

Then(/^Cierro la sesion$/, async function () {
    await browser.$('//*[@id="content"]/div/a').click();
    await browser.pause(3000);
});
