import { Locator, Page } from "@playwright/test";
import { Basepage } from "./Basepage";



export class Loginpage extends Basepage {

    //private locators
    private readonly emailid: Locator;
    private readonly password: Locator;
    private readonly loginbutton: Locator;
    private readonly forgottenpassword: Locator;
    private readonly loginErrorMessage: Locator;

    private readonly username: Locator;
    constructor(page: Page) {
        super(page);
        this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginbutton = page.getByRole('button', { name: 'Login' });
        this.forgottenpassword = page.getByRole('link', { name: 'Forgotten Password' });
        this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
        this.username = page.getByRole('link', { name: 'username' });
    };

    //Public page actions(methods)
    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login')
        await this.page.waitForTimeout(6000);
    }

    async goToLoginPageTitle(): Promise<String> {
        return await this.page.title();
    }

    async isForgottenPasswordLinkExist(): Promise<boolean> {
        return await this.forgottenpassword.first().isVisible();
    }

    async doLogin(username: string, password: string) {
        console.log('User credentials: $(username):$(password)');
        await this.emailid.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

    async invalidLoginCredential(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }
}