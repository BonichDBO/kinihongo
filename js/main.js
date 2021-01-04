$(document).ready(function(){

  var imgItems = $('.primerSlider li').length;

  var imgPos = 1;

  for(contar = 1; contar <= imgItems; contar++){

    $('.pagination').append('<li><span class="fa fas fa-circle"></span></li>');
  }

  $('.primerSlider li').hide();
  $('.primerSlider li:first').show();
  $('.pagination li:first').css({'color': '#aa0000'});


  //Declaracion de FUNCIONES

  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);



  //iterador

//  setInterval(function(){

  //  nextSlider();
  //}, 4000);


  //FUNCIONES



  function pagination(){

    var paginationPos = $(this).index() +1;

    $('.primerSlider li').hide();
    $('.primerSlider li:nth-child('+paginationPos+')').fadeIn();


    $('.pagination li').css({'color': '#858585'});
    $(this).css({'color':'#aa0000'});

    imgPos = paginationPos;



  }



      function nextSlider(){
        if(imgPos>=imgItems){

            imgPos=1;
        }else{

          imgPos++;
        }

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color':'#aa0000'});

        $('.primerSlider li').hide();
        $('.primerSlider li:nth-child('+imgPos+')').fadeIn();

      }


  function prevSlider(){
    if(imgPos<=1){

        imgPos=3;

    }else{

      imgPos--;
    }

    $('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child('+imgPos+')').css({'color':'#aa0000'});

    $('.primerSlider li').hide();
    $('.primerSlider li:nth-child('+imgPos+')').fadeIn();

  }



});
