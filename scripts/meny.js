import MenyModule from './MenyModule.js'

const dishSection = document.querySelector("#dish-section");

// Dish objects
let htmlText = "";

    MenyModule.getAlldishes().forEach( dish => {
      
        htmlText += `
            <article class="column is-4">
                <div class="card">
                    <section class="card-image">
                        <img id="imgbutton" class="image is-fullwidth" src="images/food/${ dish.image }"/>
                    </section>
                    <section class="card-content">
                        <h3 class="has-text-centered is-size-4 subtitle">${ dish.name }</h3>
                    </section>
                    <div class="columns is-vcentered">
                        <div class="column">
                            <section class="card-content">
                            <p class="has-text-centered is-size-5 subtitle">${ dish.price }</p>
                            </section>
                        </div>
                        <div class="column">
                            <section class="card-content">
                            <button class="button has-text-centered ">Legg til</button>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="modal" id="modalclick">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <img src="/images/food/dry-fish.jpg" alt="">

                    </div>
                    <button class="modal-close is-large" aria-label="close"></button>
                </div>
            </article>
            
        `;
        


        dishSection.innerHTML = htmlText;
    })


