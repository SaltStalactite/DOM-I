const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = 'Dom<br> Is<br> Awesome<br>';
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started'

const featureH4 = document.querySelector('.top-content:nth-child(1) h4');
featureH4.textContent = siteContent['main-content']['features-h4'];
const featureContent = document.querySelector('.top-content:nth-child(1) p');
featureContent.textContent = siteContent['main-content']['features-content'];
const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('#middle-img')
middleImg.src = 'img/mid-page-accent.jpg'

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesH4.textContent = siteContent['main-content']['services-h4'];
const servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesContent.textContent = siteContent['main-content']['services-content'];
const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent['main-content']['product-content'];
const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.textContent = siteContent['main-content']['vision-content']



const navElementLink1 = document.querySelector('nav a:nth-child(1)');
navElementLink1.textContent = siteContent['nav']['nav-item-1'];
navElementLink1.style.color = 'green';
const navElementLink2 = document.querySelector('nav a:nth-child(2)');
navElementLink2.textContent = siteContent['nav']['nav-item-2'];
navElementLink2.style.color = 'green';
const navElementLink3 = document.querySelector('nav a:nth-child(3)');
navElementLink3.textContent = siteContent['nav']['nav-item-3'];
navElementLink3.style.color = 'green'
const navElementLink4 = document.querySelector('nav a:nth-child(4)');
navElementLink4.textContent = siteContent['nav']['nav-item-4'];
navElementLink4.style.color = 'green'
const navElementLink5 = document.querySelector('nav a:nth-child(5)');
navElementLink5.textContent = siteContent['nav']['nav-item-5'];
navElementLink5.style.color = 'green'
const navElementLink6 = document.querySelector('nav a:nth-child(6)');
navElementLink6.textContent = siteContent['nav']['nav-item-6'];
navElementLink6.style.color = 'green';


const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
const contactAddress = document.querySelector('.contact p:nth-child(2)');
contactAddress.textContent = siteContent['contact']['address'];
const contactPhone = document.querySelector('.contact p:nth-child(3)');
contactPhone.textContent = siteContent['contact']['phone'];
const contactEmail = document.querySelector('.contact p:nth-child(4)');
contactEmail.textContent = siteContent['contact']['email']

const footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent['footer']['copyright']

// const navElements = document.querySelectorAll('nav');
// console.log(navElements)
// navElements.style.color = 'green'