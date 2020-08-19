// //Calling collapse button to collapse 
// $('.collapse').collapse()

// //Moment.js for Day and Time 
// $(document).ready(function() {

// const m = moment.format('LLL');
// console.log(m.toString());

// $("#time").text(m);

// });
 

var dayBlock = $(".Days")
for (i = 0; i < dayBlock.length; i++) {
    
    var blockToWrite = dayBlock[i]
    var dayTxt = blockToWrite.innerHTML
    console.log(dayTxt)
    console.log(moment(dayTxt, "dddd").format("L"))
    var dayDt = moment(dayTxt, "dddd").format("L")
    var dateDisplay = $("<p>").addClass("day-date")
    dateDisplay.text(dayDt)
    console.log(dateDisplay.text())
    
    blockToWrite.append(", " + dateDisplay.text())
}


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