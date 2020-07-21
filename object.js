//fav book - title, author, genre, short decrip, price, seller, buynow
//method shows price and seller, learnmore shows name genre and short description
//call both methods

var camelclub = {
    //properties
    title: "The Camel Club",
    authorName: "David Baldacci",
    genre: "crime",
    shortDescription: "A former CIA assassin leads a group of conspiracy theorists to expose corruption in the U.S. government.",
    seller: "Barnes & Noble",
    price: "8",
    //methods
    buyNow : function (){
        return this.price + " " + this.seller;
    }
    learnMore : function (){
        return this.title + " " + this.genre + " " + this.shortDescription;
    }
}

console.log(camelclub.buynow());
console.log(camelclub.learnMore());