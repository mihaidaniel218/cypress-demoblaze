import homePage from '../pages/homePage'

class Cart {

    get placeOrder (){
        return cy.get("div:nth-child(7) button.btn.btn-success:nth-child(3)")
    }
    get phoneName(){
        return cy.get("h2.name")
    }
    

    get addToTheCart(){
        return cy.get('[onclick*="addToCart(1)"]')
    }
    get addToTheCart2(){
        return cy.get('[onclick*="addToCart(2)"]')
    }
    get addToTheCart3(){
        return cy.get('[onclick*="addToCart(3)"]')
    }
    get firstProduct(){
        return cy.get(".row div.col-lg-4:nth-child(2)")
    }
    get cartContainer(){
        return cy.get(".table-responsive")
    }
    get cartContainerElement(){
        return cy.get("#tbodyid > tr:nth-child(1)") 
    }
    get articleOneNameInConteiner(){
        return cy.get("#tbodyid > tr > td:nth-child(2)")
    }
    get articleTwoNameInConteiner(){
        return cy.get("#tbodyid > tr:nth-child(2) > td:nth-child(2)")
    }
    get articleThreeNameInConteiner(){
        return cy.get("#tbodyid > tr:nth-of-type(3) > td:nth-of-type(2)")
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
        this.articleOneNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto)=>{
            expect(texto).to.contain("Samsung galaxy s6")
        })
    }
    
    selectMultipleArticles(){
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
          this.articleOneNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto)=>{
              expect(texto).to.contain("Samsung galaxy s6")
          })
          homePage.open()
          homePage.verifyPageLoad()
          // Add Nokia Lumia 1520
          homePage.devicesNames.each(($el) => {
            let vest = $el.text()
          if(vest.includes('Nokia lumia 1520')){
              cy.wrap($el).click()
          }
        })

        this.phoneName.should('exist').and('be.visible')
        this.addToTheCart2.should('exist').and('be.visible').click()
        homePage.cartNavOption.scrollIntoView().should('exist').and('be.visible').click()
    
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });
            this.cartContainer.should('exist').and('be.visible').and('have.length',1)
            this.articleTwoNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto2)=>{
                //expect(texto2).to.contain("Nokia lumia 1520")
            })

        // Add Nexus 6
            homePage.open()
            homePage.verifyPageLoad()
       homePage.devicesNames.each(($el) => {
        let vest = $el.text()
      if(vest.includes('Nexus 6')){
          cy.wrap($el).click()
      }
    })

    this.phoneName.should('exist').and('be.visible')
    this.addToTheCart3.should('exist').and('be.visible').click()
    homePage.cartNavOption.scrollIntoView().should('exist').and('be.visible').click()

    cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added');
    });
        this.cartContainer.should('exist').and('be.visible').and('have.length',1)
        this.articleThreeNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto3)=>{
            //expect(texto3).to.contain("Nexus 6")
        })


      }

      selectOneArticleMultipleTimes(){
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
          this.articleOneNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto)=>{
              expect(texto).to.contain("Samsung galaxy s6")
          })
// Add second Galaxy S6
          homePage.open()
          homePage.verifyPageLoad()
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
            this.articleOneNameInConteiner.should('exist').and('be.visible').invoke('text').then((texto)=>{
                expect(texto).to.contain("Samsung galaxy s6")
            })

      }
    
}

module.exports = new Cart()