import homePage from '../pages/homePage'
import contact from '../pages/contact'
import aboutUs from '../pages/aboutUs'
import logIn from '../pages/logIn'
import singUp from '../pages/singUp'
import cart from '../pages/cart'

  describe('Login and Sign-up',function(){

    let userDetails
    beforeEach(function(){
        homePage.open()
        homePage.verifyPageLoad()
        cy.fixture('logIn').then ((user) =>{
            userDetails = user
          })
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