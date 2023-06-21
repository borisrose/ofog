import Figurine from "../models/figurine.model.js"

export class ArticleUI {

    constructor(figurine){
    
     
        this.figurine =  new Figurine(figurine.id, figurine.name, figurine.photoUrl, figurine.category,  figurine.info, figurine.oldPrice, figurine.newPrice);
    
    }

    make(){

        return(

            `
            
            <article class="figurine" aria-label="figurine">

                <div class="figurine-image-container" aria-label="figure image container">
                    <img src="${this.figurine.photoUrl}" alt="${this.figurine.name}"/>
                    <span aria-label="category">${this.figurine.category}</span>
                </div>


                <section class="figure-description-container" aria-describedby="figure-description-container-header">
                    <h3 class="figure-description-container-header"> ${this.figurine.name} </h3>
                    <p> ${this.figurine.info}</p>
                </section>


                <div class="figure-buy-button-price-container" aria-label="figure buy button and price container">

                    <button class="add-to-cart-button" data-id=${this.figurine.id}>
                        Ajouter au panier
                    </button>

                    <div class="figure-price-container" aria-label="figure price container">
                        <span aria-label="ex price" class="figure-price-container-span figure-price-container-span__barred">
                            ${this.figurine.oldPrice ? this.figurine.oldPrice : ""} ${this.figurine.oldPrice ? '€' : ''}
                        </span>
                        <span aria-label="new price" class="figure-price-container-span">
                         ${this.figurine.price} €
                        </span>
                    </div>

                </div>
        
            </article>
            
            
            `
        )



    }



}