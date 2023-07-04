$(function() {
    //drawer.js
    $('.drawer').drawer();
    
    //drawer.toggle
    jQuery('.drawer-hamburger').on('click', function(e) {
      e.preventDefault();
      jQuery('.drawer__background').toggleClass('is-active');

      return false;
    });
  

    //smoothscroll
    jQuery('a[href^="#"]').on('click', function() {
        
        let header = jQuery('.header').innerHeight();
        let id = jQuery(this).attr('href')
        let position = 0
        if ( id != '#') {
         position = jQuery(id).offset().top - header;
        }
        
        jQuery('html,body').animate({
          scrollTop: position
        },
        300);
      
        return false;
      });

      jQuery(window).on('scroll', function() {
        if( 100 < jQuery(this).scrollTop()) {
          jQuery('.footer-totopLink').addClass('add-scrolled')
        } else {
          jQuery('.footer-totopLink').removeClass('add-scrolled')
        }
    
        return false;
      });
    
    // wow.js
    new WOW().init();

    //swiper
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      speed: 400,
      spaceBetween: 24,
      width: 274,
      loop: true,
      loopedSlides: 6,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        768: {
          spaceBetween: 40,
          width: 400,
        }
      }

    });

    //qaドロワートグル
    $( '.qa-box' ).on( 'click', function() {
      $( this ).find( '.qa-box__a' ).stop().slideToggle( 300 );
      $( this ).toggleClass( 'add-active' );
    });
    
    //qa開閉ボタンの実装
    jQuery('.qa-box__q').on('click', function() {
      jQuery(this).next().slideToggle();
      jQuery(this).children('.qa-box__icon').toggleClass('is-open')
  
      return false;
    });

   // form validation
  (function() {
    var requireFlg = false;
    var privacyFlg = false;
    var $require = $( '#js-contactForm .js-require' );
    var fillCount = 0;

    function setSubmitProp() {
      if( requireFlg && privacyFlg ) {
        $( '#form-submit' ).prop( 'disabled', false );
      } else {
        $( '#form-submit' ).prop( 'disabled', true );
      }
    }

    // 必須項目
    $require.on( 'blur', function() {
      if( $( this ).attr( 'id' ) === 'js-formKana' && !$( this ).val().match( /^([ァ-ン]|ー)+$/ ) ) {
        $( this ).val( '' );
        alert( '全角カタカナで入力してください。' )
      }

      $require.each( function() {
        var value = $( this ).val();

        if( ( value !== '' && value.match( /[^\s\t]/ ) ) ) {
          fillCount++;
        }
      });

      requireFlg = ( fillCount === $require.length ? true : false );

      setSubmitProp();
      fillCount = 0;
    });

    // プライバシーポリシー
    $( '#form-privacy' ).on( 'change', function() {
      privacyFlg =  ( $( this ).prop( 'checked' ) ? true : false );
      setSubmitProp();
    });

    // 送信時
    $( '#js-contactForm' ).on( 'submit', function() {
      if( !( requireFlg && privacyFlg ) ) {
        alert( '入力に誤りがあります。' );
        return false;
      }
    });
  })();

  //to__top
  /*jQuery('a[href^="#"]').on('click', function() {
    
    let header = jQuery('.header').innerHeight();
    let id = jQuery(this).attr('href')
    let position = 0
    if ( id != '#') {
     position = jQuery(id).offset().top - header;
    }
    
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
  
    return false;
  });

  jQuery(window).on('scroll', function() {
    if( 100 < jQuery(this).scrollTop()) {
      jQuery('.to-top').addClass('is-show')
    } else {
      jQuery('.to-top').removeClass('is-show')
    }

    return false;
  });*/

});