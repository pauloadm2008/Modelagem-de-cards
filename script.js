const paineis=document.querySelectorAll(".panel")

paineis.forEach(painel => {
    painel.addEventListener("click",() =>{
        removeActiveClasses()
        painel.classList.add("active")
 })
})

function removeActiveClasses(){
    paineis.forEach(painel =>{
        painel.classList.remove("active")  
    })

}