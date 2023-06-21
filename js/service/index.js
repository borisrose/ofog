export default {
    /*exportable nameless object */ 

    async fetchFigurinesFromDB(){

        const data =  await(await fetch('../database.json')).json()
        console.log('data', data.figurines)
        return data.figurines
    },


    async fetchFigurineFromDBById(identifier){

        let id = typeof identifier === 'string' ? parseInt(identifier,10) : identifier;

        const data =  await(await fetch('../database.json')).json()

        const figurines = data.figurines

        const oneFigurine = figurines.find(f => f.id === id)

        return oneFigurine


    },

    async fetchUsersFromDB(){

        const data =  await(await fetch('database.json')).json()
        console.log('data', data.users)
        return data.users
    },

    fetchUserBasketById(id){

        const rawBasket = localStorage.getItem('basket')

        const basket = JSON.parse(rawBasket)

        if(!rawBasket){

            return []

        }
      
        const userBasket = basket.users.find(user => user.id === id)
      
        return userBasket




    },

    updateUserBasketById(userId, identifier, action){


        let productId = typeof identifier === 'string' ? parseInt(identifier,10) : identifier;

        console.log('productId', productId)



        const rawBasket = localStorage.getItem('basket')
        

        if(rawBasket){

            let basket = JSON.parse(rawBasket)
           
            console.log('basket', basket)

            const exUser = basket.users.find(user => user.id === userId)

            if(exUser){

                console.log('user found', exUser)
            }

            if(action === 'delete'){

                const productToUpdate = exUser.data.filter(f => f.figurine.id === productId)
                productToUpdate.quantity -= 1;

                if(productToUpdate.quantity === 0){

                    let user = {
    
                        id: userId,
                        data: [
                            
                            ...othersProducts,
                        ]
                    }
    
    
                    const restBasket = basket.users.filter(user => user.id !== userId)
    
                    let updatedBasket = {
    
                        "users": [
                          ...restBasket,
                          user,
                        ]
                    }
    
    
                    localStorage.removeItem('basket')
                    localStorage.setItem('basket', JSON.stringify(updatedBasket))
    
                    return

                }

                const othersProducts = exUser.data.filter(f => f.figurine.id !== productId)
                

                let user = {
    
                    id: userId,
                    data: [
                        
                        ...othersProducts,
                        productToUpdate
                    ]
                }



                const restBasket = basket.users.filter(user => user.id !== userId)

                let updatedBasket = {

                    "users": [
                      ...restBasket,
                      user,
                    ]
                }

            


                localStorage.removeItem('basket')
                localStorage.setItem('basket', JSON.stringify(updatedBasket))

                return


            }

            if(action === "create"){

                const productToUpdate = exUser.data.find(f => f.figurine.id === productId)

                if(productToUpdate){


                    productToUpdate.quantity += 1;




                    const othersProducts = exUser.data.filter(f => f.figurine.id !== productId)
      
    
    
                    let user;
                    if(othersProducts.length){
    
                         user = {
        
                            id: userId,
                            data: [
                                
                                ...othersProducts,
                                productToUpdate
                            ]
                        }
    
    
    
                    }
                    else {
    
                         user = {
        
                            id: userId,
                            data: [
                                
                                productToUpdate
                            ]
                        }
    
                      
    
    
                    }
    
    
                    const restBasket = basket.users.filter(user => user.id !== userId)
    
                    let updatedBasket = {
    
                        "users": [
                          ...restBasket,
                          user,
                        ]
                    }
    
    
                    localStorage.removeItem('basket')
                    localStorage.setItem('basket', JSON.stringify(updatedBasket))
    
                    return
    



                }
                else {


                    const othersProducts = exUser.data.filter(f => f.figurine.id !== productId)

                    if(othersProducts.length){

                        (async() => {

                            let oneFigurine;
                            oneFigurine = await this.fetchFigurineFromDBById(productId)
        
            
                            let user = {
                
                                id: userId,
                                data: [
                                    ...exUser.data,
                                    {
                                        
                                        figurine: oneFigurine,
                                        quantity: 1
                                    
                                    }
                                ]
                            }
            
                            const restBasket = basket.users.filter(user => user.id !== userId)
    
                            let updatedBasket = {
            
                                "users": [
                                ...restBasket,
                                user,
                                ]
                            }
                
                
                            localStorage.removeItem('basket')
                            localStorage.setItem('basket', JSON.stringify(updatedBasket))
                
                             
                           
            
            
            
            
                        })()



                    }
                   
                  

                }


            }


        



        }

        if(!rawBasket){

      

            (async() => {

                let oneFigurine;
                oneFigurine = await this.fetchFigurineFromDBById(productId)

                console.log('one figurine ', oneFigurine)

                let user = {
    
                    id: userId,
                    data: [
                        
                        {
                            
                            figurine: oneFigurine,
                            quantity: 1
                        
                        }
                    ]
                }

                let newBasket = {

                    "users": [
                        user
                    ]
                }
    
                console.log('basket-user first-push', user)

                localStorage.setItem('basket', JSON.stringify(newBasket))
                
               




            })()


           
        }

    }


}