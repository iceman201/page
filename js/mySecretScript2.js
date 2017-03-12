var document = window.document,
		$_window = $( window ),
		  timeout,
		  isAnimating = false,
		  slideNum = 0,
		  	$welcomeBarL = $( ".bt-sl-solid-l" ),
			  $welcomeBarR = $( ".bt-sl-solid-r" ),
			  $btSlideActive = $( ".welcome-button" ).find( ".bt-slide-l" ),
			  $welcomeBtn = $( ".welcome-button a" );
		//------//
		//Delegation
		$welcomeBtn.on( 'mouseenter', function () {
			  var timeout,
				    $slidebar = $( '.bt-slider-' + slideNum ),
		    animate = function () {
					      timeout = setTimeout(function () {
						        clearTimeout( timeout );
						        if ( slideNum === 5 ) {
							          isAnimating = false;
		          					slideNum = 0;
						        } else {
		          					isAnimating = true;
		          					$slidebar = $( '.bt-slider-' + slideNum );
		          					$slidebar.removeClass( 'bt-slide-l' );
		          					slideNum++;
		          					animate();
						        }
		      			}, 100 );
				   };
			  animate();
		});
		$welcomeBtn.on( 'mouseout', function () {
			  var timeout,
				      $slidebar = $( '.bt-slider-' + slideNum ),
				      animate = function () {
		        timeout = setTimeout(function () {
		          				clearTimeout( timeout );
		          				if ( slideNum === 5 ) {
		            					isAnimating = false;
		            					slideNum = 0;
		          				} else {
		            					isAnimating = true;
		            					$slidebar = $( '.bt-slider-' + slideNum );
		            					$slidebar.addClass( 'bt-slide-l' );
		            					slideNum++;
		            					animate();
						          }
		        			}, 100 );
		    		};
		  	animate();
		});
		$_window.on( "load", function () {
		  timeout = setTimeout(function () {
							    clearTimeout();
							    $welcomeBarL.removeClass( "down" );
		    					$welcomeBarR.removeClass( "down" );
		  				}, 100 );
		  				timeout = setTimeout(function () {
		    					clearTimeout();
		    					$welcomeBarL.removeClass( "out" );
		    					$welcomeBarR.removeClass( "out" );
		  				}, 400 );
		  timeout = setTimeout(function () {
		    					clearTimeout();
		    					$welcomeBtn.removeClass( "out" );
		  				}, 800 );
		  timeout = setTimeout(function () {
		    					clearTimeout();
		    					$btSlideActive.removeClass( "out" );
		  				}, 1000 );
		});