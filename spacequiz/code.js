function submit()
{
    var score = 0;
    var output = "<h2>Incorrect: "

    // Question 1
    if(document.getElementById("q1-mars").checked == true)
    {
        score++;
    }
    else
    {
        output += " Question 1 " 
    }

    // Question 2
    if(document.getElementById("q2-armstrong").checked == true)
    {
        score++;
    }
    else
    {
        output += " Ouestion 2 "
    }

    // Question 3
    var q3Pluto = document.getElementById("q3-pluto").checked;
    var q3Ceres = document.getElementById("q3-ceres").checked;
    var q3Eris = document.getElementById("q3-eris").checked;
    var q3Earth = document.getElementById("q3-earth").checked;

    if(q3Pluto == true && q3Ceres == true && q3Eris == true && q3Earth == false)
    {
        score++;
    }
    else
    {
        output += " Question 3 "
    }

    // Question 4
    var q4Viking = document.getElementById("q4-viking").checked;
    var q4Curiosity = document.getElementById("q4-curiosity").checked;
    var q4Apollo = document.getElementById("q4-apollo").checked;
    var q4Pathfinder = document.getElementById("q4-pathfinder").checked;

    if(q4Viking == true && q4Curiosity == true && q4Apollo == false && q4Pathfinder == true)
    {
        score++;
    }
    else
    {
        output += " Question 4 "
    }

    // Display score && Incorrect answers
    document.getElementById("result").innerHTML = "Your Score: " + score + " / 4";
    document.getElementById("incorrect").innerHTML = output +"</h2>"
}