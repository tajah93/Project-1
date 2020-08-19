var greeting = $(".name-greeting")
var getStartedBtn = $(".get-started")
var schedulerBtn = $(".scheduler")
var locateFitBtn = $(".maps-btn")
var modalArea = $(".modal")
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
    modalArea.show()
})

modalSubmit.on("click", function () {
    var userName = inputArea.val()
    localStorage.setItem("username", userName)
    renderGreeting()
    modalArea.hide()
})

closeBtn.on("click", function(){
    modalArea.hide()
})

