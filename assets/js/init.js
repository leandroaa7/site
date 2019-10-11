(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})
(jQuery); // end of jQuery name space


$(document).ready(function(e) {	   
 $("nav a").click(function (event) {
    event.preventDefault();   
    var destino = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        destino = $(document).height() - $(window).height();
    } else {
        destino = $(this.hash).offset().top;
    }
 
    $('html,body').animate({
        scrollTop: destino 
    }, 450, 'swing');
});
});
 
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 150);
        return false;
    });

});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

$(document).ready(function(){
var options = [
    {selector: '.class', offset: 200, callback: 'globalFunction()' },
    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  ];
  Materialize.scrollFire(options);

 });
