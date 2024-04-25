function tossCoin(userChoice) {
    var result;
    var coinImage = document.getElementById("coin-image");
    var randomNumber = Math.floor(Math.random() * 2) + 1;
    var resultOut = document.querySelector("#resultout");

    if (randomNumber === 1) {
        result = "heads";
        coinImage.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPvI1RaJT9QpUc8pcqCULNlO2lP7efE46NqnkbIttW2ULRV8WoKyHqRuGUSo8dDjTbO0&usqp=CAU" alt="Heads">';
    } else {
        result = "tails";
        coinImage.innerHTML = '<img src="asset/images.jpg" alt="Tails">';
    }

    if (randomNumber === userChoice) {
        // alert("You win! The result is " + result + ".");
        resultout.innerHTML = `You won ! the result is ${result}.`
    } else {
        // alert("You lose! The result is " + result + ".");
        resultout.innerHTML = `You loss ! the result is ${result}.`
    }
}