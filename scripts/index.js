import DishesModule from './DishesModule.js';


const dishSection = document.querySelector("#dish-section");
const inputSearch = document.querySelector("#input-search");
const buttonSearch = document.querySelector("#btn")


  

    // Filter function on dish objects
    const btnSearch = () => {
        const filterCategory = DishesModule.getAlldishes().filter( item => item.category === inputSearch.value)
        if(filterCategory.length !== 0 ) {
            console.log(filterCategory.length)
            let htmlText = "";
            filterCategory.forEach( dish => {
                htmlText += `
                
                    <article class="column is-4">
                    
                        <div class="card">
                            <section class="card-image">
                                <img class="image is-fullwidth" src="images/food/${ dish.image }"/>
                            </section>
                            <section class="card-content">
                                <h1 class="has-text-centered is-size-4 subtitle">${ dish.name }</h1>
                            </section>
                            
        
                        </div>
                    
                    </article>
                
                `;
        
        
            })
            dishSection.innerHTML = htmlText;
        } 
    };   
    buttonSearch.onclick = btnSearch;
    
   

    
    
    
    
   
 
 


