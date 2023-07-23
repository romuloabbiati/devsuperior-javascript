const cep = '39400-208';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function getJsonResponse(url) {
    const response = await fetch(url);
    const jsonBody = response.json();
    return jsonBody;
}

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

// getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(result => {
//         console.log(result);
// });

showCepData('39400-208');

console.log('A');
console.log('B');