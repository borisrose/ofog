export class User {

    constructor(id,email, password) {
        this.id = typeof id === 'number' ? id : parseInt(id, 10);
        this.email = typeof email === 'string' ? email : null;
        this.password = typeof password === 'string' ? password : null;
    }


}