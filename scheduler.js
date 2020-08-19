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
var workoutList = $(".workout-text")
var numberCheck = RegExp(/[0-9]/)

for (i = 0; i < dayBlock.length; i++) {
    
    var blockToWrite = dayBlock[i]
    var dayTxt = blockToWrite.innerHTML
    var dayDt = moment(dayTxt, "dddd").format("L")
    var dateDisplay = $("<p>").addClass("day-date")
    dateDisplay.text(dayDt)
    
    blockToWrite.append(", " + dateDisplay.text())
}


$(".workoutPlan").on("click", function() { 

    var scheduleDt = $(this).prev().text() 
    console.log(moment(scheduleDt, "dddd, L").format("dddd, L"))
})

dayBlock.on("click", function() {

    var clickedDt = $(this).text()
    workoutList.text("Scheduled workouts for " + clickedDt + ": ")
    workoutModal.show()

})

closeBtn.on("click", function() {
    workoutModal.hide()
})




var youtubeAPI = "https://www.googleapis.com/youtube/v3/search"
var apiKey = "AIzaSyAFvkpiXzwbO7dR0Nu3SG6_RcNQQT4fvJQ"

function getYoutube() {
    $.ajax({
        url: youtubeAPI,
        type: "GET",
        data: {
            key: apiKey,
            q: "Cars",
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
    for (var i = 0; i < data.items.length; i++) {

        var pageBody = $("body")
        var videoDiv = $("<div>").addClass("video-container")
        var videoTitle = $("<h3>").html(data.items[i].snippet.title)
        var currentIframe = $("<iframe>").attr("data-log", i)

        $(currentIframe).attr('src', 'https://www.youtube.com/embed/' + data.items[i].id.videoId)
        $("body").append(videoDiv.append(videoTitle,currentIframe))
        console.log(data.items[i])
    }
}