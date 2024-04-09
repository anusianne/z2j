document.querySelectorAll('li').forEach((li) =>
    li.addEventListener('click', (e) => {
        if (li.hasAttribute('class', 'selected')) {
            if (e.ctrlKey) li.removeAttribute('class', 'selected');
        } else {
            li.setAttribute('class', 'selected');
        }
    })
);
// document.querySelectorAll("li").forEach((li) => li.addEventListener("mousedown", () => li.style.backgroundColor = "white"));
