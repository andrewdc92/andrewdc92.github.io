// sanity check
console.log("app.js linked.");
$(window).scroll(function(e) {
    if($(window).scrollBottom() >=200) {
       $(window).scrollBottom(200);
    }
});
