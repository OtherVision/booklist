document.getElementById('formulario').addEventListener('submit', cadastraLivro);

function cadastraLivro(e) {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var time = new Date();

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
        var myBooks = [];
        myBooks.push(book);
        localStorage.setItem('library', JSON.stringify(myBooks));

    } else {
        var myBooks = JSON.parse(localStorage.getItem('library'));
        myBooks.push(book);
        localStorage.setItem('library', JSON.stringify(myBooks));
    }
    document.getElementById('formulario').reset();
    addLivro();
    e.preventDefault();
}

function deleteBook(nome) {
    
    var myBooks = JSON.parse(localStorage.getItem('library'));
    for (var i = 0; i < myBooks.length; i++) {
        if (myBooks[i].nome == nome ) {
            myBooks.splice(i, 1);
        }
        localStorage.setItem('library', JSON.stringify(myBooks));
    }

    addLivro();
}
function addLivro() {
    var myBooks = JSON.parse(localStorage.getItem('library'));
    var myLibrary = document.getElementById('resultados')
    
    myLibrary.innerHTML = '';

    for (var i = 0; i < myBooks.length; i++ ) {
        var titulo = myBooks[i].titulo;
        var nome = myBooks[i].nome;
        var hora = myBooks[i].hora;
        var minutos = myBooks[i].minutos;
        var dia = myBooks[i].dia;
        var mes = myBooks[i].mes;
        var ano = myBooks[i].ano;

        myLibrary.innerHTML += '<tr class="table-Js"><td>' + titulo +
                                '</td><td>' + nome +
                                '</td><td>' + hora + ':' + minutos + '   -   ' + dia + '/' + mes + '/' + ano +
                                '</td><td><button class="btn" onclick="deleteBook(\'' + nome +'\')"> Excluir</button></td>' +
                                '</tr>';
    }

     myLibrary.style.background = "rgba(0, 0, 0, 0.1)";
    
}



