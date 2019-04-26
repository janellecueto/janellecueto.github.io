$('.nav-link').click(function(e){
    e.preventDefault();

    let startOf = $(this).attr('href').indexOf('#');
    let clickRef = $(this).attr('href').slice(startOf + 1);
    let target = $('a[name='+clickRef+']');

});
// $(window).on('wheel', function(e){
//     alert('scroll detected! delta = '+e.originalEvent.deltaY);
// })
$(window).on('wheel', function(e){
    let welcome = $('#welcome').offset().top;
    let projects = $('#projects').offset().top;
    let resume = $('#resume').offset().top;
    let contact = $('#contact').offset().top;

    let lastScrollTop = $(this).scrollTop();
    var scrollDirection, targetUp, targetDown, targetEle;

    $('#scrollDelta').text('ScrollTop: '+lastScrollTop+"delta: "
    +e.originalEvent.deltaY+
    'welcom: '+welcome+'projects: '+projects+'resume:'+resume+'contact'+contact);
    if(e.originalEvent.deltaY > 0){
        scrollDirection = 'up';
    }
    else if(e.originalEvent.deltaY <= 0){
        scrollDirection = 'down';
    }

    e.preventDefault();

    if(lastScrollTop === welcome || lastScrollTop < projects){
        targetUp = $('#welcome');
        targetDown = $('#projects');
    } else if(lastScrollTop === projects){
        targetUp = $('#welcome');
        targetDown = $('#resume');
    } else if(lastScrollTop === resume){
        targetUp = $('#projects');
        targetDown = $('#contact');
    } else if(lastScrollTop === contact || lastScrollTop < contact){
        targetUp = $('#resume');
        targetDown = $('#contact');
    } else if(lastScrollTop > resume){
        targetUp = $('#projects');
        targetDown = $('#resume');
    } else if(lastScrollTop > contact){
        targetUp = $('#resume');
        targetDown = $('#contact');
    }

    if(scrollDirection === 'down'){
        targetEle = targetDown;
    } else if(scrollDirection === 'up'){
        targetEle = targetUp;
    }

    // scrollThere(targetEle, 400);
    targetEle[0].scrollIntoView({behavior: "smooth"});
});