async function xhrRequest(url) {
  return new Promise((resolve, reject) => {
    
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4) {
        if( xhr.status === 200) {

          let result = JSON.parse(xhr.response);
          
          resolve(result);
        } else {
          reject(console.log(`Erro ${xhr.status}`));
        }
      }
    }

    xhr.open('get', url);

    xhr.send();
  });
}