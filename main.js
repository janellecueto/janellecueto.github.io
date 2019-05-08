//SOURCE: http://jsfiddle.net/dizel3d/1eamwt4e/
//      for smooth scrolling behavior on nav link clicks
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    // $('body, html').animate({scrollTop: pos});   //NOTE: this has been deprecated 
    $id[0].scrollIntoView({behavior: "smooth"});
});

$('#projects-row .col-md').hover(function(){
    $(this).find('.bg-pic').css("filter", "brightness(90%)");
    $(this).find('a').show();
}, function(){
    $(this).find(".bg-pic").css("filter", "brightness(40%)");
    $(this).find('a').hide();
});

$('#backButton i').hover(function(){
    $('.hidden-left').css("color", "#fab3a9");
}, function(){
    $('.hidden-left').css("color", "white");
});
