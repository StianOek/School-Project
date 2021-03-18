
// Dishes
const DishesModule = (function () {

    const dish = [
        {
            name: "Dry fish",
            image: "dry-fish.jpg",
            category: "fish",
            price: "kr 100,-"
        },
        {
            name: "Fly fish sushi",
            image: "flyfish-sushi.jpg",
            category: "sushi",
            price: "kr 70,-"
        },
        {
            name: "Salmon Maki",
            image: "salmon-maki.jpg",
            category: "maki",
            price: "kr 60,-"
        },
        {
            name: "Sushi Plate big",
            image: "sushi-plate-big.jpg",
            category: "sushi",
            price: "kr 150,-"
        },
        {
            name: "Sushi Plate small",
            image: "sushi-plate-small.jpg",
            category: "sushi",
            price: "kr 100,-"
        },
        {
            name: "Tempura plate",
            image: "tempura-plate.jpg",
            category: "tempura",
            price: "kr 120,-"
        },
        {
            name: "Tempura prawn",
            image: "tempura-prawn.jpg",
            category: "tempura",
            price: "kr 50,-"
        },
        {
            name: "Wrap",
            image: "wrap.jpg",
            category: "wrap",
            price: "kr 50,-"
        }
    ];


    const getAlldishes = () => dish;
    return { getAlldishes }

}());





export default DishesModule;