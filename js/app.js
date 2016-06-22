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
    $('input[name=add-item]').change(function() {
        var new_item = $(this).val();
        $(this).val(''); // empty the input box
        $('.to-do').append(newLi(new_item)); // add the new item
    });
    $('ul').on('change','input[name=item]',function() {
        if($(this).is(':checked')) {
            $(this).parent().appendTo('.completed');
        } else {
            $(this).parent().appendTo('.to-do');
        }
    });
});

function inPhoneView() {
    return $('.list').width() > 310;
}

function newLi(item_text) {
    return '    <li> \
        <input type="checkbox" name="item"><label for="item">'+item_text+'</label> \
    </li>';
}