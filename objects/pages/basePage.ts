import { Locator, Page } from "@playwright/test";
import { NavigationBar } from "../components/navigationBar";
import { HelperBase } from "./helperBase";
import { HireUsPage } from "./hireUsPage";
import { CookiePopup } from "../components/cookiePopup";

export class BasePage {


    private readonly navigationPage: NavigationBar
    private readonly acceptCookiesButton: Locator
    private readonly helperBase: HelperBase
    private readonly hireUsPage: HireUsPage
    private readonly cookiePopup: CookiePopup


    constructor(protected page: Page) {
        this.page = page
        this.navigationPage = new NavigationBar(this.page)
        this.helperBase = new HelperBase(this.page)
        this.hireUsPage = new HireUsPage(this.page)
        this.cookiePopup = new CookiePopup(this.page)
    }

    onNavigationBar(){
        return this.navigationPage
    }

    helper(){
        return this.helperBase
    }

    onHireUsPage(){
        return this.hireUsPage
    }

    onCookiePopup() {
        return this.cookiePopup
    }
}

