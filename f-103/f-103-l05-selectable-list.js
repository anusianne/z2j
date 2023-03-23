document
  .querySelectorAll("li")
  .forEach((li) =>
    li.addEventListener("click", () => (li.style.backgroundColor = "red"))
  );
