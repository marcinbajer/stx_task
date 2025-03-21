import { Page } from "@playwright/test";
import { HelperBase } from "../pages/helperBase";

export class NavigationBar extends HelperBase {

    constructor(page: Page){
        super(page)
    }

    navigationBar = this.page.locator('.navbar-main-wrap-new')

    whatWeDo = this.navigationBar.getByText('What we do')
    letsTalkButton = this.navigationBar.locator('.right-menu-links-2 .navbar-button-hire').filter({hasText: `Let's talk`})

    async expandItem() {
        await this.whatWeDo.click()
    }

    async goToHireUsPage() {
        await this.letsTalkButton.click()
    }

}