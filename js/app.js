$(document).ready(function() {
    $('.list li').mouseenter(function () {
        if (inPhoneView()) {
            $(this).find('.toolbar').show();
        }
    });
    $('.list li').mouseleave(function () {
        if (inPhoneView()) {
            $(this).find('.toolbar').hide();
        }
    });
});

function inPhoneView() {
    return $('.list').width() > 310;
}
