// Mobile menu

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

openNav();

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

closeNav();

const data = {
  speakerDetails: [
    {
      id: 0,
      image: './images/lecture.png',
      title: 'Project Manager',
      name: 'Speaker 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 1,
      image: './images/lecture.png',
      title: 'Finance Manager',
      name: 'Speaker 2',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      image: './images/lecture.png',
      title: 'CEO',
      name: 'Speaker 3',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      image: './images/lecture.png',
      title: 'Head of HR',
      name: 'Speaker 4',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      image: './images/lecture.png',
      title: 'IT Manager',
      name: 'Speaker 5',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 5,
      image: './images/lecture.png',
      title: 'Technical Director',
      name: 'Speaker 6',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
  ],
};

function implementSpeakers() {
  const speakersWrap = document.querySelector('.feature_speakers ul');
  data.speakerDetails.forEach((speakerDetail) => {
    const speakerCards = `
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
