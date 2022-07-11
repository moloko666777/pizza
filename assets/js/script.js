$('.minus').click(function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
// $('.form-group').click(function (e) {
//     e.preventDefault();
//     $(this).siblings("div.checkbox__list-count").toggleClass('active');
// });

