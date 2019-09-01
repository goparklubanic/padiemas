$(document).ready( function(){
  var nis = localStorage.getItem('nis');
  if( nis == null || nis == 'null' ){
    $(".pe-header").hide();
    $(".pe-content").hide();
    $("#pe-login").show();
  }

  $("#pelo-sbm").click( function(){

    $.post(server+'receiver.php',
    {
      dst : 'login',
      nis : $("#pelo-nis").val(),
      pwd : $("#pelo-psw").val()
    }, function(dbnis){
      console.log(dbnis);
      if(parseInt(dbnis) == parseInt($("#pelo-nis").val())){
        setCookie(dbnis);
      }else{
        alert('Login Gagal');
        location.reload();
      }
    });
  });
});

function setCookie(nis){
  localStorage.setItem('nis',nis);
  $(".pe-header").show();
  $(".pe-content").show();
  $("#pe-login").hide();
}
