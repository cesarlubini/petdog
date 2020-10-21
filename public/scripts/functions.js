function createSelectOptions(options) {
  options.forEach(dog => {
    let option = document.createElement("option");

    option.classList.add("dogBreed");
    option.value = dog;
    option.textContent = dog.replace(/-/, " ");

    breedSelect.appendChild(option);
  })
}

function getDogPicture(url) {
  xhrRequest(url)
    .then(result => {
      imgInput.style.backgroundImage = `url('${result.message}')`
    });

}

function getNewPicture() {

  let selectedItem = breedSelect.options[breedSelect.selectedIndex].value;

  if(selectedItem === "") {return}

  //regex para substitur '-' por '/' e montar o link da api
  let breedSelected = selectedItem.replace(/-/g,"/");

  //link da api  
  const url = `https://dog.ceo/api/breed/${breedSelected}/images/random`;

  getDogPicture(url);

}