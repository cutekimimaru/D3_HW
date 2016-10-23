function showAlert(msg1, msg2) {
    var msg = msg1+" "+msg2;
    return msg;
}

function getRandomInt(n, m) {
    console.log("your input", n, m);
    return Math.ceil((m-n)*Math.random()+n);
}