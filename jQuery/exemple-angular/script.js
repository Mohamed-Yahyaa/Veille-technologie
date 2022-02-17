$(document).ready(function(){


    $('#input').keyup(function(){
        $valeur = $(this).val();
        $('#display').text($valeur);
    });

});