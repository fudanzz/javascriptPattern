function onReady() {

    var clock = new Clock('clock', 480);

    var clock2 = new Clock('clock2', 0, 'GMT');
}

Date.prototype.updateSeconds = function () {
    this.setSeconds(this.getSeconds() + 1);
}

function Clock(id, offset, lable) {

    offset = offset || 0;

    var d = new Date();

    var offset = (offset + d.getTimezoneOffset()) * 60 * 1000;

    this.d = new Date(offset + d.getTime());

    this.lable = lable || '';

    this.id = id;

    this.updateClock();

    var that = this;

    setInterval(function () {
        that.updateClock();
    }, 1000);
}



Clock.prototype.updateClock = function () {
    var date = this.d;
    date.updateSeconds();
    var clock = document.getElementById(this.id);
    clock.innerHTML = this.formateDigits(date.getHours()) + ":" + this.formateDigits(date.getMinutes()) + ":" + this.formateDigits(date.getSeconds()) + " " + this.lable;
}


Clock.prototype.formateDigits = function (val) {
    return val > 10 ? val : "0" + val;
}


window.onload = onReady;
