const cep = '39400-208';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

// console.log(fetchResult);

fetchResult
    .then(response => {
        console.log('SUCCESS IN FETCHING', response);
        const json = response.json();
        json
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log('ERROR IN FETCHING', error);
    })