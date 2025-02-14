
const studentFullName = "Rohan Rajasekar Henry";
const studentNumber = "1090180";


const result= `${studentFullName} - ${studentNumber}`;


const headerContent = document.querySelector('h1');


headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;


headerContent.classList.add('headingPrimary');