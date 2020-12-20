let textArray = [
  `This is the bread and butter of Johnson Consulting, and personal favorite of Tim Johnson, CEO. Through the Birkman, we accurately identify your strengths, what you need and expect from your environment to be at your best, and points of stress when your needs are not met. The Birkman assessment is very thorough and as a result, your consultant will also cover your career profile. As a leader, follower, or coworker, Johnson Consulting's desire is to assist you in reaching your potential.`,
  `This is the special sauce of Johnson Consulting Through the Disc assessment, your consultant will be able to tell you your core Disc personality type and from there they will lead you in your best path to personal growth while helping enhance your relationships. We also will aid you in your work life, and give you guidance on how to lead others.`,
];

insertElement('afterbegin', 'birkman-text', textArray[0]); 
insertElement('afterbegin', 'disc-text', textArray[1]); 

// take all the paragraphs and add the general row class to them
let p = Array.from(document.querySelectorAll('p')); 

p.forEach((el) => {
      el.classList.add("general-row-plus");
    });

insertElement('afterbegin','main' ,`<div class='generic-title-div' id='about-page-title'><h2 class="generic-title">The Johnson COnsulting Toolbox</h2></div>`);

document.querySelector()