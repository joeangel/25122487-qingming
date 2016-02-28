/*nav-dot*/
$(function(){
    $('.nav a, .home-nav a, .top').bind('click', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $(function(){
        top();
        $(window).resize(function(event) {top();});
        
        function top(){
            var right = ($(window).width()-1180)/2;
            topR = (right > 0 ) ? $('.top').css({right: right}) : $('.top').css({right: 10});
        };
    });
});

/*nav*/
$(function(){
    $('.header').hide();
    $('.top').hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300 ) {
            $('.header').stop().show('slow');
            $('.top').stop().show('slow');
        } else {
            $('.header').stop().hide();
            $('.top').stop().hide();
        };
    });
});

/*active*/
$(function(){
    $('.active-inn div').hide();
    $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-1-box, .active-page').show();

    $('.active-nav0').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-1-box, .active-page').show();
        event.preventDefault();
    });
    $('.active-nav1').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav1-box').show();
        event.preventDefault();
    });
    $('.active-nav2').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav2-box').show();
        $('.active-inn .nav2-1-box').show();
        event.preventDefault();
    });
    $('.active-nav3').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav3-box').show();
        $('.active-inn .nav3-1-box').show();
        event.preventDefault();
    });
    $('.active-nav4').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav4-box').show();
        $('.active-inn .nav4-1-box').show();
        event.preventDefault();
    });

    /*active-nav0-1*/
    $('.active-nav0-1').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-1-box, .active-page').show();
        event.preventDefault();
    });
    $('.active-nav0-2').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-2-box, .active-inn .nav0-2-1-box, .active-page').show();
        event.preventDefault();
    });
    $('.active-nav0-3').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-3-box, .active-inn .nav0-3-1-box, .active-page').show();
        event.preventDefault();
    });
    $('.active-nav0-4').click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav1-box, .active-inn .nav0-4-box').show();
        event.preventDefault();
    });

    $('.active-page0-1 a').eq(0).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-1-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-1 a').eq(1).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-1-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-1 a').eq(2).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-2-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-1 a').eq(3).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-1-box, .active-inn .nav0-1-2-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-2 a').eq(0).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-2-box, .active-inn .nav0-2-1-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-2 a').eq(1).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-2-box, .active-inn .nav0-2-1-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-2 a').eq(2).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-2-box, .active-inn .nav0-2-2-box, .active-page').show();
        event.preventDefault();
    });

    $('.active-page0-2 a').eq(3).click(function(event) {
        $('.active-inn div').hide();
        $('.active-inn .nav0-box, .active-inn .nav0-2-box, .active-inn .nav0-2-2-box, .active-page').show();
        event.preventDefault();
    });
});

/*light-box*/
$(document).ready(function() {
    $(".AA").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });
});

/*open-more*/
$(function(){
  $('.open-more').click(function() {
      var _this = $(this);
      var more = _this.text();
      _this.text("+ more" == more ? "- close" : "+ more");
      _this.prev(".collapse").toggleClass("hide-more");
  });
});

/*animate*/
$(function(){
    var people = $('.home-people');
    var people1 = $('.home-people-1');
    var people2 = $('.home-people-2');
    var title = $('.home-title');
    var tvTitle = $('.tv-title');
    var light = $('.light');
    var play = $('.play img, .play, .money');

    var content = $('.content');
    var dragonL = $('.dragon-l, .dragon-l-1');
    var dragonR = $('.dragon-r, .dragon-r-1');
    var gift = $('.gift-text');

    var title1 = $('.title');
    var nav = $('.home-nav a');
    var navL = $('.news-content');
    var navR = $('.qa-content');

    // $('.home-text-1').velocity("transition.slideUpIn", {display: "block",});
    //title1.velocity("transition.expandIn", {display: "block",});
    //nav.velocity("transition.flipYIn", { duration: 700, stagger: 250, display: "block"});

    people.hide();
    //people1.hide();
    //people2.hide();
    title.hide();
    tvTitle.hide();
    //light.hide();
    people.velocity("transition.bounceDownIn", {display: "block",});
    title.delay(100).velocity("transition.flipXIn", { stagger: 250, display: "block"});
    tvTitle.delay(100).velocity("transition.bounceRightIn", { stagger: 250, display: "block" });
    //gift.hide();
    gift.delay(1000).velocity("transition.bounceRightIn", { stagger: 250, display: "block" });
    // gift2.delay(2000).velocity("transition.bounceDownIn", { stagger: 250 });

    // setInterval(function() {
    //     title.velocity("transition.slideLeftIn", { stagger: 250 })
    //          .delay(750)
    //          .velocity({ opacity: 0 }, 750)
    // }, 2000);
    //title1.hide();
    //dragonL.hide();
    //dragonR.hide();
    content.velocity("transition.bounceDownIn", {
        display: "block",
        complete: function() {
            title1.velocity("transition.flipXIn", { stagger: 250, display: "block"});
            dragonL.delay(500).velocity("callout.bounce", {display: "block"});
            dragonR.delay(500).velocity("callout.bounce", {display: "block"});
        }
    });

    //play.velocity({ translateY: 10}, { duration: 700, loop: true });
});

