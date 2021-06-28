let inputs = document.querySelectorAll(".valor");



let url = 'http://api.exchangeratesapi.io/v1/latest?access_key=c63234acdb115f6c4d5a5d2dc3d04186&format=1&symbols=USD,GBP,COP';

//? Simplificado //

fetch(url)
    .then(r => r.json())
    .then(data => {
        document.querySelector('#USD').dataset.cambio = data.rates.USD;
        document.querySelector('#GBP').dataset.cambio = data.rates.GBP;
        document.querySelector('#COP').dataset.cambio = data.rates.COP;

        inputs.forEach(input => {
            input.value = input.dataset.cambio;
        });
    })
    .catch(error => console.error(error))


function valorModificado(input) {
    let factor = input.value / input.dataset.cambio;

    inputs.forEach(input => {
        input.value = (input.dataset.cambio * factor).toFixed(2);
    });
}