let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');

function appendToDisplay(value) {
    d1.value += value;
}

function clearDisplay() {
    d1.value = '';
    d2.value = '';
}

function pop() {
    var value = document.getElementById("d1").value;
    document.getElementById("d1").value = value.substr(0, value.length - 1);
}

function calculateResult() {
    try {
        d2.value = eval(d1.value);
    } catch (error) {
        d2.value = 'Error';
    }
}

document.addEventListener("keydown", function(event){
    let c = event.key.charCodeAt(0);
    if ((c>=45 && c<=57) || c==42 || c==43 || c==37){
        appendToDisplay(event.key);
    }
    
    if (event.key=='Enter'){
        calculateResult();
    }

    if (event.key=='Backspace'){
        pop();
    }
})