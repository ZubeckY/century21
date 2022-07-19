// Секция - В вашей команде риелторы с опытом от 3 лет.
// Переключение активного элемента

let ourTeamList = document.querySelectorAll('.our--team__list__item');

for (let i = 0; i < ourTeamList.length ; i++) {
    let element = ourTeamList [i]

    element.addEventListener('click', () => {
        removeActiveElement ()
        element.classList.add ('active')
    })

}

function removeActiveElement () {
    for (let i = 0; i < ourTeamList.length ; i++) {
        ourTeamList [i].classList.remove ('active')
    }
}