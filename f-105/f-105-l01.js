let opt = genres.options[genres.selectedIndex];
console.log(opt.value);

let opt2 = genres.value;
console.log(opt2);
let newOpt = new Option("Classic", "classic");
genres.appendChild(newOpt);
newOpt.selected = true;
