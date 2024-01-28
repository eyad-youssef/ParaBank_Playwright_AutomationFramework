const { expect } = require('@playwright/test');
const { AccountsOverviewPage } = require('./AccountsOverViewPage');
exports.NewAccountPage= 
class NewAccountPage extends AccountsOverviewPage{ 

    constructor(page){
        super(page) ; 
       
        this.openNewAccountLink = page. getByRole('link', { name: 'Open New Account' }); 
        this.accountType= page.locator('#type');
        this.account= page.locator('#fromAccountId');
        // this.passwordTextField= page.locator('input[name="password"]');
        this.OpenNewAccountButton=  page.getByRole('button', { name: 'Open New Account' }); 
       
 
    }  

async clickOnOpenNewAccount(){  
             await this.openNewAccountLink.click();
             await expect.soft(this.OpenNewAccountButton).toHaveText('Open New Account');
             await expect.soft(this.OpenNewAccountButton).toBeEnabled() 
}

 async createNewAccount(accountNumber, numberOfAccounts){
             for(let i =0 ;i<numberOfAccounts;i++){ 
                
                await this.accountType.selectOption('0'); 
                await this.account.selectOption({value: accountNumber});
                await this.OpenNewAccountButton.click();
                await this.clickOnOpenNewAccount(); 
            // 
            }  
            const totalBalance = await this.getTotalBalance(); 
              expect.soft(totalBalance).toHaveText('3500000');
              console.log( totalBalance);
            
            //  await expect.soft(this.getTotalBalance()).toHaveText('3500000'); 
            
              
}

}