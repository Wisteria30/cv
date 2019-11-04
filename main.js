function update(selecter, event, plusMinus) {
    const pm = plusMinus ? 1 : -1;
    selecter.addEventListener(event, () => {
        cv = parseInt(this.localStorage.getItem("pc"), 10) + pm;
        cv = cv < 0 ? 0 : cv;
        this.localStorage.setItem("pc", String(cv));
        num.innerHTML = this.localStorage.getItem("pc");
    }, false);
}

function checkSmartPhone(ua) {
    return (ua.indexOf('iphone') > -1
        || ua.indexOf('ipad') > -1 || ((ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1))
        || ((ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1)))
}


window.addEventListener("load", function () {
    const ua = navigator.userAgent.toLowerCase();
    this.console.log(ua);
    let cv;
    if (this.localStorage.getItem("pc") == null) cv = 0;
    else cv = this.localStorage.getItem("pc");
    this.localStorage.setItem("pc", String(cv));
    const num = this.document.getElementById("num");
    num.innerHTML = this.localStorage.getItem("pc");

    const up = this.document.getElementById("up");
    const down = this.document.getElementById("down");

    if (checkSmartPhone(ua)) {
        update(up, "touchend", true);
        update(down, "touchend", false);
    } else {
        update(up, "click", true);
        update(down, "click", false);
    }
}, false);