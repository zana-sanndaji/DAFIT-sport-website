const classItems = document.querySelectorAll(".class__item");

classItems.forEach( item => {
    item.addEventListener("click",function(event){
        event.preventDefault()
        
        let sectionClass = item.getAttribute("data-section")
        let sectionOffSet = document.querySelector(`.${sectionClass}`).offsetTop
        window.scrollTo({
            top: sectionOffSet - 60,
            behavior: "smooth"
        })
    })
})