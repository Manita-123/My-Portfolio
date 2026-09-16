// import Typed from 'typed.js';
/*=============== SHOW & CLOSE MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/

const homeText = document.getElementById('home-text'),
letters = homeText.textContent.trim().split('') , // Converts text into an array of character
angleStep = 360 / letters.length ; //Angle for each character

homeText.textContent = '' //Clears the original content

// Lterates through each character
letters.forEach((char, i) => {
   const span = document.createElement('span')
   span.textContent = char
   span.style.transform = `rotate(${i*angleStep}deg)`;
   homeText.appendChild(span)
})

/*=============== HOME TYPED JS ===============*/

const typedHome = new Typed('#home-typed', {
   strings: ['Web Developer' , 'Frontend Developer', 'SEO Specialist'],
   typeSpeed: 60,
   backSpeed: 30,
   backDelay: 2000,
   loop: true,
})

/*=============== CHANGE HEADER STYLES ===============*/

const scrollHeader = () => {
   const header = document.getElementById('header')
   //Add the .scroll-header class if the bottom scroll of theviewport is greater than 50
   this.scrollY >= 50 ?header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)


/*=============== SWIPER WORK ===============*/ 

const swiperWork = new Swiper('.work__swiper', {
   loop: true,
   spaceBetween: 24,
   slidesPerView: 'auto',
   grabCursor: true,
   speed: 600,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   }
});


/*=============== SERVICES ACCORDION ===============*/ 

const servicesCards = document.querySelectorAll('.services__card'),
servicesButtons = document.querySelectorAll('.services__button')

// It iterates over each button found
servicesButtons.forEach(button => {
   button.addEventListener('click', () => {
      const currentCard = button.closest('.services__card'),
      isOpen = currentCard.classList.contains('services-open') 

      // Close all other services data
      servicesCards.forEach(card => {
         card.classList.replace('services-open', 'services-close')
      })

      // If the clicked card was closed , it opens it
      if(!isOpen){
         currentCard.classList.replace('services-close', 'services-open')
      }
   })
})



/*=============== CONTACT EMAIL JS ===============*/ 

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = async (e) => {
   e.preventDefault();

   try{
      // serviceID - templateID - #form - publicKey
      await emailjs.sendForm('service_egu8une', 'template_zwwql5i', '#contact-form', 'dJ6F0RL219JLq96yP')

      // show send Message
      contactMessage.textContent = 'Message sent successfully ✅'

      // clear input fields
      contactForm.reset()
   } catch (err) {
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌'
   } finally {
      // Remove message after five seconds
      setTimeout(() => contactMessage.textContent = '' , 5000)
   }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scrol')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id,
      top = section.offsetTop -50,
      height = section.offsetHeight,
      link = document.querySelector('.nav__menu a[href*=' +id+ ']')

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top+height)
   })
}
window.addEventListener('scroll', scrollActive)


/*=============== CUSTOM CURSOR ===============*/

const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 // Store mouse position

const cursorMove = () => {
   cursor.style.left = `${mouseX}px`
   cursor.style.top = `${mouseY}px`
   cursor.style.transform = `translate(-50%, -50%)`

   requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove' , (e) => {
   mouseX = e.clientX
   mouseY = e.clientY
})

cursorMove()

// Hide custom cursor on links

const a = document.querySelectorAll('a')

a.forEach(item => {
   item.addEventListener('mouseover' , () => {
      cursor.classList.add('hide-cursor')
   })
   item.addEventListener('mouseleave' , () => {
      cursor.classList.remove('hide-cursor')
   })
})


/*=============== SCROLLREVEAL ANIMATION ===============*/

const sr = ScrollReveal({
   origin:'bottom',
   distance: '60px',
   duration: '1200',
   delay: 300,
   easing: 'cubic-bezier(0.34,1.56,0.64,1)'
})

sr.reveal('.home__subtitle')
sr.reveal('.home__title', {delay: 600} )
sr.reveal('.home__description', {delay: 900} )
sr.reveal('.home__box-1', {delay: 1200, rotate:{z:-20}} )
sr.reveal('.home__box-2', {delay: 1300, rotate:{z:-30}} )
sr.reveal('.home__box-3', {delay: 1400, rotate:{z:-40}} )
sr.reveal('.home__img', {delay: 1700, distance: '-60px'} )
sr.reveal('.home__circle', {delay: 2000, distance: '-100px'} )

sr.reveal('.about__title' )
sr.reveal('.about__description', {delay: 600} )
sr.reveal('.about__button', {delay: 900} )

sr.reveal('.work-swiper' )

sr.reveal('.services__card:nth-Children(odd)' , {interval: 200, origin: 'left', distance: '100px'})
sr.reveal('.services__card:nth-Children(even)' , {interval: 200, origin: 'right', distance: '100px'})

sr.reveal('.skills__description' )
sr.reveal('.skills__card', {delay: 600, interval:200} )
sr.reveal('.skills__profession', {delay: 900} )
sr.reveal('.skills__list', {delay: 1200, interval: 200} )

sr.reveal('.contact__form' )
sr.reveal('.contact__link', {delay: 600, interval:200} )

sr.reveal('.footer__container' )
