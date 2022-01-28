//------------------------------------------------------------------------------------------
//Contact form validation
//------------------------------------------------------------------------------------------
function formValidation() {
    //initialize variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let flag = 0; //Default setting = false
    let date = new Date(); 
    let today = date.toDateString();
    let inquiry = [today, name, email, comment]; 

    //Validation: user's name
    if (name.length != 0){ // if not blank
        flag ++;
    } else {
        document.getElementById("name").placeholder = "Name field is blank";
    }

    // //Validation: user's Email address
    if (email.length == 0) {
        document.getElementById("email").placeholder = "Epost field is blank";
    //Validation: Correct form or not (call external function)
    } else if (validateEmail(email)){
        flag ++;
    } else {
        alert("You have entered an invalid email address!")
    }

    //Validation: user's comment
    if (comment.length != "") { // if not blank
        flag ++;
    } else {
        document.getElementById("comment").placeholder = "Massage field is blank";
    }

    //If all are passed
    if (flag == 3) {
        window.confirm("Are you really really sure?\n\n" + inquiry.join('\n-------------------\n'));
        document.getElementById("alartText").innerHTML = "Thank you! Message has been sent!";
    }

//    document.getElementById("chk").innerHTML = flag;
}


//------------------------------------------------------------------------------------------
//External function for email format validation
//------------------------------------------------------------------------------------------
function validateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}
