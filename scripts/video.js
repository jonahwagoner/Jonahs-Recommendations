function deferVideo() {
    console.log("Something");
    const source = document.getElementById("video-source");
    const sourceFile = source.getAttribute("data-src");
    source.setAttribute("src", sourceFile);
    const video = source.parentElement;
    video.load();
    //defer html5 video loading
//   $("video source").each(function() {
//     var sourceFile = $(this).attr("data-src");
//     $(this).attr("src", sourceFile);
//     var video = this.parentElement;
//     video.load();
//     // uncomment if video is not autoplay
//     //video.play();
//   });

}
window.onload = deferVideo;