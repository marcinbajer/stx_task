import { expect, Page } from '@playwright/test'
import {test} from '../my-fixtures'


test.describe('Test verifies', () => {

    test.beforeEach(async ({basePage, page}) => {
        const interval = setInterval(async () => {
            await basePage.onCookiePopup().acceptCookiesIfVisible(page)
        }, 1000);
    })
    test(`if dogs can talk`, async({basePage, page}) => {
        // tbd...
    })

})

