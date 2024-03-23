const { expect } = require('@playwright/test');
exports.TransferFundsPage = class TransferFundsPage{ 
    constructor(page){ 
        this.page=page; 
        
        this.transferFundsLink = page. getByRole('link', { name: 'Transfer Funds' }); 
        this.amountTextField= page.locator('#amount');
        this.fromAccountIdList=  page.locator('#fromAccountId');
        this.toAccountIdList=  page.locator('#toAccountId');
        this.transferButton = page.getByRole('button', { name: 'Transfer' });
        this.transferHeader= page.getByRole('heading', { name: 'Transfer Complete!' }); 
        this.transferMessage=page.locator('xpath=//*[@id="rightPanel"]/div/div/p[1]');

        // this.OpenNewAccountButton=  page.getByRole('button', { name: 'Open New Account' }); 
        // “You can not transfer the amount to same account 
        // You can not transfer more than the balance in your account.
         
    }
 
    async clickOnTransferFunds(){ 
        await this.transferFundsLink.click(); 
    } 
    async transferToSameAccount(toAccount,fromAccount ,amount){ 
      
        await this.fromAccountIdList.selectOption({ value: fromAccount});
        await this.toAccountIdList.selectOption({ value: toAccount}); 
        await this.amountTextField.fill( amount);
        await this.transferButton.click();  

        const message= await this.transferMessage.textContent(); 
        await expect.soft(message).toEqual("You can not transfer the amount to same account.");
         console.log(message);
    } 
    async transferLargeAmount(toAccount,fromAccount ,amount){ 
      
        await this.fromAccountIdList.selectOption({ value: fromAccount});
        await this.toAccountIdList.selectOption({ value: toAccount}); 
        await this.amountTextField.fill( amount);
        await this.transferButton.click();
        const message= await this.transferMessage.textContent(); 
        await expect.soft(message).toContainText("You can not transfer more than the balance in your account.");
         console.log(message); 

    } 


    

}