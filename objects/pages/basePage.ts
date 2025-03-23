import { Locator, Page } from "@playwright/test";
import { NavigationBar } from "../components/navigationBar";
import { HelperBase } from "./helperBase";
import { CookiePopup } from "../components/cookiePopup";
import { PortfolioPage } from "./portfolioPage";

export class BasePage {
  private readonly navigationPage: NavigationBar;
  private readonly acceptCookiesButton: Locator;
  private readonly helperBase: HelperBase;
  private readonly cookiePopup: CookiePopup;
  private readonly portfolioPage: PortfolioPage;

  constructor(protected page: Page) {
    this.page = page;
    this.navigationPage = new NavigationBar(this.page);
    this.helperBase = new HelperBase(this.page);
    this.cookiePopup = new CookiePopup(this.page);
    this.portfolioPage = new PortfolioPage(this.page);
  }

  onNavigationBar() {
    return this.navigationPage;
  }

  helper() {
    return this.helperBase;
  }

  onCookiePopup() {
    return this.cookiePopup;
  }

  onPortfolioPage() {
    return this.portfolioPage;
  }
}
