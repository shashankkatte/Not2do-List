//  check off specific Not 2 Dos by clicking
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

//  Click on X to delete todo
$('ul').on('click', 'span', function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//  adding a new not2do list item
$("input[type='text']").keypress(function (event) {
  //  check if enter key
  if (event.which === 13) {
    //  grabbing new not2do item from input text
    let todoText = $(this).val();
    $(this).val('');
    // Create new li and add to ul
    $('ul').append(`<li><span>X </span>${todoText}</li>`);
  }
});
