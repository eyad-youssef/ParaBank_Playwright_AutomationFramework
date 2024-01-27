const { expect } = require('@playwright/test');
exports.TransferFundsPage = class TransferFundsPage{ 
    constructor(page){ 
        this.page=page; 
        
        this.transferFundsLink = page. getByRole('link', { name: 'Transfer Funds' }); 
        this.amountTextField= page.locator('#amount');
        this.fromAccountIdList=  page.locator('#fromAccountId');
        this.toAccountIdList=  page.locator('#toAccountId');
        this.transferButton = page.getByRole('button', { name: 'Transfer' });
        this.transferMessage= page.getByRole('heading', { name: 'Transfer Complete!' });
        // this.OpenNewAccountButton=  page.getByRole('button', { name: 'Open New Account' }); 
         
    }
 
    async clickOnTransferFunds(){ 
        await this.transferFundsLink.click(); 
    } 
    async transferToSameAccount(toAccount,fromAccount ,amount){ 
      
        await this.fromAccountIdList.selectOption({ value: fromAccount});
        await this.toAccountIdList.selectOption({ value: toAccount}); 
        await this.amountTextField.fill( amount);
        await this.transferButton.click(); 
        // console.log(this.transferMessage.innerText());

        // await expect.soft(this.transferMessage).toContainText("Transfer Failed.");
       
         


    } 
    async transferLargeAmount(toAccount,fromAccount ,amount){ 
      
        await this.fromAccountIdList.selectOption({ value: fromAccount});
        await this.toAccountIdList.selectOption({ value: toAccount}); 
        await this.amountTextField.fill( amount);
        await this.transferButton.click(); 
        // console.log(this.transferMessage.TextContent());
        // await expect.soft(this.transferMessage.innerText).toHaveText("You can not transfer more than the balance in your account.");
       


    } 


    

}