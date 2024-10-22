/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // Variable for formElement equal document.getElementById(id). When an id from HTML is entered (relative, noun, dessert, etc), the input type, placeholder, and id will be shown.
  let formElement = document.getElementById(id);
  
  // If text is entered that is not an id it will return as null.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	// If the user has entered text it will return with that text, if not it will return as placeholder.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  // console.log("button clicked.");

  let relative = formValue("relative");
  // console.log(relative);
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");

  let madLib = `
    Dear ${relative},
    <br><br>
    I have been having a really ${adjective1} time 
    at camp. The counselor is ${adjective2} and 
    the food is ${adjective3}. I met ${famousPerson} 
    and we quickly became ${noun}. Talk soon!
    <br><br>
    Your ${dessert},
    <br>
    ${petName}
  `;

  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");

}
