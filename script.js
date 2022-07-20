var posEyeLeft = $('.left.eyes .retina').offset();
var posEyeRight = $('.right.eyes .retina').offset();

var RposEyeLeft = $('.left.eyes .retina').position();
var RposEyeRight = $('.right.eyes .retina').position();

$('#sky').mousemove(function (e) {
  var posX = e.pageX;
  var posY = e.pageY;
  var posXrelLeft = posX - posEyeLeft.left - 15;
  var posYrelLeft = posY - posEyeLeft.top - 15;
  var posXrelRight = posX - posEyeRight.left - 15;
  var posYrelRight = posY - posEyeRight.top - 15;

  var moveXLeft = (posXrelLeft * 30) / $('.square').width();
  var moveYLeft = (posYrelLeft * 30) / $('.square').height();
  var moveXRight = (posXrelRight * 30) / $('.square').width();
  var moveYRight = (posYrelRight * 30) / $('.square').height();

  $('.left.eyes .retina').css('left', RposEyeLeft.left + moveXLeft);
  $('.left.eyes .retina').css('top', RposEyeLeft.top + moveYLeft);
  $('.right.eyes .retina').css('left', RposEyeLeft.left + moveXRight);
  $('.right.eyes .retina').css('top', RposEyeLeft.top + moveYRight);
});

$('#sky').mouseleave(function (e) {
  $('.left.eyes .retina')
    .css('left', RposEyeLeft.left)
    .css('top', RposEyeLeft.top);
  $('.right.eyes .retina')
    .css('left', RposEyeRight.left)
    .css('top', RposEyeRight.top);
  $('.eyes').addClass('closed');
});

$('#sky').mouseenter(function (e) {
  $('.eyes').removeClass('closed');
});
