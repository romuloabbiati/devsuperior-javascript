import Address from '../models/address.js';
import * as addressService from '../services/address-service.js';
import * as listController from './list-controller.js';

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
    
    state.inputNumber.addEventListener('change', handleInputNumberChange);
    state.inputNumber.addEventListener('keyup', handleInputNumberKeyUp);
    state.btnClear.addEventListener('click', handleBtnClearClick);
    state.btnSave.addEventListener('click', handleBtnSaveClick);
    state.inputPostcode.addEventListener('change', handleInputPostcodeChange);
}

function handleInputNumberKeyUp(event) {
    state.address.number = event.target.value;
}

async function handleInputPostcodeChange(event) {
    const postcode = event.target.value;
    try {
        const address = await addressService.findByPostcode(postcode);
        
        state.inputAddressLine.value = address.addressLine;
        state.inputCity.value = address.city;
        state.address = address;
    
        setFormError('postcode', '');
        state.inputNumber.focus();
    }
    catch (e) {
        state.inputAddressLine.value = '';
        state.inputCity.value = '';
        setFormError('postcode', 'Invalid postcode');
    }
}

async function handleBtnSaveClick(event) {
    event.preventDefault();
    listController.addCard(state.address);
}

function handleBtnClearClick(event) {
    event.preventDefault();
    clearForm();
}

function clearForm() {
    state.inputPostcode.value = '';
    state.inputAddressLine.value = '';
    state.inputNumber.value = '';
    state.inputCity.value = '';

    setFormError('postCode', '');
    setFormError('number', '');

    state.inputPostcode.focus();
}

function handleInputNumberChange(event) {
    if(event.target.value == '') {
        setFormError('number', 'This field is required');
    } else {
        setFormError('number', '');
    }
}

function setFormError(key, value) {
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}