//1use common function
// use empty value

function emptyvalue(id) {
    document.getElementById(id).value = "";
}

//use empty text

function emptytext(id) {
    document.getElementById(id).innerText = "";
}

//display none

function displayNone(id) {
    document.getElementById(id).style.display = "none";
}

//display block

function displayBlock(id) {
    document.getElementById(id).style.display = "block"
}
//2 genaret random num pin

function rendomNumFun() {
    var randomNum = Math.floor((Math.random() * 9000) + 1000);
    document.getElementById("genaretnum").value = randomNum;

    emptyvalue("inputPin");
    displayNone('matched');
    displayNone('unmatched');
}
//3 input number value

function btnKey(id) {
    let prevValue = document.getElementById("inputPin").value;
    let Key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + Key;
}

//4 clean clear input

function clean() {
    document.getElementById('inputPin').value = "";
}

//5 clean last value /bacspace

function cleanLast() {
    var inputResult = document.getElementById("inputPin").value;
    var removeValue = inputResult.slice(0, inputResult.length -1);
    document.getElementById('inputPin').value = removeValue;
}

//6 submit (matched or dint matched conabintion)

function submitBtn() {
    var randomNum = document.getElementById('genaretnum').value;
    var typeNum = document.getElementById('inputPin').value;
    
    //7 pin matching condition

    if (randomNum == typeNum) {
        displayBlock('matched');
        displayNone('unmatched');

    }
    else{
        displayBlock('unmatched');
        displayNone('matched');
        tryLeft ('tryLeft');
    }
}

// pin match error

function tryLeft (id) {
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if (tryAgain == '1') {
        disableBtn('submit');
    }
}