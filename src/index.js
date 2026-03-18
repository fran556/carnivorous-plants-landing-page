const date= document.querySelector('#date-footer');
console.log(date);

const actualDate = new Date();
date.innerHTML =`&copy; Made with love - ${actualDate.getFullYear()}`; 
console.log(actualDate);
