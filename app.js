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
    id: '/Bramz' // 164px wide
  },
  {
    name: 'Twitter',
    id: '@__Bramz' // 246px wide
  },
  {
    name: 'YouTube',
    id: '/c/BramzYT' // 274px wide
  },
  {
    name: 'Discord',
    id: '.gg/bramz' // 235px wide
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

// 5 minutes = 300,000 ms
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
    }, 8500); // 5 seconds after text clears
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