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

   
    describe("Cart Section", function(){

         it("Add one article to the cart",function(){
             cart.selectOneArticle()
         })
         it ("Add different articles to the cart",function(){
            cart.selectMultipleArticles()
        })
        it ("Add same article to cart multiple times",function(){
            cart.selectOneArticleMultipleTimes()
        })
         it ("Add different articles to the cart and delete one from the cart",function(){
             cart.selectMultipleArticlesDeleteOne()
         })
        it ("Place order with one or more articles",function(){
            cart.selectMultipleArticlesBuyCart()
            
        })

    })

})