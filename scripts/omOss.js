import DokiLocations from './omOssModule.js';

const dokiLocation = document.querySelector("#doki-location");

// Location objects
let htmlLocation = "";
DokiLocations.getAllLocations().forEach( location => {
    htmlLocation += `
    
        <article class="column is-4">   
            <div class="card">
                <section class="card-content">
                    <h3 class="has-text-centered is-size-4 subtitle">${ location.city }</h3>
                </section>
                <div class="columns is-vcentered">
                    <div class="column">
                        <section class="card-content">
                            <p class="has-text-centered is-size-5 subtitle">${ location.tlf }</p>
                        </section>
                    </div>
                    <div class="column">
                        <section class="card-content">
                            <p class="has-text-centered is-size-5 subtitle">${ location.adress }</p>
                        </section>
                    </div>
                </div>
            </div>
        </article>

    `;
    dokiLocation.innerHTML = htmlLocation;
})