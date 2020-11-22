window.addEventListener('DOMContentLoaded', (event) => {
    console.log('All items loaded.'); 

    let squares = Array.from(document.querySelectorAll('.service-picture')); 
    console.log(squares); 

    squares.forEach(el => { 
        document.querySelector(`.${el.className}`).style.backgroundColor = "#ff567f"; 
    });


// }; 
}); 