const links = document.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((e) => {
            e.classList.remove('active')
        })
        link.classList.toggle('active')
    })
})