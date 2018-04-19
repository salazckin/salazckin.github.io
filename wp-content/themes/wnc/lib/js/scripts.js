jQuery( document ).ready( function( $ ) {
	// desktop nav
		$("#menu .top-menu .menu-item-has-children").hover(
			function() {
				$( "#menu" ).addClass( "active" );
			}, function() {
				$( "#menu" ).removeClass( "active" );
			}
		);
		
	// mobile nav
		$('#mobile-nav-toggle').click(function(){
			$('body').toggleClass('active-mobile-menu');
		});		
		$('#menu .top-menu .menu-item-has-children > a').click(function(){
			if ( $("#mobile-nav-toggle").css("display")=="block" ){
				event.preventDefault();
				if ( $(this).hasClass('open') ){
					$(this).removeClass('open');
					$(this).siblings('.sub-menu').slideUp();
				}
				else{
					$('#menu .top-menu .menu-item-has-children > a').removeClass('open');
					$(this).addClass('open');
					$('.sub-menu').slideUp();
					$(this).siblings('.sub-menu').slideDown();
				}
			}
			else{};
		});
		
	// reset nav
		checkNav();
		$(window).resize(checkNav);
		function checkNav(){
			$('#menu .sub-menu').css("display","");
			$('#menu .icon > a.open').removeClass('open');
			if ( $("#mobile-nav-toggle").css("display")=="block" ){
				$('#menu .top-menu .menu-item-has-children.current-menu-parent > a, #menu .top-menu .menu-item-has-children.current-page-ancestor > a').addClass('open');
				$('#menu .top-menu .menu-item-has-children.current-menu-parent .sub-menu, #menu .top-menu .menu-item-has-children.current-page-ancestor .sub-menu').slideDown();
			}
			else{
				$('body').removeClass('active-mobile-menu');
				$('#menu .icon > a.open').removeClass('open');
			}
		}
		
	// search
		$('#search-toggle').click(function(){
			$('#search').slideToggle();
			$('#search .search-input input').focus();
			$('body').toggleClass('active-search');
		});
		$('#search .close').click(function(){
			$('#search').slideUp();
			$("#search .search-input input").blur(); 
			$('body').removeClass('active-search');
		});
			
});