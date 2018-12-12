$(document).ready(function() {

    $(".chatbutton").click(function() {

      $("input").val("");


      if ( $('.chat1').hasClass( "showchat" ) && $('.chat2').hasClass( "hidechat" )) {

        $('.chat2').removeClass( "hidechat" );
        $('.chat2').addClass( "showchat" );

        $('.chat3').removeClass( "hidechat" );
        $('.chat3').addClass( "showchat" );

        $('.ad2,.ad3').addClass( "hidead" );
        $('.ad1').removeClass( "hidead" );




      } else if ( $('.chat3').hasClass( "showchat" ) && $('.chat4').hasClass( "hidechat" )) {

        $('.chat4').removeClass( "hidechat" );
        $('.chat4').addClass( "showchat" );

        $('.chat5').removeClass( "hidechat" );
        $('.chat5').addClass( "showchat" );


                $('.ad1,.ad3').addClass( "hidead" );
                $('.ad2').removeClass( "hidead" );



      } else if ( $('.chat5').hasClass( "showchat" ) && $('.chat6').hasClass( "hidechat" )) {

        $('.chat6').removeClass( "hidechat" );
        $('.chat6').addClass( "showchat" );

        $('.chat7').removeClass( "hidechat" );
        $('.chat7').addClass( "showchat" );

        $('.ad1,.ad2').addClass( "hidead" );
        $('.ad3').removeClass( "hidead" );


      } else if ( $('.chat7').hasClass( "showchat" ) && $('.chat8').hasClass( "hidechat" )) {

        $('.chat8').removeClass( "hidechat" );
        $('.chat8').addClass( "showchat" );

        $('.chat9').removeClass( "hidechat" );
        $('.chat9').addClass( "showchat" );

      }

    });

  });
