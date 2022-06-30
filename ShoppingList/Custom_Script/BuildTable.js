$(document).ready(function () {

    $.ajax({
        url: '/ToDoes/BuildShoppingTable',
        success: function (result) {
            $('#tableDiv').html(result);
        }
    });

});