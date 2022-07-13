document.addEventListener('DOMContentLoaded', () => {

  let burgerBtn = document.getElementById('burgerBtn')
  burgerBtn.addEventListener('click', () => {
    let menu = document.getElementById('menu')
    let menuContent = document.getElementById('menuContent')
    menu.classList.toggle('menu_active')
    burgerBtn.classList.toggle('burger__btn-active')
    menuContent.classList.toggle('menu__content_active')
    document.body.classList.toggle('body-hidden')
  })

  let nav = document.getElementById('nav')
  nav.addEventListener('click', (e) => {
    const node = e.target.parentNode
    let childID = [...node.children].indexOf(e.target)
    for (let i = 0; i < nav.children.length; i++) {
      nav.children[i].classList.remove('nav-link_active')
    }
    nav.children[childID].classList.add('nav-link_active')
  })

  const smoothLinks = document.querySelectorAll('a[href^="#"]')
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault()
      const id = smoothLink.getAttribute('href')
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  document.querySelectorAll('.typography__item-display').forEach(function (tab) {
    tab.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.typography__list-heading').forEach(function (remove) {
        remove.classList.remove('typography__list-heading_active')
      })
      document.querySelectorAll(`[data-target="${path}"]`).forEach(function (active) {
        active.classList.add('typography__list-heading_active')
      })
      document.querySelectorAll('.typography__item-display').forEach(function (remove) {
        remove.classList.remove('typography__item-display_active')
      })
      document.querySelectorAll(`[data-path="${path}"]`).forEach(function (active) {
        active.classList.add('typography__item-display_active')
      })
    })
  })

  let email = document.getElementById('email')
  let form = document.getElementById('form')
  const emailError = document.querySelector('.email__error')

  email.addEventListener('input', () => {
    email.classList.add('ui__email_active')
    let value = email.value
    let regexp = /[a-zA-Z0-9_.@-]/gu
    let join
    let valueValid = value.match(regexp)
    if (valueValid) {
      join = value.match(regexp).join('')
    }
    if (join == value & join !== null) {
      email.style.borderColor = '#3E29E3'
      emailError.textContent = ''
    }
    else {
      emailError.textContent = 'Текст ошибки'
      email.style.borderColor = '#E80F3B'
    }
  })

  form.addEventListener('submit', function (e) {
    e.preventDefault()


    if (!email.value.includes('@') || !email.value.includes('.')) {
      emailError.textContent = 'Текст ошибки'
      email.style.borderColor = '#E80F3B'
    } else {
      form.action = 'https://jsonplaceholder.typicode.com/posts'
      form.method = 'POST'
      form.submit()
    }
  })

  let select = document.getElementById('customSelect')
  let option = document.getElementById('customOption')

  select.addEventListener('click', () => {
    let arrow = document.querySelector('.custom__select__arrow')
    arrow.classList.toggle('custom__select__arrow_down')
    select.classList.toggle('custom__select-active')
    option.classList.toggle('custom__option_active')
  })

  option.addEventListener('click', (e) => {
    let arrow = document.querySelector('.custom__select__arrow')
    const node = e.target.parentNode
    let childID = [...node.children].indexOf(e.target)
    let childTExt = option.children[childID].textContent
    for (let i = 0; i < option.children.length; i++) {
      option.children[i].classList.remove('option_active')
    }
    option.children[childID].classList.add('option_active')
    select.firstElementChild.textContent = childTExt
    arrow.classList.remove('custom__select__arrow_down')
    select.classList.remove('custom__select-active')
    option.classList.remove('custom__option_active')
  })

  let accordion = document.getElementById('accordion')

  accordion.addEventListener('click', (e) => {
    const node = e.target.parentNode
    let childID = [...node.children].indexOf(e.target)
    let li = accordion.children[childID]
    let heading = accordion.children[childID].children[0].children[0]
    let arrow = accordion.children[childID].children[0].children[1]
    let content = accordion.children[childID].children[1]

    li.classList.toggle('accordion__item_active')
    heading.classList.toggle('accordion__heading_active')
    arrow.classList.toggle('custom__select__arrow_down')
    content.classList.toggle('accordion__content_active')
  })

})
