# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpage.spec.ts >> @smoke Login with the valid credentials
- Location: tests/loginpage.spec.ts:23:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://naveenautomationlabs.com/opencart/index.php?route=account/login", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { Basepage } from "./Basepage";
  3  | 
  4  | 
  5  | 
  6  | export class Loginpage extends Basepage {
  7  | 
  8  |     //private locators
  9  |     private readonly emailid: Locator;
  10 |     private readonly password: Locator;
  11 |     private readonly loginbutton: Locator;
  12 |     private readonly forgottenpassword: Locator;
  13 |     private readonly loginErrorMessage: Locator;
  14 | 
  15 |     // private readonly username: Locator;   .....for git
  16 |     constructor(page: Page) {
  17 |         super(page);
  18 |         this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
  19 |         this.password = page.getByRole('textbox', { name: 'Password' });
  20 |         this.loginbutton = page.getByRole('button', { name: 'Login' });
  21 |         this.forgottenpassword = page.getByRole('link', { name: 'Forgotten Password' });
  22 |         this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
  23 |         // this.username = page.getByRole('link', { name: 'username' });   ..... for git
  24 |     };
  25 | 
  26 |     //Public page actions(methods)
  27 |     async goToLoginPage(): Promise<void> {
> 28 |         await this.page.goto('opencart/index.php?route=account/login')
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  29 |         await this.page.waitForTimeout(6000);
  30 |     }
  31 | 
  32 |     async goToLoginPageTitle(): Promise<String> {
  33 |         return await this.page.title();
  34 |     }
  35 | 
  36 |     async isForgottenPasswordLinkExist(): Promise<boolean> {
  37 |         return await this.forgottenpassword.first().isVisible();
  38 |     }
  39 | 
  40 |     async doLogin(username: string, password: string) {
  41 |         console.log('User credentials: $(username):$(password)');
  42 |         await this.emailid.fill(username);
  43 |         await this.password.fill(password);
  44 |         await this.loginbutton.click();
  45 |     }
  46 | 
  47 |     async invalidLoginCredential(): Promise<boolean> {
  48 |         return await this.loginErrorMessage.isVisible();
  49 |     }
  50 | }
```