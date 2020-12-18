let testimonialData = [
  {
    name: "Titus J.",
    pictureURL: "../img/people/black man.jpeg",
    text: `<div><p>"Quasi minima exercitationem soluta magnam vero, sit a itaque consequuntur et aspernatur sunt praesentium. Magni qui modi illum dicta dolor pariatur voluptatum, maiores, eius ab neque explicabo saepe praesentium dolores?" - ${this.name}</p></div>`,
    pictureName: "black%20man.jpeg", //URL esape character neccessary
  },
  {
    name: "Rebecca P.",
    pictureURL: "../img/people/Girl2.jpeg",
    text: `<div><p>"Accusantium nobis voluptate libero totam ex corporis et iure facilis aliquid officiis expedita ab voluptatum ad tenetur, quia rerum sit doloremque, sint suscipit maxime nam, repudiandae delectus itaque cupiditate. Nihil!" - ${this.name}</p></div>`,
    pictureName: "Girl2.jpeg",
  },
  {
    name: `Alexandra S.`,
    pictureURL: "../img/people/Alexandra.jpeg",
    text: `<div><p>"I strongly believe that the Birkman results are only as helpful as your investment in trying to understand them and how to apply them properly. The opportunity to review my results with someone else was truly invaluable. Tim's knowledge of how they all function together in their distinct ways helped me to gain great perspective on my past experiences and how to plan well for the future. I promise that it is worth your time and attention." - ${this.name}</p></div>`,
    pictureName: "Alexandra.jpeg",
  },
  {
    name: `Eric C.`,
    pictureURL: "../img/people/Eric2.jpeg",
    text: `<div><p>"Having my Birkman read by Tim was influential in understanding myself at a greater depth. Tim was well prepared and professional, while also laid back and easy to talk to. His skilled question asking helped me connect the Birkman results to my daily life, which gave me words to better communicate what I experience and therefore I feel more known by those around me." - ${this.name}</p></div>`,
    pictureName: "Eric2.jpeg",
  },
]; 

let testimonialsArray = []; 

// new Testimonial('Jim', 'This is a test officiated by yours truly', 'Eric2.jpeg'); 

function Testimonial(name, text, pictureName) {
    this.name = name; 
    this.pictureURL = `../img/people/${String.raw`${pictureName}`}`;
    this.text = `<div><p>${text} - ${this.name}<img src=${this.pictureURL} alt=${this.name} /></p></div>`; 
    
    testimonialsArray.push(this); 
}; 

function renderTestimonials() {
   
    for (let obj of testimonialsArray) {
        let testimonialsDiv = document.querySelector(".testimonials"); 
        testimonialsDiv.insertAdjacentHTML('beforeend', obj.text); 
    }

}; 

function getTestimonials(obj) { //gets up to date data from testimonials data array
    return new Testimonial(obj.name, obj.text, obj.pictureName); 
}; 

for (let object of testimonialData) {
    getTestimonials(object); 
}

renderTestimonials(); 
