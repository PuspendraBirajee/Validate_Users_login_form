import { User } from '/login.js';
document.getElementById('btn').addEventListener('click',() =>{
let username = document.getElementById('user').value;
let password = document.getElementById('password').value;
let user1 = new User("puspendra45",'12345');
alert(user1.validateUser(username, password));
});
