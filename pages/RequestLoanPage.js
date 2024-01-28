const { expect } = require('@playwright/test'); 
exports.RequestLoanPage = class RequestLoanPage{ 
    constructor(page){ 
        this.page = page ; 
        this.requestLoanLink= page.getByRole('link', { name: 'Request Loan' });

        this.loanAmountField=page.locator('#amount');
        this.downPaymentField =page.locator('#downPayment');
        this.fromAccountField= page.locator('#fromAccountId');
        this.applyButton= page.getByRole('button', { name: 'Apply Now' });
        this.loanStatus= page.locator('id=loanStatus');  
        //  id="loanStatus" //*[@id="loanStatus"]
        this.approvalStatusMessage =page.getByText('Congratulations, your loan'); 
        this.denielStatusMessage = page.getByText('You do not have sufficient'); 
       
    } 
    async clickOnRequestLoan(){ 
         
    await this.requestLoanLink.click(); 

    } 
    async applyForValidloan(loanAmount, downPaymentAmount, account ){ 
        await this.loanAmountField.fill(loanAmount); 
        await this.downPaymentField.fill(downPaymentAmount); 
        await this.fromAccountField.selectOption({ value: account});
        await this.applyButton.click();  

        const status= await  this.loanStatus.textContent(); 
        // console.log(status)    
            await expect.soft( this.loanStatus).toContainText("Approved");
            await expect.soft(this.approvalStatusMessage).toContainText('Congratulations, your loan has been approved.');
    }
           
            async applyForInvalidLoan(loanAmount, downPaymentAmount, account ){  
                 
                await this.loanAmountField.fill(loanAmount); 
                await this.downPaymentField.fill(downPaymentAmount); 
                await this.fromAccountField.selectOption({ value: account});
                await this.applyButton.click();  
        

                const status= await this.loanStatus.textContent(); 

                    await expect.soft( this.loanStatus).toContainText('Denied');
                    await expect.soft(this.denielStatusMessage).toContainText('You do not have sufficient funds for the given down payment.');
        
    
                console.log( status + 'assertion passed');
        
            }

        }
        
       