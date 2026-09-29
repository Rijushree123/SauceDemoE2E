import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Logger } from '../utils/logger';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { CartPage } from '../pages/CartPage';

test('User can complete a purchase', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await test.step('Log in with valid credentials', async () => {
        await loginPage.open('https://www.saucedemo.com/');
        await loginPage.login('standard_user','secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        Logger.info('Login successful');
    });
    await test.step('Add a product to the cart', async () => {
        const itemToAdd = "Sauce Labs Bike Light";
        await inventoryPage.addItemToCart(itemToAdd);
    });
    await test.step('Complete checkout', async () => {
        await cartPage.clickOnCart();
        await cartPage.clickOnCheckout();
        await checkoutPage.fillCheckoutInformation('John','Doe','12345');
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
        await checkoutPage.verifyOrderConfirmation();
    });
});