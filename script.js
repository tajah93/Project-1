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

getYoutube()
