class BasketItemUI {


    constructor(item){

        this.item = item;
    }


    make(){

        return(
        
            `

            <div class="basket-item" aria-label="basket item">
            
                <div class="basket-item__figurine-container">
                    ${this.item.figurine.name}
                </div>
                <div class="basket-item__unitary-price-container">
                    ${this.item.figurine.newPrice}
                </div>
                <div class="basket-item__quantity-container">
                    <label for="basket-item__quantity-input"></label>
                    <input id="basket-item__quantity-input" type="number" placeholder="${this.item.quantity}"/>
                    <button class="basket-item__delete-button" data-id="${this.item.figurine.id}">supprimer</button>
                </div>
            

            </div>


            `
        )            

    }

}


export class BasketUI {


    constructor(products){
        this.products = products;
    }


    make(){

        if(!this.products.data.length){

            console.log('in none')
            return(
                `
                <div id="basket-container" class="basket-container--no-article">

                    <p> Vous n'avez ajouté aucun article dans votre panier </p>

                    <button id="back-to-products-page-button"> Revenir à la page des produits </button>
                
                </div>

                `
            )
        }


        return(


            `
                <section id="basket-section" aria-describedby="basket-section__title">

                    <h3 id="basket-section__title"> Votre panier </h3>

                    <div class id="basket-container" aria-label="conteneur du panier et des informations connues sur ses éléments">

                        <div class="basket-container__titles-row" aria-label="ligne présentant les diverses catégories d'informations concernant les éléments du panier">

                            <div class="basket-container__title-box" aria-label="une des informations données sur les éléments du panier">

                                <span aria-label="Figurine"> Figurine </span>

                            </div>

                            <div class="basket-container__title-box" aria-label="une des informations données sur les éléments du panier">

                                <span aria-label="Prix unitaire"> Prix unitaire </span>

                            </div>


                            <div class="basket-container__title-box" aria-label="une des informations données sur les éléments du panier">

                                <span aria-label="Quantité"> Quantité </span>

                            </div>

                        </div>

                
                        <div class="basket-container__items-container"> 
                            ${this.products.data.map(prod => new BasketItemUI(prod).make())}
                        </div>

                        <div class="basket-container__total-amount-container">

                            <span aria-label="total de la commande">Total de la commande: </span>
                            <span id="basket-total-amount" aria-label="montant total en chiffres"> </span>

                        </div>
        

                    </div>
                </section>
            
            
            `



        )
    }




}