// JavaScript Document
$(document).ready(function(e) {
    //Bloccare il menu allo scroll della pagina
    var nav = $('.navbar');
    var position = nav.position();
    // window vuol dire solo il body - mentre document prende anche l'head
    $(window).scroll(function() {
        //se la finestra scorre verso l'alto e i valori in px sono maggiori o = a 90px che è la dimensione del menu
        if ($(this).scrollTop() >= position.top + 70) {
            //allora aggiungi ls classe
            nav.addClass("nav-color");
            //altrimenti la rimuovi
        } else {
            nav.removeClass("nav-color");
        }
    });

    //scroll pagina
    $('a[href^=\\#]:not([href=\\#])').click(function(event) {
        //l'animazione va applicata a tutto l'html e il body, a tutta la pagina
        $('html, body').animate({
            //a tutte le ancore dentro il body con attributo href
            scrollTop: $($(this).attr("href"))
            //distanza del punto dall'ancora
            .offset().top - 70}, 1000);
        event.preventDefault();
    });
});

