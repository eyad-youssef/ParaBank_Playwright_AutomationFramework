const { expect } = require('@playwright/test');
exports.NewAccountPage= 
class NewAccountPage{ 

    constructor(page){
        this.page = page ; 
       
        this.openNewAccountLink = page. getByRole('link', { name: 'Open New Account' }); 
        // this.passwordTextField= page.locator('input[name="password"]');
        this.OpenNewAccountButton=  page.getByRole('button', { name: 'Open New Account' }); 
       
 
    }  

async clickOnOpenNewAccount(){  


    await this.openNewAccountLink.click();
             await expect.soft(this.OpenNewAccountButton).toHaveText('Open New Account');
             await expect.soft(this.OpenNewAccountButton).toBeEnabled()
              await this.OpenNewAccountButton.click();  
}

}