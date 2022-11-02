const iconMenu = document.querySelector('.menu__burger')
const closeBtn = document.querySelector('.menu__burger-close')
const bodyMenu = document.querySelector('.menu__list')
const header = document.querySelector('.header')
const blure = document.querySelector('.burger-blure')

function showMenu(modalSelector, modalTimerId) {
  iconMenu.classList.add('_active');
  header.classList.add('_menu-open');
  blure.classList.add('_menu-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu(modalSelector) {
  iconMenu.classList.remove('_active');
  header.classList.remove('_menu-open');
  blure.classList.remove('_menu-open');
  document.body.style.overflow = '';
}


if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    showMenu()
  })
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    closeMenu()
  })
}
if (blure) {
  blure.addEventListener('click', () => {
    closeMenu()
  })
}

//============================================
//PETS SLIDER

const timer = 500
const slider = document.querySelector('.pets__slider');
const petsInner = document.querySelector('.pets__inner');
const prev = document.querySelector('.pets__prev');
const next = document.querySelector('.pets__next');
let elemCount = 6
let sliderClientWidth = slider.clientWidth
let clickable = true; // флаг

const petsData = [{
    name: 'Alligators',
    photo: './../../assets/images/main/Rectangle7.webp',
    arial: 'Native to Southeastern U. S',
    feed: '../../assets/icons/meet-fish_icon.svg',
  },
  {
    name: 'giant Pandas',
    photo: './../../assets/images/main/Rectangle1.webp',
    arial: 'Native to Southwest China',
    feed: '../../assets/icons/banana-bamboo_icon.svg',
  },
  {
    name: 'Eagles',
    photo: './../../assets/images/main/Rectangle2.webp',
    arial: 'Native to South America',
    feed: '../../assets/icons/meet-fish_icon.svg',
  },
  {
    name: 'cheetahs',
    photo: './../../assets/images/main/Rectangle5.webp',
    arial: 'Native to Africa',
    feed: '../../assets/icons/meet-fish_icon.svg',
  },
  {
    name: 'Two-toed Sloth',
    photo: './../../assets/images/main/Rectangle4.webp',
    arial: 'Mesoamerica, South America',
    feed: '../../assets/icons/banana-bamboo_icon.svg',
  },
  {
    name: 'Gorillas',
    photo: './../../assets/images/main/Rectangle3.webp',
    arial: 'Native to Congo',
    feed: '../../assets/icons/banana-bamboo_icon.svg',
  },
  {
    name: 'Penguins',
    photo: './../../assets/images/main/Rectangle6.webp',
    arial: 'Native to Antarctica',
    feed: '../../assets/icons/meet-fish_icon.svg',
  },
]
const createCard = (e) => {
  const item = document.createElement('div')
  item.className = 'pets__item item-pets'
  item.innerHTML = `
  <div class="item-pets__photo">
  <img src="${e.photo}" alt="giant Pandas">
  <div class="item-pets__info">
    <div class="item-pets__figure"></div>
    <p class="item-pets__ifo-name">
      ${e.name}
    </p>
    <p class="item-pets__ifo-area">
      ${e.arial}
    </p>
    <div class="item-pets__info-btn">Watch online</div>
  </div>
  </div>
  <div class="item-pets__description">
    <div class="item-pets__text">
      <h3 class="item-pets__name">${e.name}</h3>
      <div class="item-pets__areal">${e.arial}</div>
    </div>
    <div class="item-pets__feed">
      <img src="${e.feed}" alt="">
    </div>
  </div>`


  return item
}
const createWrapperElement = (data, width, elemCount) => {
  const wrapper = document.createElement('div')
  wrapper.className = 'pets__wrapper'
  wrapper.style.width = width + 'px';
  let showArr = []
  if (data.length > elemCount) {
    while (showArr.length != elemCount) {
      const randomIndex = Math.floor(Math.random() * (data.length - 1))
      const result = data[randomIndex]
      if (!JSON.stringify(showArr).includes(JSON.stringify(result))) {
        showArr = showArr.concat(result)
      }
    }
  } else {
    showArr = data
  }
  showArr.forEach((e, i) => {
    const card = createCard(e)
    wrapper.insertAdjacentElement('beforeend', card)
  });
  console.log('111');
  return wrapper
}

next.addEventListener('click', (e) => {
  e.preventDefault()
  if (clickable) { // если кликабельно
    const petsInner = document.querySelector('.pets__inner');
    const wrapper = createWrapperElement(petsData, sliderClientWidth, elemCount)
    clickable = false; // запрещаем клик
    petsInner.firstChild.remove()
    petsInner.insertAdjacentElement('beforeend', wrapper)

    petsInner.firstChild.animate([{
        marginLeft: sliderClientWidth + 'px'
      },
      {
        marginLeft: 0 + 'px'
      }
    ], timer)
    setTimeout(() => {
      clickable = true;
    }, timer);

  }
});

