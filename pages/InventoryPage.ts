import {BasePage} from './BasePage.ts';
import {Logger} from '../utils/logger.ts';

export class InventoryPage extends BasePage {

    async addItemToCart(item: string){
        const normalizeITem = item.toLowerCase().replace(/\s+/g,'-');
        await this.page.locator(`[data-test="add-to-cart-${normalizeITem}"]`).click();
        Logger.info(`Added item to cart: ${item}`);
    } 
    
}