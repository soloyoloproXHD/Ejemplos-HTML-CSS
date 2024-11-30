function searchToggle(obj, event) {
    var container = $(obj).closest('.search-bar');

    if (!container.hasClass('active')) {
        container.addClass('active');
        event.preventDefault();
    } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        container.find('.search-input').val('');
    }
}