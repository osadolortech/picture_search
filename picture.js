let  seach_bar = document.querySelector(" .newnew ");
let images = document.querySelectorAll("h4"); 

seach_bar.oninput = () => {
    images.forEach((item)=>{
        if(seach_bar.value.toLowerCase() !== item.innerHTML.toLowerCase()){
            item.parentElement.style.display = 'none'
        }else{
            item.parentElement.style.display = 'block'
        }
    })
    
    // images.forEach(hide => hide.style.display = 'none')
    // let newser = seach_bar.newser;

    // images.forEach(filter =>{
    //     let title = filter.getAttribute("data-title");
    //     if(newser == title){
    //         filter.style.display = 'block'
    //     }
    // })
}