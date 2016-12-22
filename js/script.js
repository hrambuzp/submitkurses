$(document).ready(function() {
  $(".s").each(function() {
    $(this).addClass('sp'+sl_n);sl_n = sl_n+1;;
  });

  setTimeout(function(){$(".slaider_line").css('width',($(".s").width())*2+10);},500);

  $('.slaider').append('<span id="num_slaider">0</span>');
  $(".b_slaider").click( function() {slaider_l_r('left');return false;});
  $(".n_slaider").click( function() {slaider_l_r('right');return false;});

});

function slaider_l_r(flip){
  var num_sl = $('#num_slaider').html();
  var num_img = $('.s').length*1-1;
  num_r = num_sl*1 + 1;
  num_l = num_sl*1 - 1;
  if(flip == 'left'){
    if(num_sl!=0){
      $('.sp'+num_l).animate({ 'margin-left':'0'}, speed*1000);
      $('#num_slaider').html(num_l);
    }
  }else{
    if(num_sl!=num_img){
      $('.sp'+num_sl).animate({ 'margin-left':'-'+$(".s").width()+'px'}, speed*1000);
      $('#num_slaider').html(num_r);
    }
  }
}