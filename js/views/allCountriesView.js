import { View } from "./view.js";
class AllCountriesView extends View {
    _dropdownCustomInput = document.querySelector(".dropdown__custom-input");
    _dropdownTitle = document.querySelector(".dropdown__title");
    _dropdownlist = document.querySelector(".dropdown__list");
    _dropdownIcon = document.querySelector(".dropdown__icon");
    _dropdownList = document.querySelector(".dropdown__list");
    _dropdownValue = document.querySelector(".dropdown__value");
    _countriesContainer = document.querySelector(".countries-container");
    _searchForm = document.querySelector(".find__search");
    _parentElement = document.querySelector(".countries-container");
    constructor() {
        super();
        // OPEN/CLOSE DROPDOWN
        this._dropdownCustomInput.addEventListener("click", () => {
            this._dropdownlist.classList.toggle("visible");
        });
    }

    _getMarkup(country) {
        return `<div  class="card">
        <!-- IMG -->
           <div class="card__img">
             <img
               src='${country.flags.svg}'
               alt="${country.name.common} flag"
               class="card__flag"
             />
           </div>
        <!-- DATA -->
           <div class="card__details">
            <!-- NAME -->
             <h3 class="card__country-name">${country.name.common}</h3>
             <!-- DATA -->
             <ul class="card__list">
               <li class="card__list-item">
                 <span class="card__country-title">Population:</span>
                 <span class="card__country-data">${new Intl.NumberFormat(
                   "de-DE"
                 ).format(country.population)}</span>
               </li>
               <li class="card__list-item">
                 <span class="card__country-title">Region:<span>
                 <span class="card__country-data"> ${
                   country.region
                 }</span>         
               </li>
               <li class="card__list-item">
                 <span class="card__country-title">Capital:</span>
                 <span class="card__country-data"> ${country.capital}</span>    
               </li>
             </ul>
           </div>
           <a href="country.html" class="card__link"> &nbsp;</a>
         </div>`;
    }

    //SECTION: Handler
    // GET ALL COUNTIES
    documentLoadedEventPublisher(controlCountries) {
        window.addEventListener("DOMContentLoaded", function() {
            controlCountries();
        });
    }

    searchEventPublisher(controlSearchResult) {
        // SEARCH
        this._searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let input = e.target.querySelector(".find__search-input");
            if (!input) return;
            let query = input.value != "" ? input.value : "all";
            // SEARCH
            controlSearchResult(query);
        });
    }

    filterEventPublisher(controlCountries) {
        // UPDATE THE DROP DOWN TEXT + FILTER
        this._dropdownList.addEventListener("click", (e) => {
            let query = this._filterFunctionality.call(this, e);
            if (!query) return;
            controlCountries(query);
        });
    }
    _filterFunctionality(e) {
        let radioInput = e.target.hasAttribute("title") ? e.target : null;
        if (!radioInput) return;
        this._dropdownTitle.innerHTML = radioInput.title;
        this._dropdownlist.classList.remove("visible");
        this._dropdownIcon.classList.remove("font-sm");
        return radioInput.title;
    }
    showCountryDetailsEventPublisher(showCountryDetailsController) {
        this._countriesContainer.addEventListener("click", (e) => {
            let countryName = e.target.parentNode.querySelector(
                ".card__country-name"
            ).innerHTML;

            showCountryDetailsController(countryName);
        });
    }
}
export default new AllCountriesView();
