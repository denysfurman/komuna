$(function() {

//tabs

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs_main a').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs_main').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })

  //fotoreport slider

    $('.photoreport_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:[
            "<span class='sl_nav'><i class=\"fas fa-angle-left\"></i></span>",
            "<span class='sl_nav'><i class=\"fas fa-angle-right\"></i></span>"
        ],
        items:5,

        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            767:{
                items:3
            },
            1000:{
                items:4
            },

            1400:{
                items:4
            }
        }
    });

	
});
