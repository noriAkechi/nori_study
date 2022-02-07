//------------------------------------------------------------------------------------------
//Contact form validation
//------------------------------------------------------------------------------------------
function formValidation() {
    //Initialize variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let flag = 0; //Default setting = false
    let date = new Date(); 
    let today = date.toDateString();

    //Initialize class
    class ContactPerson {
        constructor(date, name, email, comment) {
            this.date = date;
            this.name = name;
            this.email = email;
            this.comment = comment;
        }
        //Method: Confirmation
        confirmText() {
             let result = window.confirm("Are you really really sure???\n\n" +
                 this.date + "\n-------------------\n" +
                 this.name + "\n-------------------\n" +
                 this.email + "\n-------------------\n" +
                 this.comment + "\n-------------------\n"
             );
             if(result) {
                document.getElementById("alartText").innerHTML = "Thank you! Message has been sent!";
            }
         }

         //Method: Send a confirmation email. 
         sendConfirmation() {
             //EX. to send cofirmation mail to this user
         }
    }

    const contactPerson = new ContactPerson(today, name, email, comment);

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
        contactPerson.confirmText();
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

