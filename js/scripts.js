
/* toggle
   ================================= */ 

$("document").ready(function($){
    var nav = $('#header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            nav.addClass("new");
        } else {
            nav.removeClass("new");
        }
		
    });
});



/* Menu
   ================================= */  
     if( $('.mv-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.mv-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.mv-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.mv-nav-trigger') && !$(event.target).is('.mv-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
    
     $('ul.mv-menu li a').on( 'click', function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });



    (function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
	})
	
	
	
/* Smooth Scroll
   ================================= */  
  $(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})








