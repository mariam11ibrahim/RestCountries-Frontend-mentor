"use strict";
import { View } from "./view.js";
class CountryView extends View {
    _parentElement = document.querySelector(".country-main");
    _countryMain = document.querySelector(".country-main");

    _getMarkup(country) {
            console.log("test", country);

            return `
      <section class="country">
        <div class="country__flag">
        <img
            src="${country.flags.svg}"
            alt="${country.name.common}"
            class="country__flag-img"
        />
        </div>
        <div class="country__details">
<!--   <h2 class="country__name">${country.name.common}</h2>-->
<h2 class="country__name">${country.name.common}</h2>

        <div class="country__data">
            <ul class="country__data-list country__data-list--col1">

            <li class="country__data-list-item">
                <span class="card__country-title">Native Name: </span>
                <span class="card__country-data">${country.name.official}</span>
            </li>
            <li class="country__data-list-item">
                <span class="card__country-title"> Population: </span>
                <span class="card__country-data">${new Intl.NumberFormat(
                  "de-DE"
                ).format(country.population)}</span>
            </li>
            <li class="country__data-list-item">
                <span class="card__country-title">Region: </span>
                <span class="card__country-data">${country.region}</span>
            </li>
            <li class="country__data-list-item">
                <span class="card__country-title">Sub Region: </span>
                <span class="card__country-data">${country.subregion}</span>
            </li>
            <li class="country__data-list-item">
                <span class="card__country-title">Capital: </span>
                <span class="card__country-data">${country.capital}</span>
            </li>
            </ul>

            <ul class="country__data-list country__data-list--col2">
            <li class="country__data-list-item">
                <span class="card__country-title">Top Level Domain: </span>
                <span class="card__country-data">${country.tld}</span>
            </li>
            <li class="country__data-list-item">
                <span class="card__country-title"> Currencies: </span>
                <span class="card__country-data">${Object.values(
                  country.currencies
                )
                  .map((curr) => `${Object.values(curr)} `)
                  .join(" ")}</span>
            </li>
            <li class="country__data-list-item">
                <span class="card__country-title">Languages: </span>
                <span class="card__country-data">${Object.values(
                  country.languages
                )
                  .map((lang) => lang)
                  .join(", ")}</span>
            </li>
            </ul>
        </div>

        <div class="country__borders">
            <h4 class="borders__heading">Border Countries:</h4>
            <div class="borders__chips">
            ${
              country.borders
                ? country.borders
                    .map(
                      (border) =>
                        `<span class=" btn borders__chip borders__chip--enabled">${border}</span>`
                    )
                    .join("")
                : `<span class=" btn borders__chip borders__chip--disabled"> no borders </span>`
            }
            </div>
        </div>
        </div>
</section>`;
  }

  documentLoadedEventPublisher(controlCountry) {
    window.addEventListener("DOMContentLoaded", () => {
      controlCountry();
    });
  }

  countryBorderPublisher() {
    document
      .querySelector(".country__borders")
      .addEventListener("click", (e) => {
        if (!e.target.classList.contains("borders__chip")) return;
        let query = e.target.innerHTML;
        console.log("query", query);
        if (query.includes(` no borders `)) return;
        localStorage.setItem("country", JSON.stringify([false, query]));
        location.reload();
      });
  }
}
export default new CountryView();