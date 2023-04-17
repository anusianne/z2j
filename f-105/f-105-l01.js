// task from the jsinfo

//let opt = genres.options[genres.selectedIndex];
// console.log(opt.value);

// let opt2 = genres.value;
// console.log(opt2);
// let newOpt = new Option("Classic", "classic");
// genres.appendChild(newOpt);
// newOpt.selected = true;
function errorAlert(elem, msg) {
  document.getElementById(elem).innerHTML = msg;
}
function validateForm() {
    
  console.log("dupa");
  let fname = document.contactForm.fname.value;
  let lname = document.contactForm.lname.value;
  let sex = document.contactForm.sex.value;
  let login = document.contactForm.login.value;
  let pass = document.contactForm.pass.value;
  let datebirth = document.contactForm.datebirth.value;
  let fnameErr = true;
  let lnameErr = true;
  let sexErr = true;
  let loginErr = true;
  let passErr = true;
  let datebirthErr = true;
  console.log(fname);

  if (fname === "") {
    errorAlert("fnameErr", "Proszę wpisać imię.");
  } else {
    fnameErr = false;
  }
  if (lname === "") {
    errorAlert("lnameErr", "Proszę wpisać nazwisko.");
  } else {
    lnameErr = false;
  }
  if (sex === "") {
    errorAlert("sexErr", "Proszę zaznaczyć płeć.");
  } else {
    sexErr = false;
  }
  if (login === "") {
    errorAlert("loginErr", "Proszę wpisać login.");
  } else {
    loginErr = false;
  }
  if (pass === "") {
    errorAlert("passErr", "Proszę wpisać hasło.");
  } else {
    passErr = false;
  }
  if (datebirth === "") {
    errorAlert("datebirthErr", "Proszę uzupełnić datę urodzenia.");
  } else {
    datebirthErr = false;
  }
  if (fnameErr || lnameErr || sexErr || loginErr || passErr || datebirthErr) {
    //tutaj alert
  } else {
  }
}
