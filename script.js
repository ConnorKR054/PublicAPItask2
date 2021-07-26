const dog_btn = document.getElementById("dog_btn");

const dog_result = document.getElementById("dog_result");

dog_btn.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch("https://foodish-api.herokuapp.com/api/")
    .then((res) => res.json())
    .then((data) => {
          (dog_result.innerHTML = `<img src=${data.image} class="img-fluid" alt="food" />`);       
      });
}
