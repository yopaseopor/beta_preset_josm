// menu dropdown link clickable
jQuery( document ).ready( function ( $ ) {
    $( '.navbar .dropdown > a, .dropdown-menu > li > a' ).click( function () {
        location.href = this.href;
    } );
} );

// scroll to top button
jQuery( document ).ready( function ( $ ) {
    $( "#back-top" ).hide();
    $( function () {
        $( window ).scroll( function () {
            if ( $( this ).scrollTop() > 100 ) {
                $( '#back-top' ).fadeIn();
            } else {
                $( '#back-top' ).fadeOut();
            }
        } );

        // scroll body to 0px on click
        $( '#back-top a' ).click( function () {
            $( 'body,html' ).animate( {
                scrollTop: 0
            }, 800 );
            return false;
        } );
    } );
} );
// Smart sidebar
jQuery( document ).ready( function ( $ ) {
    if ( $( "aside" ).hasClass( "td-sticky" ) ) {
        $( 'aside.td-sticky' ).hcSticky( {
            top: 35,
            offResolutions: -975,
        } );
    }
} );
// Ad banner in single post
jQuery( document ).ready( function ( $ ) {
    if ( $( ".entry-content .sticky-ad" ).hasClass( "td-sticky" ) ) {
        $( '.entry-content .td-sticky' ).hcSticky( {
            top: 20,
            offResolutions: -975,
        } );
    }
} );
// Content slider in single post
jQuery( document ).ready( function ( $ ) {
    var myDiv = document.getElementById( 'custom-box' );
    if ( myDiv ) {
        $( window ).scroll( function () {
            var distanceTop = $( '#custom-box' ).offset().top - $( window ).height();

            if ( $( window ).scrollTop() > distanceTop )
                $( '#slidebox' ).animate( { 'right': '0px' }, 300 );
            else
                $( '#slidebox' ).stop( true ).animate( { 'right': '-430px' }, 100 );
        } );

        $( '#slidebox .close-me' ).bind( 'click', function () {
            $( this ).parent().remove();
        } );
    }
    ;
} );
// LazyLoad images
jQuery( document ).ready( function ( $ ) {
    if ( $( ".featured-thumbnail img" ).hasClass( "lazy" ) ) {
        $( "img.lazy" ).lazyload( {
            skip_invisible: true,
            effect: "fadeIn",
            load: function ( elements_left, settings ) {
                $( this ).siblings( ".spinner" ).remove();
            }
        } ).removeClass( "lazy" );
        $( document ).ajaxStop( function () {
            $( "img.lazy" ).lazyload( {
                effect: "fadeIn"
            } ).removeClass( "lazy" );
        } );
    }
} );

// FlexSlider
jQuery( document ).ready( function ( $ ) {
    $( window ).load( function () {
        var interval = $( '#slider' ).data( 'interval' );
        $( '#slider' ).flexslider( {
            animation: "slide",
            slideshowSpeed: interval,
            controlNav: false,
            animationLoop: false,
            slideshow: true,
            start: function ( slider ) {
                slider.removeClass( 'slider-loading' );
            }
        } );
    } );
} );

// Widgets animations
jQuery( document ).ready( function ( $ ) {
    $( '.loading' ).each( function ( ind ) {
        var animation = jQuery( this ).attr( 'data-animation' );
        var id = jQuery( this ).attr( 'data-id' );
        jQuery( '#' + id ).addClass( "bt_hidden" ).viewportChecker( {
            classToAdd: animation,
            offset: 10,
            repeat: false,
            callbackFunction: function ( elem, action ) {},
            scrollHorizontal: false
        } );
    } );
} );


