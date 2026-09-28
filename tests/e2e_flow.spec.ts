import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Logger } from '../utils/logger';

test('End to End Purchase Flow', async({page})=>{
    const loginPage = new LoginPage(page);
    await test.step('Login to Sauce Demo',async()=>{
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.login('standard_user','secret_sauce');
        expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
        Logger.info('Login successful');
    })
})