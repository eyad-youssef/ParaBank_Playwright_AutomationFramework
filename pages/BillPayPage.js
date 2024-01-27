const { expect } = require('@playwright/test');
const { AccountsOverviewPage } = require('./AccountsOverViewPage');
exports.BillPayPage = class BillPayPage extends AccountsOverviewPage { 
    constructor(page){
        super(page) ; 
        this.BillPayLink = page. getByRole('link', { name: 'Bill Pay' });

        this.payeeNameTextField= page.locator('input[name="payee\\.name"]');
        this.addressTextField= page.locator('input[name="payee\\.address\\.street"]');
        this.cityTextField=page.locator('input[name="payee\\.address\\.city"]');
        this.stateTextField=page.locator('input[name="payee\\.address\\.state"]');
        this.zipCodeTextField=page.locator('input[name="payee\\.address\\.zipCode"]');
        this.phoneTextField=page.locator('input[name="payee\\.phoneNumber"]');
        this.accountNumberTextField=page.locator('input[name="payee\\.accountNumber"]');
        this.verfiyAccountNumberTextField=page.locator('input[name="verifyAccount"]');
        this.amountTextField=page.locator('input[name="amount"]');
        this.fromAcountList=page.getByRole('combobox');
        this.sendPaymentButton=page.getByRole('button', { name: 'Send Payment' });

    }  

    async checkBalance(){  
        const totalAmountElement = await this.getTotalAmount();
        const totalAmountText = await totalAmountElement.innerText;
        await expect(totalAmountElement).toHaveText('1');

    }

    async clickOnBillPayLink(){ 
        await this.BillPayLink.click();
        
    } 


    async payBill(payeename,address,city,state,zipCode,phone,accountNumber,verfiyAccountNumber,amount,account){ 
        await this.payeeNameTextField.fill(payeename);
        await this.addressTextField.fill(address);
        await this.cityTextField.fill(city);
        await this.stateTextField.fill(state);
        await this.zipCodeTextField.fill(zipCode);
        await this.phoneTextField.fill(phone);
        await this.accountNumberTextField.fill(accountNumber);
        await this.verfiyAccountNumberTextField.fill(verfiyAccountNumber);
        await this.amountTextField.fill(amount);
        await this.fromAcountList.selectOption({ value: account});
        await this.sendPaymentButton.click();


    }
}