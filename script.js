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
    
});   