var validation;
$(document).ready(function() {
    $('.button-req').click(function() { 
    validation = $('.valid').val();
        if(validation === "") {
            $('.error').addClass('error-fix');
            $('.error-fix').removeClass('error');
        }
        else {
            $('.valid').text(validation);
            $('.error-fix').addClass('error');
            $('.error').removeClass('error-fix');
        }
    });
});