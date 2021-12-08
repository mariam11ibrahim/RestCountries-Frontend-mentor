import { AJAXRequest } from "./helper.js";
export const state = {
    allCountries: [],
    countryData: {},
    regionCountries: [],
    selectedCountry: "",
};

export const getAllCountries = async function() {
    try {
        state.allCountries = await AJAXRequest(`all`);
    } catch (error) {
        throw error;
    }
};
export const getCountry = async function(query) {
    try {
        state.countryData = await AJAXRequest(`name/${query}`);
    } catch (error) {
        throw error;
    }
};
export const getCountryByCode = async function(query) {
    try {
        state.countryData = await AJAXRequest(`alpha/${query}`);
    } catch (error) {
        throw error;
    }
};
export const getFilterByRegion = async function(query) {
    try {
        state.regionCountries = await AJAXRequest(`region/${query}`);
    } catch (error) {
        throw error;
    }
};