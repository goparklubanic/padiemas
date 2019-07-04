$(document).ready( function(){
    var nis = localStorage.getItem('nis');
    $.post(server+"receiver.php" , {
        dst: 'getGroup',
        nis: nis
    },function(resp){
        var friends = JSON.parse(resp);
        $('#friends li').remove();
        $.each( friends , function(i,data){
            $('#friends').append(`
            <li class='list-group-item kawan' style='padding: 10px 15px;'>
            ${data.nama} <span style ='display:none;' class='nis'>${data.nis}</span>
            </li>
            `);
        })
    })

    $('#friends').on('click' , '.kawan' , function(){
        let nis = $(this).children('span.nis').text();
        $.getJSON ( server + `receiver.php?obj=dukawan&nis=${nis}` , function(probs){
            $('#friends').hide();
            $('#dukawan').show();
            $('#dukawan li').remove();
            $.each(probs , function(i,data){
                $('#dukawan').append(`
                <li class='list-group-item'>${data.item} [ <span class='prbid'>${data.id}</span> ]</li>
                <li class='list-group-item shout' style='text-align:right; color:blue;'>Urun Gagasan</li>
                `);
            })
        })
    })

    $('#dukawan').on('click' , '.shout' , function(){
        let prbid = $(this).parent('div').children('li:nth-child(1)').children('.prbid').text();
        localStorage.setItem('mateProbId',prbid);
        window.location='klpGenduraos.html';
    })
});