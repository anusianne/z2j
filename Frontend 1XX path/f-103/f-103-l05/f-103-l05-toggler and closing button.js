let menuButton = document.getElementById('menuButton');
let menu = document.getElementById('menuButton');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('open');
});

let panes = document.getElementsByClassName('pane');
let btnscript = '<button class="remove-button">[x]</button>';
for (let pane of panes) {
    pane.insertAdjacentHTML('afterbegin', btnscript);
    // button becomes the first child of pane
    // pane.firstChild.onclick = () => pane.remove();
    pane.firstChild.addEventListener('click', () => {
        pane.remove();
    });
}
