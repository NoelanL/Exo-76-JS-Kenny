let barriere = document.getElementById('viewport');
let kenny = document.getElementById('kenny');

document.getElementById('up').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t - 10;
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('right').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t + 10;
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('down').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t + 10;
    document.getElementById('kenny').style.top = t + 'px';
});

let width = parseInt(barriere.style.width = 500 + 'px');
if (kenny === width) {
    width = 0;
}

let deadZone = document.createElement('div');
deadZone.className = 'deadZone';
deadZone.style.position = "absolute";
deadZone.style.bottom = "250px";
deadZone.style.width = '50px';
deadZone.style.backgroundColor = "red";
deadZone.style.height = '100px';
barriere.append(deadZone);

if ( deadZone === parseInt(50 + 'px')){
    kenny.style.top = 200 + "px";
    kenny.style.left = 200 + "px";
    alert("Kenny est décédé..... Bravo !");
}


