$(document).ready(function() {
  
  /* disable right click on image */
  $('img').bind("contextmenu",function(e) {
    return false;
  });

  /* active nav tab toggle */
  $('.secondary-nav li').click(function() {
    var category = $(this).attr('id');
    
    $('.secondary-nav li').removeClass('active');
    $(this).addClass('active');

    if (category === "press") {
      $('.post').hide();
      $('.press').show();
    }
    else if (category === "exhibitions") {
      $('.post').hide();
      $('.exhibition').show();  
    }
    else if (category === "publications") {
      $('.post').hide();
      $('.publications').show();  
    }
    else {
      $('.post').show();
    }
  });

  /* trust gallery collections tab */
  /* initial load window */
  var loadwin = $(window).width();
  if (loadwin >= 768) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('show');
    $('#collapseFour').collapse('show');
    $('#collapseFive').collapse('show');
    $('a[data-toggle="collapse"]').click(function(event) { 
      event.stopPropagation()
    })
  }
  else {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    $('#collapseFive').collapse('hide');
  };
  
  /* Window Rresize */
  $(window).on('resize', function(){
    var rewin = $(this);
    if (rewin.width() >= 768) {
      $('#collapseOne').collapse('show');
      $('#collapseTwo').collapse('show');
      $('#collapseThree').collapse('show');
      $('#collapseFour').collapse('show');
      $('#collapseFive').collapse('show');
      $('a[data-toggle="collapse"]').click(function(event) { 
      event.stopPropagation()
      })
    }
    else {
      $('#collapseOne').collapse('hide');
      $('#collapseTwo').collapse('hide');
      $('#collapseThree').collapse('hide');
      $('#collapseFour').collapse('hide');
      $('#collapseFive').collapse('hide');
      $('a[data-toggle="collapse"]').unbind('click');
    };    
  });
});