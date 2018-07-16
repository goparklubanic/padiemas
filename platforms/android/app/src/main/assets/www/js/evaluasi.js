$(document).ready( function(){
  var act_id = localStorage.getItem('aid');
  showEvalChat(act_id);
  $.getJSON(
    server+'receiver.php?obj=getaksi&aid='+act_id,
    function(aksi){
      console.log(aksi);

      $("#ev_proty").html(aksi.pcat);
      $("#ev_proit").html(aksi.pdsc);
      $("#ev_mssion").html(aksi.mdsc);
      $("#ev_target").html(aksi.mtgt);
      $("#ev_actdc").html(aksi.adsc);
      $("#ev_actdt").html(aksi.adte);
    }
  );

  $("#evalGo").click( function(){
    $.post(
      server+"receiver.php",
      {
        dst: 'saveMyEval',
        evl: $("#evalOfMine").val(),
        aid: act_id,
        nis: '12345'
      },
      function(response){
        var act_id = localStorage.getItem('aid');
        showEvalChat(act_id);
      }
    );
  });

});

function showEvalChat(aid){
  $.ajax({
    url     : server+"receiver.php?obj=sec&aid="+aid,
    success : function(chats){
      $("#eval_box").html(chats);
    }
  });
}
