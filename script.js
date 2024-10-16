let menu = document.querySelector("#menu");
let wrapper = document.querySelector("#wrapper");

menu.addEventListener("click", function() {
   
    wrapper.classList.add("active");
  
    
    setTimeout(function() {
        wrapper.classList.remove("active");
    }, 3000); 
});
