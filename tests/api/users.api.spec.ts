import { test, expect } from "@playwright/test";
import { userInfo } from "node:os";
let AUTH_TOKEN = { Authorization: 'Bearer 8d187df76d2e95796a3262d3c2e3fc183695dd57ef68193b45b9d68b6fa6fec8' };

test('Get user data', async ({ request }) => {
    let response = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    });
    console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);
});


test('Post user data', async ({ request }) => {

    let userData = {
        name: 'Amit kundalkar',
        email: `amit.kundalkar_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'

    };

    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data: userData
    });
    console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status);
    console.log(response.statusText);

});

test('Update the data', async ({ request }) => {

    request.put('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data: userData
    })

});