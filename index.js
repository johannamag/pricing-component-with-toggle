$(document).ready(function () {
  $("#input").on("click", () => {
    if ($("input").is(":checked")) {
      $("#basic").html("199.99");

      $("#prof").html("249.99");

      $("#master").html("399.99");
    } else {
      $("#basic").html("19.99");

      $("#prof").html("24.99");

      $("#master").html("39.99");
    }
  });
});
