import test, { expect } from "@playwright/test";
import { Loginpage } from "../src/Pages/Loginpage";
import { debug } from "node:console";
import { inspect } from "node:util";
import { Homepage } from "../src/Pages/Homepage";

let loginPage: Loginpage;
let homePage: Homepage;


test.beforeEach(async ({ page }) => {
    loginPage = new Loginpage(page);         //login page class constructor says give me the page.
    await loginPage.goToLoginPage();
    homePage = new Homepage(page);        //(page) bcz login page class constructor says give me the page.

});


test('login page title test', async ({ page }) => {

    let loginPageTitle = await loginPage.goToLoginPageTitle();
    console.log('Login Page Title:', loginPageTitle);
    expect(loginPageTitle).toBe('Account Login');
});

test('Forgotten Password link is exist Or not:', async ({ page }) => {

    expect(await loginPage.isForgottenPasswordLinkExist()).toBeTruthy();
});

test('Login with the valid credentials', async ({ page }) => {

    loginPage.doLogin('amit.kundalkar45@gmail.com', 'Aashutosh@34');

});

