import { $, expect } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    get iconCart() {
        return $('.shopping_cart_link');
    }
    get btnContinueShopping() {
        return $('#continue-shopping')
    }

    get btnMenu() {
        return $('#react-burger-menu-btn')
    }

    async validateHomePage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
    }

    async btnCart() {
        await browser.pause(1000);
        await this.iconCart.click();
        expect(browser).toHaveUrlContaining('/cart.html')
    }

    async ContinueShopping() {
        await browser.pause(1000);
        await this.btnContinueShopping.click();
        expect(browser).toHaveUrlContaining('/inventory.html')
    }

    async Menu() {
        await browser.pause(1000);
        // this.btnMenu = await $('.bm-menu-wrap');
        await this.btnMenu.click();
        expect(await this.btnMenu.isDisplayed()).toBe(true)
    }
}

export default new HomePage();
