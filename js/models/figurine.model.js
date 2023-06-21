export default class Figurine {


    constructor(id,name,photoUrl, category, info, oldPrice, price){

        this.id = typeof id === 'number'? id : parseInt(id, 10);
        this.name = typeof name === 'string' ? name : null;
        this.photoUrl = typeof photoUrl ==='string'? photoUrl : null;
        this.category = typeof category ==='string'? category : null;
        this.info =  typeof info === 'string' ? info : null;
        this.oldPrice = oldPrice && typeof oldPrice === "number" ? oldPrice : "";
        this.price =  price && typeof price === 'number' ? price : parseFloat(price);
    
    }


}