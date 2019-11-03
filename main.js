window.addEventListener("load", function () {
    this.localStorage.setItem("pc", "0");
    const num = this.document.getElementById("num");
    num.innerHTML = this.localStorage.getItem("pc");

    const up = this.document.getElementById("up");
    const down = this.document.getElementById("down");
    up.addEventListener("click", () => {
        let n = parseInt(this.localStorage.getItem("pc"), 10) + 1;
        this.localStorage.setItem("pc", String(n));
        num.innerHTML = this.localStorage.getItem("pc");
    }, false);
    down.addEventListener("click", () => {
        let n = parseInt(this.localStorage.getItem("pc"), 10) - 1;
        this.localStorage.setItem("pc", String(n));
        num.innerHTML = this.localStorage.getItem("pc");
    }, false);
}, false);