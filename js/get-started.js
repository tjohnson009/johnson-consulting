// class='js-display-styling'
insertElement(
  "afterbegin",
  "main",
  `<form action="https://www.johnsonconsulting.net/database" id="survey-form" method="POST" class='js-display-styling'>
        <label for="name" id="name-label" >Name:&emsp;<input name="name" type="text" id="name" placeholder="First Last" required></label>
    
    <label for="email" id="email-label" class='js-display-styling'>Email:&emsp;<input name="email" type="email" id="email" required placeholder="example@gmail.com"></label>


            <label for="number" id="number-label" class='js-display-styling'>Age:&emsp;<input name="number" type="number" id="number" min="1" placeholder="Age" max="99"></label>
    

        <label for="DOB" id='dob-label' class='js-display-styling'> Date Of Birth: &emsp;<input name="DOB" type="date" id="placeholder" id="DOB" placeholder=""></label>


    <label for="dropdown" id='options-label' class='js-display-styling'>How did you hear about us?&emsp;<select name="language-choice" id="dropdown" >
           <option value="Friend">Friend</option>
           <option value="Business Card">Business Card</option>
           <option value="Seminar">Seminar</option>
           <option value="Online Ad">Online Ad</option>
           <option value="Google">Google</option>
       </select></label>
       

        <label for="field-choice" id='choice-label'>Please select a package: &emsp;      
        <label for="field-choice-1">Birkman Only</label>
        <input name="package" type="radio" id="field-choice-1" value="Birkman">
            <label for="field-choice-2">DISC Only</label>
        <input name="package" type="radio" id="field-choice-2" value="Disc">
            <label for="field-choice-3">Both</label>
        <input name="package" type="radio" id="field-choice-3" value="Both">
        </label>
       
       <label for="input-field" class='js-display-styling'>Extra Information:&emsp;<textarea id="input-field" rows="5" cols="30" name="input-field" type="text" placeholder="Type any other relevant information here. Thank you!"></textarea>
       </label>


<label for="submit" class='js-display-styling'>Send it off!&emsp; <input class='lastbuttons' name="submit" type="submit" id="submit">
       
<input class='lastbuttons' name="placeholder" type="reset" id='reset'></label>

    
    </form>`
);

let labeledElements = [
    ...Array.from(document.querySelectorAll(".js-display-styling")),

];

for (let el of labeledElements) {
  el.style.display = "block";
  el.style.marginTop = "1rem";
  el.style.marginBottom = "1rem";
  el.style.color = "var(--navbar-white)";
  el.style.display = "block";
}

insertElement(
  "afterbegin",
  "main",
  `<div class='generic-title-div' id='about-page-title'><h2 class="generic-title">Request A Consultation</h2></div>`
);
