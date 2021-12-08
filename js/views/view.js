"use strict";

export class View {
    modeElement = document.querySelector(".header__mode-type");
    constructor() {
        if (localStorage.getItem("isDark") == "true") {
            document.body.classList.add("dark");
            document.querySelector(".header__mode-icon").classList.add("fas");
            this.modeElement.innerHTML = "Light Mode";
        }

        this.modeElement.addEventListener("click", function() {
            document.body.classList.toggle("dark");
            document.querySelector(".header__mode-icon").classList.toggle("fas");
            this.innerHTML = document.body.classList.contains("dark") ?
                "Light Mode" :
                "Dark Mode";
            document.body.classList.contains("dark") ?
                localStorage.setItem("isDark", true) :
                localStorage.setItem("isDark", false);
        });
    }
    callback() {
        console.log("error created");
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    displayErrorMessage(message) {
        let error = ` 
            <section class="error" >
           
                <i class="fas fa-times-circle error__icon" ></i> 
           
                <h2 class="error__message">${message}</h3>
                <!--<i class="fas fa-exclamation error__icon"></i>-->
            </section>`;

        let errorMessage = document.querySelector(".error");
        if (!errorMessage)
            document.querySelector("body").insertAdjacentHTML("beforeend", error);

        document.querySelector(".error").addEventListener("click", () => {
            this._closeErrorMessage(document.querySelector(".error"));
        });
        // AUTO CLOSE ERROR MESSAGE
        setTimeout(() => {
            this._closeErrorMessage(document.querySelector(".error"));
        }, 10000);
    }
    _closeErrorMessage(errorElement) {
        errorElement.classList.toggle("error__hide");
        errorElement.remove();
    }
    displayDataMarkup(data) {
        this._clear();

        data.forEach((item) => {
            let markup = this._getMarkup(item);
            this._parentElement.insertAdjacentHTML("afterbegin", markup);
        });
    }
}