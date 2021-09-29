
$(function(){

  var enemyMove = setInterval(function(){
    // 충돌 채크
    for(var i = 0; i < $('.dunk').length; i++) {
      var eTop = Math.round($('.dunk').eq(i).position().top);
      var eLeft = Math.round($('.dunk').eq(i).position().left);
      var myTop = Math.round($('.bird').position().top);
      var myLeft = Math.round($('.bird').position().left);
      if(eTop+200 > myTop && eLeft < myLeft+64 && eLeft+50 > myLeft) {
        console.log('You Lose!');
        $('.bird').addClass('dead');
        // clearInterval(enemyMove);
        // location.reload();
      } else {
        // $('.bird').removeClass('dead');
      }
    }
  }, 1000/15)

  $('#moveBtn').click(function(){
    $('.bird').toggleClass('play');
  })

})
