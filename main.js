async function newRandomUser(){
    const apiURL = 'https://randomuser.me/api/';

    try{
        const resp = await fetch(apiURL);
        const data = await resp.json();
        return data.results[0]
    }
    catch(error){
        console.error('Error fetching random user data:', error);
        throw error; 
    }
}

const userDisplay = document.getElementById('displayCard');

document.querySelector("#generateButton").addEventListener('click', async function(){
    try{
        const randomUser = await newRandomUser();
        
        displayCard.innerHTML = `
        <img src="${randomUser.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${randomUser.name.title}. ${randomUser.name.first} ${randomUser.name.last}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Age: ${randomUser.dob.age}</li>
          <li class="list-group-item">Gender: ${randomUser.gender}</li>
          <li class="list-group-item">Contact no.: ${randomUser.phone}</li>
          <li class="list-group-item">Email: ${randomUser.email}</li>
          <li class="list-group-item">Location: ${randomUser.location.city}, ${randomUser.location.country}</li>
        </ul>
        `
    }
    catch (error) {
        console.log('Error fetching random.');
      }
})