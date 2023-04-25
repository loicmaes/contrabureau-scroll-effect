const items = document.querySelectorAll('[data-item]')
const options = {
    root: null,
    rootMargin: '0px 0px -200px 0px'
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(e => {
        e.target.classList.add('visible')
    })
}, options)

items.forEach(item => observer.observe(item))
