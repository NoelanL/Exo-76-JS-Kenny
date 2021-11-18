let barriere = document.getElementById('viewport');
let kenny = document.getElementById('kenny');

document.getElementById('up').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click', function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t > 50)
    t = t - 10;
        else{
            alert("Kenny est décedé... Bravo!");
            t = 200;
            document.getElementById('kenny').style.top = '200px';
    }
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