prev.addEventListener('click', (e) => {
  e.preventDefault()
  if (clickable) { // если кликабельно
    const petsInner = document.querySelector('.pets__inner');
    clickable = false; // запрещаем клик

    const wrapper = createWrapperElement(petsData, sliderClientWidth, elemCount)
    petsInner.lastChild.remove()
    petsInner.insertAdjacentElement('afterbegin', wrapper)
    petsInner.firstChild.animate([{
        marginLeft: '-' + sliderClientWidth + 'px'
      },
      {
        marginLeft: 0 + 'px'
      }
    ], timer)
    setTimeout(function () {
      clickable = true;
    }, timer);
  }

});

function petSlide() {
  if (window.matchMedia("(min-width: 841px)").matches) {
    elemCount = 6
  }
  if (window.matchMedia("(max-width: 840px)").matches) {
    elemCount = 4
  }
  petsInner.innerHTML = ""
  sliderClientWidth = slider.clientWidth

  slider.style.overflow = 'hidden';
  petsInner.style.display = 'flex'
  petsInner.style.position = 'relative'
  petsInner.style.left = '-' + slider.clientWidth + 'px'
  petsInner.style.transition = '0.5s all';

  for (let i = 0; i < 3; i++) {
    const wrapper = createWrapperElement(petsData, slider.clientWidth, elemCount)
    petsInner.appendChild(wrapper)
  }

}
petSlide()

window.addEventListener(`resize`, () => {
  petSlide()
}, true);


//============================================
//TESTIMONIALS
const testimonialsData = [{
    name: 'Oskar Samborsky',
    photo: '../../assets/images/main/Ellipse2.png',
    lastVisit: 'Yesterday',
    country: 'Austria',
    text: `Online zoo is one jf the ways to instill a love for animals.The best online zoo
I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a
love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
the
ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to
watch
gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
the
ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to
watch
gouillas. Online zoo is one jf the ways to instill a love for animals.`,
  },
  {
    name: 'Michael John',
    photo: '../../assets/icons/person.svg',
    lastVisit: 'Today',
    country: 'Austria',
    text: `The best online zoo I’ve met. My son delighted very much ljves to watch
gouillas.
Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
delighted
very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
the
ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to
watch
gouillas. Online zoo is one jf the ways to instill a love for animals.`,
  },
  {
    name: 'Fredericka Michelin',
    photo: '../../assets/images/main/Ellipse3.png',
    lastVisit: 'Yesterday',
    country: 'Austria',
    text: `he best online zoo I’ve met. My son delighted very much ljves to watch
gouillas.
Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
delighted
very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
the
ways to instill a love for animals.The best online zoo I’ve met.
The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
the
ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to
watch
gouillas. Online zoo is one jf the ways to instill a love for animals.`,
  },
  {
    name: 'Mila Riksha',
    photo: '../../assets/images/main/Ellipse5.png',
    lastVisit: 'Yesterday',
    country: 'Austria',
    text: `My son delighted very much ljves to watch gouillas. Online zoo is one jf the
  ways
  to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch
  gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My
  son
  delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for
  animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
  The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf
  the
  ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to
  watch
  gouillas. Online zoo is one jf the ways to instill a love for animals.`,
  },
  {
    name: '',
    photo: '../../assets/images/main/Ellipse2.png',
    lastVisit: 'Yesterday',
    country: '',
    text: `Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut
    velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus 
    pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna,
    sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis. 
    Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricies
    eros id velit condimentum, eu ultrices nisl consequat`,
  },
  {
    "name": "Connie Marquez",
    "text": "Minim duis elit nostrud culpa ullamco minim nisi veniam reprehenderit.",
    "photo": "https://picsum.photos/200",
    "lastVisit": "07 May",
    "country": "San Marino"
  },
  {
    "name": "Rowena Sheppard",
    "text": "Aliqua pariatur aliqua sit incididunt pariatur consectetur sint proident ex elit.",
    "photo": "https://picsum.photos/300",
    "lastVisit": "01 July",
    "country": "Yugoslavia"
  },
  {
    "name": "Pam Leblanc",
    "text": "Consectetur ullamco esse exercitation reprehenderit voluptate incididunt anim pariatur do magna ex ea elit sunt.",
    "photo": "https://picsum.photos/64",
    "lastVisit": "05 March",
    "country": "Norway"
  },
  {
    "name": "Carlene Rodriguez",
    "text": "Ullamco sint tempor anim minim ipsum nisi elit qui reprehenderit cupidatat anim non ut excepteur. Ullamco sint tempor anim minim ipsum nisi elit qui reprehenderit cupidatat anim non ut excepteur.Ullamco sint tempor anim minim ipsum nisi elit qui reprehenderit cupidatat anim non ut excepteur.Ullamco sint tempor anim minim ipsum nisi elit qui reprehenderit cupidatat anim non ut excepteur.",
    "photo": "https://picsum.photos/100",
    "lastVisit": "07 April",
    "country": "Kiribati"
  },
  {
    "name": "Stein Rivera",
    "text": "Eu velit cillum reprehenderit exercitation dolor enim ut sunt magna labore. Eu velit cillum reprehenderit exercitation dolor enim ut sunt magna labore.Eu velit cillum reprehenderit exercitation dolor enim ut sunt magna labore.Eu velit cillum reprehenderit exercitation dolor enim ut sunt magna labore.Eu velit cillum reprehenderit exercitation dolor enim ut sunt magna labore.",
    "photo": "https://picsum.photos/150",
    "lastVisit": "22 October",
    "country": "Azerbaijan"
  },
  {
    "name": "Alexis Levine",
    "text": "Mollit cillum deserunt mollit quis sint voluptate sit consectetur exercitation nisi mollit deserunt in.",
    "photo": "https://picsum.photos/128",
    "lastVisit": "19 May",
    "country": "Netherlands"
  }
]

