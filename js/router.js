import Basket from "./basket/index.js";
import Home from "./home/index.js";
import Products from "./products/index.js";

const routes = [


    {
        path: "/PROJET_OFOG/index.html",
        component: Home
    },
    {
        path:'/PROJET_OFOG/views/products.html',
        component: Products
    },
    {
        path:'/PROJET_OFOG/views/basket.html',
        component: Basket
    }

]



export const router = () => {

    console.log('window.location', window.location)
    if(window.location.pathname === routes[0].path){

       const home = new Home()
       home.init()
    }

    if(window.location.pathname === routes[1].path){

        const products = new Products()
        products.init()
    }

    if(window.location.pathname === routes[2].path){

        const basket = new Basket()
        basket.init()
    }






}