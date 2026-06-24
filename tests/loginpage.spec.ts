import test, { expect } from "@playwright/test";
import { Loginpage } from "../src/Pages/Loginpage";
import { debug } from "node:console";
import { inspect } from "node:util";
import { Homepage } from "../src/Pages/Homepage";


test('login page title test', async ({ page }) => {

    let loginPage = new Loginpage(page);    //login page class constructor says give me the page.
    await loginPage.goToLoginPage();
    let loginPageTitle = await loginPage.goToLoginPageTitle();
    console.log('Login Page Title:', loginPageTitle);
    expect(loginPageTitle).toBe('Account Login');
});

test('Forgotten Password link is exist Or not:', async ({ page }) => {
    let loginPage = new Loginpage(page);    //(page) bcz login page class constructor says give me the page.
    await loginPage.goToLoginPage();
    expect(await loginPage.isForgottenPasswordLinkExist()).toBeTruthy();
});

test('Login with the valid credentials', async ({ page }) => {
    let loginPage = new Loginpage(page);    //(page) bcz login page class constructor says give me the page.
    await loginPage.goToLoginPage();
    //loginPage.doLogin('amit.kundalkar45@gmail.com', 'Aashutosh@34');
    loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!); //'!' because if username is null/ not available than have to use '!' for null check.

});

