import * as requestService from './request-service.js';
import Address from '../models/address.js';

export async function findByPostcode(postcode) {
    const url = `https://viacep.com.br/ws/${postcode}/json/`;
    const result = await requestService.getJson(url);

    const address = new Address(result.cep, result.logradouro, null, result.localidade);
    return address;
}

export function getErrors(address) {
    const errors = {};

    if(!address.postcode || address.postcode == '') {
        errors.postcode = 'This field is required';
    }

    if(!address.number || address.number == '') {
        errors.number = 'This field is required';
    }

    return errors;
}