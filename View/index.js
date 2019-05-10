
let rechBtn = document.getElementById('rechBtn');
let next = document.getElementById('next');
let last = document.getElementById('last');

//fonction menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});

//methode ajax getProduits
let url = 'http://localhost:3000/catalog';
var xhr =new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.addEventListener('readystatechange',function(){
    if (xhr.readyState === 4) {
        mise_en_page(xhr);
    };
});
//methode ajax recherche
rechBtn.onclick = (() => {
    let motclef = document.getElementById('motclef').value;
    let genre = document.getElementById('genre').value;
    let type = document.getElementById('type').value;
    var xhr = new XMLHttpRequest();
    url = 'http://localhost:3000/recherche?motclef=' + motclef + '&genre=' + genre + '&type=' + type;
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            mise_en_page(xhr);
        };
    });
});

next.onclick = (() => {
    let motclef = document.getElementById('motclef').value;
    let genre = document.getElementById('genre').value;
    let type = document.getElementById('type').value;
    var xhr = new XMLHttpRequest();
    url = 'http://localhost:3000/next?motclef=' + motclef + '&genre=' + genre + '&type=' + type;
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            mise_en_page(xhr);
        };
    });
});

last.onclick = (() => {
    let motclef = document.getElementById('motclef').value;
    let genre = document.getElementById('genre').value;
    let type = document.getElementById('type').value;
    var xhr = new XMLHttpRequest();
    url = 'http://localhost:3000/last?motclef=' + motclef + '&genre=' + genre + '&type=' + type;
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            mise_en_page(xhr);
        };
    });
});




//methode de mise en page html
function mise_en_page(xhr){
    var list = JSON.parse(xhr.responseText);
    var html = '';
    console.log(list.length);
    console.log(list);

    list.forEach(element => {
        var id = (element.id_produit);
        var nom = (element.nom);
        var pdv = (element.prix_de_vente);
        var format = (element.format);
        var type = (element.type);

        html=   html+"<div class=\"col-sm-6 col-lg-3\">"+
                        "<div class=\"input-group\">"+
                            "<div class=\"input-group-prepend\">"+
                                "<div class=\"card text-white bg-dark mb-3\" style=\"min-width: 26rem;\">"+
                                 "<div class=\"card-header\">" + nom+"</div>"+
                                    "<div class=\"card-body\">"+
                                        "<h5 class=\"card-title\">" + pdv+" €</h5>"+
                                            "<p class=\"card-text\">" + type +" / "+
                                        format+".<input type=\"button\" class=\"ajPanier\" value=\"Ajouter au panier\"></p>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
    });
    document.getElementById("list").innerHTML = html;   
}



