import { Page } from "@playwright/test";
import { DataGenerator } from "../../utils/dataGenerator";

export class HelperBase {

    readonly page: Page
    private readonly dataGenerator: DataGenerator;

    constructor(page: Page) {
        this.page = page
        this.dataGenerator = new DataGenerator
    }

    async waitForNumberOfSeconds(timeInSeconds: number) {
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }

    randomFullName() {
        return this.dataGenerator.generateFullName()
    }

    randomEmail(name?: string) {
        return this.dataGenerator.generateEmail(name).replace(' ', '')
    }
}