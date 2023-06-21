import emailNameChanger from "../utils/email-name-changer.js";

export class PopupUI {

    constructor(user, message) {

        this.user = user;
        this.message = message;

    }


    make(){

        return (
            
            `
        

            <div id="popup" role="dialog" aria-label="pop-up affichant un message">

           
                
                    <p> Salut ${ emailNameChanger(this.user.email)}</p
                    <p>${this.message}</p>
                    <span aria-label="auteur du message">l'Equipe de oFig</span



            </div>


        
    
        `
        )


    }


}