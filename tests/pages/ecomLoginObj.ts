import { expect } from '@playwright/test'

class EcomLoginPage {
    page: any;
    Automation_btn: any;
    email_inpt: any;
    password_input: any;
    signIn_btn: any;
    constructor(page : any){
        this.page = page;
        this.Automation_btn = page.locator("//a[text()='Login automation']");
        this.email_inpt = page.getByPlaceholder("Email");
        this.password_input = page.getByPlaceholder("Password");
        this.signIn_btn = page.locator("//button[normalize-space()='Sign in']")
    }

    async navigateToUrl(url: string){
        await this.page.goto(url);
    }
    async clickonAutomationLink(){
        await this.Automation_btn.click();
    }
    async EnterEmail(emailaddress: string){
        await this.email_inpt.fill(emailaddress);
    }
    async EnterPassword(password: string){
        await this.password_input.fill(password);
    }
    async clickSignIn(){
        await this.signIn_btn.click();
    }
    async verifyurl(url_text: string){
        await expect(this.page).toHaveURL(new RegExp (url_text))
    }
}

export {EcomLoginPage}
