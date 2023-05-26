import homePage from '../pages/homePage'
import { faker } from '@faker-js/faker';

class LogIn {
    get logInTModalitle(){
        return cy.get("#logInModalLabel")
    }
    get closewithXBtn(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show button.close > span:nth-child(1)").should('exist').and('be.visible')
    }
    get userNameTitle(){
        return cy.get("div.modal.fade.show:nth-child(3) div.modal-body div.form-group:nth-child(1) label.form-control-label")
    }
    get userInput(){
        return cy.get("#loginusername")
    }
    get passwordTitle(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(3) div.modal-body div.form-group:nth-child(2) > label.form-control-label")
    }
    get userPassword(){
        return cy.get("#loginpassword")
    }

    get closeBtn(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(3)  button.btn.btn-secondary:nth-child(1)")
    }
    get logInBtn(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(3) button.btn.btn-primary:nth-child(2)")
    }
    get welcomeUser(){
        return cy.get("#nameofuser")
    }


    logInModalVerifyModal(){
        homePage.logInNavOption.scrollIntoView().should('exist').and('be.visible').click()
        this.logInTModalitle.should('exist').and('be.visible')
        this.closewithXBtn.should('exist').and('be.visible')
        this.userNameTitle.should('exist').and('be.visible')
        this.userInput.should('exist').and('be.visible')
        this.passwordTitle.should('exist').and('be.visible')
        this.userPassword.should('exist').and('be.visible')
        this.closeBtn.should('exist').and('be.visible')
        this.logInBtn.should('exist').and('be.visible')
    }

    login(User,Password){
        this.userInput.type(User)
        this.userPassword.type(Password)
        this.logInBtn.should('exist').and('be.visible').click()
    }

    successfulllogIn(User){
        homePage.logInNavOption.should('not.be.visible')
        this.welcomeUser.should('exist').and('be.visible')
        this.welcomeUser.invoke('text').then((welcome) =>{
            expect(welcome).to.contains('Welcome '+User)
        })
    }

    failLogin(){
        homePage.logInNavOption.should('be.visible')
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Wrong password.');
            });  
    }

    nonUserLogIn(){
        this.userInput.type(faker.name.firstName())
        this.userPassword.type(faker.internet.password())
        this.logInBtn.should('exist').and('be.visible').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(' User does not exist.');
        });
    }

    

    closeLogInModal(){
        this.closewithXBtn.click()
        this.logInModalVerifyModal()
        this.closeBtn.should('exist').and('be.visible').click()
        this.logInTModalitle.should('not.be.visible')
    }
    
}

module.exports = new LogIn()