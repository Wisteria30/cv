
window.addEventListener("load", function () {
    let cv;
    if (this.localStorage.getItem("pc") == null) cv = 0;
    else cv = this.localStorage.getItem("pc");
    this.localStorage.setItem("pc", String(cv));
    const num = this.document.getElementById("num");
    num.innerHTML = this.localStorage.getItem("pc");

    const up = this.document.getElementById("up");
    const down = this.document.getElementById("down");
    up.addEventListener("click", () => {
        cv = parseInt(this.localStorage.getItem("pc"), 10) + 1;
        this.localStorage.setItem("pc", String(cv));
        num.innerHTML = this.localStorage.getItem("pc");
    }, false);
    down.addEventListener("click", () => {
        cv = parseInt(this.localStorage.getItem("pc"), 10) - 1;
        this.localStorage.setItem("pc", String(cv));
        num.innerHTML = this.localStorage.getItem("pc");
    }, false);
}, false);