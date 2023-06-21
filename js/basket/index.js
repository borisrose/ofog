import apiService from "../service/index.js"
import { BasketUI } from "../factory/basketUI.js";

const articlesContainer = document.getElementById('articles-container');
const logoutIcon =   document.getElementById('logout-icon');
const basketIcon =   document.getElementById('basket-icon');
const headerContainer = document.getElementById('body-header__main-title-container');
const basketItemsCountSpan = document.getElementById('basket-products-number-span');
const mainArticleContent = document.getElementById('main-article-content');
const basketCounter =  document.getElementById('basket-products-count')


/*

<div id="main-article-content">

<span id="basket-total-amount" aria-label="montant total en chiffres"> 197 €</span>

<span id="delivery-form__section-delivery-price-container___price"></span>

<button id="delivery-form__section-delivery-buttons-container__keep-buying-button">Continuer vos achats</button>

<button id="delivery-form__section-delivery-buttons-container__pay-button">Valider et payer</button>

*/

export default class Basket {

    user = "";
    basket;
  
    init(){ 


       
        const cachedUser = localStorage.getItem('user')
        const userJS = JSON.parse(cachedUser)
        this.user = userJS



        

        if(!cachedUser){
            window.location.pathname ='/ofog/'
            return
        }
       
        
        const rawbasket = localStorage.getItem('basket')

        if(rawbasket){


            this.basket =  apiService.fetchUserBasketById(this.user.id)

            let figurineCount = 0;

   

            this.basket.data.forEach(fig => {

              figurineCount += fig.quantity 

      

      

            })

            basketCounter.innerHTML = figurineCount
           
        

      

        }
        

      

    


        mainArticleContent.innerHTML += new BasketUI(this.basket).make() 

        
        if(!this.basket.data.length){

            basketItemsCountSpan.innerHTML = '0 article'
            const backToProductsButton = document.getElementById('back-to-products-page-button');
       
            backToProductsButton.addEventListener('click', () =>{

            window.location.pathname = '/ofog/views/products.html';

        })

           
        }
        else {

            let figurineCount = 0;


            let totalAmount = 0;
            const basketTotalAmount = document.getElementById('basket-total-amount')

            this.basket.data.forEach(fig => {

                figurineCount += fig.quantity 

         
                totalAmount += fig.quantity * fig.figurine.newPrice
  
              })
  
              basketCounter.innerHTML = figurineCount
          
  

            basketItemsCountSpan.innerHTML = `${figurineCount} articles`
            basketTotalAmount.innerHTML = `${totalAmount} €`
        }
      


        /*HANDLERS*/

        logoutIcon.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.pathname = '/ofog/';
        })

        basketIcon.addEventListener('click', () => {

            window.location.pathname = '/ofog/views/basket.html';
        })

        



    }






}