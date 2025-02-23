
const containerUserCards = document.querySelector('main');
const modal = document.querySelector('.modal');


async function fetchUsers(){
  // запрос до API 
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // форматування у JSON 
  const usersAPI = await response.json(); 
  if(usersAPI){
    containerUserCards.innerHTML = '';
    usersAPI.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
       <div class="card-front" id="${user.id}">
          <img src="svg/user.svg" alt="">
          <div class="info">
            <h2 class="name">Name: ${user.name}</h2>
            <h3 class="username">Username: ${user.username}</h3>
            <h4 class="email"> Email: ${user.email}</h4>
            <a href="${user.website}" target="_blank" class="website">Webseti: ${user.website}</a>
          </div>
        </div>
        <div class="card-down">
          <p class="city">Cite: ${user.address.city}</p>
          <p class="address">Address: ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}</p>
          <p class="phone">Phone: ${user.phone}</p>
          <p class="geo">GEO: ${user.address.geo.lat} : ${user.address.geo.lng}</p>
          
          <p class="company-name">Company: ${user.company.name}</p>
          <p class="company-catch">Company slogan: ${user.company.catchPhrase}</p>
          <p class="company-bs">Field of activity: ${user.company.bs}</p>
        </div>
      `
      containerUserCards.appendChild(card);
    });
  }else{
    alert('Error!!!')
  }
}

fetchUsers();

document.addEventListener('submit', (e)=>{
  e.preventDefault();
  fetchUsers();
  showModal();
})



let cloceModalSetTimeout;
function showModal(){
  modal.classList.add('modal__show');
  cloceModalSetTimeout = setTimeout(closeModal, 3000);
}

function closeModal(){
  modal.classList.remove('modal__show');
  clearTimeout(cloceModalSetTimeout);
}

modal.addEventListener('click', closeModal)