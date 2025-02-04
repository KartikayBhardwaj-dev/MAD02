// this will handle user login and logout
export class User{
    constructor(name){
        this.name = name;
        this.loggedIn = false;
    }
    login(){
        this.loggedIn = true;
        console.log(`Welcome ${this.name}! you are logged in`);
    }
    logout(){
        this.loggedIn = false;
        console.log(`Bye ${this.name}! You are Logged out`);
    }
}