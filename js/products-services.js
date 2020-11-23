window.addEventListener('DOMContentLoaded', (event) => {
    console.log('All items loaded.'); 
function populateSquares() {
    let squares2 = Array.from(document.querySelectorAll('.service-picture')); 
    squares2.forEach(el => { 
        el.style.backgroundColor = 'green'; 
    });
};
populateSquares(); 

// }; 
}); 