let elem = document.querySelector('.popup');
elem.onclick = (e) => {
    if (e.target.className.includes('close--this--window')) {
        document.querySelector('.popup').style.display = 'none'
        console.log(e.target.className)
    }
}