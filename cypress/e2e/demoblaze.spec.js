import homePage from '../pages/homePage'
import contact from '../pages/contact'
import aboutUs from '../pages/aboutUs'
import logIn from '../pages/logIn'
import singUp from '../pages/singUp'
import cart from '../pages/cart'

describe('demoblaze Demo',function(){
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

   

    describe("Cart Section", function(){
        it("Add one article to the cart",function(){
            cart.selectOneArticle()
        })
        /* this are the test cases that i couldn't finish on time
         it ("Add the same article multiple time to the cart",function(){
            
        })
        it ("Add differetn articles to the cart",function(){
            
        })
        it ("Add differetn articles to the cart and delte one from the cart",function(){
            
        })
        it ("Place order with out any article",function(){
            
        })
        it ("Place order with with out name and creditcard ",function(){
            
        })

        it ("Place order with with only name and creditcard ",function(){
            
        })

        it ("Close successfully the place order modal ",function(){
            
        })
        */
    })


    describe("Log in Section", function(){
        it("Log in successfully with and already created user",function(){
            logIn.logInModalVerifyModal()
            logIn.login(userDetails.SuccessfullUser.user, userDetails.SuccessfullUser.password)
            logIn.successfulllogIn(userDetails.SuccessfullUser.user)
        })
         it("Log in with and existing user with wrong password",function(){
            logIn.logInModalVerifyModal()
            logIn.login(userDetails.faillUser.user,userDetails.faillUser.password)
            logIn.failLogin()
        })
        it("Try to log in with a non existing user",function(){
            logIn.logInModalVerifyModal()
            logIn.nonUserLogIn()
        })

        it("Close log in modal",function(){
            logIn.logInModalVerifyModal()
            logIn.closeLogInModal()
        })
    })

    describe("sing Up up Section", function(){
        it("Create a new user and verify the log in",function(){
            singUp.singUpModalVerifyModal()
            singUp.singUp()

        })
         it("Try to create a new user with and existing user",function(){
            singUp.singUpModalVerifyModal()
            singUp.failSigIn(userDetails.SuccessfullUser.user, userDetails.SuccessfullUser.password)
        })

        it("Close sing up modal",function(){
            singUp.singUpModalVerifyModal()
            singUp.closeLogInModal()
        })
        
    })


})