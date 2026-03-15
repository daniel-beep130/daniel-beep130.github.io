function checkEmail()
{
    //check textboxes to make sure they are not empty
    //check to see if the text in both boxes are the same

    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "") //conditional expression, when it is true, the code in the block will be done
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("email-error").innerHTML = ""
    }

    //check to see if confirm textbox is empty
    
    if(confirm == "") //conditional expression, when it is true, the code in the block will be done
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }
    else
    {
        document.getElementById("confirm-error").innerHTML = ""
    }

    //check if both textboxxes have the same value

     if( email != confirm )
     {
        //print error
        document.getElementById("email-error").innerHTML = "Emails must match";
        document.getElementById("confirm-error").innerHTML = "Emails must match";
     }
}

function pizzaOrder()
{
    var output = "<h3>Pizza Order: ";

    if( document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if( document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += " Large ";
    }

    if( document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni ";
    }

    if( document.getElementById("sausage").checked == true)
    {
        output += " Sausage ";
    }

    if(document.getElementById("mushrooms").checked == true)
    {
        output += " Mushrooms "
    }
    //output statement
    document.getElementById("output").innerHTML = output + "</h3>";
}