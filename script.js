$(document).ready(function(){
    $("#designicon").click(function(){
        $("#designicon").slideDown('1000').hide('500');
        $("#whatwedo1").show('1000');
    });
    $("#whatwedo1").click(function () {
        $("#whatwedo1").slideUp('1000');
        $("#designicon").slideDown('1000');
    });
    
});   