const BtnSubmit = document.querySelector('form');
const formInput = document.querySelector('input');

BtnSubmit.addEventListener('submit', formSend);

function formSend(e) {
    e.preventDefault();

    console.log(formInput.value)
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${formInput.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data)
      
      });

   
}
