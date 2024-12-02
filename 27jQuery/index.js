$("h1").addClass("big-title margin-50");
$("h2").addClass("big-title margin-50").text("Hi, Mubaris!");

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
$("a").text("Yahoo");


// adding eventlistener
$("h1").click(function () {
    $("h1").addClass("h1-alteration");
    $("h2").addClass("h1-alteration");
});


$("button").click(function () {
    $("h1").addClass("h1-alteration");
    $("h2").addClass("h2-alteration");
});


// event
// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple")
});

// adding button inside index.js
$("h1").before("<button>New Button before (Hello.)</button>")
$("h1").after("<button>New Button after (Hello.)</button>")
$("h1").append("<button>Mubaris Button</button>")
$("h1").prepend("<button>Sayed Button</button>")

// $("button").on("click", function() {
//     $("h2").hide();
// });

// $("button").on("click", function() {
//     $("h2").fadeToggle();
// });

// $("button").on("click", function() {
//     $("h2").slideToggle();
// });

// $("button").on("click", function() {
//     $("h2").animate({opacity: 0.5});
// });

$("button").on("click", function() {
    $("h2").slideUp().slideDown().animate({opacity: 0.5});
});

