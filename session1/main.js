// window.addEventListener('scroll', () =>{
//     // console.log("Scrolled");
//     // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;

//     console.log(scrolled);
// })


function scrollToTarget(hash) {
    // service = document.getElementById("services");
    // service.scrollIntoView(true);

    // window.scrollTo(0, 600);
    if (hash === 'services') {
        document.querySelector('.services').scrollIntoView(true);
    } else if (hash === 'activity') {
        document.querySelector('.act').scrollIntoView(true);
    } else if (hash === 'contact') {
        document.querySelector('.contact').scrollIntoView(true);
    } else {
        document.querySelector('.wrapper').scrollIntoView(true);
    }
    
}

// var elmnt = document.getElementById("services");

// function scrollToTop() {
//     elmnt.scrollIntoView(true); // Top
// }

// function scrollToBottom() {
//     elmnt.scrollIntoView(false); // Bottom
// }