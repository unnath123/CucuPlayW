import { EcomLoginPage } from "../pages/ecomLoginObj";
import { test as base } from 'playwright-bdd'
import { UpdateInfo } from "../pages/UpdateInfoObj";

export const test = base.extend({
    ecomloginpage: async({page}, use ) =>{
        const loginPage = new EcomLoginPage(page);
        await use(loginPage)
    },
    updateAccountInfo: async({page}, use)=>{
        const updatePage = new UpdateInfo(page);
        await use(updatePage)
    }
})