// FlexSlider Carousel
jQuery( document ).ready( function ( $ ) {
    $( '.carousel-widget' ).each( function ( ind ) {
        var id = jQuery( this ).attr( 'data-container' );
        var $window = $( window ),
            flexslider;
        // tiny helper function to add breakpoints
        function getGridSize() {
            return ( window.innerWidth < 520 ) ? 1 :
                ( window.innerWidth < 768 ) ? 2 : 3;
        }
        $( window ).load( function () {
            $( '#' + id ).flexslider( {
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: true,
                itemWidth: 263,
                itemMargin: 30,
                prevText: "",
                nextText: "",
                minItems: getGridSize(),
                maxItems: getGridSize(),
                start: function ( slider ) {
                    flexslider = slider;
                    slider.removeClass( 'carousel-loading' );
                    $( "img.lazy-img" ).slice( 0, 5 ).each( function () {
                        var src = $( this ).attr( "data-original" );
                        $( this ).attr( "src", src ).removeAttr( "data-original" ).removeClass( "lazy-img" );
                    } );
                },
                init: function ( slider ) {
                    $( "img.lazy-img" ).slice( 0, 5 ).each( function () {
                        var src = $( this ).attr( "data-original" );
                        $( this ).attr( "src", src ).removeAttr( "data-original" ).removeClass( "lazy-img" );
                    } );
                },
                before: function ( slider ) {
                    $( "img.lazy-img" ).slice( 0, 3 ).each( function () {
                        var src = $( this ).attr( "data-src" );
                        $( this ).attr( "src", src ).removeAttr( "data-original" ).removeClass( "lazy-img" );
                    } );
                }
            } );
            $window.resize( function () {
                var gridSize = getGridSize();
                if ( flexslider ) {
                    flexslider.vars.minItems = gridSize;
                    flexslider.vars.maxItems = gridSize;
                }
            } );
        } );
    } );
} );

// NewsTicker
jQuery( document ).ready( function ( $ ) {
    if ( $( ".top-infobox ul" ).hasClass( "newsticker" ) ) {
        $( '.newsticker' ).newsTicker( {
            row_height: 20,
            max_rows: 1,
            speed: 600,
            direction: 'up',
            duration: 4000,
            autostart: 1,
            pauseOnHover: 0
        } );
    }
} );

// Tooltips
jQuery( document ).ready( function ( $ ) {
    $( function () {
        $( '[data-toggle="tooltip"]' ).tooltip()
    } )
} );

// Tabs
jQuery( document ).ready( function ( $ ) {
    $( '[data-toggle="tab"]' ).click( function ( e ) {
        e.preventDefault()
        $( this ).tab( 'show' )
    } )
} );

// Topbar searchform
jQuery( document ).ready( function ( $ ) {
    $( '.newForm input[type="search"]' ).on( 'focus', function () {
        $( this ).parent().addClass( 'focus' );
        $( this ).attr( 'placeholder', 'search' );
    } );
    $( '.newForm input[type="search"]' ).blur( function () {
        $( this ).parent().removeClass( 'focus' );
        $( this ).val( '' );
        $( this ).removeAttr( 'placeholder', 'search' );
    } );
} );

// Grid Slider
jQuery( document ).ready( function ( $ ) {
    var interval = $( '.carousel' ).data( 'interval' );
    $( '.carousel' ).carousel( {
        interval: interval
    } )
} );

// FlexSlider Homepage Carousel
jQuery( document ).ready( function ( $ ) {
    var $window = $( window ),
        flexslider;
    // tiny helper function to add breakpoints

    function getGridSize() {
        return ( window.innerWidth < 320 ) ? 1 :
            ( window.innerWidth < 640 ) ? 2 :
            ( window.innerWidth < 960 ) ? 3 :
            ( window.innerWidth < 1170 ) ? 4 : 5;
    }
    var interval = $( '#carousel-home' ).data( 'interval' );
    $( window ).load( function () {
        $( '#carousel-home' ).flexslider( {
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            itemWidth: 438,
            itemMargin: 0,
            slideshowSpeed: interval,
            move: 1,
            minItems: getGridSize(),
            maxItems: getGridSize(),
            start: function ( slider ) {
                flexslider = slider; //Initializing flexslider here.
                slider.removeClass( 'carousel-loading' );
            }
        } );
        $window.resize( function () {
            var gridSize = getGridSize();
            if ( flexslider ) {
                flexslider.vars.minItems = gridSize;
                flexslider.vars.maxItems = gridSize;
            }
        } );
    } );
} );