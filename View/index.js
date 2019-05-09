//methode ajax getProduits
var xhr =new XMLHttpRequest();

xhr.open('GET','http://localhost:3000/catalog');
xhr.send();
xhr.addEventListener('readystatechange',function(){
    if (xhr.readyState === 4) {
        mise_en_page(xhr);
    };
});






$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
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
                                        format+".</p>"+
                                    "</div>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "</div>";
    });
    document.getElementById("list").innerHTML = html;   
}



