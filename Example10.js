$(function() {

    $(".container>i").click(function() {

        $(this).siblings().removeClass("sternGeklickt");

        $(this).addClass("sternGeklickt");
        $(this).prevAll().addClass("sternGeklickt");

    });


    $(".container>i").mouseenter(function() {

        $(this).addClass("sternAktiv"); //this ist 5
        $(this).prevAll().addClass("sternAktiv");

    });

    $(".container>i").mouseleave(function() {

        $(this).removeClass("sternAktiv");
        $(this).prevAll().removeClass("sternAktiv");

    });

    $("#senden").click(function() {
        //Prüfen, ob irgendwelche Sterne aktiv sind!

        let geklickteSterne = $(".container>i.sternGeklickt");

        if (geklickteSterne.length == 0) {
            alert("Noch kein Stern ausgewählt!");
        } else {
            $("#ergebnis").text("Sie haben " + geklickteSterne.length + " Sterne gegeben!");
        }
    });

});