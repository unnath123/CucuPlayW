import { EcomLoginPage } from "../pages/ecomLoginObj";
import { test as base } from 'playwright-bdd'

export const test = base.extend({
    ecomloginpage: async({page}, use ) =>{
        const loginPage = new EcomLoginPage(page);
        await use(loginPage)
    }
})