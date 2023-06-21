export default (email) => {


   let name = []

    for(let i = 0; i < email.length; i++){

        if(email[i] !== '@'){

            name.push(email[i]);
        }
        else {

            break
        }


    }

   
    name = name.join('');

    let firstLetter = name[0].toUpperCase()

    const restLetters = name.slice(1, name.length)

    
    
    return firstLetter + restLetters



}