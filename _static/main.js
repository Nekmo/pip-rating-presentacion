
function addLineDivs(el, className) {
    var div;
    div = document.createElement('div');
    div.classList = "line top " + className;
    el.append(div);

    div = document.createElement('div');
    div.classList = "line bottom " + className;
    el.append(div);

    div = document.createElement('div');
    div.classList = "line left " + className;
    el.append(div);

    div = document.createElement('div');
    div.classList = "line right " + className;
    el.append(div);
}

document.addEventListener("DOMContentLoaded", function(event) {

    var starBg = document.querySelectorAll("[data-background-hash='null600px 600px_static/pip-rating-white.svgnullnull#fff5e7nullno-repeatleft bottomnullnull']");
    for (var i = 0; i < starBg.length; i++) {
        console.log(starBg[i]);
        addLineDivs(starBg[i], "star");
    }

    var log4jBg = document.querySelectorAll("[data-background-hash='null600px 600px_static/log4j-bg.pngnullnull#f2e8e7nullno-repeatleft -200px bottom -200pxnullnull']");
    for (var i = 0; i < log4jBg.length; i++) {
        console.log(log4jBg[i]);
        addLineDivs(log4jBg[i], "log4j");
    }

    var blackBg = document.querySelectorAll("[data-background-hash='0#2B2B2Bnullnullnullnullnull']");
    for (var i = 0; i < blackBg.length; i++) {
        console.log(blackBg[i]);
        addLineDivs(blackBg[i], "black");
    }

    var githubBg = document.querySelectorAll("[data-background-hash='null600px 600px_static/github-bg.svgnullnull#FFFFFFnullno-repeatleft -100px bottom -100pxnullnull']");
    for (var i = 0; i < githubBg.length; i++) {
        console.log(githubBg[i]);
        addLineDivs(githubBg[i], "github");
    }

});
