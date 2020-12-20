let testimonialData = [
    {
      name: `Alexandra S.`,
      pictureURL: "../img/people/Alexandra.jpeg",
      text: `<div><p>"I strongly believe that the Birkman results are only as helpful as your investment in trying to understand them and how to apply them properly. The opportunity to review my results with someone else was truly invaluable. Tim's knowledge of how they all function together in their distinct ways helped me to gain great perspective on my past experiences and how to plan well for the future. I promise that it is worth your time and attention." - ${this.name}</p></div>`,
      pictureName: "Alexandra.jpeg",
    },
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
    this.text = `<div class='testimonial-block'><p>${text} - ${this.name}<hr><img class='' src=${this.pictureURL} alt=${this.name} /></p></div>`; 
    
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

insertElement(
  "beforeend",
  "about-section",
  `<div class="about-bio" id="about-bio">
    <div class="about-picture">
      <img
        src="../img/Chicago_5864 copy-min.jpg"
        alt="Photo of Johnson Consulting CEO"
      />
    </div>
    <div class="about-text general-row" id="about-text-div">
      <p class="about-text_tim" id="first-p">
        Tim Johnson is a Birkman Certified Professional with a passion for
        helping people understand themselves and others more effectively. For
        years he has used the Birkman and other assessments as tools in opening
        the eyes of understanding for individuals and businesses. He has no
        intention of stopping anytime soon. Tim created Johnson Consulting on
        the foundation of three core principles:
      </p>
      <div class="about-principles">
        <ul>
          <li>
            1). Despite the difficulty of doing so, everyone wants to be the
            best version of themselves.
          </li>
          <li>
            2). Deep and true knowledge of oneself leads to healthier
            relationships with others.
          </li>
          <li>
            3). Both Principle 1 and Principle 2 are attainable through
            increasing your
            <span class="EQ-Span">
              <a href="https://psychcentral.com/lib/what-is-emotional-intelligence-eq#3">
                Emotional Intelligence
              </a>
            </span>.
          </li>
        </ul>
      </div>
      <p class="">
        Tim graduated from the University of Central Florida with an
        Interdisciplinary degree in Computational Sciences and Physical
        Sciences. He has been known to crunch numbers late into the night before
        going over a report. Nobody will work harder to help you unlock your
        potential. Sign up for a consultation today!
      </p>
    </div>
  </div>
`); 

insertElement('beforebegin','first-p',
  `<div class='generic-title-div' id='about-page-title'><h2 class="generic-title">A Little About Our Founder</h2></div>`
);

insertElement('beforebegin','testimonials-div',
  `<div class='generic-title-div' id='about-page-title'><h2 class="generic-title">What Our Clients Say</h2></div>`
);