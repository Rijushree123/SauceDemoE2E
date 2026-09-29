import { BasePage } from "./BasePage";
import { Logger } from "../utils/logger";
import { expect } from "@playwright/test";

export class CheckoutPage extends BasePage {
  async clickContinue() {
    await this.page.locator("[data-test='continue']").click();
    Logger.info("Clicked on continue button");
  }
  async clickFinish() {
    await this.page.getByRole("button", { name: "Finish" }).click();
    Logger.info("Clicked on finish button");
  }
  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.page.getByPlaceholder("First Name").fill(firstName);
    Logger.info(`Filled first name: ${firstName}`);
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    Logger.info(`Filled last name: ${lastName}`);
    await this.page.getByPlaceholder("Zip/Postal Code").fill(postalCode);
    Logger.info(`Filled postal code: ${postalCode}`);
  }
  async verifyOrderConfirmation() {
    const confirmationMessage = await this.page.locator('[data-test="complete-header"]');
    await expect(confirmationMessage).toHaveText("Thank you for your order!");
    Logger.info("Order confirmation verified successfully");
  }
  async generatePDFOrder(){
    await this.page.locator('[data-test="generate-pdf"]').click();
    Logger.info("Clicked on Generate PDF order button");
  }
}
