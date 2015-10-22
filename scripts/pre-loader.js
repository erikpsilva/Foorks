$(function(){

  // animacoes da divs junto com transition css3
  setTimeout(function(){
    $('.loading').css('width','100%');
    $('.icon-forks').css('width','100%');
  }, 300);

  //contagem numerica de 0 a 100
  var number = 0;
  var inteval = setInterval(function(){
    number = number + 1
      $('.loading').html(number  + '%');
      if ( parseInt(number) == 100){
            clearInterval(inteval);
      }
    }, 48);


  //redirecionamento
    setTimeout(function(){
    //$(window.document.location).attr('href', 'http://www.erikprimao.com.br/');
  }, 7000);

});
