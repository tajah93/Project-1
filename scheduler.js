// //Calling collapse button to collapse 
// $('.collapse').collapse()

// //Moment.js for Day and Time 
// $(document).ready(function() {

// const m = moment.format('LLL');
// console.log(m.toString());

// $("#time").text(m);

// });


var dayBlock = $(".Days")
var workoutModal = $("#scheduler-modal")
var inputArea = $("#textarea")
var modalSubmit = $("#submit-workout")
var closeBtn = $(".close")
var modalText = $(".modal-text")
var workoutList = $(".workout-list")
var numberCheck = RegExp(/[0-9]/)

for (i = 0; i < dayBlock.length; i++) {

    var blockToWrite = dayBlock[i]
    var dayTxt = blockToWrite.innerHTML
    var dayDt = moment(dayTxt, "dddd").format("L")
    var dateDisplay = $("<p>").addClass("day-date")
    dateDisplay.text(dayDt)

    blockToWrite.append(", " + dateDisplay.text())
}

for (k = 0; k < localStorage.length; k++) {

    var scheduledArray = localStorage.getItem(localStorage.key(k)).split(", ")

    for (w = 0; w < scheduledArray.length; w++) {

        var correctBlock = $("td:contains('" + localStorage.key(k) + "')")
        var storedWorkout = scheduledArray[w]
        var workoutBtn = $("<button>").addClass("workout-btn")
        workoutBtn.text(storedWorkout)
        correctBlock.next().append(workoutBtn)

    }


}



$(".workoutPlan").on("click", function () {

    var scheduleDt = $(this).prev().text()
    console.log(moment(scheduleDt, "dddd, L").format("dddd, L"))
})

dayBlock.on("click", function () {

    inputArea.empty()
    var workoutBlock = $(this).next()
    var clickedDt = $(this).text()
    console.log(clickedDt)

    modalText.text("Scheduled workouts for " + clickedDt + ": ")

    modalSubmit.unbind().click(function () {

        event.stopImmediatePropagation()
        event.preventDefault()

        var addedWorkout = inputArea.val()
        var workoutBtn = $("<button>")
        workoutBtn.text(addedWorkout)
        workoutBlock.append(workoutBtn)

        if (workoutList.text() === "") {

            workoutList.append(addedWorkout)
        } else {
            workoutList.append(", " + addedWorkout)
        }

        localStorage.setItem(clickedDt, workoutList.text())
    })

    for (i = 0; i < localStorage.length; i++) {

        if (clickedDt == localStorage.key(i)) {

            workoutList.text(localStorage.getItem(clickedDt))
            console.log(localStorage.getItem(clickedDt))
            break;
        } else {
            workoutList.text("")
        }
    }

    workoutModal.show()

    closeBtn.one("click", function () {

        workoutModal.hide()
    })
})










$(".workout-btn").on("click", function () {

    var buttonTxt = $(this).text()
    var youtubeAPI = "https://www.googleapis.com/youtube/v3/search"
    var apiKey = "AIzaSyAFvkpiXzwbO7dR0Nu3SG6_RcNQQT4fvJQ"

    function getYoutube() {
        $.ajax({
            url: youtubeAPI,
            type: "GET",
            data: {
                key: apiKey,
                q: buttonTxt,
                maxResults: 5,
                type: "video",
                videoEmbeddable: true,
                part: "snippet"
            },
            success: function (data) {
                embedVideo(data)
            },
            error: function (response) {
                console.log("Request Failed");
            }
        })
    }


    function embedVideo(data) {

        var videoDiv = $("<div>").addClass("video-modal")
        $(".container").prepend(videoDiv)
        
        var vidModalContent = $("<div>").addClass("video-modal-content")
        videoDiv.append(vidModalContent)

        var videosClose = $("<span>").addClass("video-close")
        vidModalContent.append(videosClose)
        videosClose.html('&times;')

        var videosDiv = $("<section>").addClass("video-display")
        vidModalContent.append(videosDiv)

        for (var i = 0; i < data.items.length; i++) {

            var videoTitle = $("<h3>").html(data.items[i].snippet.title)
            var currentIframe = $("<iframe>")

            currentIframe.attr('src', 'https://www.youtube.com/embed/' + data.items[i].id.videoId)

            videosDiv.append(videoTitle, currentIframe)
            console.log(data.items[i])            
        }
    }
    getYoutube()
})