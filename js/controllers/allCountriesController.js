import allCountriesView from "../views/allCountriesView.js";
import * as model from "../model.js";

const controlAllCountries = async function(query = "all") {
    try {
        await model.getAllCountries(query);
        allCountriesView.displayDataMarkup(model.state.allCountries);
    } catch (error) {
        allCountriesView.displayErrorMessage(error);
    }
};

const controlFilterByRegion = async function(query) {
    try {
        await model.getFilterByRegion(query);

        allCountriesView.displayDataMarkup(model.state.regionCountries);
    } catch (error) {
        allCountriesView.displayErrorMessage(error);
    }
};
const controlSearchResult = async function(query) {
    try {
        await model.getCountry(query);
        allCountriesView.displayDataMarkup(model.state.countryData);
    } catch (error) {
        allCountriesView.displayErrorMessage(error);
    }
};
const controlShowCountryDetails = function(countryName) {
    localStorage.setItem("country", JSON.stringify([true, countryName]));
};
const init = function() {
    allCountriesView.documentLoadedEventPublisher(controlAllCountries);
    allCountriesView.searchEventPublisher(controlSearchResult);
    allCountriesView.filterEventPublisher(controlFilterByRegion);
    allCountriesView.showCountryDetailsEventPublisher(controlShowCountryDetails);
};
init();