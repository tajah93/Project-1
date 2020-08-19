var givenName = $(".name-greeting")
$(".get-started").on("click", function() {

    var userName = prompt("What is your name?")
    localStorage.setItem("User Name", userName)
    $(".get-started").hide()

    var greeting = "Hello, " + userName + "!"
    givenName.text(greeting).css("font-size", "xx-large")
})

console.log(localStorage.getItem("User Name"))

if (localStorage.getItem("User Name") !== null) {
    $(".start-btn").hide()
}