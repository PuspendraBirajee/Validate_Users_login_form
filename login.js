export class User{
    constructor(user,pass)
    {
    this.username = user;
    this.password = pass;
    }
    validateUser(user,pass)
    {
    return user === this.username && pass===this.password ? "Login Successful" : "Unauthorized access";
    }
    }
    