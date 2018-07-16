$(document).ready( function(){

  $.getJSON(
    server+"receiver.php?obj=myprobs&nis=12345",
    function(myprobs){
      console.log(myprobs);
      $("#problem-list li").remove();
      $.each(myprobs,function(i,data){
        var img = setImg(data.problem_type);
        $("#problem-list").append(
          "<li class='list-group-item pe-problem-list'>"+
          "  <div class='pe-problem'>"+
          "    <img src='img/"+img+"' />"+
          "  </div>"+
          "  <div class='pe-problem'>"+
          "    <p class='timestamp'>"+data.logTime+"</p>"+
          "    <p>"+data.problem_item+"</p>"+
          "  </div>"+
          "</li>"
        );
      });
    }
  );
   $("#problem-submit").click( function(){

     if( $("#problem-type").val() == "Apa Jenis Masalahmu ?" ){
       alert('Pilih jenis masalah');
       location.reload();
     }
      $.post(server+"receiver.php",{
        dst: 'setProblem',
        nis: '12345',
        tpe: $("#problem-type").val(),
        itm: $("#problem-item").val()
      },function(responses){
        // alert(responses);
        window.location='misi.html';
      });
   });
});

function setImg(probType){
  var img;
  if( probType == 'Kepribadian' ){
    img = 'personal.png';
  }
  if( probType == 'Belajar' ){
    img = 'learning.png';
  }
  if( probType == 'Sosial' ){
    img = 'social.png';
  }
  if( probType == 'Karir' ){
    img = 'career.png';
  }

  return img;
}
