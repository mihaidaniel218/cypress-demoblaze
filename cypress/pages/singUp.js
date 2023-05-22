import homePage from '../pages/homePage'
import { faker } from '@faker-js/faker';
import logIn from'../pages/logIn'

class SingUp {
    get logInTModalitle(){
        return cy.get("#signInModalLabel")
    }
    get closewithXBtn(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show button.close > span:nth-child(1)")
    }
    get userNameTitle(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(2) div.form-group:nth-child(1) > label.form-control-label")
    }
    get userInput(){
        return cy.get("#sign-username")
    }
    get passwordTitle(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(2) form:nth-child(1) div.form-group:nth-child(2) > label.form-control-label")
    }
    get userPassword(){
        return cy.get("#sign-password")
    }

    get closeBtn(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(2) button.btn.btn-secondary:nth-child(1)")
    }
    get singUpBtn(){
        return cy.get(".modal-open:nth-child(2) div.modal.fade.show:nth-child(2) button.btn.btn-primary:nth-child(2)")
    }


    singUpModalVerifyModal(){
        homePage.signUpNavOption.scrollIntoView().should('exist').and('be.visible').click()
        this.logInTModalitle.should('exist').and('be.visible')
        this.closewithXBtn.should('exist').and('be.visible')
        this.userNameTitle.should('exist').and('be.visible')
        this.userInput.should('exist').and('be.visible')
        this.passwordTitle.should('exist').and('be.visible')
        this.userPassword.should('exist').and('be.visible')
        this.closeBtn.should('exist').and('be.visible')
        this.singUpBtn.should('exist').and('be.visible')
    }

    singUp(){
        this.userInput.type(faker.name.firstName())
        this.userPassword.type(faker.internet.password())
        this.singUpBtn.click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.');
        });
    }

    failSigIn(Usename,Password){

        this.userInput.type(Usename)
        this.userPassword.type(Password)
            cy.on('window:alert', (str) => {
                expect(str).to.equal('This user already exist.');
            });  
            homePage.signUpNavOption.scrollIntoView().should('exist').and('be.visible')
    }
    

    closeLogInModal(){
        this.closewithXBtn.click()
        this.singUpModalVerifyModal()
        this.closeBtn.click()
        this.logInTModalitle.should('not.be.visible')
    }
    
}

module.exports = new SingUp()