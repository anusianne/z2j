function camelize(str) {
  let capitalizeStr = str
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join()
    .replaceAll(",", "");
  return capitalizeStr.charAt(0).toLowerCase() + capitalizeStr.substring(1);
}
console.log(camelize("background-color-grey"));
