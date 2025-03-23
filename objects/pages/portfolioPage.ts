import { expect, Page } from "@playwright/test";
import { HelperBase } from "../pages/helperBase";

export class PortfolioPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }

    filterBySection = this.page.locator('[fs-cmsfilter-element="filters"]')
    countryList = this.filterBySection.locator('.multi-select-field').first()
    projectsGridElement = this.page.locator('.project-card-cover-container')
    paginationContainer = this.page.locator('.projects-pagination-count-container')
    paginationButtons = this.page.locator('.projects-pagination-count-container').locator('[fs-cmsload-element="page-button"]')


    async selectCountry(country: string) {
        await this.filterBySection.scrollIntoViewIfNeeded()
        await this.filterBySection.locator('.multi-select-tags-container').first().click()
        await this.page.locator(`label:has-text("${country}")`).click()
    }

    async selectIndustry(industry: string) {
        await this.filterBySection.scrollIntoViewIfNeeded()
        await this.filterBySection.locator('.multi-select-tags-container').nth(1).click()
        await this.page.locator(`label:has-text("${industry}")`).click()
    }

    async verifyResultsCount(expected: number) {
        await expect(this.projectsGridElement).toHaveCount(expected)
    }

    async verifyPagesCount(expected: number) {
        await expect(this.paginationButtons).toHaveCount(expected)

    }

    async removeItemFromFilter(item: string) {
        await this.page.locator('.multi-select-tags-container .multi-select-tag', { hasText: `${item}` }).click();
    }

}