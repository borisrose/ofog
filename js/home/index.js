import apiService from "../service/index.js"
import inputsChecker from "../utils/inputs-checker.js"
const inputs  = document.querySelectorAll('input')
const form = document.querySelector('form')



export default class Home {

    email = '';
    password = '';
  
    init(){

        const cachedUser = localStorage.getItem('user')

        if(cachedUser){
            window.location.pathname = '/views/products.html'
        }
    

        inputs.forEach((input) => {

            input.addEventListener('input', (e) => {

              

                if(e.target.name === 'email'){
                    const checkingResult = inputsChecker(e.target.value, 'email')
                    console.log('checkingResult', checkingResult)
                    this.email = e.target.value
                }

                if(e.target.name === 'password'){

                    const checkingResult = inputsChecker(e.target.value, 'password')
                    console.log('checkingResult', checkingResult)
                    this.password = e.target.value
                }
   
               

            })

        })

        form.addEventListener('submit', async(e) => {

            e.preventDefault()

           const users = await apiService.fetchUsersFromDB()

            
            if(users){

                const user = users.filter(u => u.email === this.email && u.password === this.password)[0]

                if(user){

                    console.log('user exists', user)
                    localStorage.setItem('user', JSON.stringify(user))
                    window.location.pathname = '/views/products.html'
                }
                else {

                    console.log('invalid data')
                }
            }

        })



    }



 




}



