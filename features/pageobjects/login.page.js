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

    get errorLokedUser() {
        return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')
    }

    async login(username) {
        // await this.fieldUsername.waitForDisplayed({ timeout : 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async validateLockedOutUserError() {
        expect(this.errorLokedUser).toBeDisplayed()
    }

    async loginLocked() {
        await this.fieldUsername.setValue(process.env.USERNAME_LOCKED_OUT_USER);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
        expect(this.errorLokedUser).toBeDisplayed()
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
