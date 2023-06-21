import Basket from "./basket/index.js";
import Home from "./home/index.js";
import Products from "./products/index.js";

const routes = [


    {
        path: "/index.html",
        component: Home
    },
    {
        path:'/views/products.html',
        component: Products
    },
    {
        path:'/views/basket.html',
        component: Basket
    }

]



export const router = () => {

    console.log('window.location', window.location.pathname);

    if(window.location.pathname === routes[0].path || window.location.pathname === "/ofog/"){

       const home = new Home()
       home.init()
    }

    if(window.location.pathname === routes[1].path || window.location.pathname.endsWith('products.html/')){

    
        const products = new Products()
        products.init()
    }

    if(window.location.pathname === routes[2].path || window.location.pathname.endsWith('basket.html/')){

        const basket = new Basket()
        basket.init()
    }






}