import Address from '../models/address.js';

function State() {
    this.address = new Address;

    this.btnSave = null;
    this.btnClear = null;

    this.inputPostcode = null;
    this.inputAddressLine = null;
    this.inputNumber = null;
    this.inputCity = null;

    this.errorPostCode = null;
    this.errorNumber = null;
}

const state = new State();

export function init() {
    state.inputPostcode = document.forms.newAddress.postcode;
    state.inputAddressLine = document.forms.newAddress.addressLine;
    state.inputNumber = document.forms.newAddress.number;
    state.inputCity = document.forms.newAddress.city;

    state.btnSave = document.forms.newAddress.btnSave;
    state.btnClear = document.forms.newAddress.btnClear;

    state.errorPostCode = document.querySelector('[data-error="postcode"]');
    state.errorNumber = document.querySelector('[data-error="number"]');
    console.log(state);
}