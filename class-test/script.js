const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const email = document.getElementById('yourEmail');
const langue = document.getElementById('petselect');
var table = document.getElementById("tbodys");


let books = [];


class Ouvrage {
    constructor(title, author, price, date, lang, email, type) {
        this.title = title;
        this.author = author;
        this.price = price + ' MAD';
        this.date = date;
        this.lang = lang;
        this.email = email;
        this.type = type;
    }

    openingDetail() {
        return `${this.title} is a ${this.type} in the ${this.lang} language, written by ${this.author} and published on the ${this.date}. The price of ${this.title} is ${this.price}MAD.`
    }
}



function ajouter() {
    let type = document.querySelector("input[name = 'booktp']:checked");

    let ouvrage = new Ouvrage(title.value, author.value, price.value, date.value, langue.value, email.value, type.value);
    console.log(ouvrage.openingDetail());

    books.push(ouvrage);


    books.sort((a, b) => (a.date > b.date) ? 1 : -1);
    table.innerHTML = "";
    chargerTable()
}
function chargerTable() {
    let tr;
    let td1, td2, td3, td4, td5, td6, td7, td8;
    for (let index = 0; index < books.length; index++) {
        //Créer des cellules
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td3 = document.createElement('td');
        td4 = document.createElement('td');
        td5 = document.createElement('td');
        td6 = document.createElement('td');
        td7 = document.createElement('td');
        td8 = document.createElement('td');

        //Remplir les cellules par les données du formulaire
        td1.innerHTML = books[index].title;
        td2.innerHTML = books[index].author;
        td3.innerHTML = books[index].price;
        td4.innerHTML = books[index].date;
        td5.innerHTML = books[index].email;
        td6.innerHTML = books[index].lang;
        td7.innerHTML = books[index].type;
        td8.innerHTML = `
                <button onClick="onEdit(this)">Edit</button>
                <button onClick="onDelete(this)">Delete</button>`

                // CREER UNE LIGNE
        tr = document.createElement('tr');
        
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tr.appendChild(td8)


        table.appendChild(tr)
    }

}