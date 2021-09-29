
$(function(){

  var enemyMove = setInterval(function(){
    var top = Math.round($('.dunk').eq(0).position().top);
    // console.log(top)
  }, 1000/15)

  $('#moveBtn').click(function(){
    $('.bird').toggleClass('play');
  })

})
