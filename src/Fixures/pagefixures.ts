import { test as baseTest, expect } from '@playwright/test';
import { Loginpage } from '../Pages/Loginpage';
import { asyncWrapProviders } from 'node:async_hooks';
import { Homepage } from '../Pages/Homepage';
import playwrightConfig from '../../playwright.config';
import { CsvHelper } from '../Utility/csvutil';

//define type for page fixure
type pageFixures = {         //When you define a type for page fixtures in TypeScript, you're essentially describing the shape of the fixture object that Playwright will inject into your tests.
    loginPage: Loginpage,   //This does not create loginPage or homePage. It only tells TypeScript:                             
    homePage: Homepage,      // "Whenever I use PageFixtures, there will be a Loginpage property of type loginPage and a homepage property of type homePage."
    testData: Record<string, string>[]
};

//extend playwright 'basetTest' because inbuilt 'test' will give only 4 fixures.(its like inherite concept without classes)
//extend is method here which is allow to write any kind of custom fixures like below loginPage,homePage.
//extend is a function which says for which object/type you really want destructurig,so here we provided generics as <pageFixures>
export let test = baseTest.extend<pageFixures>({     // here we given 'test' name to custom we can give any other name as well like test1, test2 etc.
    //this test we are going to use in test class(spec.ts)

    loginPage: async ({ page }, use) => {   //here we can see in the object means in the {} we created function without function keyword.
        // This is annonymous arrow function,It has no name but it has a function expression that is loginPage here. 
        let loginPage = new Loginpage(page);
        await use(loginPage);               // please supply loginpage to everyone means every test methods.
    },

    homePage: async ({ page }, use) => {
        let homePage = new Homepage(page);
        await use(homePage);
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    }
});
//baseTest is extending all the features from the 'test'.
//generics <pageFixures> are commonly used when creating custom fixtures so TypeScript knows what additional fixtures are available in your tests.
//'use' object available in playwright test runner.
//use of 'use' object is supply the data/page object to test methods using 'use' inbuilt callback function.
//It means playwright says I gives you 'use' callback, use this 'use' callback and you decide what you want to return.(line 15)

export { expect } from '@playwright/test'