const popUp = document.getElementById('popup')
popUp.addEventListener(`click`, (e) => {
  if (e.target.classList.contains('popup__close') || e.target === popUp) {
    popUp.innerHTML = ''
    popUp.classList.remove('popup')
  document.body.style.overflow = '';
  }
});


const createTestimonial = (t, width) => {
  const item = document.createElement('div')
  const innerPart = `
  <div class="comment__border">
    <div class="comment__header">
      <div class="comment__photo"><img src="${t.photo}" alt="avatar"> </div>
      <div class="comment__info">
        <div class="comment__name">${t.name}</div>
        <div class="comment__local">Local ${t.country}<span class="comment__last-visit">${t.lastVisit}</span> </div>
      </div>
    </div>
    <div class="comment__text">
    ${t.text}
    </div>
  </div>
`
  item.className = 'testimonials__comment comment'
  item.style.width = width + 'px'
  item.innerHTML = innerPart

  item.addEventListener(`click`, (e) => {

    if (window.matchMedia("(max-width: 768px)").matches) {

      const popUp = document.getElementById('popup')
      const item = document.createElement('div')
      const closeBtn = document.createElement('div')
      
      popUp.classList.add('popup')
      item.className = 'testimonials__comment comment'
      item.innerHTML = innerPart
      closeBtn.className = 'popup__close'
      closeBtn.innerHTML = '&#215;'
  
      item.append(closeBtn)
      popUp.innerHTML = ''
      popUp.append(item)
    document.body.style.overflow = 'hidden';
    }
    //  item.classList.add('_testimonialShow')
  });

  return item
}

function testimonials() {
  const wrapper = document.querySelector('.testimonials__wrapper');
  const comments = document.querySelector('.testimonials__comments');
  const myRange = document.getElementById('myRange')
  let testimonialsCount = 4
  let gap = 20
  let borderW = 2
  wrapper.style.height = 'auto'


  if (window.matchMedia("(max-width: 1000px)").matches) {
    testimonialsCount = 3
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    testimonialsCount = 1
    gap = 0
    borderW = 0
    wrapper.style.height = 108 * 3 + 50 + 'px'
  }

  const points = testimonialsData.length - testimonialsCount
  myRange.setAttribute('max', points)

  wrapper.style.gap = gap + 'px'
  const waightCard = Math.floor((comments.clientWidth - (gap * (testimonialsCount - 1)) - (borderW * 2 * testimonialsCount)) / testimonialsCount)

  wrapper.innerHTML = ''
  for (const testimonial of testimonialsData) {
    wrapper.append(createTestimonial(testimonial, waightCard))
  }

  wrapper.scrollBy(myRange.value * waightCard, 0);

  window.addEventListener(`input`, () => {
    if (myRange.value === '0') {
      wrapper.scroll(0, 0);
    } else {
      wrapper.scroll(myRange.value * (waightCard + 20), 0);
    }
  });

}

testimonials()
window.addEventListener(`resize`, () => {
  testimonials()
}, true);

//============================================
//