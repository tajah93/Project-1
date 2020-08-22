var searchZipBtn = $("#btn-zipCode");

searchZipBtn.on("click", function() {
    event.preventDefault();
    var zipCode = $("#zipCode").val();
    searchZipBtn.attr("style", "background-color: orangered")
    console.log(zipCode);
    var url = "https://www.google.com/maps/embed/v1/search?key=AIzaSyCOuWxKuOIXPqWS8VpnyY_F7zQPh4QWu2Y&q=parks+fitness+centers+near+" + zipCode;
    $("#gMap").attr("src", url);
    
})