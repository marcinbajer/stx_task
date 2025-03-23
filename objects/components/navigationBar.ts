import { Page } from "@playwright/test";
import { HelperBase } from "../pages/helperBase";

export class NavigationBar extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  navigationBar = this.page.locator(".navbar-main-wrap-new");

  whatWeDo = this.navigationBar.getByText("What we do");
  letsTalkButton = this.navigationBar
    .locator(".right-menu-links-2 .navbar-button-hire")
    .filter({ hasText: `Let's talk` });
  portfolioDropdown = this.navigationBar.locator(".nav-text", {
    hasText: "Portfolio",
  });
  portfolioItem = this.page.locator(
    '[data-w-id="58288ba9-ae37-53da-8230-796f4c564f22"]'
  );

  async goToPortfolio() {
    await this.portfolioDropdown.click();
    await this.portfolioItem.click();
  }

  async goToHireUsPage() {
    await this.letsTalkButton.click();
  }
}
