// Locations
const DokiLocations = (function() {


    const location = [
        {
            city: "Oslo",
            adress: "Karl johans gate 32",
            tlf: "+47 85329587"
        },
        {
            city: "Trondheim",
            adress: "Trøndergata 20",
            tlf: "+47 25329587"
        },
        {
            city: "Bergen",
            adress: "Regnmindre veien 106",
            tlf: "+47 15329587"
        },
        {
            city: "Stavanger",
            adress: "stallveien 35",
            tlf: "+47 75329587"
        },
        {
            city: "Kristiansand",
            adress: "Dyreparken 2",
            tlf: "+47 45329587"
        },
    ]

    const getAllLocations = () => location;
    return {getAllLocations}


    


} ())

export default DokiLocations;