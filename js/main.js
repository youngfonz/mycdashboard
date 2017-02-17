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
    $('#section1-a img').attr("src", "img/first_selected.png");
    $('#section2-a img').attr("src", "img/second.png");
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
    $('#section1-a img').attr("src", "img/first.png");
    $('#section2-a img').attr("src", "img/second_selected.png");
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
    $('#section1-a img').attr("src", "img/first.png");
    $('#section2-a img').attr("src", "img/second.png");
    $('#section3-a img').attr("src", "img/third_selected.png");
    $('.section-container').load('page/dashboard3.php .section3', function() {
      $('.navbar-left').height($('.section-container').height() + 150);
    });
  });

  $('.navbar-activator').click(function() {
    if ($(this).hasClass('expanded')) {
      $(this).removeClass('expanded');
      $('.navbar-item span').hide();
      if (($(document).width() > 768) && ($(document).width() < 991)) {
        $('.navbar-left').animate({width: "52"}, 500);
        $('.section-container').animate({padding:"20px 0px 10px 60px"}, 500, function(){chart_load();});
      } else if ($(document).width() < 768) {
        $('.navbar-left').animate({width: "30"}, 500);
        $('.section-container').animate({padding:"20px 0px 10px 20px"}, 500, function(){chart_load();});
      } else {
        $('.navbar-left').animate({width: "52"}, 500);
        $('.section-container').animate({padding:"20px 50px 10px 100px"}, 500, function(){chart_load();});
      }
    }
    else {
      $(this).addClass('expanded');
      $('.navbar-item span').show();
      if (($(document).width() > 768) && ($(document).width() < 991)) {
        $('.navbar-left').animate({width: "200"}, 500);
        $('.section-container').animate({padding:"20px 0px 10px 190px"}, 500, function(){chart_load();});
      } else if ($(document).width() < 768) {
        $('.navbar-left').animate({width: "160"}, 500);
        $('.section-container').animate({padding:"20px 0px 10px 150px"}, 500, function(){chart_load();});
      } else {
        $('.navbar-left').animate({width: "200"}, 500);
        $('.section-container').animate({padding:"20px 50px 10px 250px"}, 500, function(){chart_load();});
      }
    }
  });
});

// Get information from Ajax and animate numbers

function load_dashboard1() {
  chart_load();

  $.get({
    url: "dashboard1_scores.php",
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
  $('.navbar-left').height($('.section-container').height() + 150);
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

function load_dashboard2() {
  $('.navbar-left').height($('.section-container').height() + 150);
  $.get({
    url: "read_excel.php",
    dataType: "JSON",
    success: function(result) {
      $('#digit-user').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result[2][1]
      });

      $('#digit-session').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 2,
        toValue: result[4][1]
      });

      $('#digit-chatted').numerator({
        easing: 'linear',
        duration: 2000,
        delimiter: ',',
        rounding: 0,
        toValue: result[0][1]
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

  $('#digit-univie').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 21
  });

  $('#digit-video').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 21
  });

  $('#digit-page').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 18672
  });

  
  $('#digit-chat').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 57
  });


  $('#digit-pinned').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 8
  });

  $('#digit-share').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 82
  });

  $('#digit-sparked').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 12
  });

  $('#digit-spark').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 60
  });

  $('#digit-ignited').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 3
  });

  $('#digit-ignit').numerator({
    easing: 'linear',
    duration: 2000,
    delimiter: ',',
    rounding: 0,
    toValue: 10
  });
}