import { expect, test } from '../src/Fixures/pagefixures'



test.beforeEach(async ({ loginPage }) => {

    await loginPage.goToLoginPage();

});




test('login page title test', async ({ loginPage }) => {

    let loginPageTitle = await loginPage.goToLoginPageTitle();
    console.log('Login Page Title:', loginPageTitle);
    expect(loginPageTitle).toBe('Account Login');
});

test('Forgotten Password link is exist Or not:', async ({ loginPage }) => {

    expect(await loginPage.isForgottenPasswordLinkExist()).toBeTruthy();
});

test('Login with the valid credentials', async ({ loginPage, homePage }) => {

    //loginPage.doLogin('amit.kundalkar45@gmail.com', 'Aashutosh@34');
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!); //'!' because if username is null/ not available than have to use '!' for null check.
});

test('Login to app with wrong credential with data driven approach test', async ({ loginPage, testData }) => {
    for (let row of testData) {     //row pointing to first row at the start
        await loginPage.doLogin(row.username, row.password);    //In array single record is available in the format of key and value. where Key=ROW and value=value at that row.
        expect(await loginPage.invalidLoginCredential()).toBeTruthy();
    }


});

