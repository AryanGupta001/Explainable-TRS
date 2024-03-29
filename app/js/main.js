const detailsBtn = document.querySelector(".More-details");
console.log(detailsBtn);
const SECTION = document.querySelector("Section");
detailsBtn.addEventListener("click", () => {

    console.log("clicked")
    if (!SECTION.classList.contains('Toggle-ON')) {
        SECTION.classList.add("Toggle-ON");
        SECTION.animate("slide");
        if (SECTION.classList.contains("Toggle-OFF")){
            SECTION.classList.remove("Toggle-OFF");
        }
        return;
    }

});
const backToPlace = document.querySelector('#backPlace');
backToPlace.addEventListener("click", () => {

    console.log("clicked.")
    if (SECTION.classList.contains('Toggle-ON')) {
        SECTION.classList.add("Toggle-OFF");
        SECTION.animate("slideBack");
        SECTION.classList.remove("Toggle-ON");
        return;
    }

});



const INFOS = document.querySelectorAll("#info");

for (let index = 0; index < INFOS.length; index++) {
    const ele = INFOS[index] ;
    ele.addEventListener("click", () => {
        var ps = ele.getElementsByTagName('p'); //ps contains all of the p elements inside your div
        var p = ps[0]; //take the first element
        if (p.style.height == "0px"){
            // p.style.display = "block";   
            p.style.height = "100%";
            p.style.opacity = 1;
        } else {

            // p.style.display = "none";    
            p.style.height = "0";
            p.style.opacity = 0;

        }
        
        console.log(p)
    })
}