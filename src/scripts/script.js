AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    const countdown = () => {
    const eventDate = new Date("December 15, 2024 19:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;
    //console.log("DOM fully loaded and parsed");

    if (diff < 0) {
        document.getElementById("countdown").innerHTML = "O evento já começou!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    };

    countdown();
    setInterval(countdown, 1000);
});
