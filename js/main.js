$(document).ready(function() {
  // Show/hide Sections
  $('.section-container').load('page/dashboard1.php .section1', function(){
    load_dashboard1();
  });

  $('#section1-a').click(function() {
    $('.active-text').each(function(){
      $(this).removeClass('active-text');
    });
    $(this).addClass('active-text');
    $('#section1-a img').attr("src", "img/second_selected.png");
    $('#section2-a img').attr("src", "img/first.png");
    $('#section3-a img').attr("src", "img/third.png");
    $('.section-container').load('page/dashboard1.php .section1', function(){
      load_dashboard1();
    });
  });

  $('#section2-a').click(function() {
    $('.active-text').each(function(){
      $(this).removeClass('active-text');
    });
    $(this).addClass('active-text');
    $('#section1-a img').attr("src", "img/second.png");
    $('#section2-a img').attr("src", "img/first_selected.png");
    $('#section3-a img').attr("src", "img/third.png");
    $('.section-container').load('page/dashboard2.php', function() {
      load_dashboard2();
    });
  });

  $('#section3-a').click(function() {
    $('.active-text').each(function(){
      $(this).removeClass('active-text');
    });
    $(this).addClass('active-text');
    $('#section1-a img').attr("src", "img/second.png");
    $('#section2-a img').attr("src", "img/first.png");
    $('#section3-a img').attr("src", "img/third_selected.png");
    $('.section-container').load('page/dashboard3.php .section3', function() {
      // $('.navbar-left').height($('body').height() + 0);
    });
  });

  $('.navbar-activator').click(function() {
    if ($(this).hasClass('expanded')) {
      $(this).removeClass('expanded');
      $('.navbar-item span').hide();
      if (($(document).width() > 768) && ($(document).width() < 991)) {
        $('.navbar-left').animate({width: "52"}, 500);
        $('.section-container').animate({padding:"80px 0px 0px 0px"}, 500);
      } else if ($(document).width() < 768) {
        $('.navbar-left').animate({width: "30"}, 500);
        $('.section-container').animate({padding:"80px 0px 10px 0px"}, 500);
      } else {
        $('.navbar-left').animate({width: "52"}, 500);
        $('.section-container').animate({padding:"80px 0px 10px 0px"}, 500);
      }
    }
    else {
      $(this).addClass('expanded');
      $('.navbar-item span').show();
      if (($(document).width() > 768) && ($(document).width() < 991)) {
        $('.navbar-left').animate({width: "200"}, 500);
        $('.section-container').animate({padding:"80px 0px 10px 50px"}, 500);
      } else if ($(document).width() < 768) {
        $('.navbar-left').animate({width: "160"}, 500);
        $('.section-container').animate({padding:"80px 0px 10px 130px"}, 500);
      } else {
        $('.navbar-left').animate({width: "200"}, 500);
        $('.section-container').animate({padding:"80px 0px 10px 150px"}, 500);
      }
    }
  });
});

// Get information from Ajax and animate numbers

function load_dashboard2() {
  chart_load("2");

  $.get({
    url: "dashboard2_scores.php",
    dataType: "JSON",
    success: function(result){
       $('.large-score').numerator({
          easing: 'linear',
          duration: 2000,
          delimiter: ',',
          rounding: 2,
          toValue: result['sent_score']
        });

        $('.peak-score').numerator({
          easing: 'linear',
          duration: 2000,
          delimiter: ',',
          rounding: 2,
          toValue: result['peak']
        });

        $('.low-score').numerator({
          easing: 'linear',
          duration: 2000,
          delimiter: ',',
          rounding: 2,
          toValue: result['low']
        });

        $('.happy-score').numerator({
          easing: 'linear',
          duration: 2000,
          delimiter: ',',
          rounding: 0,
          toValue: result['happy']
        });

        $('.neutral-score').numerator({
          easing: 'linear',
          duration: 2000,
          delimiter: ',',
          rounding: 0,
          toValue: result['neutral']
        });

        $('.nothappy-score').numerator({
          easing: 'linear',
          duration: 2000,
          delimiter: ',',
          rounding: 0,
          toValue: result['unhappy']
        });
    }
  });
  $('.ignited-a').click(function() {
    $('.ignited-chats').show();
    $('.ignited-a').addClass("active");
    $('.sparked-chats').hide();
    $('.sparked-a').removeClass("active");
  });

  $('.sparked-a').click(function() {
    $('.ignited-chats').hide();
    $('.ignited-a').removeClass("active");
    $('.sparked-chats').show();
    $('.sparked-a').addClass("active");
  });
}

function load_dashboard1() {
  chart_load("1");
  $.get({
    url: "dashboard1_scores.php",
    dataType: "JSON",
    success: function(result) {
      $('#digit-user').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: 7292
      });

      $('#digit-univie').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['unique_views']
      });

      $('#digit-page').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['page_views']
      });

      $('#digit-session').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 2,
        toValue: result['page_session']
      });

      $('#digit-avgsess1').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['session_duration'][0]
      });

      $('#digit-avgsess2').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['session_duration'][1]
      });

      $('#digit-avgsess3').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['session_duration'][2]
      });
      if(result['session_duration'][1] < 10) {
        setTimeout(function(){ $('#digit-avgsess2').text("0" + result['session_duration'][1].toString());}, 2001);
      }
      if(result['session_duration'][2] < 10) {
        $('#digit-avgsess3').text("0" + result['session_duration'][1].toString());
      }

      $('#digit-emojicount').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['emoji_count']
      });

      $('#digit-chat').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['chats_count']
      });

      $('#digit-chatted').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['users_chatted']
      });

      $('#digit-share').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['shares']
      });

      $('#digit-sparked').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['users_sparked']
      });

      $('#digit-spark').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['sparks']
      });

       $('#digit-ignit').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result['ignites']
      });
    }
  });

  $('.large-score').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 80
  });

  $('#digit-emojiusers').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 1009
  });

  $('#digit-pinned').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 8
  });

  $('#digit-ignited').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 1
  });
}
