$(document).ready(function() {
      
/*sticky navigation*/

$('.js--products').waypoint(function(direction){
        if(direction =="down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
    offset: '50%'
});

$('.wp').waypoint(function(direction){
    $('.wp').addClass('animated fadeIn');
},{
    offset: '50%'
})

/*Mobile Navigation*/

$('.js--nav-icon').click(function(){
    var nav =  $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(500);
    if(icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
});
    
});

