export default (val, type) => {


    if(type === 'email'){

        if(/^[a-z.]{2,10}[@]{1}[a-z]{2,10}[.]{1}[a-z]{2,10}$/i.test(val)){

            return true
        }
        


    }

    if(type === 'password'){

        if(/^[a-z!éàùï?]{8,12}$/i.test(val)){

            return true
        }
        


    }


    return false

}