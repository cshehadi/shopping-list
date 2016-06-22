$(document).ready(function() {
    $('.list').on('mouseenter', 'li', function () {
        $(this).find('.toolbar').show();
    });
    $('.list').on('mouseleave', 'li', function () {
        $(this).find('.toolbar').hide();
    });

    // add new items by typing in text box
    $('input[name=add-item]').change(function() {
        var new_item = $(this).val();
        $(this).val(''); // empty the input box
        $('.to-do').append(newLi(new_item)); // add the new item
    });

    // move items between "To Do" to "Done" by clicking checkbox
    $('ul').on('change','input[name=item]',function() {
        if($(this).is(':checked')) {
            $(this).parent().appendTo('.completed');
        } else {
            $(this).parent().appendTo('.to-do');
        }
    });

    // insert editable text box when user clicks label 
    $('.to-do').on('click','label',function() {
        var item_text = $(this).text();
        var item_checkbox = $(this).prev();
        $(this).remove();
        item_checkbox.after('<input type="text" name="item-label" value="'+item_text+'">')
        item_checkbox.next().focus();
    });

    // remove editable text box when it loses focus 
    $('.to-do').on('blur','input[name=item-label]',function() {
        var item_text = $(this).val();
        var item_checkbox = $(this).prev();
        $(this).remove();
        item_checkbox.after(newLabel(item_text));
    });

    // remove item when user clicks trash
    $('.list').on('click','.fa-trash-o',function() {
        $(this).parents('li').remove();
    });
});

function inPhoneView() {
    return $('.list').width() > 310;
}

function newLi(item_text) {
    return '    <li> \
        <input type="checkbox" name="item">'+newLabel(item_text)+toolbar()+' \
    </li>';
}

function newLabel(item_text) {
    return '<label for="item">'+item_text+'</label>';
}

function toolbar() {
    return '<div class="toolbar"> \
    <i class="fa fa-trash-o" aria-hidden="true"></i> \
    </div>';
}