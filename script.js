// var num=document.getElementById("number");

// function getNum(){
//     var comNum=Math.floor(Math.random()*10);
//     console.log(comNum);
//     if(num===comNum){
//         document.getElementById("p").innerHTML="Your Guess is Correct";
//     }else{
//         document.getElementById("p").innerHTML="Your Guess is Wrong";
//     }
// }

var num = document.getElementById("number");
var resultText = document.getElementById("p");
function getNum() {
    var userNum = parseInt(num.value); // Get the value from the input and convert it to an integer
    var comNum = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
    console.log(comNum);

    if (userNum == comNum) {
        resultText.innerHTML = "Your Guess is Correct";
    } else {
        resultText.innerHTML = "Your Guess is Wrong. The correct number was " + comNum;
    }
    resultText.style.display = "block";
    num.value=""; // Display the result
}

num.addEventListener('focus', function(){
    resultText.style.display="none";
})

