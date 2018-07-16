$(document).ready( function(){
  var nis = localStorage.getItem('nis');
  $.post(server+"receiver.php",{
    dst : 'getMyProMises',
    nis : nis
  },
    function(myProMises){
      //console.log(myProMises);
      $("#pe-misi-list table").remove();
      var proms = JSON.parse(myProMises);
      console.log(proms);
      var i = proms.length;
      var tpr = "";
      // var j = proms.mission.length;
      for(var p = 0 ; p < i ; p++ ){
        var sol=proms[p].mission.length;
        var tbl = "<table class='table table-sm pe-table'>";
            tbl+= "<tbody>";
            tbl+= "<tr>";
            tbl+= "<td class='td-problem'>";
            tbl+= "<span>"+proms[p].problem.pit+"</span>";
            tbl+= "<span class='add-mission' onClick=addMision("+proms[p].problem.id+")><i class='fa fa-plus'>&nbsp;Misi</i></span>";
            tbl+= "</td>";
            tbl+= "</td>";
            tbl+= "</tr>";
            tbl+= "<tr>";
            tbl+= "<td class='td-mission list-group'>";
            for(var m = 0 ; m < sol ; m++){
              tbl+= "<li>"+proms[p].mission[m].mdc+", <a href='#' onClick=addAction("+proms[p].mission[m].mid+")>";
              tbl+= proms[p].mission[m].mtg+"</a></li>";
            }
            tbl+= "</td>";
            tbl+= "</tr>";
            tbl+= "</tbody>";
            tbl+= "</table>";
            tpr+=tbl;
      }
      $("#pe-misi-list").html(tpr);
  })

  $("#msb").click( function(){
    $.post(server+"receiver.php",{
      dst : 'saveMission',
      pid : $("#pid").val(),
      mdc : $("#mdc").val(),
      mtg : $("#mtg").val()
    },
    function(responses){
      $("#frmMission").modal('toggle');
      location.reload();
    });
  });

  $("#asb").click( function(){
    $.post(server+"receiver.php",{
      dst : 'saveAction',
      mid : $("#mid").val(),
      adc : $("#adc").val()
    },
    function(responses){
      $("#frmAction").modal('toggle');
      location.reload();
    });
  });

});


function addMision(pid){
  $("#frmMission").modal('show');
  $("#pid").val(pid);
}

function addAction(mid){
  $("#frmAction").modal('show');
  $("#mid").val(mid);
}
