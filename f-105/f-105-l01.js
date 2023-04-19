// task from the jsinfo

//let opt = genres.options[genres.selectedIndex];
// console.log(opt.value);

// let opt2 = genres.value;
// console.log(opt2);
// let newOpt = new Option("Classic", "classic");
// genres.appendChild(newOpt);
// newOpt.selected = true;

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validateForm() {
  const formData = {
    fname: document.getElementById("fname").value.trim(),
    lname: document.getElementById("lname").value.trim(),
    sex: document.querySelector('input[name="sex"]:checked'),
    login: document.getElementById("login").value.trim(),
    pass: document.getElementById("pass").value.trim(),
    date: document.getElementById("datebirth").value,
  };
  let isValid = true;
  for (const [key, value] of Object.entries(formData)) {
    if (value === "" || value === null || value === undefined) {
      console.log(value);
      document.getElementById(key + "Err").innerHTML = "Proszę wypełnić pole!";
      isValid = false;
    } else {
      document.getElementById(key + "Err").innerHTML = "";
    }
  }
  if (isValid) {
    if (formData.sex.value === "man") {
      alert(
        "Pan " +
          formData.fname +
          " " +
          formData.lname +
          " " +
          " urodzony " +
          formData.date +
          " chce utworzyć konto o loginie " +
          "'" +
          formData.login +
          "'"
      );
    } else if (formData.sex.value === "woman") {
      alert(
        "Pani " +
          formData.fname +
          " " +
          formData.lname +
          " " +
          "urodzona" +
          formData.date +
          " chce utworzyć konto o loginie " +
          "'" +
          formData.login +
          "'"
      );
    }
  }
}
