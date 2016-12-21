$(document).ready(function() {
  window.redCarltons = [];

  $('.addRedCarlton').on('click', function(event) {  
    var dancerMakerFunctionName = $(this).data('make-red-carlton');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('.dance-floor').height() * Math.random(),
      $('.dance-floor').width() * Math.random(),
      Math.random() * 1000
    );

    $('.dance-floor').append(dancer.$node);
    window.redCarltons.push(dancer);

    dancer.$node.hover(
      function(event) {
        dancer.$node.animate({height: '600px'});
      },
      function(event) {
        dancer.$node.animate({height: '500px'});
      });
  });


  $('.addWhiteCarlton').on('click', function(event) {
  
    var dancerMakerFunctionName = $(this).data('make-white-carlton');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('.dance-floor').height() * Math.random(),
      $('.dance-floor').width() * Math.random(),
      Math.random() * 1000
    );

    dancer.$node.attr('class', 'the-carlton');
    $('.dance-floor').append(dancer.$node);
    window.pigpen = dancer;
  });


  var lineDance = function() {
    var $danceFloor = $('.dance-floor');
    var numRedCarltons = window.redCarltons.length;
    var spaceBetweenReds = $danceFloor.width() / numRedCarltons;

    for (var i = 0; i < numRedCarltons; i++) {
      window.redCarltons[i].setPosition($danceFloor.height() / 2, i * spaceBetweenReds);
    }
  };

  $('.startALineDance').on('click', lineDance);

  var findDistance = function(fromObj, toObj) {
    console.log(toObj);
    var a = Math.abs((fromObj.top + 250) - (toObj.top + 250));
    var b = Math.abs((fromObj.left + 175) - (toObj.left + 175));
    var aSquared = Math.pow(a, 2);
    var bSquared = Math.pow(b, 2); 
    var distance = Math.sqrt(aSquared + bSquared);

    return distance;
  };



  $(document).keydown(function(e) {
    var $carlton = $('.the-carlton');
    if (e.which === 37) {  //left arrow key
      $carlton.stop().animate({
        left: '-=100'     
      });
      window.pigpen.left -= 100;
    } else if (e.which === 38) {  //up arrow key
      $carlton.stop().animate({
        top: '-=100'
      });
      window.pigpen.top -= 100;
    } else if (e.which === 39) {  //right arrow key
      $carlton.stop().animate({
        left: '+=100'
      });
      window.pigpen.left += 100;
    } else if (e.which === 40) {  //bottom arrow key
      $carlton.stop().animate({
        top: '+=100'
      });
      window.pigpen.top += 100;
    }
    checkProximity();
  });

  var indexOfMin = function(arr) {
    if (arr.length === 0) {
      return -1;
    }
    
    var min = arr[0];
    var minIndex = 0;
    
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        minIndex = i;
        min = arr[i];
      }
    }
    return minIndex;
  };

  var checkProximity = function() {
    var distanceArray = redCarltons.map(function(redCarlton) {
      return findDistance(window.pigpen, redCarlton);
    });
    console.log('distanceArray is: ', distanceArray);

    var whoToMove = indexOfMin(distanceArray);
    console.log('whoToMove is: ', whoToMove);
    var $closestCarlton = redCarltons[whoToMove];
    console.log('$closestCarlton is: ', $closestCarlton);
    console.log('window.pigpen is: ', window.pigpen);

    console.log('WTF!!!', findDistance(window.pigpen, $closestCarlton));
    if (findDistance(window.pigpen, $closestCarlton) < 175) {
      // MOVE whoToMove!
      $closestCarlton.setPosition(
        $('.dance-floor').height() * Math.random(), 
        $('.dance-floor').width() * Math.random()
      );
    }
  };
});








