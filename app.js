// Mobile menu

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

closeNav();

//Create dynamic section

var data = {
  speakerDetails: [
    {
      id: 0,
      image: './images/lecture.png',
      title: 'Project Manager',
      name: 'Elmar Abdulkarimov',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 1,
      image: './images/lecture.png',
      title: 'Finance Manager',
      name: 'Matanat Rahimova',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      image: './images/lecture.png',
      title: 'CEO',
      name: 'Alina Abdul',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      image: './images/lecture.png',
      title: 'Head of HR',
      name: 'Maryam Kerimova',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      image: './images/lecture.png',
      title: 'IT Manager',
      name: 'Zuzu Rehimli',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 5,
      image: './images/lecture.png',
      title: 'Technical Director',
      name: 'Veli Veliyev',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
  ],
};

function implementSpeakers() {
  var speakersWrap = document.querySelector('.feature_speakers ul');
  data.speakerDetails.forEach((speakerDetail) => {
    var speakerCards = `
  <li>
  <div class = 'feature-details${speakerDetail.id + 1} feature-speaker'>
  <div class = 'speaker-frame'>
  <img class = ' face-shot'  src = '${
  speakerDetail.image
}' alt = 'speaker-image'>
  </div>
  <div class = 'speaker-info'>
  <h2>${speakerDetail.name}</h2>
  <h3>${speakerDetail.title}</h3>
  <p>${speakerDetail.description}</p>
  </div>
  </div>
  </li> `;
    speakersWrap.innerHTML += speakerCards;
  });
}
if (document.querySelector('.feature-container')) {
  implementSpeakers();
}
