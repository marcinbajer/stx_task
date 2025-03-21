import {test as base} from '@playwright/test'
import { BasePage } from './objects/pages/basePage'

export type MyFixture = {
    basePage: BasePage
    setUp: string
}

export const test = base.extend<MyFixture>({
    setUp: async({page}, use) => {
        await page.goto('/')
        await use('')
    },
    basePage: async({page, setUp}, use) => {
        const basePage = new BasePage(page)
        await use(basePage)
    },
})