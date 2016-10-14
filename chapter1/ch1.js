function onReady() {

    var clock = new com.ibm.Clock('clock', 480);

    var clock2 = new com.ibm.Clock('clock2', 0, 'GMT');
}

Date.prototype.updateSeconds = function () {
    this.setSeconds(this.getSeconds() + 1);
}

var com = com || {}
com.ibm = com.ibm || {};

com.ibm.Clock = function (id, offset, lable) {

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



com.ibm.Clock.prototype.updateClock = function () {
    var date = this.d;
    date.updateSeconds();
    var clock = document.getElementById(this.id);
    clock.innerHTML = this.formateDigits(date.getHours()) + ":" + this.formateDigits(date.getMinutes()) + ":" + this.formateDigits(date.getSeconds()) + " " + this.lable;
}


com.ibm.Clock.prototype.formateDigits = function (val) {
    return val > 10 ? val : "0" + val;
}


window.onload = onReady;
