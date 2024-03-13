let quest = confirm('Czy chcesz zostać Juniorem Frontendu? 💻');
if (quest) {
    alert('Idź wciąż naprzód i naprzód! 🔥');
    let hours = prompt('Ile poświęcasz na naukę tygodniowo?', '');
    if (hours <= 3) {
        alert('Nie martw się, od jutra będzie lepiej!');
    } else if (hours <= 7 && hours > 3) {
        alert('Powoli do przodu!');
    } else {
        alert('Tak trzymaj!');
    }
} else {
    alert('Wielka szkoda! Jakbyś zmienił zdanie, wróć do nas! ⚡');
}
