/* toggle icon navbar */
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); /* 禁完轉做x icon */
    navbar.classList.toggle("active");
}

/* scroll sections */
let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY; /* 而家落左幾多 */  
        let offset=sec.offsetTop-100; /* 子元素離父元素(bodytop)幾高 */  /* 0 971 1942 3364 4335 */
        let height=sec.offsetHeight; /* 目前既section高度幾高 */ /* 971 971 1422 971 971 */
        let id=sec.getAttribute("id"); /* section名 */

        /* console.log(id); */
        if(top >= offset && top < offset + height){
            /* active navbar links */
            navLinks.forEach( links => {
                links.classList.remove("active");
                document.querySelector( `header nav a[href="#${id}"]`).classList.add("active");
                /* *= 拎哂  一係href*=${id} or href="#${id}"*/
            });
            /* console.log(id); */
        }
    });
    
    /* header add sticky tag */
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>100);
    /* remove toggle 禁完navbar移動完就收返navbar入去 */
    menuIcon.classList.remove("bx-x"); /* 禁完轉做x icon */
    navbar.classList.remove("active");
    
};
    /* https://www.youtube.com/watch?v=sQoiM7i5Nqc&t=2642s
    1:11:18 */
   


