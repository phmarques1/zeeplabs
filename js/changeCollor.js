$(document).ready(function(){  
  var wHeight = $(window).innerHeight();
  var siblings = $('.slide').siblings();
  var perset = {};
  var sumHeight = 0;
  for(var i = 0; i> 1);
        if(key <= nums[mid]){
            high = mid - 1;
        }else {
            low = mid +1;
        }
    }
    return high;
  }

  var scroll_pos = 0;

  function processScroll() { 
    scroll_pos = $(this).scrollTop();

    var presetHeights = Object.keys(perset);
    var x = lessThan(presetHeights,scroll_pos);
    var bgColor = perset[presetHeights[x]];
    if(bgColor) {
      $(".recent").css('background-color',bgColor);
    }
  }

  $(document).scroll(processScroll);
});
