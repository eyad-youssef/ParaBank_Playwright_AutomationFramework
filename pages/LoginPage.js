const { expect } = require('@playwright/test');
exports.LoginPage=
class LoginPage{ 

    constructor(page){
        this.page = page ; 
       
        this.usernameTextfield = page.locator('input[name="username"]'); 
        this.passwordTextField= page.locator('input[name="password"]');
        this.loginButton=  page.getByRole('button', { name: 'Log In' }); 
       
 
    } 
async login(username,password){  
        
              await this.usernameTextfield.fill(username);
              await this.passwordTextField.fill(password); 
              
              await expect.soft(this.loginButton).toBeEnabled()
              await expect.soft(this.loginButton).toContainText('Log In');
              await this.loginButton.click();  
            
 } 
  

}
 
