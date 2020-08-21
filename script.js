var greeting = $(".name-greeting")
var getStartedBtn = $(".get-started")
var schedulerBtn = $(".scheduler")
var locateFitBtn = $(".maps-btn")
var homeModal = $("#home-modal")
var inputArea = $("#textarea")
var modalSubmit = $("#submit-name")
var closeBtn = $(".close")

function renderGreeting() {

    var greetingName = localStorage.getItem("username")

    if (localStorage.getItem("username") !== null) {

        getStartedBtn.hide()
        greeting.text("Hello, " + greetingName + "!")
    }
}

renderGreeting()

getStartedBtn.on("click", function () {
    homeModal.show()
})

modalSubmit.on("click", function () {
    var userName = inputArea.val()
    localStorage.setItem("username", userName)
    renderGreeting()

    $(".modal-text").remove()
    $("#textarea").remove()
    $("br").remove()
    modalSubmit.remove()
    
    var giphyApiUrl = "https://api.giphy.com/v1/gifs/1PMVNNKVIL8Ig?api_key=B7Bohxdra5D2a0c4y21liQiL2KoBe4LS";
    
    $.ajax({
        url: giphyApiUrl,
        method:"GET"
    }).then(function(response){

        var welcome = $("<h3>").addClass("modal-welcome")
        welcome.text("Welcome to trim(fit), " + userName + "!")

        var gifEl = $("<img>").attr("src", response.data.images.fixed_height.url)

        $(".modal-content").append(welcome,gifEl)
    })
})

closeBtn.on("click", function () {
    homeModal.hide()
})

