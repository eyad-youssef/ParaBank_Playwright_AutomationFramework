const { test, expect,chromium } = require('@playwright/test');


import{LoginPage} from '../pages/LoginPage';
import{NewAccountPage} from'../pages/NewAccountPage'; 
import{TransferFundsPage} from'../pages/TransferFundsPage';
import{RequestLoanPage}from '../pages/RequestLoanPage';
import{BillPayPage} from '../pages/BillPayPage';
import { AccountsOverviewPage } from '../pages/AccountsOverViewPage';


test.beforeEach('setup',async({page})=>{ 
     await page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBCl'); 
     const loginPage = new LoginPage(page);  
    
    //  await page.screenshot({ path: 'screenshot.png' });
     await loginPage.login('Tester','2024Trial'); 

})
test('End to end scenario',async({page})=>{  
    
    const newAccountPage= new NewAccountPage(page);
    const transferFundsPage= new TransferFundsPage(page);
    const requestLoanPage=  new RequestLoanPage(page); 
    const billPayPage = new BillPayPage(page); 
    const accountsOverviewPage= new AccountsOverviewPage(page)

   // await page.pause(); 
    // await newAccountPage.clickOnOpenNewAccount();  
    // await transferFundsPage.clickOnTransferFunds(); 
    // await transferFundsPage.transferToSameAccount('13455','13455','100');
    // await transferFundsPage.transferLargeAmount('13566','13455','5000000');
    // await requestLoanPage.clickOnRequestLoan();
    // await requestLoanPage.applyForloan('7000','1000','13455');
    // await requestLoanPage.applyForloan('1000','7000','13455');
    // await billPayPage.clickOnBillPayLink();
    // await billPayPage.payBill('user','3rd St','cairo','egypt','12478','01144789955','123456789','123456789','3500000','13455');
    // await billPayPage.checkBalance();
    // await billPayPage.clickOnBillPayLink();
    // await billPayPage.payBill('user','3rd St','cairo','egypt','12478','01144889955','123456789','123456789','3600000','13455');
 
await accountsOverviewPage.countTableRows();
    // await page.pause(); 

})