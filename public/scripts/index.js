// Pega o campo re Raças no html
const breedSelect = document.querySelector('#breedSelect')
console.log(breedSelect)

// Pega a lista de raças e sub-raças
xhrRequest('https://dog.ceo/api/breeds/list/all')
  .then(result => {

    // objeto com a lista de todas as raças e sub-raças
    let breedsListObject = result.message;

    //variavel para guardar as raças
    let breeds = [];

    // Acessa o BreedsListObject que contém todas as raças
    for (let [key, value] of Object.entries(breedsListObject)) {

      // Se a raça não tiver sub-raças, pega a chave do objeto e inclui no array 
      if (value.length == 0) {
        breeds.push(key);

        // Se a raça tem sub-raças, pega a chave(raça) e o valor(sub-raça) e inclui no array
      } else if (value.length > 0) {
        value.forEach(subBreed => {
          breeds.push(key + "-" + subBreed);
        })
      }
    }

    //cria e insere os campos dentro do select
    breeds.forEach(dog => {
      let option = document.createElement("option")

      option.classList.add("dogBreed");
      option.value = dog;
      option.textContent = dog;

      breedSelect.appendChild(option);
    })

  })







// get a dog picture

let imgInput = document.querySelector('#pd-img');

xhrRequest('https://dog.ceo/api/breed/boxer/images/random')
  .then(result => {
    imgInput.style.backgroundImage = `url('${result.message}')`
  })

function getDogPicture() {
  xhrRequest('https://dog.ceo/api/breed/boxer/images/random')
    .then(result => {
      imgInput.style.backgroundImage = `url('${result.message}')`
    })

}