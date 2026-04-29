function showLastModified() {
    var lastMod = document.lastModified;
    document.getElementById("lastModified").innerHTML =
        "Last Modified: " + lastMod;
}

function showMessage() {
    alert("Welcome to Box 2 Box Training!");
}

var videos = [
    "Videos/IMG_4770.MOV",
    "Videos/IMG_5001.MOV",
    "Videos/IMG_5106.MOV",
    "Videos/IMG_5382.MOV",
    "Videos/IMG_6013.MOV"
];

var currentVideo = 0;

function showVideo() {
    var player = document.getElementById("trainingVideo");
    player.src = videos[currentVideo];
    player.load();
    player.play();
}

function nextVideo() {
    currentVideo++;
    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }
    showVideo();
}

function previousVideo() {
    currentVideo--;
    if (currentVideo < 0) {
        currentVideo = videos.length - 1;
    }
    showVideo();
}