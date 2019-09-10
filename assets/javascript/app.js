$(document).ready(function () {
    var gameGoal = Math.floor(Math.random() * 100 + 1);
    var blueVal = Math.floor(Math.random() * 10 + 1);
    var greenVal = Math.floor(Math.random() * 10 + 1);
    var redVal = Math.floor(Math.random() * 10 + 1);
    var yellowVal = Math.floor(Math.random() * 10 + 1);

    var myTotal = 0;

    $("#goal").text(gameGoal);

    console.log(gameGoal);

    $("#blue").on("click", function () {
        myTotal += blueVal;
        $("#total").text(myTotal);
        checkWin();
    });

    $("#green").on("click", function () {
        myTotal += greenVal;
        $("#total").text(myTotal);
        checkWin();
    });

    $("#red").on("click", function () {
        myTotal += redVal;
        $("#total").text(myTotal);
        checkWin();
    });

    $("#yellow").on("click", function () {
        myTotal += yellowVal;
        $("#total").text(myTotal);
        checkWin();
    });

    function checkWin() {
        if (gameGoal === myTotal) {
            alert("You Win!");
        }
        if (myTotal > gameGoal) {
            alert("You Lose!");
        }
    }
});
