
$(document).ready(function (){
    var imagesShown = false;
    var url = window.location.href;
    var page = url.split('#')[1];
    if (page != null && page.length > 0) {
        $("." + page).removeClass("none");
        $(".default").addClass(" none");
        $("#" + page).parent().addClass(" active");
    }

    $("#showImages").on("click", function() {
       $(".manipulatedImages").removeClass("none");
        if (imagesShown) {
            $(this).text("show");
            $(".manipulatedImages").addClass(" none");
        } else {
            $(this).text("hide");
            $(".manipulatedImages").removeClass("none");
        }
        imagesShown = !imagesShown;
    });

    $(".pageLinks").on("click", function(e) {
        $(".active").removeClass("active");
        var $id = $(e.target);
        var $page = $id.parent();
        $page.addClass("active");
        showSelected($id);
    });

    $(".learnMore").on("click", function() {
        $(".about").removeClass("none");
        $(".default").addClass(" none");
        $("#about").parent().addClass("active");
    });

    $("#default").on("click", function() {
        $(".active").removeClass("active");
        $(".default").removeClass("none");
        showSelected("default");
    });
    $('.nav a').on('click', function(){
        $(".btn-navbar").click(); //bootstrap 2.x
        $(".navbar-toggle").click(); //bootstrap 3.x by Richard
    });
});

function showSelected(id) {
    if (!$(".manipulatedImages").hasClass("none")) $(".manipulatedImages").addClass(" none");
    if (!$(".about").hasClass("none")) $(".about").addClass(" none");
    else if (!$(".projects").hasClass("none")) $(".projects").addClass(" none");
    else if (!$(".experience").hasClass("none")) $(".experience").addClass(" none");
    else if (!$(".contact").hasClass("none")) $(".contact").addClass(" none");
    else if (!$(".default").hasClass("none")) $(".default").addClass(" none");
    if (id == "default") $(".default").removeClass("none");
    else $("." + $(id).attr("id")).removeClass("none");
}
