const tabs = document.querySelector(".tabs")

const btns = document.querySelectorAll(".btn")

const article = document.querySelectorAll(".content")

tabs.addEventListener("click",(event) =>{
    const id = event.target.dataset.id

    if(id){
        btns.forEach((btn) =>{
            btn.classList.remove("live")
        })
        event.target.classList.add("live")
        article.forEach((articles) =>{
            articles.classList.remove("live")
        })
        const element = document.getElementById(id)
        element.classList.add("live")
    }
})