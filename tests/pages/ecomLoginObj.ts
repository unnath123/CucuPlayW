

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

    
}