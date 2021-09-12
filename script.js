$(document).ready(function(){
    $("#designicon").click(function(){
        $("#designicon").slideDown('1000').hide('500');
        $("#whatwedo1").show('1000');
    });
    $("#whatwedo1").click(function () {
        $("#whatwedo1").slideUp('1000');
        $("#designicon").slideDown('1000');
    });
    $("#devicon").click(function () {
        $("#devicon").slideDown('2000').hide('1500');
        $("#whatwedo2").show('2000');
    });
    $("#whatwedo2").click(function () {
        $("#whatwedo2").slideUp('2000');
        $("#devicon").slideDown('2000');
    });
    $("#producticon").click(function () {
        $("#producticon").slideDown('2000').hide('1500');
        $("#whatwedo3").show('2000');
    });
    $("#whatwedo3").click(function () {
        $("#whatwedo3").slideUp('2000');
        $("#producticon").slideDown('2000');
    });
});
$(document).ready(function () {
    $("form#contactform").submit(function () {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert(name + " we have recieved your message. Thank you for reaching out to us.");
        }
        else {
            alert("Please enter a valid Name and Email.");
        }
    });
}); 
$(document).ready(function () {

    $("#blackstudio").mouseover(function () {
        $("#p1").show().css("background-color","white");
    }).mouseout(function () {
        $("#p1").hide();
    });

    $("#ontariosecurity").mouseover(function () {
        $("#p2").show();
    }).mouseout(function () {
        $("#p2").hide();
    });

    $("#pyramid").mouseover(function () {
        $("#p3").show();
    }).mouseout(function () {
        $("#p3").hide();
    }); 

    $("#jimcarrey").mouseover(function () {
        $("#p4").show();
    }).mouseout(function () {
        $("#p4").hide();
    });

    $("#goodday").mouseover(function () {
        $("#p5").show();
    }).mouseout(function () {
        $("#p5").hide();
    });

    $("#calculator").mouseover(function () {
        $("#p6").show();
    }).mouseout(function () {
        $("#p6").hide();
    });

    $("#burned").mouseover(function () {
        $("#p7").show();
    }).mouseout(function () {
        $("#p7").hide();
    });

    $("#baileywonger").mouseover(function () {
        $("#p8").show();
    }).mouseout(function () {
        $("#p8").hide();
    });
});