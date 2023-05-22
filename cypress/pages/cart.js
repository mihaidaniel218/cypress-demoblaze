import homePage from '../pages/homePage'

class Cart {

    get placeOrder (){
        return cy.get("div:nth-child(7) button.btn.btn-success:nth-child(3)")
    }
    get phoneName(){
        return cy.get("h2.name")
    }
    

    get addToTheCart(){
        return cy.get('[onclick="addToCart(1)"]')
    }
    get firstProduct(){
        return cy.get(".row div.col-lg-4:nth-child(2)")
    }
    get cartContainer(){
        return cy.get(".table-responsive")
    }

    get articleNameInConteiner(){
        return cy.get(".table-responsive .success td:nth-child(2)")
    }
    
    [onclick="addToCart(1)"]
    
    selectOneArticle(){
      homePage.devicesNames.each(($el) => {
        let vest = $el.text()
        if(vest.includes('Samsung galaxy s6')){
            cy.wrap($el).click()
        } 
    })
    this.phoneName.should('exist').and('be.visible')
    this.addToTheCart.should('exist').and('be.visible').click()
    homePage.cartNavOption.scrollIntoView().should('exist').and('be.visible').click()

    cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added');
    });
        this.cartContainer.should('exist').and('be.visible').and('have.length',1)
        this.articleNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto)=>{
            expect(texto).to.contain("Samsung galaxy s6")
        })
    }
    
    
}

module.exports = new Cart()