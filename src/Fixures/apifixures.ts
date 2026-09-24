import { test as baseTest } from '@playwright/test';
import { ApiHelper } from '../Api/ApiHelper';


//define types for API fixure

type ApiFixures = {
    apiHelper: ApiHelper;   //Here we created reference of ApiHelper named 'apiHelper'
}

export let test = baseTest.extend<ApiFixures>({
    apiHelper: async ({ request }, use) => {
        let apiHelper = new ApiHelper(
            request,
            process.env.API_BASE_URL!
        )
        await use(apiHelper);

    },


});

export { expect } from '@playwright/test'