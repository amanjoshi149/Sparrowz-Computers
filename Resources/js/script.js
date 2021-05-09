

$(document).ready(function() {
    
    
/*sticky navigation*/

$('.js--section-features').waypoint(function(direction){
        if(direction =="down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
    offset: '70%'
});

    
/*Animations*/
    
$('.wp').waypoint(function(direction){
    $('.wp').addClass('animated fadeIn');
},{
    offset: '50%'
})



$('.wp1').waypoint(function(direction){
    $('.wp1').addClass('animated fadeIn');
},{
    offset: '50%'
})

$('.wp2').waypoint(function(direction){
    $('.wp2').addClass('animated pulse');
},{
    offset: '50%'
})

$('.wp3').waypoint(function(direction){
    $('.wp3').addClass('animated zoomInLeft');
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

/*
    
    var waypoints = $('#handler-first).waypoint(function(direction){
    notify(this.element.id + 'hit 25% from top of window')}, {
    offset: '25%'
    })
    
    
*/