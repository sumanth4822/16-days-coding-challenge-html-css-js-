const imageContanerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>{
    imagenum = 8;
 addnewImg();
});

function addnewImg(){
    for (let index = 0; index < imagenum; index++) {
        const newIMg = document.createElement("img");
    newIMg.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random()*2000)}`;
    imageContanerEl.appendChild(newIMg)
        
    }
    
}