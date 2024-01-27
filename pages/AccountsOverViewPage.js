const { expect } = require('@playwright/test');
exports.AccountsOverviewPage=class AccountsOverviewPage{ 
    constructor(page){ 
        this.page= page; 
        this.AccountsOverviewLink = page.getByRole('link', { name: 'Accounts Overview' });
        this.accountsOverviewTable=  page.locator('id=accountTable');;
        this.totalAmountField= page.locator('b').filter({ hasText: '$' }); 
        // getByRole('cell', { name: '-$' }).nth(1)
        // getByRole('cell', { name: 'Total' })
        // <b class="ng-binding">-$14100,000.00</b>
    } 
    async clickOnAccountsOverviewLink(){ 
      await  this.AccountsOverviewLink.click();
     
    } 
    async getTotalAmount(){ 
      await this.totalAmountField.innerText();
    } 

    // async  countTableRows() {
    //     await this. accountsOverviewTable.$$('tr');
        
    //     console.log(  await this. accountsOverviewTable.$$('tr'));
    //     // return rowCount;
    //   }
}