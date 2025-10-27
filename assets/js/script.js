/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}




/*=============== Form Submit ===============*/   
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission
  document.getElementById("message").textContent = "Submitting..";
  document.getElementById("message").style.display = "block";
  document.getElementById("submit-button").disabled = true;

  // Collect the form data
  var formData = new FormData(this);
  var keyValuePairs = [];
  for (var pair of formData.entries()) {
    keyValuePairs.push(pair[0] + "=" + pair[1]);
  }

  var formDataString = keyValuePairs.join("&");

  // Send a POST request to your Google Apps Script
  fetch(
    "https://script.google.com/macros/s/AKfycbyqImSZI32VuDCY4GvjL_Z1NX-kUF9NY3PbnAbZK3pr7IG2pUA2RKZJ1Z5edZH21tY9/exec",
  {
      redirect: "follow",
      method: "POST",
      body: formDataString,
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    }
  )
    .then(function (response) {
      // Check if the request was successful
      if (response) {
        return response; // Assuming your script returns JSON response
      } else {
        throw new Error("Failed to submit the form.");
      }
    })
    .then(function (data) {
      // Display a success message
      document.getElementById("message").textContent =
        "Data submitted successfully!";
      document.getElementById("message").style.display = "block";
      document.getElementById("message").style.backgroundColor = "green";
      document.getElementById("message").style.color = "beige";
      document.getElementById("submit-button").disabled = false;
      document.getElementById("form").reset();

      setTimeout(function () {
        document.getElementById("message").textContent = "";
        document.getElementById("message").style.display = "none";
      }, 2600);
    })
    .catch(function (error) {
      // Handle errors, you can display an error message here
      console.error(error);
      document.getElementById("message").textContent =
        "An error occurred while submitting the form please try again.";
      document.getElementById("message").style.display = "block";
    });
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container",{
    loop:true,
    spaceBetween:24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination:{
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768:{
            slidesPerView:4,    
        },
        1024:{
            spaceBetween:48,
        },
    }
}); 

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content',{
    selectors:{
        target:'.featured__card'
    },
    animation: {
        duration: 300
    }
})

/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('active-featured'))
    this.classList.add(active-featured)
}
linkFeatured.forEach(l=> l.addEventListener('click',activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
function scrollActive(){
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + ']').classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: 'true'
})

sr.reveal(`.home__title, .popular__container, .features__img`)
sr.reveal(`.home__subtitle`,{delay:500})
sr.reveal(`.home__elec`,{delay:600})
sr.reveal(`.home__img`,{delay:800})
sr.reveal(`.home__car-data`,{delay:900, interval:100, origin: 'bottom'})
sr.reveal(`.home__group, .offer__data`,{origin:'left'})
sr.reveal(`.home__data, .offer__img`,{origin:'left'})
sr.reveal(`.features__map`,{delay:600,origin:'bottom'})
sr.reveal(`.features__card`,{interval:'300'})
sr.reveal(`.featured__card, .logos__content, .footer__content `,{interval:'100'})
sr.reveal(`.home__title, `)