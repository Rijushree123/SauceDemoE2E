import { BasePage } from "./BasePage";
import { Logger } from "../utils/logger";
export class CartPage extends BasePage {
    async clickOnCart(){
        await this.page.locator("[data-test='shopping-cart-badge']").click();
        Logger.info('Clicked on cart icon');
    }
    async clickOnCheckout(){
        await this.page.getByRole('button',{name:'Checkout'}).click();
        Logger.info('Clicked on checkout button');
    }
}