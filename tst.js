const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const divs = document.querySelector('#divs');
const txt = document.querySelector('#txt');
const bg = document.querySelector('#background');


toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  let img = document.getElementById('bg-img');
  console.log("img : ", img)
  if (this.classList.toggle('bi-brightness-high'))
  {
    
    img.src = "images/bg-desktop-dark.jpg";
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = 'all 0.5s ease-in-out';
    txt.style.color = 'black';
  }
  else
  {
    
    img.src = "images/bg-desktop-light.jpg";
    body.style.background = 'rgba(24,24,36,255)';
    body.style.color = 'white';
    body.style.transition = 'all 0.5s ease-in-out';
    divs.style.background = 'white';
    txt.style.color = 'white';
  }
})



