var server = "http://ngh.mugeno.org/padiemas/";
$(document).ready( function(){
  dhuwure();
});

$(window).resize( function(){
  dhuwure();
});

function dhuwure(){
  var iwh = $(document).height();
  var hdh = $(".pe-header").height();
  /*
  $("#iwh").html(iwh);
  $("#hdh").html(hdh);
  */
  var rch = parseInt(iwh) - parseInt(hdh);
  rch = rch - 50;
  $(".row-content").height(rch);
}
