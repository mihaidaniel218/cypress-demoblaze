const phoneNames = []
const laptopNames = []
const monitorNames = []

class HomePage {
    get productNameLogo(){
        return cy.get("#nava")
    }

    get navBar(){
        return cy.get("#navbarExample")
    }
    get homeNavOption(){
        return cy.get("nav > div > ul > li:first-child")
    }
    get contactNavOption(){
        return cy.get("nav > div > ul > li:nth-child(2)")
    }
    get aboutUsNavOption(){
        return cy.get("nav > div > ul > li:nth-child(3)")
    }
    get cartNavOption(){
        return cy.get("#cartur")
    }
    get logInNavOption(){
        return cy.get("#login2")
    }
    get signUpNavOption(){
        return cy.get("#signin2")
    }
    get carrusel(){
        return cy.get("#carouselExampleIndicators")
    }
    get categoriesContainer(){
        return cy.get(".list-group")
    }
    get categoriesTitle(){
        return cy.get("#cat")
    }
    get phonesCategorie(){
        return cy.get(".list-group-item:nth-child(2)")
    }
    get laptopsCategorie(){
        return cy.get(".list-group-item:nth-child(3)")
    }
    get monitorsCategorie(){
        return cy.get(".list-group-item:nth-child(4)")
    }
    get devicesForSellContainer(){
        return cy.get("#tbodyid")
    }
    get previousBtn(){
        return cy.get("#prev2")
    } 
    get nextBtn(){
        return cy.get("#next2")
    }
    get aboutUsTitle(){
        return cy.get(".row div:first-child div.thumbnail div.caption h4")
    }
    get aboutusTxt(){
        return cy.get(".row div:first-child div.thumbnail div.caption > p:nth-child(2)")
    }
    get getInTOuchTitle(){
        return cy.get(".row div:nth-child(2) div.thumbnail div.caption h4")
    }
    get adddrestxt(){
        return cy.get(".row div:nth-child(2) div.thumbnail div.caption p:nth-child(2)")
    }
    get phoneNumbre(){
        return cy.get(".row div:nth-child(2) div.thumbnail div.caption p:nth-child(3)")
    }
    get emailAddress(){
        return cy.get(".row div:nth-child(2) div.thumbnail div.caption p:nth-child(4)")
    }
    get foorterLogo(){
        return cy.get(".row div:nth-child(3) div.thumbnail div.caption ")
    }
    get devicesNames(){
        return cy.get(".col-lg-4.col-md-6.mb-4 .card-title .hrefch")
    }

    
    open(){
        cy.visit("https://www.demoblaze.com")
        cy.title().should('eq','STORE')
        cy.wait(1000)
    }

    verifyPageLoad(){
        this.productNameLogo.should('exist').and('be.visible')
        this.navBar.should('exist').and('be.visible')
        this.homeNavOption.should('exist').and('be.visible')
        this.contactNavOption.should('exist').and('be.visible')
        this.aboutUsNavOption.should('exist').and('be.visible')
        this.aboutUsNavOption.should('exist').and('be.visible')
        this.cartNavOption.should('exist').and('be.visible')
        this.logInNavOption.should('exist').and('be.visible')
        this.signUpNavOption.should('exist').and('be.visible')
        this.carrusel.should('exist').and('be.visible')
        this.categoriesContainer.should('exist').and('be.visible')
        this.categoriesTitle.should('exist').and('be.visible')
        this.phonesCategorie.should('exist').and('be.visible')
        this.laptopsCategorie.should('exist').and('be.visible')
        this.monitorsCategorie.should('exist').and('be.visible')
        this.devicesForSellContainer.should('exist').and('be.visible')
        this.previousBtn.should('exist').and('be.visible')
        this.nextBtn.should('exist').and('be.visible')
        this.aboutUsTitle.scrollIntoView().should('exist').and('be.visible')
        this.aboutusTxt.scrollIntoView().should('exist').and('be.visible')
        this.getInTOuchTitle.scrollIntoView().should('exist').and('be.visible')
        this.adddrestxt.scrollIntoView().should('exist').and('be.visible')
        this.phoneNumbre.scrollIntoView().should('exist').and('be.visible')
        this.emailAddress.scrollIntoView().should('exist').and('be.visible')
        this.foorterLogo.scrollIntoView().should('exist').and('be.visible')
        
    }

    browsingPhones(){
        this.phonesCategorie.click()
        this.devicesForSellContainer.should('exist').and('be.visible')
        this.devicesNames.should('have.length',7).each(($el) => {
            let phoneName = $el.text()
            phoneNames.push(phoneName)
            }).then(() => {
            // here is where the extracted names are compere to the json
            cy.fixture('mockData/phones.json').then((phones) => {
                expect(phoneNames).to.have.members(phones)
            })
        })
    }
    browsingLaptops(){
        this.laptopsCategorie.click()
        this.devicesForSellContainer.should('exist').and('be.visible')
        this.devicesNames.should('have.length',6).each(($el) => {
            let laptopName = $el.text()
            laptopNames.push(laptopName)
            }).then(() => {
            // here is where the extracted names are compere to the json
            cy.fixture('mockData/laptop.json').then((laptop) => {
                expect(laptopNames).to.have.members(laptop)
            })
        })
        
    }
    browsingMonitors(){
        this.monitorsCategorie.click()
        this.devicesForSellContainer.should('exist').and('be.visible')
        this.devicesNames.should('have.length',2).each(($el) => {
            let laptopName = $el.text()
            monitorNames.push(laptopName)
            }).then(() => {
            // here is where the extracted names are compere to the json
            cy.fixture('mockData/monitor.json').then((monitor) => {
                expect(monitorNames).to.have.members(monitor)
            })
        })
        
    }
    browsingCategories(){
        this.categoriesTitle.click()
        this.devicesForSellContainer.should('exist').and('be.visible')
        this.devicesNames.should('have.length',9)
        this.previousBtn.should('exist').and('be.visible')
        this.nextBtn.should('exist').and('be.visible').click()
        this.devicesNames.should('have.length',6)
        this.nextBtn.should('not.be.visible')
        this.previousBtn.should('exist').and('be.visible').click()
        this.devicesNames.should('have.length',9)
    }

}

module.exports = new HomePage()