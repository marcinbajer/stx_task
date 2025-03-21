import { Page } from "@playwright/test";
import { HelperBase } from "../pages/helperBase";

export class CookiePopup extends HelperBase {

    constructor(page: Page){
        super(page)
    }

    cookieDialog = this.page.locator('#CybotCookiebotDialog')
    acceptCookiesButton = this.page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')

    async acceptCookies() {
        await this.acceptCookiesButton.click()
    }

    async acceptCookiesIfVisible(page: Page) {
        if (await this.cookieDialog.isVisible()) {
            await this.acceptCookiesButton.click() 
        }
    }

}