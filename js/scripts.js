$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var address = $("input#address").val();
    var postalcode = $("input#postal-code").val();
    var city = $("input#city").val();

    $(".first-name").text(firstName);
    $(".last-name").text(lastName);
    $(".address").text(address);
    $(".postal-code").text(postalcode);
    $(".city").text(city);

    $("#receipt").show();

    event.preventDefault();
  });
});
