const { expect } = require('@playwright/test');
exports.AccountsOverviewPage=class AccountsOverviewPage{ 
    constructor(page){ 
        this.page= page; 
        this.AccountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
        this.accountsOverviewTable=  page.locator('id=accountTable');;
        this.totalBalanceField= page.
        // $('b.ng-binding');  
        //  getByRole('cell', { name: '$3500,000.00' }).nth(1);
        getByRole('cell', { name: '$' }).nth(1)
        // getByRole('cell', { name: 'Total' })
     
    } 
    async clickOnAccountsOverviewLink(){ 
      await  this.AccountsOverviewLink.click();
     
    } 
    async getTotalBalance(){ 
    // console.log( await this.totalBalanceField.innerText());
     
    const totalBalance = await this.totalBalanceField.textContent();
    console.log( await totalBalance);
    return totalBalance;
     
    } 

    // async  countTableRows() {
    //     await this. accountsOverviewTable.$$('tr');
        
    //     console.log(  await this. accountsOverviewTable.$$('tr'));
    //     // return rowCount;
    //   }
}