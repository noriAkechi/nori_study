//------------------------------------------------------------------------------------------
//Contact form validation
//------------------------------------------------------------------------------------------
import { ContactPerson } from "./classLib.js";

function formValidation() {
    //initialize variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let flag = 0; //Default setting = false
    let date = new Date(); 
    let today = date.toDateString();

    // Det fungerar om jag definerar class:en här i script.js... 
    //-----------------------------------------------------------
    // let ContactPerson = class {
    //     constructor(date, name, email, comment) {
    //         this.date = date;
    //         this.name = name;
    //         this.email = email;
    //         this.comment = comment;
    //     }

    //     confirmText() {
    //          window.confirm("Are you really really sure???\n\n" +
    //              this.date + "\n-------------------\n" +
    //              this.name + "\n-------------------\n" +
    //              this.email + "\n-------------------\n" +
    //              this.comment + "\n-------------------\n"
    //          );
    //      }
    // }

    //make instance from class "ContactPerson"
    let contactPerson = new ContactPerson(today, name, email, comment);
    document.getElementById("chk") = contactPerson.name;

    //Validation: user's name
    if (contactPerson.name.length != 0){ // if not blank
        flag ++;
    } else {
        document.getElementById("name").placeholder = "Name field is blank";
    }

    // //Validation: user's Email address
     if (contactPerson.email.length == 0) {
         document.getElementById("email").placeholder = "Epost field is blank";
     //Validation: Correct form or not (call external function)
     } else if (validateEmail(email)){
         flag ++;
     } else {
         alert("You have entered an invalid email address!")
     }

    //Validation: user's comment
    if (contactPerson.comment.length != "") { // if not blank
         flag ++;
     } else {
         document.getElementById("comment").placeholder = "Massage field is blank";
     }

         //If all are passed
         if (flag == 3) {
             //window.confirm("Are you really really sure?\n\n" + inquiry.join('\n-------------------\n'));
             contactPerson.confirmText();
             document.getElementById("alartText").innerHTML = "Thank you! Message has been sent!";
         }

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
