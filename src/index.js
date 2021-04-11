console.log('%c HI', 'color: firebrick');

function fetchDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
     fetch(imgUrl)
  .then(resp => resp.json())
  .then(results => {
      results.message.forEach(image => dogArray(image))
    })
  };
  
function dogArray(dogs){
    let div = document.getElementById('dog-image-container');
    let dogImage = document.createElement('img');
    dogImage.src = dogs;
    div.appendChild(dogImage);
      
  }

document.addEventListener("DOMContentLoaded", function() {
    fetchDogs()
});
