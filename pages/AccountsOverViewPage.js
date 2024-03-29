const { expect } = require('@playwright/test');
exports.AccountsOverviewPage=class AccountsOverviewPage{ 
    constructor(page){ 
        this.page= page; 
        this.AccountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
        this.accountsOverviewTable=  page.locator('id=accountTable');
        this.totalBalanceField= page.locator('xpath=//*[@id="accountTable"]/tbody/tr[4]/td[2]/b');
    
    } 
    async clickOnAccountsOverviewLink(){ 
      await  this.AccountsOverviewLink.click();
     
    } 
    async getTotalBalance(){ 
 
     
    const totalBalance = await this.totalBalanceField.textContent();
    console.log(totalBalance)
              return totalBalance; 
     
    }  

    async checkBalance(){ 
      const totalBalance = await this.totalBalanceField.textContent();
      await expect.soft(totalBalance).toEqual("$3500,000.00"); 
      console.log( totalBalance); 
    }


}