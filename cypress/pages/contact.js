import homePage from '../pages/homePage'
import { faker } from '@faker-js/faker';

class Contact {
    get newMessageTitle (){
        return cy.get("#exampleModalLabel")
    }
    get contactEmailTitle(){
        return cy.get(".modal-body > form div:first-child label:contains('Contact Email:')")
    }
    get emailInput(){
        return cy.get("#recipient-email")
    }
    get contactNameTitle(){
        return cy.get(".modal-body > form div:nth-child(2) label:contains('Contact Name:')")
    }
    get contactNameInput(){
        return cy.get("#recipient-name")
    }
    
    get messageTitle(){
        return cy.get(".modal-body > form div:nth-child(3) label:contains('Message:')")
    }
    get messageInput(){
        return cy.get("#message-text")
    }
    get closeBtn (){
        return cy.get("div.modal.fade.show:nth-child(1) button.btn.btn-secondary:nth-child(1)")
    }
    get sendMessageBtn(){
        return cy.get(".modal-footer button:contains('Send message')")
    }
    get closeWithXBtn(){
        return cy.get("body.modal-open:nth-child(2) div.modal.fade.show:nth-child(1) span:nth-child(1)")
    }

    
    
    openContactModalVerifyModal(){
        homePage.contactNavOption.scrollIntoView().should('exist').and('be.visible').click()
        this.newMessageTitle.should('exist').and('be.visible')
        this.contactEmailTitle.should('exist').and('be.visible')
        this.emailInput.should('exist').and('be.visible')
        this.contactNameTitle.should('exist').and('be.visible')
        this.contactNameInput.should('exist').and('be.visible')
        this.messageTitle.should('exist').and('be.visible')
        this.messageInput.should('exist').and('be.visible')
        this.closeBtn.should('exist').and('be.visible')
        this.sendMessageBtn.should('exist').and('be.visible')
    }

    sendMessage(){
        this.emailInput.type(faker.name.firstName())
        this.contactNameInput.type(faker.internet.email())
        this.messageInput.type(faker.lorem.lines())
        this.sendMessageBtn.click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Thanks for the message!!');
        });
        this.newMessageTitle.should('not.be.visible')
    }

    closeMessageModal(){
        this.openContactModalVerifyModal()
        this.closeBtn.should('exist').and('be.visible').click()
        this.openContactModalVerifyModal()
        this.closeWithXBtn.should('exist').and('be.visible').click()
    }
}

module.exports = new Contact()