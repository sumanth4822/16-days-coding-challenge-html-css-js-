const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

const circleEl = document.querySelector(".circle")

inputEl.checked = localStorage.getItem("mode");

updateBody()


function updateBody() {
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    localstorageUpdate();
})

function localstorageUpdate(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}