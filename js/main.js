document.getElementById("formulario").addEventListener('submit', cadastraLivro);

function cadastraLivro(e) {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let time = new Date();

    if (    !title && !author) {
        alert("Por favor, preencha todas as informações  ");
        return false;

    }
    book = {
        titulo: title,
        nome: author,
        hora: time.getHours(),
        minutos: time.getMinutes(),
        dia: time.getDate(),
        mes: time.getMonth()+1,
        ano: time.getFullYear()
    }
    if (localStorage.getItem('library') === null ) {
        let myBooks = [];
        myBooks.push(book);
        localStorage.setItem('library', JSON.stringify(myBooks));

    } else {
        let myBooks = JSON.parse(localStorage.getItem('library'));
        myBooks.push(book);
        localStorage.setItem('library', JSON.stringify(myBooks));
    }
    document.getElementById('formulario').reset();
    addLivro();
    e.preventDefault();
}

function deleteBook(nome) {
    
    let myBooks = JSON.parse(localStorage.getItem('library'));
    for (let i = 0; i < myBooks.length; i++) {
        if (myBooks[i].nome == nome ) {
            myBooks.splice(i, 1);
        }
        localStorage.setItem('library', JSON.stringify(myBooks));
    }

    addLivro();
}
function addLivro() {
    let myBooks = JSON.parse(localStorage.getItem('library'));
    let myLibrary = document.getElementById('resultados')
    
    myLibrary.innerHTML = '';

    for (let i = 0; i < myBooks.length; i++ ) {
        let titulo = myBooks[i].titulo;
        let nome = myBooks[i].nome;
        let hora = myBooks[i].hora;
        let minutos = myBooks[i].minutos;
        let dia = myBooks[i].dia;
        let mes = myBooks[i].mes;
        let ano = myBooks[i].ano;

        myLibrary.innerHTML += '<tr class="table-Js"><td>' + titulo +
                                '</td><td>' + nome +
                                '</td><td>' + hora + ':' + minutos + '   -   ' + dia + '/' + mes + '/' + ano +
                                '</td><td><button class="btn" onclick="deleteBook(\'' + nome +'\')"> Excluir</button></td>' +
                                '</tr>';
    }

     myLibrary.style.background = "rgb(172, 207, 238)";
     myLibrary.style.padding = "10rem";

    
}

document.getElementById("btn__color").addEventListener('click', changeColor);

body = document.getElementsByTagName("body")[0];
button = document.getElementById("btn__color");
button2 = document.getElementById("btn__color2");

function changeColor() {    
    body.style.backgroundImage = "none";
    button.style.display = "none";
    button2.style.display = "inline-block";
}

document.getElementById("btn__color2").addEventListener('click', returnColor);

function returnColor() {
    body.style.backgroundImage = "url('../img/cameron-cress-8-pZr_MFfw8-unsplash.jpg')";
    button.style.display = "inherit";
    button2.style.display = "none";

}
