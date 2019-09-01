$(document).ready( function(){
    var probid = localStorage.getItem('mateProbId');
    var nis = localStorage.getItem('nis');

    getGroupChat(probid);
    
    $.get(server + `receiver.php?obj=probitem&pid=${probid}` , function(problem){
        $('#probid').html('');
        $('#probid').html(problem);
    })

    $("#evalGo").click( function(){
        let shout = $('#evalOfMine').val();
        $.post(server + 'receiver.php',{
            dst : 'evalGroup',
            pid : probid,
            nis : nis,
            eva : shout
        },function(){
            location.reload();
            $("#evalOfMine").val('');
        })
    })
});

function getGroupChat(id){
    $.getJSON( server + `receiver.php?obj=gchat&pid=${id}` , function(shouts){
        $('#eval_box li').remove();
        $.each(shouts , function(i,data){
            $("#eval_box").append(`
            <li class='list-group-item'>
                <p>${data.siswa} on ${data.waktu}</p>
                <p>${data.shout}</p>
            </li>
            `);
        });
    })
}