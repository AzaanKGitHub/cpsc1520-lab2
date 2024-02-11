 // Task Writing A Function
 function updateInnerHTML(selector, string){
    document.querySelector(selector).innerHTML = string;
 }

 // Task Calling The Function
 updateInnerHTML('h1', 'New Topic');

// Task Creating a function with a return value 
function strong(string){
    return `<strong>${string}</strong>`
}

// reference variable for the function call
const template = strong('marking things useful');

// log to console
console.log(template)


// Task Adding Text Using InsertAdjacentHTML()
function newUpdateInnerHTML(selector, htmlString) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', htmlString);
}
  
// function call 
newUpdateInnerHTML('section', template);