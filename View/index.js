//methode ajax getProduits
var xhr =new XMLHttpRequest();

xhr.open('GET','http://localhost:3000/test');
xhr.send();
xhr.addEventListener('readystatechange',function(){
    if (xhr.readyState === 4) {
        var list=JSON.parse(xhr.responseText);
        //var test = '{"test": true,"te": yry}';
       // var list = JSON.parse(test);
       console.log(list.length);
       console.log(list);
        var id = (list[0].id_produit);
        var nom = (list[0].nom);
        var pdv = (list[0].prix_de_vente);
        var format = (list[0].format);
        var type = (list[0].type);
            var html = "<p>" + id + "</p>"+
                "<p>" + nom + "</p>"+
                "<p>" + pdv + " €</p>"+
                "<p>" + format + "</p>"+
                "<p>" + type + "</p>";
        document.getElementById("json").innerHTML = html;    
    };
});




