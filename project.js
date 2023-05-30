const projectDone = [
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "#",
        name: "Cumminsgenerator"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "#",
        name: "landingpage"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "#",
        name: "aromacafe"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "#",
        name: "essaypage"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "#",
        name: "peterairandb"
    }
]
const gridContainer = document.querySelector(".grid-container");

window.addEventListener("DOMContentLoaded", function(){
    displayGridItems(projectDone);

});

function displayGridItems(gridItems){
    let displayItems = gridItems.map(function(item){
        return `<div class="proj-done">
        <figure class="fig-img">
            <img src="${item.img}" alt="${item.name}">
            <figcaption>
                <a href= "${item.link}">${item.name}</a>
            </figcaption>
        </figure>
         </div>`
    });
    displayItems = displayItems.join("");
    gridContainer.innerHTML = displayItems; 
}
