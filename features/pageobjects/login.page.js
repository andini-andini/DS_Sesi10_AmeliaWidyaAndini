import { $, expect } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get fieldUsername() {
        return $('#user-name');
    }

    get fieldPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login-button');
    }

    errorLokedUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)


    async login(username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async validateLockedOutUserError(message) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        expect(this.errorLokedUser(message)).toBeDisplayed()
    }

    async loginProblem() {
        await this.fieldUsername.setValue(process.env.USERNAME_PROBLEM_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async loginPerformance() {
        await this.fieldUsername.setValue(process.env.USERNAME_PERFORMANCE_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async loginErrorUser() {
        await this.fieldUsername.setValue(process.env.USERNAME_ERROR_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async loginVisualUser() {
        await this.fieldUsername.setValue(process.env.USERNAME_VISUAL_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    open() {
        return super.open('/');
    }
}

export default new LoginPage();
