import { BasePage } from "./BasePage";
import { Logger } from "../utils/logger";

export class LoginPage extends BasePage {
  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';

  async login(username: string, password: string) {
    await this.page.locator(this.usernameInput).fill(username);
    Logger.info(`Filled username: ${username}`);

    await this.page.locator(this.passwordInput).fill(password);
    Logger.info(`Filled password: ${'*'.repeat(password.length)}`); //Masking the password in logs

    await this.page.locator(this.loginButton).click();
    Logger.info(`Clicked login button for username: ${username}`);
  }
}
