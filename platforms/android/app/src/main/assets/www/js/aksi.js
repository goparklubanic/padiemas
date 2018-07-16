$(document).ready( function(){
    $.getJSON(server+"receiver.php?obj=aksiku&uid=12345", function(actions){
      // console.log(actions);
      $("#pe_actions li").remove();
      $.each(actions, function(i,aksi){
        var tgl = balikTanggal(aksi.action_date);
        $("#pe_actions").append(
          "<li class='list-group-item'>Tanggal "+tgl+" "+
          aksi.action_desc+". untuk menyelesaikan misi "+aksi.mission_desc+
          "<br/><a href=# onClick=showEval('"+aksi.action_id+"') >Cek Evaluasi</a></li>"
        );
      });
    });
});

function showEval(aid){
  //alert(aid);
  localStorage.setItem('aid',aid);
  window.location='evaluasi.html';
}

function balikTanggal(tgl){
  var t = tgl.split('-');
  return t[2]+"-"+t[1]+"-"+t[0];
}
