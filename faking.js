var faker = require('faker');

var name = faker.name.findName(); 
var email = faker.internet.email(); 
var card = faker.helpers.createCard();
var randomPic = faker.image.avatar(); 

function makeCard(){

document.getElementById("picture").innerhtml = randomPic;
document.getElementById("name").innerhtml = name;
document.getElementById("email").innerhtml = email;
}



console.log(<faker class="name findname"></faker>
console.log(name);
