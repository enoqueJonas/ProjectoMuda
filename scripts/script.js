const closeMenuBtn = document.querySelector('.close-btn');
const burgerMenuBtn = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const speakersSection = document.querySelector('.featured-speakers');
const speakersUl = document.querySelector('.featured-speakers-list');
const featuredSpeakersArr = [
  {
    id: '1',
    name: 'Rosário Quive Jr.',
    profession: 'Law Student',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: './img/speaker_01.png',
  },
  {
    id: '2',
    name: 'Emidio Alexandre Munguambe',
    profession: 'Entrepeneur',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: './img/speaker_06.png',
  },
  {
    id: '3',
    name: 'Meiggy Sina Tomo',
    profession: 'Agriculture Student',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: './img/speaker_02.png',
  },
  {
    id: '4',
    name: 'Dominique Kabasso',
    profession: 'Psychology Student',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: './img/speaker_03.png',
  },
  {
    id: '5',
    name: 'Cíntia',
    profession: 'University Student',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: './img/speaker_04.png',
  },
  {
    id: '6',
    name: 'Shelsea Comé',
    profession: 'Psychology Student',
    work: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    img: './img/speaker_05.png',
  },
];

function toggleMenu() {
  navMenu.classList.toggle('active');
}

function displayFeaturedSpeakers() {
  let list = '';
  featuredSpeakersArr.forEach((speaker, index) => {
    if (index < 2) {
      list = `${list}<li class="featured-speakers-list-item">
        <div class="featured-speakers-list-item-img">
            <img src= "${speaker.img}" alt="Speaker 1 image">
        </div>
        <div class="featured-speaker-info">
            <h3 class="featured-speaker-name"> ${speaker.name}</h3>
            <p class="featured-speaker-description">
                ${speaker.profession}
            </p>
            <div class="speaker-separator"> </div>
            <p class="speaker-studies">
                ${speaker.work}
            </p>
        </div>
        </li>`;
    } else {
      list = `${list}<li class="featured-speakers-list-item featured-speakers-list-item-pc">
        <div class="featured-speakers-list-item-img">
            <img src= "${speaker.img}" alt="Speaker 1 image">
        </div>
        <div class="featured-speaker-info">
            <h3 class="featured-speaker-name"> ${speaker.name}</h3>
            <p class="featured-speaker-description">
                ${speaker.profession}
            </p>
            <div class="speaker-separator"> </div>
            <p class="speaker-studies">
                ${speaker.work}
            </p>
        </div>
        </li>`;
    }
  });
  speakersUl.innerHTML = list;
  speakersSection.appendChild(speakersUl);
}

window.addEventListener('load', displayFeaturedSpeakers);
closeMenuBtn.addEventListener('click', toggleMenu);
burgerMenuBtn.addEventListener('click', toggleMenu);