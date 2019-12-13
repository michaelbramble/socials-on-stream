window.onload = () => {changeSocial();}

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
  container.classList.remove('out');
  container.classList.add('in');
  text.innerHTML = (`${socials[i].id}`);
  img.setAttribute('src', `${images[i]}`);
  if(i === (socials.length - 1)){
    i = 0;
    setTimeout(() => {
      container.classList.remove('in');
      container.classList.add('out');
    }, 3500); // 3.5 seconds after the last social
    setTimeout(() => {
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