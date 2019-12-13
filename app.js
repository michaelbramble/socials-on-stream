window.onload = () => {changeSocial();}
// window.onload = () => {setStatic();}

// used while styling to have data on screen
const static = {
  name: 'YouTube',
  id: '/c/BramzYT',
  img: './images/youtube_logo.png'
};

const socials = [
  {
    name: 'Twitch',
    id: '/Bramz'
  },
  {
    name: 'Twitter',
    id: '@__Bramz'
  },
  {
    name: 'YouTube',
    id: '/c/BramzYT'
  },
  {
    name: 'Discord',
    id: '.gg/bramz'
  }
];

const images = [
  './images/twitch_logo.png',
  './images/twitter_logo.png',
  './images/youtube_logo.png',
  './images/discord_logo.png'
];

const container = document.getElementById('container');
const text = document.getElementById('text');
const img = document.getElementById('img');

let i = 0;

function changeSocial(){
  text.innerHTML = (`${socials[i].id}`);
  img.setAttribute('src', `${images[i]}`);
  if(i === (socials.length - 1)){
    i = 0;
    setTimeout(() => {
      container.style.display = 'none';
    }, 3500);
    setTimeout(() => {
      container.style.display = 'block';
      this.changeSocial();
    }, 303500); // 5 minutes after container is gone
  }
  else{
    i++;
    setTimeout(() => {
      this.changeSocial();
    }, 3500); // 3.5 seconds between each social
  }
}

// used while styling so things would stay on screen :)
function setStatic(){
  text.innerHTML = (`${static.id}`);
  img.setAttribute('src', `${static.img}`);
}