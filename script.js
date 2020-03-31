window.onload = function () {

    document.getElementById("twitter").addEventListener("mouseover", function () {
        this.src = 'images/twitterColor.jpg';
        return false;
    });
    document.getElementById("twitter").addEventListener("mouseout", function () {
        this.src = 'images/twitter.jpg';
        return false;
    });

    document.getElementById("facebook").addEventListener("mouseover", function () {
        this.src = 'images/facebookColor.jpg';
        return false;
    });
    document.getElementById("facebook").addEventListener("mouseout", function () {
        this.src = 'images/facebook.jpg';
        return false;
    });

    document.getElementById("LinkedIn").addEventListener("mouseover", function () {
        this.src = 'images/LinkedInColor.jpg';
        return false;
    });
    document.getElementById("LinkedIn").addEventListener("mouseout", function () {
        this.src = 'images/LinkedIn.jpg';
        return false;
    });

    document.getElementById("google+").addEventListener("mouseover", function () {
        this.src = 'images/google+Color.jpg';
        return false;
    });
    document.getElementById("google+").addEventListener("mouseout", function () {
        this.src = 'images/google+.jpg';
        return false;
    });

    document.getElementById("YouTube").addEventListener("mouseover", function () {
        this.src = 'images/YouTubeColor.jpg';
        return false;
    });
    document.getElementById("YouTube").addEventListener("mouseout", function () {
        this.src = 'images/YouTube.jpg';
        return false;
    });



    document.getElementById('video').addEventListener("mouseover", function () {
        this.play();
        return false;
    });
    document.getElementById('video').addEventListener("mouseout", function () {
        this.pause();
        return false;
    });
};


