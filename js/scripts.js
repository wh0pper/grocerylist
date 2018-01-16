$(document).ready(function(){
  var groceries = [];

  $(".grocerylist").submit(function(event){
    event.preventDefault();
    var currentItem = $("#listitem").val().toUpperCase();
    groceries.push(currentItem);
    groceries.sort();
    $("ul").empty();
    groceries.forEach(function(grocery) {
      $("ul").append("<li>" + grocery + "</li>")
    });
  });
});
