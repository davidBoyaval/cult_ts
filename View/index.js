//methode ajax getProduits
var xhr =new XMLHttpRequest();

xhr.open('GET','http://localhost:3000/catalog');
xhr.send();
xhr.addEventListener('readystatechange',function(){
    if (xhr.readyState === 4) {
        mise_en_page(xhr);
    };
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
        html = html + "<p>" + id + "</p>" +
            "<p>" + nom + "</p>" +
            "<p>" + pdv + " €</p>" +
            "<p>" + format + "</p>" +
            "<p>" + type + "</p>";
    });
    document.getElementById("json").innerHTML = html;   
}



