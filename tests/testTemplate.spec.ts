import { test } from "../my-fixtures";

test.describe("Test verifies", () => {
  test.beforeEach(async ({ basePage, page }) => {
    const interval = setInterval(async () => {
      await basePage.onCookiePopup().acceptCookiesIfVisible(page);
    }, 1000);
  });
  test(`portfolio results`, async ({ basePage, page }) => {
    await basePage.onNavigationBar().goToPortfolio();
    await basePage.onPortfolioPage().selectCountry("Poland");
    await basePage.onPortfolioPage().selectCountry("Netherlands");
    await basePage.onPortfolioPage().verifyResultsCount(4);
    await basePage.onPortfolioPage().verifyPagesCount(3);

    await basePage.onPortfolioPage().selectIndustry("Hospitality");
    await basePage.onPortfolioPage().verifyResultsCount(1);
    await basePage.onPortfolioPage().verifyPagesCount(1);
    await basePage.onPortfolioPage().removeItemFromFilter("Netherlands");
    await basePage.onPortfolioPage().verifyResultsCount(0);
    await basePage.onPortfolioPage().verifyPagesCount(1);
  });
});
