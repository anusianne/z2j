// arrow functions
function ask(q,y,n) {
    if(confirm(q)) yes();
    else no();
    }
ask("Do you agree?", () => alert("You agreed."),
    () =>  alert("No."))