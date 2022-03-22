(function ($) {
    "use strict";

    // Smooth scrolling on the navbar links
    $(".offcanvas a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 500, 'easeInOutExpo');
            
            if ($(this).parents('.offcanvas').length) {
                $('.offcanvas .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });

    // Code highlight
    $('pre code').each(function () {
        var that = $(this);
        var html = that.html().trim();
        that.empty();
        that.text(html);
    });
    hljs.highlightAll();
    
})(jQuery);

/* ---------------------- highlighting nav when clicked --------------------- */

jQuery(document).ready(function() {
    // Hide text modules on load
    hideAll();
    jQuery('[id^=section]').click(function(e){
    e.preventDefault();
    hideAll();
    var id = jQuery(this).attr('id').replace('section-','');
    jQuery("#section-"+id).addClass('active-nav');
    console.log(id);
    });
    //jQuery("#section-1").addClass('active-nav');
    //});
    function hideAll(){
        jQuery('[id^=section]').each(function(index, element) {
            jQuery(this).removeClass('active-nav');;
        });
    
    }
});


   