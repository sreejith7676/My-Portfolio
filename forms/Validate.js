function clearErrors(){
   let errors = document.getElementsByClassName("formerror");

    for (let item of errors){
        item.innerHTML = "";
    }

}
function seterror(id, error){
    let element= document.getElementById(id);
   element.getElementsByClassName("formerror")[0].innerHTML = error;
}
function validateForm(){

    let returnval = true;
    clearErrors();
    
    let name = document.forms["myForm"]["fname"].value;

    if(name.length<5){
        seterror("name", "*length of name is too short !");
        returnval = false;
    }
    let email = document.forms["myForm"]["femail"].value;

    if(email.length>20){
        seterror("email", "*Email length is too long !");
        returnval = false;
    }
    let subject = document.forms["myForm"]["fsubject"].value;

    if(subject.length>15){
        seterror("subject", "* Subject length  is too long !");
        returnval = false;
    }
    let message = document.forms["myForm"]["fmessage"].value;

    if(message.length>30){
        seterror("message", "*Message length  is too long !");
        returnval = false;
    }
   
    return returnval;
}