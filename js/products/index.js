import apiService from "../service/index.js"
import { ArticleUI } from "../factory/articleUI.js";
import { PopupUI } from "../factory/popupUI.js";
const articlesContainer = document.getElementById('articles-container');
const logoutIcon =   document.getElementById('logout-icon');
const basketIcon =   document.getElementById('basket-icon');
const basketCounter =  document.getElementById('basket-products-count')
const headerContainer = document.getElementById('body-header__main-title-container');


export default class Products {

    user = '';


    async init (){


        const cachedUser = localStorage.getItem('user')
        const userJS = JSON.parse(cachedUser)
        this.user = userJS
        

        if(!cachedUser){
            window.location.pathname ='/ofog'
            return
        }
       
        
        const cachedBasket = localStorage.getItem('basket')

        if(cachedBasket){


            let updatedUserBasket =  apiService.fetchUserBasketById(this.user.id)

            let figurineCount = 0;

            updatedUserBasket.data.forEach(fig => {

              figurineCount += fig.quantity 

              console.log('fig.quantity: ', fig.quantity)

            })

            basketCounter.innerHTML = figurineCount
        

      

        }



        const figurines = await apiService.fetchFigurinesFromDB() 
        
        figurines.forEach(figurine => {
            
            const articleUI = new ArticleUI(figurine)
            articlesContainer.innerHTML += articleUI.make()

    
        });

        if(figurines.length){

            const addToCardButtons = document.getElementsByClassName('add-to-cart-button')

            console.log(addToCardButtons)

            const addButtonsArray = Array.from(addToCardButtons)

            console.log(addButtonsArray)

            addButtonsArray.forEach(button => {


                button.addEventListener('click', () => {

                    console.log('button dataset.id', button.dataset.id)

                    apiService.updateUserBasketById(this.user.id, button.dataset.id, 'create')

                   let updatedUserBasket =  apiService.fetchUserBasketById(this.user.id)

                   let figurineCount = 0;

                   updatedUserBasket.data.forEach(fig => {

                     figurineCount += fig.quantity 


                   })

                   basketCounter.innerHTML = figurineCount
               

                })

            })

            
        }



        const popupUI = new PopupUI(this.user, "N'hésitez pas à ajouter des articles à votre petit panier")
        headerContainer.innerHTML += popupUI.make()

        setTimeout(() => {
            headerContainer.removeChild(headerContainer.lastChild)
        }, 5000)


        logoutIcon.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.pathname = '/ofog';
        })

        basketIcon.addEventListener('click', () => {

            window.location.pathname = 'ofog/views/basket.html';
        })



    }
   


}
