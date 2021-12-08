import countryView from "../views/countryView.js";
import * as model from "../model.js";
const controlCountry = async function() {
    try {
        let data = localStorage.getItem("country");
        data = JSON.parse(data);
        let isByName = data[0];
        let country = data[1];
        if (!country) return;
        isByName
            ?
            await model.getCountry(country) :
            await model.getCountryByCode(country);
        countryView.displayDataMarkup(model.state.countryData);
        countryView.countryBorderPublisher();
    } catch (error) {
        countryView.displayErrorMessage(error);
    }
};

const init = function() {
    countryView.documentLoadedEventPublisher(controlCountry);
};
init();