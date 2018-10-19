/*alert("Hello! I am an alert box!!");*/

/* ~~~~~Resume Page~~~~ */
$(window).load(function () {
    /*Ghirardelli*/
    $(".ghir").hide();
    $(".ghirLogo").on("click", function(){
       $(".ghir").show();
    });
    /* MAKE AN if statement "if .ghir = show, when ghirLogo clicked, hide"*/
    $(".ghir").on("click", function(){
        $(".ghir").hide();
    });
    /*Einstein*/
    $(".einstein").hide();
    $(".einLogo").on("click", function(){
       $(".einstein").show();
    });
    $(".einstein").on("click", function(){
        $(".einstein").hide();
    });
    /*Follett*/
    $(".follett").hide();
    $(".folLogo").on("click", function(){
       $(".follett").show();
    });
    $(".follett").on("click", function(){
        $(".follett").hide();
    });
    /*Black girls Code */
    $(".bgc").hide();
    $(".bgcLogo").on("click", function(){
       $(".bgc").show();
    });
    $(".bgc").on("click", function(){
        $(".bgc").hide();
    });
    /* Assist Young Scholars */
    $(".assist").hide();
    $(".assLogo").on("click", function(){
       $(".assist").show();
    });
    $(".assist").on("click", function(){
        $(".assist").hide();
    });
    /*Girls Who Code */
    $(".gwc").hide();
    $(".gwcLogo").on("click", function(){
       $(".gwc").show();
    });
    $(".gwc").on("click", function(){
        $(".gwc").hide();
    });
    /* ~~~~end resume page~~~~ */

/* ~~~~Works page~~~~ */
    /* Web Design */
    $(".webD1").hide();
  /*  $(".webD").on("click", function(){
       $(".webD1").show();
    });
    $(".webD1").on("click", function(){
        $(".webD1").hide();
    });*/
    /* Photo Editing */
    $(".photoEd1").hide();
  /*  $(".photoEd").on("click", function(){
       $(".photoEd1").show();
    });
    $(".photoEd1").on("click", function(){
        $(".photoEd1").hide();
    });

    /* Other */
    $(".other1").hide();
    /*$(".other").on("click", function(){
       $(".other1").show();
    });
    $(".other1").on("click", function(){
        $(".other1").hide();
    });*/

});
