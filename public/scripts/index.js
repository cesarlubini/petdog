// Pega os campos no html
const breedSelect = document.querySelector('#breedSelect');
const imgInput = document.querySelector('#pd-img');
const dogNameInput = document.querySelector('#dogNameInput');
const dogName = document.querySelector('#dogName');


// Urls da api
const urlBreeds = 'https://dog.ceo/api/breeds/list/all';
const urlRandomImg = 'https://dog.ceo/api/breeds/image/random';

// Pega a lista de raças e sub-raças
xhrRequest(urlBreeds)
  .then(result => {

    // objeto com a lista de todas as raças e sub-raças
    let breedsListObject = result.message;

    //variavel para guardar as raças
    let breeds = [];

    // Acessa o BreedsListObject que contém todas as raças
    for (let [key, value] of Object.entries(breedsListObject)) {

      // Se a raça não tiver sub-raças, pega a chave do objeto e inclui no array 
      if (value.length === 0) {
        breeds.push(key);

        // Se a raça tem sub-raças, pega a chave(raça) e o valor(sub-raça) e inclui no array
      } else {
        value.forEach(subBreed => {
          breeds.push(key + "-" + subBreed);
        })
      }
    }

    //cria e insere os campos dentro do select
    createSelectOptions(breeds);
  });

// Primeira chamada ao carregar a página
getDogPicture(urlRandomImg);


// Altera o nome do cachorro instantaneamente 
dogNameInput.addEventListener('input', event => dogName.textContent = event.target.value);