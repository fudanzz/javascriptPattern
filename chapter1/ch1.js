function onReady() {
    console.log('hello chapter1');

    createClock();


}

function createClock() {

    var c = new Object();

    var self = c;

    c.updateClock = function () {

        var date = new Date();
        var clock = document.getElementById('clock');
        clock.innerHTML = self.formateDigits(date.getHours()) + ":" + self.formateDigits(date.getMinutes()) + ":" + self.formateDigits(date.getSeconds());
    }


    c.formateDigits = function (val) {
        return val > 10 ? val : "0" + val;
    }


    setInterval(c.updateClock, 1000);

    c.updateClock();

    return c;

}


window.onload = onReady;
