d
class InputUI {

    constructor(input){

        this.input = input;

    }


    make(){


        return(

            `
               <div class="delivery-form__input-container">
               
                <label for="${this.input.id}">
                    ${this.input.label}
                </label>

                <input 
                    pattern="${this.input.pattern}">
                    type="${this.input.type}"
                    name="${this.input.name}"
                    id="${this.input.name}"
                    placeholder="${this.input.placeholder}"
                    title="${this.input.hint}"
                    required
                >

               
               </div>
            
            
            `

        )
    }


}



export class DeliveryFormUI {


    text = {

        name: "details",
        id:"details",
        class:"delivery-form__input-container__textarea",
        placeholder: "Entrez tout type d'information utile",
        hint:"ex: le numéro de votre interphone",
        pattern:"[a-zA-Z0-9, ]{0,100}",
        label:"interphone, bâtiment, etc."

    }

    inputs = [

        {

            name: "street",
            id:"street",
            class:"delivery-form__input-container__input",
            type: "text",
            placeholder: "Entrez votre rue",
            hint:"ex: 1 rue des Cygnes",
            pattern:"[a-zA-Z0-9, ]{10,25}",
            label:"Rue"
        },

        {

            name: "postal",
            id:"postal",
            class:"delivery-form__input-container__input",
            type: "text",
            placeholder: "Entrez votre code postal",
            hint: "ex: 92130",
            pattern: "\d{5,5}",
            label:"Code postal"
        },


        {
            name: "city",
            id:"city",
            class:"delivery-form__input-container__input",
            type: "text",
            placeholder: "Entrez votre ville",
            hint: "ex: Meudon",
            pattern: "[a-zA-Z0-9\- ]{2,10}",
            label:"Ville"
        },







    ]




    
    make(){


        return(

            `
            <section id="delivery-section" aria-describedby="delivery-section__title">

                <h3 id="delivery-section__title">Delivery Form</h3>


                <form id="delivery-form">



                    <section  id="delivery-form__section-delivery-place" aria-describedby="delivery-form__section-delivery-place-title">
                    
                       <h4 id="delivery-form__section-delivery-place-title"> Où souhaitez-vous être livré ? </h4>


                    
                    </section>

                    <section  id="delivery-form__section-delivery-options" aria-describedby="delivery-form__section-delivery-options-title">
                    
                        <h4 id="delivery-form__section-delivery-options-title"> Options </h4>


                 
                    </section>

                    <section  id="delivery-form__section-delivery-address" aria-describedby="delivery-form__section-delivery-address-title">
                    
                    
                        <h4 id="delivery-form__section-delivery-address-title"> Options </h4>


                        <div class="delivery-form__section-delivery-address__inputs-container">
                        
                            ${this.inputs.map(input => new InputUI(input))}
                        
                        </div>

             
                    </section>


                    <section id="delivery-form__section-delivery-details" aria-describedby="delivery-form__section-delivery-details-title">



                        <h4 id="delivery-form__section-delivery-details-title"> Informations complémentaires </h4>


                        <div class="delivery-form__section-delivery-details__input-container" aria-label="conteneur du champs pour ajouter des informations utiles">
                        
                            <label for="${this.text.id}">${this.text.label}</label>
                            <textarea 
                            class="${this.text.class}" 
                            id="${this.text.id}"
                            placeholder="${this.text.placeholder}"
                            title="${this.text.hint}"
                            pattern="${this.text.pattern}"
                            ></textarea>
                    
                        </div>




                    </section>


                    <div id="delivery-form__section-delivery-price-container" aria-label="conteneur du montant total à régler">

                        <span>Montant total à régler : </span>
                        <span id="delivery-form__section-delivery-price-container___price"></span>


                    </div>


                    <div id="delivery-form__section-delivery-buttons-container" aria-label="conteneur des bouttons d'action : continuer vos achats et valider et payer">

                        <button id="delivery-form__section-delivery-buttons-container__keep-buying-button">Continuer vos achats</button>

                        <button id="delivery-form__section-delivery-buttons-container__pay-button">Valider et payer</button>
                    </div>
                
                    


                </form>




            </section>

            `


        )




    }




}