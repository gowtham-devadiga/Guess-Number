

document.addEventListener('DOMContentLoaded', function() {
    var num = document.getElementById("number");
    var resultText = document.getElementById("p");

    function getNum() {
        var userNum = parseInt(num.value); 
        if (isNaN(userNum) || userNum>10||userNum<0) {
            alert("Please enter a valid number between 1 and 10");
            return;
        }

        var comNum = Math.floor(Math.random() * 10) + 1; 
        console.log(comNum);
        if (userNum === comNum) {
            resultText.innerHTML = "Your Guess is Correct";
        } else {
            resultText.innerHTML = "Your Guess is Wrong. The correct number was " + comNum;
        }
        resultText.style.display = "block"; 
        num.value = ""; 
    }

    num.addEventListener('focus', function() {
        resultText.style.display = "none";
    });

    num.addEventListener('input', function() {
        if (isNaN(num.value)) {
            alert("Please enter only numbers");
            num.value = "";
        }
    });

    document.querySelector('button').addEventListener('click', getNum);
});

