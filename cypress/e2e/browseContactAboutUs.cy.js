import homePage from '../pages/homePage'
import contact from '../pages/contact'
import aboutUs from '../pages/aboutUs'
import logIn from '../pages/logIn'
import singUp from '../pages/singUp'
import cart from '../pages/cart'

  describe('Browse Contact About Us',function(){

    let userDetails
    beforeEach(function(){
        homePage.open()
        homePage.verifyPageLoad()
        cy.fixture('logIn').then ((user) =>{
            userDetails = user
          })
    })

    describe("Browsing main categories", function(){
        it ("Browse main store categories",function(){
            homePage.browsingPhones()
            homePage.browsingLaptops()
            homePage.browsingMonitors()    
            homePage.browsingCategories()
        })
    })


    describe("Contact Section", function(){
        it("Sent successfully a message",function(){
            contact.openContactModalVerifyModal()
            contact.sendMessage()
        })
         it("Close the message modal",function(){
           contact.closeMessageModal()
        })
    })
  
    describe("About Us Section", function(){
        it ("Close successfully about us section",function(){
            aboutUs.openAboutUsModalVerifyModal()
            aboutUs.closeVideoModal()
        })
         it("Play about us video",function(){
            aboutUs.openAboutUsModalVerifyModal()
            aboutUs.playVideo()
        })
    })

    
    

})