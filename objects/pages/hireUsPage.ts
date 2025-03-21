import { Page } from "@playwright/test";
import { HelperBase } from "../pages/helperBase";

export class HireUsPage extends HelperBase {

    constructor(page: Page){
        super(page)
    }

    formField = this.page.locator('#hsForm_36a7e3a5-18ec-4b4c-9589-e9018abca994')
    emailTextBox = this.formField.getByRole('textbox', {name: 'email'})
    messageSentConfirmation = this.page.locator('h1', {hasText: 'Thank you for sending the form! We’ll be in touch!'})

    async fillTheForm(email: string) {
        await this.emailTextBox.fill(email)
    }

}