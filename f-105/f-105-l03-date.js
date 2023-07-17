let myDate = new Date(1993, 6, 20, 23, 50);
console.log(myDate);

let date = new Date();
let fullYear = date.getFullYear();
let getMonth = date.getMonth();
let getDate = date.getDate();
console.log(fullYear);
console.log(getMonth);
console.log(getDate);

//1
let dateFeb = new Date(2012, 1, 20, 3, 12);
alert(dateFeb);
//2
//Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
function getWeekDay(date) {
  const weekDay = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return weekDay[date.getDay()];
}
alert(getWeekDay(myDate));
