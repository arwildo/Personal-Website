// Scroll To Top
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
    ) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
}

function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

// Google Analytic
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-51659765-2");
