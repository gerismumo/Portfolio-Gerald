const projectDone = [
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "https://github.com/gerismumo",
        name: "Cummins generator"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "https://github.com/gerismumo",
        name: "Landing page"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "https://github.com/gerismumo",
        name: "Aroma cafe"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "https://github.com/gerismumo",
        name: "Essay page"
    },
    {
        img: "images/power_gen-20230510-0002.jpg",
        link: "https://github.com/gerismumo",
        name: "Peter airandb"
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
