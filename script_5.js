const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

var rented_books_array = []
for (let count = 0; count < books.length; count++){
    let book = books[count]
    if (book.rented > 0){ rented_books_array.push(book.title);}
    

}
if (books.length == rented_books_array.length){console.log("Every book is rented!");}
     else {console.log ("That are non-rented books");
}

// The most rented book code!
let pages_array = []
for (let count = 0; count < books.length; count++){
let book = books[count]
pages_array.push(book.rented);
}
var max_page_value = Math.max.apply(Math, pages_array)
for (let count = 0; count < books.length; count++){
    let book = books[count]
    if(book.rented == max_page_value){ console.log(book.title)}    
}


// The least rented book code!
var max_page_value = Math.min.apply(Math, pages_array)
for (let count = 0; count < books.length; count++){
    let book = books[count]
    if(book.rented == max_page_value){ console.log(book.title)}    
}

// Find BY ID!
for (let count = 0; count < books.length; count++){
    let book = books[count]
    if(book.id == 873495){ console.log(book.title)}    
}