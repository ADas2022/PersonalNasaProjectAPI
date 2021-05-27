// const fetch = require("node-fetch");
let storedData;
function revealMessage() {
    //getImg();
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = 0;
	if (currentVal > 0) {
		newVal = currentVal - 1;
	}

	document.getElementById("countDownButton").innerHTML = newVal;
}


function getImg() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=6pkJdCUsVeGQ1Xy5QGlcvKLqtpCebkTBdC5EYImS")
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        // console.log("DATA is :", data)
        var imgLink = data["hdurl"];
        var title = data["title"];
        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = data["date"];
        document.getElementById("imgURL").src = imgLink;
        storedData = data;
        //console.log("JOKE:", imgLink);

    })
    .catch()


}

function revealDescription() {
    document.getElementById("desc").innerHTML = storedData["explanation"];
    document.getElementById("hiddenDesc").style.display = 'block';
}

getImg();