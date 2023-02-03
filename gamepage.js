var y =Math.floor(math.random()* 10 + 1);
  
var x = document.getElementById("guessField").value;
if(x == y)
{
    alert("CONGRATULATIONS!!:)"+playername+"YOU GUESSED IT RIGHT IN "
    + guess + " GUESS ");
    guess= 1
}

  
else if(x > y)

{
    guess++;
    alert("HAHA TRY A SMALLER NUMBER L BOZO")
}
else
{
    guess++;
    alert("L BOZO TRY A BIGGER ONE HAHA")
}

function playAgain(){
    y = Math.floor(math.random() * 10 + 1)
}

<div>
    <label for="guessField">Enter a guess: </label>
    <br>
    <input type = "text" id = "guessField" class = "guessField"></input>
    </br>
    <Button type = "submit" onclick="submit()">Submit</Button>
    <Button></Button>
</div>