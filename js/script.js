$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $('.lightbox').delay(500).fadeIn( 2500 );
  // $('#list').find('li').css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('#list').find('li').css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('#list').parents('div').css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('#list').parent('div').css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('#list').find('li').filter(':even').css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('li').filter( (index) => {
  //   return index % 3 === 2;
  // }).css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('li').eq(4).css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('li').eq(-1).css('backgroundColor', 'rgba(130, 80, 10, .6');
  // $('ul ul:first').append('<li>I am going to be last sub item</li>');
  // $('<li>I am going to be the last item</li>').appendTo($('ul ul:first'));
  // $('ul ul').prepend('<li>I will the first sub item</li>');
  // $('<h4>Arthur Melkonyan</h4>').prependTo('div:first');
  // $('.red-box').after('<div class="red-box">Another Red Box</div>');
  // $('.blue-box').before('<div class="blue-box">Another Blue Box</div>');

  // $('.blue-box').before( () => {
  //   return '<div class="blue-box">Blue 2</div>';
  // });

  // $('p').after($('#list'));

  // $('li').replaceWith('<li>Replaced</li>');
  // $('li').replaceWith( () => {
  //   return $('<li>Replaced with function</li>');
  // });

  // let firstListItem = $('li:first');
  // $('p:first').replaceWith(firstListItem);
  // $('.red-box, .blue-box').replaceWith('<div class="green-box">Other Green boxes</div>');

  // $('<div class="green-box">More Green</div>').replaceAll('.red-box, .blue-box');

  // $('li').remove();
  // $('form:first').children().not('input:text, textarea, br').remove();

  // let detachItem = $('li').detach();
  // $('#content').append(detachItem);

  // $('p:first').empty();
  // $('.red-box, .green-box, .blue-box').empty();

  // var specialLink = $('#special-link');
  // console.log(specialLink.attr('href'));

  // var specialLink = $('#special-link').attr('href', 'https://google.com');

  // var checkbox = $('input:checkbox');
  // console.log(checkbox.prop('checked'))

  // let textInp = $('input:text'),
  //     rangeInp = $('input[type="range"]');
  // textInp.val('Arthur')
  // console.log(textInp.val());
  // console.log(rangeInp.val());

  // let galleryImage = $('.gallery').find('img').first(),
  //     image = [
  //       'images/laptop-mobile_small.jpg',
  //       'images/laptop-on-table_small.jpg',
  //       'images/people-office-group-team_small.jpg'
  //     ];

  // let i = 0;
  // setInterval( function() {
  //   i = (i+1) % image.length; // 0,1,2,0,1,2...
  //   galleryImage.fadeOut( function() {
  //     $(this).attr('src', image[i] );
  //     $(this).fadeIn();
  //   } );
  //   // console.log(galleryImage.attr('src'));
  // }, 2000 );

  // $('.gallery').css('display', 'none');

  // let redbox = $('.red-box');
  // console.log(redbox.css('width'));
  // console.log(redbox.width());
  // $('p').css('font-size', 18);
  // $('.red-box').css('backgroundColor', '#1cc300');
  // $('.red-box').css('width', '+=20')
  
  // const properties = $('p').css([
  //   'font-size',
  //   'line-height',
  //   'color'
  // ]);
  // console.log(properties);
  // console.log(properties['font-size']);

  // redbox.css('user-select', () => {
  //   return 'none';
  // })

  // $('a').addClass('fancy-link');
  // $('p:first').addClass('large emphasize');

  // $('li li').addClass( function(index) {
  //   $(this).addClass('item-' + index);
  // });

  // $('div').addClass( function(index, currentClass) {
  //   if(currentClass === 'dummy') {
  //     return 'red-box';
  //   }
  // });

  // $('.red-box').removeClass('red-box').addClass('blue-box');

// $('.dummy').removeClass('dummy').addClass('green-box');


  /* ======================================== *\
      passing data to memory of jquery
  \* ======================================== */
  // var gallery = $('.gallery'),
  //     images = [
  //       'images/laptop-mobile_small.jpg',
  //       'images/laptop-on-table_small.jpg',
  //       'images/people-office-group-team_small.jpg'
  //     ];


  // gallery.data('availableImages', images)
  // console.log(gallery.data('availableImages'));
  // gallery.data('name', 'My awesome gallery');
  // console.log(gallery.data('name'));
  // console.log(gallery.data());
  // gallery.removeData('name');
  // console.log(gallery.data());


  
  // // text(), html()
  // var firstPar = $('p:first');
  // console.log(firstPar.data('mydata'));
  // console.log(firstPar.text());
  // console.log(firstPar.html());


  // firstPar.text('<strong>Hello</strong> World!');
  // firstPar.html('<string>Hello</string> World!');
  // firstPar.html(firstPar.html() +'This is appended text!');
  // firstPar.append('This is appended text!');

  /* ** click event ** */

  // $('#btn-click').on('click', function(event) {
  //   console.log(event);
  //   alert("Button clicked");
  // });

  // $('.red-box').click( function() {
  //   // console.log('clicked')
  //   $(this).fadeTo( 500, 0.5);
  // });

  // $('.red-box').click();

  // HOVER HANDLER
  // $('#btn-hover').hover( function(event) {
  //   console.log(event)
  //   alert("this is a hover trigger");
  // });

  // $('.green-box').hover( function() {
  //   $(this).text('I woa hovered');
  // });

  // let blueBox = $('.blue-box');
  // blueBox.mouseenter(function() {
  //   $(this).stop().fadeTo(500, 0.7);
  // })

  // blueBox.mouseleave( function() {
  //   $(this).stop().fadeTo( 500, 1);
  // });

  // // hover (handlerIn, handlerOut)
  // blueBox.hover( function() {
  //   $(this).stop().fadeTo( 500, 0.7);
  //   }, function() {
  //     $(this).stop().fadeTo( 500, 1);
  //   }
  // )

  // $('html').on('click keydown', function () {
  //   console.log('mouse was clicked')
  // });
/* ====================================== *\
    gallery rotate image
\* ====================================== */
  // let images = [
  //   'images/laptop-mobile_small.jpg',
  //   'images/laptop-on-table_small.jpg',
  //   'images/people-office-group-team_small.jpg'
  // ],
  //     i = 0;
  
  // // $('.gallery').find('img').on('click keydown', function() {
  // //   i = (i + 1) % images.length;
  // //   $(this).fadeOut( function() {
  // //     $(this).attr('src', images[i]).fadeIn();
  // //   });
  // // })

  // let galleryImage = $('.gallery').find('img');

  // galleryImage.on('click', showGallery);
  // // $('html').on('click keydown', logEvent)
  // function showGallery () {
  //   i = (i + 1) % images.length;
  //       i = (i + 1) % images.length;
  //   galleryImage.fadeOut( function() {
  //     $(this).attr('src', images[i]).fadeIn();
  //   });
  // }
/* =========================================== *\
  end of gallery
\* =========================================== */



  // window.location.replace('https://google.com')

  // var uriV = document.querySelector('#special-link').setAttribute('style', 'color:red');
  // console.log(uriV.getAttribute("href"));
});