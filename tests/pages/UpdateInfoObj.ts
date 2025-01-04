
class UpdateInfo{
    page:any;
    Profile_icon: any;
    My_account: any;
    inpt_company: any;
    inpt_profession: any;
    constructor(page:any){
        this.page = page;
        this.Profile_icon = page.locator("//button[normalize-space()='Unnath P']");
        this.My_account = page.locator("//a[@href='/account']");
        this.inpt_company = page.locator("//input[@id='user[profile_attributes][company]']");
        this.inpt_profession = page.locator("//input[@id='user[profile_attributes][headline]']")
    }

    async clickonProfileIcon(){
        await this.Profile_icon.click();
    }
    async clickOnMyAccount(){
        await this.My_account.click();
    }
    async fillCompany(company: string){
        await this.inpt_company.fill(company);
    }
    async fillProfession(profession:string){
        await this.inpt_profession.fill(profession)
    }
} 

export {UpdateInfo}